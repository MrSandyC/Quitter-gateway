import { Body, Controller, Delete, Get, Post, Put } from '@nestjs/common';
import { Payload } from '@nestjs/microservices';
import { Observable } from 'rxjs';
import { RegisterUserRequest } from './dto/register-user.dto';
import { UpdateUserDto } from './dto/update-user.dto';
import { User } from './entities/user.entity';
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

  @Get('/check')
  fetchUserByAuth0(@Payload() auth0token: string) {
    console.log(auth0token);
    return this.userService.checkIfUserExists(auth0token);
  }

  @Put()
  updateUser(@Payload() updateUserDto: UpdateUserDto) {
    return this.userService.updateUser(updateUserDto);
  }

  @Post('/username')
  fetchUserByUsername(@Body() body) {
    return this.userService.fetchUserByUsername(body.username);
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
