import { Parent, Query, ResolveField, Resolver } from '@nestjs/graphql';
import { PrismaService } from 'nestjs-prisma';
import { Auth } from '../auth/models/auth.model';
import { User } from '../auth/models/user.model';
import { GameService } from './game.service';
import { Game } from './models/game.model';

@Resolver(() => Game)
export class GameResolver {
  constructor(
    private readonly gameService: GameService,
    private readonly prisma: PrismaService
  ) {}

  @Query(() => [Game])
  async games() {
    return this.gameService.games();
  }

  @ResolveField('user', () => User)
  async user(@Parent() game: Game) {
    return await this.prisma.user.findUnique({
      where: {
        id: game.userId,
      },
    });
  }
}
