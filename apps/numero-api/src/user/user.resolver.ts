import { Args, ArgsType, Field, Query, Resolver } from '@nestjs/graphql';
import { User } from './user.model';
import { UserService } from './user.service';

@ArgsType()
class UserInput {
  @Field({
    nullable: true,
  })
  id?: number;

  @Field({
    nullable: true,
  })
  email?: string;
}

@Resolver(() => User)
export class UserResolver {
  constructor(private readonly userService: UserService) {}

  @Query(() => User)
  async user(@Args() userArgs: UserInput) {
    return this.userService.user(userArgs);
  }
}
