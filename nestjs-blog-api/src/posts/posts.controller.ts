import { Body, Controller, Get, Param, Post } from '@nestjs/common';
import { PostsService } from './posts.service';
import { PostType } from './post.interface';

@Controller('posts')
export class PostsController {
  constructor(private readonly postsService: PostsService) {}

  @Get()
  findAll() {
    return this.postsService.findAll();
  }

  @Post()
  create(@Body() post: PostType): void {
    this.postsService.create(post);
  }

  @Get(':id')
  // :id ↑のURLを ↓パラメータとしてGET取得
  findById(@Param('id') id: string): PostType {
    return this.postsService.findById(id);
  }
}
