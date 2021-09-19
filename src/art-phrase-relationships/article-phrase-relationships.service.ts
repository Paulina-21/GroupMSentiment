import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { EntityArticle } from 'src/article-entities-relationships/ArticleEntitiesRelationship.entity';
import { Repository } from 'typeorm';
import { PhraseArticle } from './ArticlePhraseRelationship.entity';

@Injectable()
export class ArtPhraseRelationshipsService {
  constructor(
    @InjectRepository(EntityArticle)
    private PhraseArticlesRepository: Repository<PhraseArticle>,
  ) {}

  findAll(): Promise<PhraseArticle[]> {
    return this.PhraseArticlesRepository.find();
  }

  findOne(id: string): Promise<PhraseArticle> {
    return this.PhraseArticlesRepository.findOne(id);
  }

  async remove(id: string): Promise<void> {
    await this.PhraseArticlesRepository.delete(id);
  }
}