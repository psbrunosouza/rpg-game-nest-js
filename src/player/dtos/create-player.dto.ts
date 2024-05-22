import { GameDTO } from 'src/game/dtos/game.dto';

export class CreatePlayerDTO {
  name: string;
  life: number;
  power: number;
  armor: number;
  game?: GameDTO;
}
