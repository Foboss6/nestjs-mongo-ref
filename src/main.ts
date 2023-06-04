import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  await app.listen(3000, async () => {
    console.log(`Application is running at: ${await app.getUrl()}`);
  });
}
bootstrap();
