import { Inject, Injectable } from '@nestjs/common';
import { CreateMusicSheetDto } from './dto/create-music-sheet.dto';
import { UpdateMusicSheetDto } from './dto/update-music-sheet.dto';
import { MusicSheet } from './entities/music-sheet.entity';
import { Model } from 'mongoose';

@Injectable()
export class MusicSheetsService {
  constructor(
    @Inject('MUSICSHEET_MODEL')
    private musicSheetModel: Model<MusicSheet>,
  ) {}
  create(createMusicSheetDto: CreateMusicSheetDto) {
    const createdMusicSheet = new this.musicSheetModel(createMusicSheetDto);
    return createdMusicSheet.save();
  }

  findAll() {
    return this.musicSheetModel.find().exec();
  }

  findOne(id: number) {
    return `This action returns a #${id} musicSheet`;
  }

  update(id: number, updateMusicSheetDto: UpdateMusicSheetDto) {
    return `This action updates a #${id} musicSheet`;
  }

  remove(id: number) {
    return `This action removes a #${id} musicSheet`;
  }
}
