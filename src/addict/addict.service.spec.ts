import { Test, TestingModule } from '@nestjs/testing';
import { AddictService } from './addict.service';

describe('AddictService', () => {
  let service: AddictService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [AddictService],
    }).compile();

    service = module.get<AddictService>(AddictService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
