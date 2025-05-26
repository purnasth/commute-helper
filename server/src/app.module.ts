import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { AppController } from './app.controller';
import { AuthController } from './auth.controller';
import { AppService } from './app.service';
import { PrismaService } from './prisma.service';
import { RideController } from './ride.controller';

@Module({
  imports: [ConfigModule.forRoot({ isGlobal: true })],
  controllers: [AppController, AuthController, RideController],
  providers: [AppService, PrismaService],
})
export class AppModule {}
