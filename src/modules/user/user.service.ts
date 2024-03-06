import { Injectable, ConflictException } from '@nestjs/common';
import { PrismaService } from 'src/database/PrismaService';
import { UserDTO } from './user.dto';
import * as bcrypt from 'bcrypt';
import { isEmail } from 'class-validator';
@Injectable()
export class UserService {
  constructor(private prisma: PrismaService) {}
  async create(data: UserDTO) {
    if (!isEmail(data.email)) {
      throw new ConflictException({ message: 'Formato de e-mail inválido.' });
    }
    const userExist = await this.prisma.user.findFirst({
      where: {
        email: data.email,
      },
    });
    if (userExist) {
      throw new ConflictException({
        message: 'Este email já esta sendo utilizado.',
      });
    }
    const saltOrRounds = 10;
    const hash = await bcrypt.hash(data.password, saltOrRounds);
    const user = await this.prisma.user.create({
      data: {
        ...data,
        password: hash,
      },
    });
    return user;
  }
}
