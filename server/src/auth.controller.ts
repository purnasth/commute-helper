import {
  Controller,
  Post,
  Body,
  UnauthorizedException,
  BadRequestException,
  Get,
  Put,
  Delete,
  Query,
} from '@nestjs/common';
import { PrismaService } from './prisma.service';
import * as bcrypt from 'bcrypt';

interface LoginDto {
  email: string;
  password: string;
}

interface SignupDto {
  fullname: string;
  email: string;
  password: string;
  role: string;
  phone?: string;
  address?: string;
  profilePicture?: string;
  ratings?: number;
}

@Controller('auth')
export class AuthController {
  constructor(private prisma: PrismaService) {}

  @Post('login')
  async login(@Body() body: LoginDto) {
    const user = await this.prisma.user.findUnique({
      where: { email: body.email },
    });
    if (!user) {
      throw new UnauthorizedException('Invalid credentials');
    }
    const isPasswordValid = await bcrypt.compare(body.password, user.password);
    if (!isPasswordValid) {
      throw new UnauthorizedException('Invalid credentials');
    }
    const { password, ...userWithoutPassword } = user;
    return { message: 'Login successful', user: userWithoutPassword };
  }

  @Post('signup')
  async signup(@Body() body: SignupDto) {
    const existing = await this.prisma.user.findUnique({
      where: { email: body.email },
    });
    if (existing) {
      throw new BadRequestException('Email already registered');
    }
    const hashedPassword = await bcrypt.hash(body.password, 10);
    const user = await this.prisma.user.create({
      data: {
        fullname: body.fullname,
        email: body.email,
        password: hashedPassword,
        role: body.role,
        phone: body.phone,
        address: body.address,
        profilePicture: body.profilePicture,
        ratings: body.ratings,
      },
    });
    const { password, ...userWithoutPassword } = user;
    return { message: 'Signup successful', user: userWithoutPassword };
  }

  @Post('logout')
  logout() {
    return { message: 'Logout successful' };
  }

  @Delete('delete')
  async deleteAccount(@Body() body: { email: string; password: string }) {
    const user = await this.prisma.user.findUnique({
      where: { email: body.email },
    });
    if (!user) {
      throw new BadRequestException('User not found');
    }
    const isPasswordValid = await bcrypt.compare(body.password, user.password);
    if (!isPasswordValid) {
      throw new UnauthorizedException('Invalid password');
    }
    await this.prisma.user.delete({
      where: { email: body.email },
    });
    return { message: 'Account deleted successfully' };
  }

  @Get('user')
  async getUser(@Query('email') email: string) {
    const user = await this.prisma.user.findUnique({
      where: { email },
    });
    if (!user) {
      throw new BadRequestException('User not found');
    }
    const { password, ...userWithoutPassword } = user;
    return { user: userWithoutPassword };
  }

  @Put('update')
  async updateUser(
    @Body()
    body: {
      email: string;
      password: string;
      updates: Partial<SignupDto>;
    },
  ) {
    const user = await this.prisma.user.findUnique({
      where: { email: body.email },
    });
    if (!user) {
      throw new BadRequestException('User not found');
    }
    const isPasswordValid = await bcrypt.compare(body.password, user.password);
    if (!isPasswordValid) {
      throw new UnauthorizedException('Invalid password');
    }
    // Prevent updating email and password directly here for security
    const allowedUpdates = { ...body.updates };
    delete allowedUpdates.email;
    delete allowedUpdates.password;
    const updatedUser = await this.prisma.user.update({
      where: { email: body.email },
      data: allowedUpdates,
    });
    const { password, ...userWithoutPassword } = updatedUser;
    return { message: 'User updated successfully', user: userWithoutPassword };
  }
}
