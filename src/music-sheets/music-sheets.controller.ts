import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
} from '@nestjs/common';
import { MusicSheetsService } from './music-sheets.service';
import { CreateMusicSheetDto } from './dto/create-music-sheet.dto';
import { UpdateMusicSheetDto } from './dto/update-music-sheet.dto';

@Controller('music-sheets')
export class MusicSheetsController {
  constructor(private readonly musicSheetsService: MusicSheetsService) {}

  @Post()
  create(@Body() createMusicSheetDto: CreateMusicSheetDto) {
    return this.musicSheetsService.create(createMusicSheetDto);
  }

  @Get()
  findAll() {
    return this.musicSheetsService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.musicSheetsService.findOne(+id);
  }

  @Patch(':id')
  update(
    @Param('id') id: string,
    @Body() updateMusicSheetDto: UpdateMusicSheetDto,
  ) {
    return this.musicSheetsService.update(+id, updateMusicSheetDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.musicSheetsService.remove(+id);
  }
}
