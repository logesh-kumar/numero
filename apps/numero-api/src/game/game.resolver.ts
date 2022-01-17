import { Query, Resolver } from '@nestjs/graphql';
import { GameService } from './game.service';
import { Game } from './models/game.model';

@Resolver(() => Game)
export class GameResolver {
  constructor(private readonly gameService: GameService) {}

  @Query(() => [Game])
  async games() {
    return this.gameService.games();
  }
}
