import { Body, Controller, Get, Param, ParseIntPipe, Post } from '@nestjs/common';
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
  async findOne(@Param('id', ParseIntPipe) id:number): Promise<{ id: number; name: string, avatar: string,email: string,phone: string }> {
    const user = await this.userService.findById(id);
    return { id: user.id, name: user.name, avatar: user.avatar, email: user.email,phone: user.phone };
  }
}
