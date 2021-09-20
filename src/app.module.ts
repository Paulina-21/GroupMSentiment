import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { ClientsModule, Transport } from '@nestjs/microservices';
import { ScrapeController } from './scrape/scrape.controller';
import { ScrapeModule } from './scrape/scrape.module';
import { ArticleModule } from './article/article.module';
import { Article } from './article/entities/article.entity';
import { ArticleService } from './article/article.service';
import { EntityModule } from './entity/entity.module';
import { Entity } from './entity/entities/entity.entity';
import { PhraseModule } from './phrase/phrase.module';
import { Phrase } from './phrase/entities/phrase.entity';
const SCRAPE_LINK_REQUEST = 'scrape-link-request';

@Module({
  imports: [
    ArticleModule,
    EntityModule,
    PhraseModule,

    TypeOrmModule.forRoot({
      type: 'mysql',
      host: 'localhost',
      port: 3306,
      username: 'root',
      password: 'example',
      database: 'test',
      entities: [Article, Entity, Phrase], //keyPhrase,EntityArticle,PhraseArticle,Entities],
      synchronize: true,
      keepConnectionAlive: true,
    }),
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
    ScrapeModule,
  ],
  controllers: [AppController, ScrapeController],
  providers: [AppService],
})
export class AppModule {}
