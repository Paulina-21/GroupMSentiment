import { Injectable } from "@nestjs/common";
import { CreatePhraseDto } from "./dto/create-phrase.dto";
import { UpdatePhraseDto } from "./dto/update-phrase.dto";
import { Phrase } from "./entities/phrase.entity";
import { Repository } from "typeorm";
import { InjectRepository } from "@nestjs/typeorm";

@Injectable()
export class PhraseService {
  constructor(
    @InjectRepository(Phrase)
    private phraseRepository: Repository<Phrase>
  ) {}
  async create(createPhraseDto: CreatePhraseDto) {
    const article = this.phraseRepository.create(createPhraseDto);
    await this.phraseRepository.save(createPhraseDto);
    return article;
  }

  findAll() {
    return `This action returns all phrase`;
  }

  findOne(id: number) {
    return `This action returns a #${id} phrase`;
  }

  update(id: number, updatePhraseDto: UpdatePhraseDto) {
    return `This action updates a #${id} phrase`;
  }

  remove(id: number) {
    return `This action removes a #${id} phrase`;
  }
}
