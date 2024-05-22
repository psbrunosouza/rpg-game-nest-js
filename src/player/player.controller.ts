import { Body, Controller, Get, Param, Post } from '@nestjs/common';
import { PlayerDTO } from './dtos/player.dto';
import { PlayerService } from './player.service';

@Controller('players')
export class PlayerController {
  constructor(private playerService: PlayerService) {}

  @Post()
  create(@Body() player: PlayerDTO): Promise<PlayerDTO> {
    return this.playerService.create(player);
  }

  @Get(':id')
  find(@Param('id') id: number): Promise<PlayerDTO> {
    return this.playerService.findOne(+id);
  }
}
