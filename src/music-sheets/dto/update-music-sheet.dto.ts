import { PartialType } from '@nestjs/mapped-types';
import { CreateMusicSheetDto } from './create-music-sheet.dto';

export class UpdateMusicSheetDto extends PartialType(CreateMusicSheetDto) {}
