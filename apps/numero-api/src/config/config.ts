import { join } from 'path';
import { Config } from './config.interface';

const config: Config = {
  nest: {
    port: 3333,
  },
  cors: {
    enabled: true,
  },
  swagger: {
    enabled: true,
    path: 'api',
    title: 'Numero',
    description: 'Nemero API description',
    version: '1.5',
  },
  graphql: {
    playgroundEnabled: true,
    debug: true,
    schemaDestination: join(process.cwd(), `/apps/numero-api/src/schema.gql`),
    sortSchema: true,
  },
  security: {
    expiresIn: '2m',
    bcryptSaltOrRound: 10,
    refreshIn: '7d',
  },
};

export default (): Config => config;
