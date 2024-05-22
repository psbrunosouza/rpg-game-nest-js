import { CreateGameDTO, GameDTO } from '../dtos/game.dto';

export interface IGameRepository {
  create(createGameDTO: CreateGameDTO): Promise<CreateGameDTO>;
  find(): Promise<GameDTO>;
}
