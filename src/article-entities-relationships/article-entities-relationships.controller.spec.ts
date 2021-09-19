import { Test, TestingModule } from '@nestjs/testing';
import { ArtEntRelationshipsController } from './article-entities-relationships.controller';

describe('ArtEntRelationshipsController', () => {
  let controller: ArtEntRelationshipsController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [ArtEntRelationshipsController],
    }).compile();

    controller = module.get<ArtEntRelationshipsController>(ArtEntRelationshipsController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
