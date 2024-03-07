import { ConflictException, Injectable } from '@nestjs/common';
import * as bcrypt from 'bcrypt';
import { PrismaService } from 'src/database/PrismaService';

@Injectable()
export class UpdatePassService {
  constructor(private prisma: PrismaService) {}

  async updatePassword(email: string, newPassword: string) {
    if (!email || !newPassword) {
      throw new ConflictException({
        message: 'Preencha os campos email e/ou senha.',
      });
    }

    try {
      const user = await this.prisma.user.findFirst({
        where: {
          email,
        },
      });

      if (!user) {
        throw new ConflictException({ message: 'Usuário não encontrado.' });
      }

      const saltOrRounds = 10;
      const hash = await bcrypt.hash(newPassword, saltOrRounds);

      await this.prisma.user.update({
        where: {
          email,
        },
        data: {
          password: hash,
        },
      });

      return { message: 'Senha atualizada com sucesso.' };
    } catch (error) {
      throw new ConflictException({ message: 'Email não encontrado.' });
    }
  }
}
