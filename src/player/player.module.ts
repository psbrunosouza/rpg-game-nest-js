import { Module } from '@nestjs/common';
import { PrismaService } from 'src/database/prisma.service';
import { PlayerController } from './player.controller';
import { PlayerRepository } from './player.repository';
import { PlayerService } from './player.service';

@Module({
  controllers: [PlayerController],
  providers: [PlayerService, PlayerRepository, PrismaService],
})
export class PlayerModule {}
