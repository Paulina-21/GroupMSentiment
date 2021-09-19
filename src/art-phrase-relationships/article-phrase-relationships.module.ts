import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import {Article } from 'src/article/article.entity';
import { ArtPhraseRelationshipsController } from './article-phrase-relationships.controller';
import { ArtPhraseRelationshipsService } from './article-phrase-relationships.service';
import { PhraseArticle } from './ArticlePhraseRelationship.entity';

@Module({
  imports: [TypeOrmModule.forFeature([PhraseArticle])],
  providers: [ArtPhraseRelationshipsService],
  controllers: [ArtPhraseRelationshipsController],
})
export class ArtEntRealtionshipsModule {}