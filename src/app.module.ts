import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { ScrapeController } from './scrape/scrape.controller';
import { ScrapeModule } from './scrape/scrape.module';
import { ScrapeService } from './scrape/scrape.service';

@Module({
  imports: [ScrapeModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
