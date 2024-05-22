import { Injectable } from '@nestjs/common';
import { GameDTO } from './dtos/game.dto';
import { GameRepository } from './game.repository';

@Injectable()
export class GameService {
  constructor(private GameRepository: GameRepository) {}

  find(): Promise<GameDTO> {
    return this.GameRepository.find();
  }

  create(createGameDTO: GameDTO): Promise<GameDTO> {
    return this.GameRepository.create(createGameDTO);
  }
}
