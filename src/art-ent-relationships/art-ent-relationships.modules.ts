import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import {Article } from 'src/article/article.entity';
import { ArtEntRelationshipService } from './art-ent-relationships.service';
import { ArtEntRelationshipsController } from './art-ent-relationships/art-ent-relationships.controller';

@Module({
  imports: [TypeOrmModule.forFeature([Article])],
  providers: [ArtEntRelationshipService],
  controllers: [ArtEntRelationshipsController],
})
export class ArtEntRealtionshipsModule {}