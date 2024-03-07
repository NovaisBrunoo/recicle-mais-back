import { Body, Controller, Get, Param, Post } from '@nestjs/common';
import { UserService } from './user.service';
import { UserDTO } from './user.dto';

@Controller('user')
export class UserController {
  constructor(private readonly userService: UserService) {}

  @Post()
  async create(@Body() data: UserDTO) {
    return this.userService.create(data);
  }
  @Get(':id')
  async findOne(@Param('id') id: number): Promise<UserDTO> {
    return this.userService.findOne(id);
  }
}
