import { Connection } from 'mongoose';
import { MusicSheetSchema } from './entities/music-sheet.entity';

export const musicSheetsProviders = [
  {
    provide: 'MUSICSHEET_MODEL',
    useFactory: (connection: Connection) =>
      connection.model('MusicSheet', MusicSheetSchema),
    inject: ['DATABASE_CONNECTION'],
  },
];
