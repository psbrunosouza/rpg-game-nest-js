import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  ParseIntPipe,
  Post,
} from '@nestjs/common';
import { PlayerDTO } from './dtos/player.dto';
import { PlayerNotFoundException } from './exceptions/player-not-found.exception';
import { PlayerService } from './player.service';

@Controller('players')
export class PlayerController {
  constructor(private playerService: PlayerService) {}

  @Post()
  create(@Body() player: PlayerDTO): Promise<PlayerDTO> {
    return this.playerService.create(player);
  }

  @Get(':id')
  findOne(@Param('id', ParseIntPipe) id: number): Promise<PlayerDTO> {
    return this.playerService.findOne(id);
  }

  @Get()
  findMany(): Promise<PlayerDTO[]> {
    return this.playerService.findMany();
  }

  @Delete(':id')
  async delete(@Param('id', ParseIntPipe) id: number): Promise<void> {
    const hasPlayer = await this.playerService.findOne(id);

    if (!hasPlayer?.id) {
      throw new PlayerNotFoundException();
    }

    return this.playerService.delete(+id);
  }
}
