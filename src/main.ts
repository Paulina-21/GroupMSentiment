import { NestFactory } from '@nestjs/core';
import { MicroserviceOptions, Transport } from '@nestjs/microservices';
import { AppModule } from './app.module';
const SENTIMENT_SERVICE_RESPONSE = "sentiment-service-response";

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  const scrapeService = await app.connectMicroservice<MicroserviceOptions>({
    transport: Transport.RMQ,
    options: {
      urls: ['amqp://localhost:5672'],
      queue: SENTIMENT_SERVICE_RESPONSE,
      queueOptions: {
        durable: false
      },
    },
  });
  await app.startAllMicroservices()
  await app.listen(3001);
}
bootstrap();
