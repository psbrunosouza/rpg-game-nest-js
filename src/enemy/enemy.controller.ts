import {
  Body,
  Controller,
  Get,
  Param,
  ParseIntPipe,
  Post,
} from '@nestjs/common';
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
  findOne(@Param('id', ParseIntPipe) id: number) {
    return this.enemyService.findOne(id);
  }

  @Get()
  findMany() {
    return this.enemyService.findMany();
  }
}
