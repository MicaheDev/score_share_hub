import { Test, TestingModule } from '@nestjs/testing';
import { MusicSheetsController } from './music-sheets.controller';
import { MusicSheetsService } from './music-sheets.service';

describe('MusicSheetsController', () => {
  let controller: MusicSheetsController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [MusicSheetsController],
      providers: [MusicSheetsService],
    }).compile();

    controller = module.get<MusicSheetsController>(MusicSheetsController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
