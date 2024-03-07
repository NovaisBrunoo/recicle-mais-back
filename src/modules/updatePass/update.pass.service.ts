import {
  ConflictException,
  Injectable,
  UnauthorizedException,
} from '@nestjs/common';
import { JwtService } from '@nestjs/jwt';
import * as bcrypt from 'bcrypt';
import { PrismaService } from 'src/database/PrismaService';

@Injectable()
export class UpdatePassService {
  constructor(
    private prisma: PrismaService,
    private readonly jwtService: JwtService,
  ) {}

  async updatePassword(
    authorization: string,
    email: string,
    newPassword: string,
  ) {
    if (!email || !newPassword) {
      throw new ConflictException({
        message: 'Preencha os campos email e/ou senha.',
      });
    }

    const token = authorization.split(' ')[1];
    console.log(token, 'token');
    const payload = this.validateToken(token);

    try {
      const user = await this.prisma.user.findFirst({
        where: {
          email: email,
        },
      });

      if (!user) {
        throw new ConflictException({ message: 'Usuário não encontrado.' });
      }

      if (user.id !== payload.userId) {
        throw new UnauthorizedException({ message: 'Usuário não autorizado.' });
      }

      const saltOrRounds = 10;
      const hash = await bcrypt.hash(newPassword, saltOrRounds);

      await this.prisma.user.update({
        where: {
          email: email,
        },
        data: {
          password: hash,
        },
      });

      return { message: 'Senha atualizada com sucesso.' };
    } catch (error) {
      throw new UnauthorizedException({ message: 'Não autorizado.' });
    }
  }

  private validateToken(token: string) {
    try {
      const payload = this.jwtService.verify(token);
      return payload;
    } catch (error) {
      throw new UnauthorizedException({
        message: 'Token inválido ou expirado.',
      });
    }
  }
}
