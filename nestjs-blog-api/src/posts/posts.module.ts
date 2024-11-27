import { Module } from '@nestjs/common';
import { PostsController } from './posts.controller';
import { PostsService } from './posts.service';

@Module({
  controllers: [PostsController], //自動生成 nest generate controller posts
  providers: [PostsService], //自動生成 nest generate service posts
})
export class PostsModule {}
