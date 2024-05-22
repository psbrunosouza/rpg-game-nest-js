import { Module } from '@nestjs/common';
import { PrismaService } from 'src/database/prisma.service';
import { EnemyController } from './enemy.controller';
import { EnemyRepository } from './enemy.repository';
import { EnemyService } from './enemy.service';

@Module({
  controllers: [EnemyController],
  providers: [PrismaService, EnemyRepository, EnemyService],
})
export class EnemyModule {}
