import { Body, Controller, Get, Post } from '@nestjs/common';
import { AppService } from './app.service';
import { PostQueetRequest } from './post-queet-request.dto';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get()
  getHello() {
    return this.appService.getHello();
  }

  @Post()
  postQueet(@Body() postQueetRequest: PostQueetRequest) {
    this.appService.postQueet(postQueetRequest);
  }
}
