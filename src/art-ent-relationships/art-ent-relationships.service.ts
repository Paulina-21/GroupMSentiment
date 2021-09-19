import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { ArtEntRelationshipsController } from './art-ent-relationships/art-ent-relationships.controller';
import { EntityArticle } from './EntArtRelationship.entity';

@Injectable()
export class ArtEntRelationshipService {
  constructor(
    @InjectRepository(EntityArticle)
    private entArtRepository: Repository<EntityArticle>,
  ) {}

  findAll(): Promise<EntityArticle[]> {
    return this.entArtRepository.find();
  }

  findOne(id: string): Promise<EntityArticle> {
    return this.entArtRepository.findOne(id);
  }

  async remove(id: string): Promise<void> {
    await this.entArtRepository.delete(id);
  }
}