import { NestFactory } from '@nestjs/core';
import { AppModule, ObserveInstrument } from './app.module.js';

async function bootstrap() {
  const app = await NestFactory.create(AppModule, {
    instrument: ObserveInstrument,
  });

  const PORT = process.env.PORT ||3000;
  console.log(process.env.PORT);

  await app.listen(PORT, () => {
    console.log(`The server is running on port ${PORT}`);
  });
}

await bootstrap();