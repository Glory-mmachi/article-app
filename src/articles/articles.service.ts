/* eslint-disable prettier/prettier */
/* eslint-disable @typescript-eslint/require-await */
import { Injectable } from '@nestjs/common';
import { Article } from './interfaces/dataInterface';
import { articleDto } from './dto/article.dto';

@Injectable()
export class ArticlesService {
  // Service methods will be defined here in the future
  private articales: Article[] = [];
  async findAll() {
    return this.articales;
  }

  async create(articleDto: articleDto) {
    const article = {
      ...articleDto,
      id: this.articales.length + 1,
      createdAt: new Date(),
      updatedAt: new Date(),
    };
    this.articales.push(article);
    return article;
  }
}
