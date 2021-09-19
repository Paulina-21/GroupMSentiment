import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { keyPhrase } from './keyPhrase.entity';

@Injectable()
export class PhraseService {
  constructor(
    @InjectRepository(keyPhrase)
    private articlesRepository: Repository<keyPhrase>,
  ) {}

  findAll(): Promise<keyPhrase[]> {
    return this.articlesRepository.find();
  }

  findOne(id: string): Promise<keyPhrase> {
    return this.articlesRepository.findOne(id);
  }

  async remove(id: string): Promise<void> {
    await this.articlesRepository.delete(id);
  }
}
