import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Entities } from './entities.entity';

@Injectable()
export class EntitiesService {
  constructor(
    @InjectRepository(Entities)
    private articlesRepository: Repository<Entities>,
  ) {}

  findAll(): Promise<Entities[]> {
    return this.articlesRepository.find();
  }

  findOne(id: string): Promise<Entities> {
    return this.articlesRepository.findOne(id);
  }

  async remove(id: string): Promise<void> {
    await this.articlesRepository.delete(id);
  }
}
