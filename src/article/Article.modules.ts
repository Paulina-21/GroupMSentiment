import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { ArticleService } from 'src/article/Article.service';
import { ArticleController } from 'src/article/article.controller';
import {Article } from 'src/article/article.entity';

@Module({
  imports: [TypeOrmModule.forFeature([Article])],
  providers: [ArticleService],
  controllers: [ArticleController],
})
export class ArticlesModule {}