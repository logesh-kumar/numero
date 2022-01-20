import { ObjectType } from '@nestjs/graphql';
import { User } from '../../auth/models/user.model';
import { BaseModel } from '../../common/models/base.model';

@ObjectType({ description: 'game ' })
export class Game extends BaseModel {
  userId: number;
  user: User;
}
