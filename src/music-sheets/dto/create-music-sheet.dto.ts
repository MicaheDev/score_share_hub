import { IsString, IsNotEmpty, IsOptional } from 'class-validator';

export class CreateMusicSheetDto {
  @IsNotEmpty()
  @IsString()
  readonly title: string;

  @IsNotEmpty()
  @IsString()
  readonly author: string;

  @IsNotEmpty()
  @IsString()
  readonly pdf_url: string;

  @IsOptional()
  @IsString()
  readonly midi_url?: string;

  @IsNotEmpty()
  @IsString()
  readonly uploader: string;

  @IsNotEmpty()
  @IsString()
  readonly upload_date: string;

  @IsNotEmpty()
  @IsString()
  readonly difficulty: string;

  @IsOptional()
  @IsString()
  readonly instrument?: string;

  @IsOptional()
  @IsString()
  readonly description?: string;

  @IsOptional()
  readonly reports?: any[];
}
