import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { PostsModule } from './posts/posts.module';

@Module({
  imports: [PostsModule], //自動生成 nest generate module posts
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
