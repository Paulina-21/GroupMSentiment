import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { keyPhrase } from './keyPhrase.entity';
import { PhraseService } from './phrase.service';
import { PhrasesController } from './phrases.controller';

@Module({
    imports: [TypeOrmModule.forFeature([keyPhrase])],
  providers: [PhraseService],
  controllers: [PhrasesController],
})
export class PhraseModule {}
