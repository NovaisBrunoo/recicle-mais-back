import { Controller, Post, Body, Headers } from '@nestjs/common';
import { UpdatePassService } from './update.pass.service';

@Controller('updatePass')
export class UpdatePassController {
  constructor(private readonly updatePassService: UpdatePassService) {}

  @Post('update-password')
  async updatePassword(
    @Headers('authorization') authorization: string,
    @Body('email') email: string,
    @Body('newPassword') newPassword: string,
  ) {
    return this.updatePassService.updatePassword(
      authorization,
      email,
      newPassword,
    );
  }
}
