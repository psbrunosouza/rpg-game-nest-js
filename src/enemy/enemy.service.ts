import { Injectable } from '@nestjs/common';
import { CreateEnemyDTO } from './dtos/create-enemy.dto';
import { EnemyDTO } from './dtos/enemy.dto';
import { EnemyRepository } from './enemy.repository';

@Injectable()
export class EnemyService {
  constructor(private enemyRepository: EnemyRepository) {}

  create(enemy: CreateEnemyDTO): Promise<EnemyDTO> {
    return this.enemyRepository.create(enemy);
  }

  findOne(id: number): Promise<EnemyDTO> {
    return this.enemyRepository.findOne(id);
  }

  findMany(): Promise<EnemyDTO[]> {
    return this.enemyRepository.findMany();
  }
}
