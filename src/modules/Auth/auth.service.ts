import { HttpException, HttpStatus, Injectable } from '@nestjs/common';
import * as bcrypt from 'bcrypt';
import * as jwt from 'jsonwebtoken';
import { PrismaService } from 'src/database/PrismaService';
import { jwtConstants } from '../../utils/jwt.config';

@Injectable()
export class AuthService {
  constructor(private prisma: PrismaService) { }

  async login(email: string, password: string): Promise<string | null> {
    const user = await this.prisma.user.findUnique({ where: { email } });

    if (!user) {
      throw new HttpException('Credenciais inválidas', HttpStatus.UNAUTHORIZED);
    }

    const isPasswordValid = await bcrypt.compare(password, user.password);

    if (!isPasswordValid) {
      throw new HttpException('Credenciais inválidas', HttpStatus.UNAUTHORIZED);
    }

    const token = jwt.sign({
      userId: user.id,
      fullname: user.fullname,
      email: user.email,
      phone: user.phone,
      user_type: user.user_type,
      avatar: user.avatar,
    }, jwtConstants.secret, {
      expiresIn: jwtConstants.expiresIn,
    });

    return token;
  }
}
