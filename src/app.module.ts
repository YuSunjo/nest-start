import { Module } from '@nestjs/common';
import { MoviesModule } from './movies/movies.module';
import { AppController } from './app.controller';
import { App } from './app';

@Module({
  imports: [MoviesModule, AppModule],
  controllers: [AppController],
  providers: [App],
})
export class AppModule {}
