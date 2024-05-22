import { Game } from '@prisma/client';

export class CreateEnemyDTO {
  name: string;
  life: number;
  power: number;
  armor: number;
  game: Game;
}
