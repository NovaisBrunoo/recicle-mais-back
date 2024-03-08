import { Controller, Delete, Param } from '@nestjs/common';
import { DeleteUserService } from './delete.user.service';

@Controller('delete-user')
export class DeleteUserController {
  constructor(private readonly deleteUserService: DeleteUserService) {}

  @Delete(':id')
  async remove(@Param('id') id: string) {
    await this.deleteUserService.deleteUser(id);
    return `Usuário removido com sucesso.`;
  }
}
