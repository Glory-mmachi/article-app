/* eslint-disable prettier/prettier */
import { Body, Controller, Get, Post } from '@nestjs/common';
import { ArticlesService } from './articles.service';
import type { ArticleDto } from './dto/article.dto';

@Controller('articles')
export class ArticlesController {
  constructor(private readonly articleService: ArticlesService) {}
  @Get()
  findAll() {
    return this.articleService.findAll();
  }
  @Post()
  create(@Body() input: ArticleDto) {
    return this.articleService.create(input);
  }
}
