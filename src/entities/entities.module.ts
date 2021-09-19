import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { EntitiesController } from './entities.controller';
import { Entities } from './entities.entity';
import { EntitiesService } from './entities.service';

@Module({
    imports: [TypeOrmModule.forFeature([Entities])],
  providers: [EntitiesService],
  controllers: [EntitiesController],
})
export class EntitiesModule {}
