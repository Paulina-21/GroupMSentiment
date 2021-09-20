import { Body, Controller, Get, Inject, Post } from '@nestjs/common';
import {
  MessagePattern,
  Payload,
  Ctx,
  RmqContext,
  ClientProxy,
} from '@nestjs/microservices';
import { IArticle, IDatablock } from './scrape.interface';

import { InjectRepository } from '@nestjs/typeorm';
import { Repository, Connection } from 'typeorm';
import { Article } from 'src/article/entities/article.entity';
import { CreateArticleDto } from 'src/article/dto/create-article.dto';
import { ArticleService } from 'src/article/article.service';
import { Entity } from 'src/entity/entities/entity.entity';
import { EntityService } from 'src/entity/entity.service';
import { Phrase } from 'src/phrase/entities/phrase.entity';
import { PhraseService } from 'src/phrase/phrase.service';
import { CreateEntityDto } from 'src/entity/dto/create-entity.dto';
import { SearchTermDto } from './searchTerm.dto';
@Controller('scrape')
export class ScrapeController {
  constructor(
    private readonly articleService: ArticleService,
    private readonly entityService: EntityService,
    private readonly phraseService: PhraseService,
    @InjectRepository(Article)
    private articleRepository: Repository<Article>,
    @InjectRepository(Entity)
    private entityRepository: Repository<Entity>,
    @InjectRepository(Phrase)
    private phraseRepository: Repository<Phrase>,
    private connection: Connection,
    @Inject('SCRAPE_SERVICE') private readonly client: ClientProxy,
  ) {}
  @Get()
  get(): string {
    return 'hi';
  }
  @MessagePattern()
  async getNotifications(
    @Payload() data: number[],
    @Ctx() context: RmqContext,
  ) {
    const originalMsg = context.getMessage();
    const message: IDatablock = JSON.parse(originalMsg['content'].toString());

    const newEntities = message.entities.map(async (entity: Entity) => {
      const entityObj = new Entity(entity);
      return await this.entityRepository.save(entityObj).then((entity) => {
        return entity;
      });
    });
    const newPhrases = message.key_phrases.map(async (phrase: string) => {
      const phraseObj = new Phrase(phrase);
      return await this.phraseRepository.save(phraseObj).then((phrase) => {
        return phrase;
      });
    });
    Promise.all(newEntities).then(async (entities) => {
      Promise.all(newPhrases).then(async (phrases) => {
        console.log(message.entities);
        console.log(newEntities);
        /**
    console.log(newEntities);
    message.key_phrases.forEach(async (key_phrase: string) => {
      const phraseObj = await this.phraseService.create({
        phrase_text: key_phrase,
      });
      newPhrases.push(phraseObj);
    });
    */
        const articleData: CreateArticleDto = {
          sentiment_positive: message.sentiment_positive,
          sentiment_neutral: message.sentiment_neutral,
          sentiment_negative: message.sentiment_negative,
          sentiment_score: message.sentiment_score,
          language_name: message.language_name,
          language_confidence: message.language_confidence,
          iso6391Name: message.iso6391Name,
          entities: entities,
          phrases: phrases,
        };

        const article: Article = new Article(articleData);

        //article.entities = newEntities;
        //article.phrases = newPhrases;
        const articleObj = await this.connection.manager.save(article);
        return articleObj;
      });
    });
  }
  @Post()
  async create(@Body() search: SearchTermDto) {
    console.log(search);
    const { searchTerm } = search;
    console.log(searchTerm);
    await this.client.emit('scrape-link-request', searchTerm);
    return 'started';
  }
}
