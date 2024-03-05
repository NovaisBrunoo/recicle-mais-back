import { Injectable } from '@nestjs/common';
import { PrismaService } from 'src/database/PrismaService';
import { UserDTO } from './user.dto';
import * as bcrypt from 'bcrypt';

@Injectable()
export class UserService {
  constructor(private prisma: PrismaService){}
  async create(data: UserDTO){
    const userExist = await this.prisma.user.findUnique({
      where: {
        email: data.email,
      }
    }) 
    if(userExist){
      throw new Error("Este email já esta sendo utilizado.")
    }
    const saltOrRounds = 10;
    const hash = await bcrypt.hash(data.password, saltOrRounds);
    const user = await this.prisma.user.create({
      data: {
        ...data,
        password: hash, 
      },
    })
    return user
  }


}
