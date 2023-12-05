import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document } from 'mongoose';

@Schema()
export class MusicSheet extends Document {
  @Prop({ required: [true, 'Title is required, error from db'] })
  title: string;

  @Prop({ required: [true, 'Author is required, error from db'] })
  author: string;

  @Prop({ required: [true, 'PDF URL is required, error from db'] })
  pdf_url: string; // Cambiado a Buffer para simular bytes

  @Prop({ type: String, default: null })
  midi_url: string | null; // Cambiado a Buffer para simular bytes y permitir nulo

  @Prop({ required: [true, 'Uploader is required, error from db'] })
  uploader: string;

  @Prop({ required: [true, 'Upload Date is required, error from db'] })
  upload_date: string;

  @Prop({ required: [true, 'Difficulty is required, error from db'] })
  difficulty: string;

  @Prop()
  instrument?: string;

  @Prop()
  description?: string;

  @Prop()
  reports?: any[];
}

export const MusicSheetSchema = SchemaFactory.createForClass(MusicSheet);
