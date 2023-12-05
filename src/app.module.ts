import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { UsersModule } from './users/users.module';
import { MusicSheetsModule } from './music-sheets/music-sheets.module';

@Module({
  imports: [UsersModule, MusicSheetsModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
