import { Controller, Delete, Get, Post, Put } from '@nestjs/common';
import { Payload } from '@nestjs/microservices';
import { RegisterUserRequest } from './dto/register-user.dto';
import { UpdateUserDto } from './dto/update-user.dto';
import { UserService } from './user.service';

@Controller('user')
export class UserController {
  constructor(private readonly userService: UserService) {}

  @Get()
  fetchAllUsers() {
    return this.userService.fetchAllUsers();
  }

  @Post()
  registerUser(@Payload() registerUserRequest: RegisterUserRequest) {
    return this.userService.createUser(registerUserRequest);
  }

  @Put()
  updateUser(@Payload() updateUserDto: UpdateUserDto) {
    return this.userService.updateUser(updateUserDto);
  }

  @Get(':id')
  fetchUserById(@Payload() id: number) {
    return this.userService.fetchUserById(id);
  }

  @Delete()
  removeUser(@Payload() id: number) {
    return this.userService.removeUser(id);
  }
}
