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
      throw new NotFoundException('User not found');
    }
    // Case-insensitive role check
    if (user.role.toLowerCase() !== body.role.toLowerCase()) {
      throw new BadRequestException(
        `Role mismatch: You're a '${user.role}', not a '${body.role}'.`,
      );
    }
    // Prevent posting if user has an active ride in last 5 minutes
    const fiveMinAgo = new Date(Date.now() - 5 * 60 * 1000);
    const existingActiveRide = await this.prisma.ride.findFirst({
      where: {
        riderId: body.riderId,
        status: 'ACTIVE',
        timestamp: { gte: fiveMinAgo },
      },
    });
    if (existingActiveRide) {
      throw new BadRequestException(
        // 'You already have an active ride. You can only post a new ride after your previous ride is confirmed, rejected, or 5 minutes have passed.',
        'You already have an active ride and cannot post another at this time.',
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
        status: 'ACTIVE',
      },
    });
    return { message: 'Ride created', ride };
  }

  @Get()
  async getRides(@Query('role') role?: string) {
    // Only show active rides
    const rides = await this.prisma.ride.findMany({
      where: {
        ...(role ? { role } : {}),
        status: 'ACTIVE',
      },
      include: { rider: true },
      orderBy: { timestamp: 'desc' },
    });
    return { rides };
  }

  // Get all ride history for a user (as rider or passenger)
  @Get('history')
  async getRideHistory(@Query('userId') userId: string) {
    const id = Number(userId);
    if (!userId || isNaN(id)) {
      throw new BadRequestException('Valid userId is required');
    }
    const rides = await this.prisma.ride.findMany({
      where: {
        OR: [{ riderId: id }, { passengers: { some: { id: id } } }],
      },
      include: {
        rider: true,
        passengers: true,
        requests: true,
        ratings: true,
        messages: true,
      },
      orderBy: { timestamp: 'desc' },
    });
    return { rides };
  }

  @Get(':id')
  async getRide(@Param('id') id: string) {
    const rideId = Number(id);
    if (!id || isNaN(rideId)) {
      throw new BadRequestException('Valid ride id is required');
    }
    const ride = await this.prisma.ride.findUnique({
      where: { id: rideId },
      include: {
        rider: true,
        passengers: true,
        requests: true,
        ratings: true,
        messages: true,
      },
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

  // Confirm a ride (mark as completed)
  @Post(':id/confirm')
  async confirmRide(@Param('id') id: string) {
    // Mark ride as completed
    const ride = await this.prisma.ride.update({
      where: { id: Number(id) },
      data: { status: 'COMPLETED' },
    });
    return { message: 'Ride confirmed and completed', ride };
  }

  // Reject a ride (mark as rejected)
  @Post(':id/reject')
  async rejectRide(@Param('id') id: string, @Body() body: { userId: number }) {
    // Mark ride as rejected
    const ride = await this.prisma.ride.update({
      where: { id: Number(id) },
      data: { status: 'REJECTED' },
    });
    return {
      message: 'Ride rejected. You can now post a new ride.',
      rideId: id,
      userId: body.userId,
      ride,
    };
  }
}
