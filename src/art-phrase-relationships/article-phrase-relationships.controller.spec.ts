import { Test, TestingModule } from '@nestjs/testing';
import { ArtPhraseRelationshipsController } from './article-phrase-relationships.controller';

describe('ArtPhraseRelationshipsController', () => {
  let controller: ArtPhraseRelationshipsController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [ArtPhraseRelationshipsController],
    }).compile();

    controller = module.get<ArtPhraseRelationshipsController>(ArtPhraseRelationshipsController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
