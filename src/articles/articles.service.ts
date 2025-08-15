/* eslint-disable prettier/prettier */
/* eslint-disable @typescript-eslint/require-await */
import { Injectable } from '@nestjs/common';
import { Article } from './interfaces/dataInterface';
import { ArticleDto } from './dto/article.dto';

@Injectable()
export class ArticlesService {
  // Service methods will be defined here in the future
  private articles: Article[] = [];
  async findAll() {
    return this.articles;
  }

  async create(articleDto: ArticleDto) {
    const article = {
      ...articleDto,
      id: this.articles.length + 1,
      createdAt: new Date(),
      updatedAt: new Date(),
    };
    this.articles.push(article);
    return article;
  }
}
