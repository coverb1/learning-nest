import { Test, TestingModule } from '@nestjs/testing';
import { ArtitstsService } from './artitsts.service';

describe('ArtitstsService', () => {
  let service: ArtitstsService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [ArtitstsService],
    }).compile();

    service = module.get<ArtitstsService>(ArtitstsService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
