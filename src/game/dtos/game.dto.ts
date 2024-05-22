import { PlayerDTO } from 'src/player/dtos/player.dto';

export class CreateGameDTO {
  isStarted: boolean;
}

export class GameDTO {
  id: number;
  players: PlayerDTO[];
  isStarted: boolean;
}
