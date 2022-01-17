import { Injectable } from '@nestjs/common';
import { Game } from '@prisma/client';
import { PrismaService } from '../prisma.service';

@Injectable()
export class GameService {
  constructor(private prisma: PrismaService) {}

  async games(): Promise<Array<Game>> {
    return this.prisma.game.findMany();
  }
}
