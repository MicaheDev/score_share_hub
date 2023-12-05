import { Test, TestingModule } from '@nestjs/testing';
import { MusicSheetsService } from './music-sheets.service';

describe('MusicSheetsService', () => {
  let service: MusicSheetsService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [MusicSheetsService],
    }).compile();

    service = module.get<MusicSheetsService>(MusicSheetsService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
