import { Module } from '@nestjs/common';
import { PrismaService } from '../prisma.service';
import { GameResolver } from './game.resolver';
import { GameService } from './game.service';

@Module({
  providers: [PrismaService, GameResolver, GameService],
})
export class GameModule {}
