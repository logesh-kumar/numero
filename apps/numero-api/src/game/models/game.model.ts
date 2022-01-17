import { Field, ID, ObjectType } from '@nestjs/graphql';

@ObjectType({ description: 'game ' })
export class Game {
  @Field(() => ID)
  id: number;

  @Field()
  userId: number;
}
