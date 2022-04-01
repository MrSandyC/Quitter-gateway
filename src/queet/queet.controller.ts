import { Controller, Get, Post } from '@nestjs/common';
import { Payload } from '@nestjs/microservices';
import { QueetService } from './queet.service';
import { PostQueetRequest } from './dto/create-queet.dto';
import { Observable } from 'rxjs';
import { Queet } from './entities/queet.entity';

@Controller('queet')
export class QueetController {
  constructor(private readonly queetService: QueetService) {}

  @Post()
  async create(@Payload() createQueetDto: PostQueetRequest) {
    return this.queetService.create(createQueetDto);
  }

  @Get()
  async findAll() {
    return this.queetService.findAll();
  }

  @Get(':id')
  findOne(@Payload() id: number) {
    return this.queetService.findOne(id);
  }

  @Get('profile/:id')
  fetchQueetsByProfile(@Payload() id: number) {
    return this.queetService.fetchByProfile(id);
  }
}
