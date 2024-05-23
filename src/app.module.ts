import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { AppController } from './app.controller';
import { EnemyModule } from './enemy/enemy.module';
import { PlayerModule } from './player/player.module';

@Module({
  imports: [
    EnemyModule,
    PlayerModule,
    ConfigModule.forRoot({
      envFilePath: '.env',
    }),
  ],
  controllers: [AppController],
})
export class AppModule {}
