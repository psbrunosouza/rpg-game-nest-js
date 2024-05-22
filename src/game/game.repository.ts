import { Injectable } from '@nestjs/common';
import { PrismaService } from 'src/database/prisma.service';
import { CreateGameDTO, GameDTO } from './dtos/game.dto';
import { IGameRepository } from './interfaces/IGameRepository';

@Injectable()
export class GameRepository implements IGameRepository {
  repository = this.prismaService.game;

  constructor(private prismaService: PrismaService) {}

  create(createGameDTO: CreateGameDTO): Promise<GameDTO> {
    return this.repository.upsert({
      create: createGameDTO,
      update: createGameDTO,
      where: {
        id: 1,
      },
      select: {
        id: true,
        players: true,
        isStarted: true,
      },
    });
  }

  find(): Promise<GameDTO> {
    return this.repository.findFirst({
      select: {
        id: true,
        players: true,
        isStarted: true,
      },
    });
  }
}
