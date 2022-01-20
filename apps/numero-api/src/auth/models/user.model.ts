import {
  ObjectType,
  registerEnumType,
  HideField,
  Field,
} from '@nestjs/graphql';
import { BaseModel } from '../../common/models/base.model';
import { Game } from '../../game/models/game.model';

export enum Role {
  ADMIN = 'ADMIN',
  USER = 'USER',
}

registerEnumType(Role, {
  name: 'Role',
  description: 'User role',
});

@ObjectType()
export class User extends BaseModel {
  @Field()
  email: string;
  firstName?: string;
  lastName?: string;
  role: Role;
  games: Game[];
  @HideField()
  password: string;
}
