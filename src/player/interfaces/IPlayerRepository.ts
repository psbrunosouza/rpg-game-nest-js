import { PlayerDTO } from '../dtos/player.dto';

export interface IPlayerRepository {
  create(player: PlayerDTO): Promise<PlayerDTO>;
  findOne(id: number): Promise<PlayerDTO>;
  findMany(): Promise<PlayerDTO[]>;
  delete(id: number): Promise<void>;
}
