import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';

import * as admin from 'firebase-admin';
import * as keys from '../keys/firebase-admin.json'

async function bootstrap() {
  admin.initializeApp({
    credential: admin.credential.cert(keys as admin.ServiceAccount),
  })
  const app = await NestFactory.create(AppModule, { cors: true });

  await app.listen(3000);
}
bootstrap();
