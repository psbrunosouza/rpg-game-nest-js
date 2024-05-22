import { Body, Controller, Get, Post } from '@nestjs/common';
import { GameDTO } from './dtos/game.dto';
import { GameService } from './game.service';

@Controller('games')
export class GameController {
  constructor(private readonly gameService: GameService) {}

  @Get()
  find(): Promise<GameDTO> {
    return this.gameService.find();
  }

  @Post()
  create(@Body() GameDTO: GameDTO): Promise<GameDTO> {
    return this.gameService.create(GameDTO);
  }
}
