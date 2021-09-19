import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import {Article } from 'src/article/article.entity';
import { ArtPhraseRelationshipsController } from './art-phrase-relationships.controller';
import { ArtPhraseRelationshipsService } from './art-phrase-relationships.service';
import { PhraseArticle } from './PhraseArtRelationship.entity';

@Module({
  imports: [TypeOrmModule.forFeature([PhraseArticle])],
  providers: [ArtPhraseRelationshipsService],
  controllers: [ArtPhraseRelationshipsController],
})
export class ArtEntRealtionshipsModule {}