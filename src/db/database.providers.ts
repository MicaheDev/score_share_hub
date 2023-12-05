import * as mongoose from 'mongoose';

export const databaseProviders = [
  {
    provide: 'DATABASE_CONNECTION',
    useFactory: (): Promise<typeof mongoose> =>
      mongoose.connect(
        'mongodb://127.0.0.1:27017/score_share_hub?directConnection=true&serverSelectionTimeoutMS=2000&appName=mongosh+1.8.2',
      ),
  },
];
