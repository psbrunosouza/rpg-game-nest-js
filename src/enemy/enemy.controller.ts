import { Body, Controller, Get, Param, Post } from '@nestjs/common';
import { CreateEnemyDTO } from './dtos/create-enemy.dto';
import { EnemyService } from './enemy.service';

@Controller('enemies')
export class EnemyController {
  constructor(private readonly enemyService: EnemyService) {}

  @Post()
  create(@Body() createEnemyDto: CreateEnemyDTO) {
    return this.enemyService.create(createEnemyDto);
  }

  @Get(':id')
  find(@Param('id') id: string) {
    return this.enemyService.findById(+id);
  }
}
