import { Inject, Injectable } from '@nestjs/common';
import { ClientProxy } from '@nestjs/microservices';
import { PostQueetRequest } from './post-queet-request.dto';
import { PostQueetEvent } from './post-queet.event';

@Injectable()
export class AppService {
  constructor(
    @Inject('Queet-service') private readonly queetClient: ClientProxy,
  ) {}
  getHello(): string {
    return 'Hello World!';
  }

  postQueet(postQueetRequest: PostQueetRequest) {
    this.queetClient.emit(
      'post-queet',
      new PostQueetEvent(postQueetRequest.message),
    );
  }
}
