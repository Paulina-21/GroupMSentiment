import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { ScrapeController } from './scrape/scrape.controller';
import { ScrapeModule } from './scrape/scrape.module';
import { ScrapeService } from './scrape/scrape.service';
import {TypeOrmModule} from '@nestjs/typeorm'
import { keyPhrase } from './phrase/keyPhrase.entity';
import { Article } from './article/article.entity';
import { EntityArticle } from './article-entities-relationships/ArticleEntitiesRelationship.entity';
import { PhraseArticle } from './art-phrase-relationships/ArticlePhraseRelationship.entity';
import { Entities } from './entities/entities.entity';

@Module({
  imports:[TypeOrmModule.forRoot({
      type: 'mysql',
      host: 'localhost',
      port: 3306,
      username: 'root',
      password: '',
      database: 'test',
      entities: [keyPhrase,Article,EntityArticle,PhraseArticle,Entities],
      synchronize: true,
      keepConnectionAlive:true,
    }),
  
  ],
controllers: [AppController],
providers: [AppService],
})
export class AppModule {}
