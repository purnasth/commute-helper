import {
  Controller,
  Post,
  Get,
  Put,
  Delete,
  Body,
  Query,
  Param,
  BadRequestException,
  NotFoundException,
} from '@nestjs/common';
import { PrismaService } from './prisma.service';

interface RideDto {
  from: string;
  to: string;
  message?: string;
  role: string;
  riderId: number; // user id of the poster
  timestamp?: string;
}

@Controller('rides')
export class RideController {
  constructor(private prisma: PrismaService) {}

  @Post()
  async createRide(@Body() body: RideDto) {
    if (!body.from || !body.to || !body.role || !body.riderId) {
      throw new BadRequestException('Missing required fields');
    }
    // Fetch user and check role
    const user = await this.prisma.user.findUnique({
      where: { id: body.riderId },
    });
    if (!user) {
      throw new BadRequestException('User not found');
    }
    // if (user.role !== body.role) {
    //   throw new BadRequestException(
    //     `Role mismatch: You can't post a ride as '${body.role}' with a '${user.role}' account.`,
    //   );
    // }

    // Case-insensitive role check
    if (user.role.toLowerCase() !== body.role.toLowerCase()) {
      throw new BadRequestException(
        `Role mismatch: You're a '${user.role}', not a '${body.role}'.`,
      );
    }

    const ride = await this.prisma.ride.create({
      data: {
        from: body.from,
        to: body.to,
        message: body.message,
        role: body.role,
        riderId: body.riderId,
        timestamp: body.timestamp ? new Date(body.timestamp) : undefined,
      },
    });
    return { message: 'Ride created', ride };
  }

  @Get()
  async getRides(@Query('role') role?: string) {
    // Optionally filter by role (rider/passenger)
    const rides = await this.prisma.ride.findMany({
      where: role ? { role } : {},
      include: { rider: true },
      orderBy: { timestamp: 'desc' },
    });
    return { rides };
  }

  @Get(':id')
  async getRide(@Param('id') id: string) {
    const ride = await this.prisma.ride.findUnique({
      where: { id: Number(id) },
      include: { rider: true },
    });
    if (!ride) throw new NotFoundException('Ride not found');
    return { ride };
  }

  @Put(':id')
  async updateRide(@Param('id') id: string, @Body() updates: Partial<RideDto>) {
    const ride = await this.prisma.ride.update({
      where: { id: Number(id) },
      data: updates,
    });
    return { message: 'Ride updated', ride };
  }

  @Delete(':id')
  async deleteRide(@Param('id') id: string) {
    await this.prisma.ride.delete({ where: { id: Number(id) } });
    return { message: 'Ride deleted' };
  }

  // Confirm a ride (delete it from DB)
  @Post(':id/confirm')
  async confirmRide(@Param('id') id: string) {
    await this.prisma.ride.delete({ where: { id: Number(id) } });
    return { message: 'Ride confirmed and removed from database' };
  }

  // Reject a ride (mark as rejected for the user)
  @Post(':id/reject')
  rejectRide(@Param('id') id: string, @Body() body: { userId: number }) {
    return {
      message: 'Ride rejected for user',
      rideId: id,
      userId: body.userId,
    };
  }

  // (Commented) Auto-expire rides after 5 minutes
  // @Get()
  // async getRides(@Query('role') role?: string) {
  //   const now = new Date();
  //   const rides = await this.prisma.ride.findMany({
  //     where: {
  //       ...(role ? { role } : {}),
  //       timestamp: {
  //         gte: new Date(now.getTime() - 5 * 60 * 1000), // Only show rides from last 5 minutes
  //       },
  //     },
  //     include: { rider: true },
  //     orderBy: { timestamp: 'desc' },
  //   });
  //   return { rides };
  // }
  // For local testing, do not auto-expire rides
}
