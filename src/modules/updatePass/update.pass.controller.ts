import { Controller, Post, Body } from '@nestjs/common';
import { UpdatePassService } from './update.pass.service';
import { UpdatePassDTO } from './update.pass.dto';

@Controller('updatePass')
export class UpdatePassController {
  constructor(private readonly updatePassService: UpdatePassService) {}

  @Post()
  async update(@Body() data: UpdatePassDTO) {
    if (!data.email || !data.newPassword) {
      throw new Error('Preencha os campos email e senha.');
    }
    return this.updatePassService.updatePassword(data.email, data.newPassword);
  }
}
