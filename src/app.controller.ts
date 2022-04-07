import { Body, Controller, Get, Post, UseGuards } from '@nestjs/common';
import { AppService } from './app.service';
import { AuthzGuard } from './authz/authz.guard';
import { PostQueetRequest } from './post-queet-request.dto';
import { AddUserId } from './util/';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  @UseGuards(AuthzGuard)
  @Get()
  getHello(@AddUserId() user: unknown) {
    console.log(user);
    return this.appService.getHello();
  }

  @Post()
  postQueet(@Body() postQueetRequest: PostQueetRequest) {
    this.appService.postQueet(postQueetRequest);
  }
}
