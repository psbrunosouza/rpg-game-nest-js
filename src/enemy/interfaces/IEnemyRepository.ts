import { CreateEnemyDTO } from '../dtos/create-enemy.dto';
import { EnemyDTO } from '../dtos/enemy.dto';

export interface IEnemyRepository {
  create(enemy: CreateEnemyDTO): Promise<EnemyDTO>;
  findOne(id: number): Promise<EnemyDTO>;
}
