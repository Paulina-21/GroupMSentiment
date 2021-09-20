import { Module } from '@nestjs/common';
import { ScrapeController } from './scrape.controller';
import { ClientsModule, Transport } from '@nestjs/microservices';
import { ArticleModule } from 'src/article/article.module';
import { EntityModule } from 'src/entity/entity.module';
import { PhraseModule } from 'src/phrase/phrase.module';

const SCRAPE_LINK_REQUEST = 'scrape-link-request';
@Module({
  imports: [
    ClientsModule.register([
      {
        name: 'SCRAPE_SERVICE',
        transport: Transport.RMQ,
        options: {
          urls: ['amqp://localhost:5672'],
          queue: SCRAPE_LINK_REQUEST,
          queueOptions: {
            durable: false,
          },
        },
      },
    ]),
    ArticleModule,
    EntityModule,
    PhraseModule,
  ],
  controllers: [ScrapeController],
})
export class ScrapeModule {}
