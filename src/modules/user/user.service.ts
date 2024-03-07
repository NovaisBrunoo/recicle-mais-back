import { ConflictException, Injectable, NotFoundException } from '@nestjs/common';
import * as bcrypt from 'bcrypt';
import { isEmail } from 'class-validator';
import { PrismaService } from 'src/database/PrismaService';
import { UserDTO } from './user.dto';

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
    const { password, ...newUser } = user;
    return newUser;
  }
  async findById(id: number): Promise<{ id: number; name: string; avatar: string; email: string; phone: string }> {
    const user = await this.prisma.user.findUnique({
      where: {
        id: id, 
      },
      select: {
        id: true,
        fullname: true,
        avatar: true,
        email: true,
        phone: true
      }
    });
  
    if (!user) {
      throw new NotFoundException('Usuário não encontrado');
    }
  
    return { id: user.id, name: user.fullname, avatar: user.avatar, email: user.email, phone: user.phone };
  }
  

}
