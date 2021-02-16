import { Test, TestingModule } from '@nestjs/testing';
import { AddictController } from './addict.controller';

describe('AddictController', () => {
  let controller: AddictController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [AddictController],
    }).compile();

    controller = module.get<AddictController>(AddictController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
