import { Module } from '@nestjs/common';
import { PrismaService } from 'src/database/prisma.service';
import { GameController } from './game.controller';
import { GameRepository } from './game.repository';
import { GameService } from './game.service';

@Module({
  imports: [],
  controllers: [GameController],
  providers: [GameService, PrismaService, GameRepository],
})
export class GameModule {}
