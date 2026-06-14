import { Test, TestingModule } from '@nestjs/testing';
import { ArtitstsController } from './artitsts.controller';

describe('ArtitstsController', () => {
  let controller: ArtitstsController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [ArtitstsController],
    }).compile();

    controller = module.get<ArtitstsController>(ArtitstsController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
