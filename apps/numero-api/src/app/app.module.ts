import { Module } from '@nestjs/common';
import { GraphQLModule } from '@nestjs/graphql';
import { GameModule } from '../game/game.module';
import { UserModule } from '../user/user.module';

@Module({
  imports: [
    GameModule,
    UserModule,
    GraphQLModule.forRoot({
      installSubscriptionHandlers: true,
      autoSchemaFile: 'schema.gql',
    }),
  ],
})
export class AppModule {}
