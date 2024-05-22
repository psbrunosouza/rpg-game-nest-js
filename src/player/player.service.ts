import { Injectable } from '@nestjs/common';
import { PlayerDTO } from './dtos/player.dto';
import { PlayerRepository } from './player.repository';

@Injectable()
export class PlayerService {
  constructor(private playerRepository: PlayerRepository) {}

  create(player: PlayerDTO): Promise<PlayerDTO> {
    return this.playerRepository.create(player);
  }

  findOne(id: number): Promise<PlayerDTO> {
    return this.playerRepository.findOne(id);
  }
}
