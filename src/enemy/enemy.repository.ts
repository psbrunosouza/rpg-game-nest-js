import { Injectable } from '@nestjs/common';
import { PrismaService } from 'src/database/prisma.service';
import { CreateEnemyDTO } from './dtos/create-enemy.dto';
import { EnemyDTO } from './dtos/enemy.dto';
import { IEnemyRepository } from './interfaces/IEnemyRepository';

@Injectable()
export class EnemyRepository implements IEnemyRepository {
  repository = this.prismaService.enemy;

  constructor(private prismaService: PrismaService) {}

  create(createEnemyDTO: CreateEnemyDTO): Promise<EnemyDTO> {
    return this.repository.create({
      data: createEnemyDTO,
    });
  }

  findById(id: number): Promise<EnemyDTO> {
    return this.repository.findUnique({ where: { id } });
  }
}
