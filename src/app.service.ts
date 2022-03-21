import { Inject, Injectable } from '@nestjs/common';
import { ClientProxy } from '@nestjs/microservices';
import { PostQueetRequest } from './post-queet-request.dto';
import { PostQueetEvent } from './post-queet.event';

@Injectable()
export class AppService {
  constructor(
    @Inject('Queet-service') private readonly queetClient: ClientProxy,
  ) {}
  async getHello() {
    const message = await this.queetClient.send('post-queet', 'username');
    return message;
  }

  postQueet(postQueetRequest: PostQueetRequest) {
    this.queetClient.emit(
      'hello-world',
      new PostQueetEvent(postQueetRequest.message),
    );
  }
}
