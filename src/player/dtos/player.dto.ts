import { GameDTO } from 'src/game/dtos/game.dto';

export class PlayerDTO {
  id: number;
  name: string;
  life: number;
  power: number;
  armor: number;
  game?: GameDTO;
}
