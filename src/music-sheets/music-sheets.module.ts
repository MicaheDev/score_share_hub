import { Module } from '@nestjs/common';
import { MusicSheetsService } from './music-sheets.service';
import { MusicSheetsController } from './music-sheets.controller';
import { musicSheetsProviders } from './music-sheets.providers';
import { DatabaseModule } from 'src/db/database.module';

@Module({
  imports: [DatabaseModule],
  controllers: [MusicSheetsController],
  providers: [MusicSheetsService, ...musicSheetsProviders],
})
export class MusicSheetsModule {}
