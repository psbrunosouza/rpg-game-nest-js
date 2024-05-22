import { Injectable } from '@nestjs/common';
import { PrismaService } from 'src/database/prisma.service';
import { CreatePlayerDTO } from './dtos/create-player.dto';
import { PlayerDTO } from './dtos/player.dto';
import { IPlayerRepository } from './interfaces/IPlayerRepository';

@Injectable()
export class PlayerRepository implements IPlayerRepository {
  repository = this.prismaService.player;

  constructor(private prismaService: PrismaService) {}

  create(player: CreatePlayerDTO): Promise<PlayerDTO> {
    return this.repository.create({
      data: player,
    });
  }

  findOne(id: number): Promise<PlayerDTO> {
    return this.repository.findUnique({
      where: {
        id,
      },
    });
  }
}
