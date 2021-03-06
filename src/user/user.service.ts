import { Inject, Injectable } from '@nestjs/common';
import { ClientProxy } from '@nestjs/microservices';
import { RegisterUserRequest } from './dto/register-user.dto';
import { UpdateUserDto } from './dto/update-user.dto';
import { User } from './entities/user.entity';

@Injectable()
export class UserService {
  constructor(
    @Inject('User-service') private readonly userClient: ClientProxy,
    @Inject('Queet-service') private readonly queetClient: ClientProxy,
  ) {}
  fetchAllUsers() {
    return this.userClient.send('user:find-all', {});
  }

  createUser(registerUserRequest: RegisterUserRequest) {
    this.queetClient.emit('user:register', registerUserRequest);
    return this.userClient.emit('user:register', registerUserRequest);
  }

  fetchUserById(id: number) {
    return this.userClient.send('user:find-by-id', id);
  }

  checkIfUserExists(auth0id: string) {
    return this.userClient.send('user:check-if-exists', auth0id);
  }

  removeUser(id: number) {
    return this.userClient.emit('user:remove', id);
  }

  updateUser(updateUserDto: UpdateUserDto) {
    return this.userClient.emit('user:update', updateUserDto);
  }
}
