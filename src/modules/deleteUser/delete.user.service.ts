import { Injectable } from '@nestjs/common';
import { PrismaService } from 'src/database/PrismaService';

@Injectable()
export class DeleteUserService {
  constructor(private readonly prisma: PrismaService) {}

  async deleteUser(id: string): Promise<void> {
    try {
      await this.prisma.user.delete({
        where: {
          id: parseInt(id),
        },
      });
    } catch (error) {
      throw new Error(`Erro ao excluir usuário: ${error.message}`);
    }
  }
}
