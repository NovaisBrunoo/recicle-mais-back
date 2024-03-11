import { ConflictException, Injectable} from '@nestjs/common';
import * as bcrypt from 'bcrypt';
import { isEmail } from 'class-validator';
import { PrismaService } from 'src/database/PrismaService';
import { UserDTO } from './user.dto';

export type User = any
@Injectable()
export class UserService {
  constructor(private prisma: PrismaService) {}

  async createUser(data: UserDTO) {
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

   private readonly users = this.prisma.user.findMany();
  async findOne(fullname: string): Promise<User | undefined> {

    return (await this.users).find((user) => user.fullname === fullname);
  }
 
}
