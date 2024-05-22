import { Game } from '@prisma/client';

export class EnemyDTO {
  id?: number;
  name: string;
  life: number;
  power: number;
  armor: number;
  game?: Game;
}
