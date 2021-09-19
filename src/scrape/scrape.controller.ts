import { Body, Controller, Get, Inject, Post } from '@nestjs/common';
import { ClientProxy } from '@nestjs/microservices';
import { SearchTermDto } from './searchTerm.dto'
@Controller('scrape')
export class ScrapeController {
  constructor(@Inject('SCRAPE_SERVICE') private readonly client: ClientProxy) {}

  @Get()
  testResponse(): string {
    return 'test';
  }

  @Post()
  testReply(@Body() searchTermDto: SearchTermDto): void {
    const { searchTerm } = searchTermDto;
    this.client.emit('search-term', searchTerm);
  }
}
