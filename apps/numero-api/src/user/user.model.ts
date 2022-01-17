import { Field, ID, ObjectType } from '@nestjs/graphql';

@ObjectType({ description: 'user ' })
export class User {
  @Field(() => ID)
  id: number;

  @Field()
  name: string;

  @Field()
  email: string;
}
