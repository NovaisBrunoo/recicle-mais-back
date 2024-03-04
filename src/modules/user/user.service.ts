import { Injectable } from '@nestjs/common';
import { PrismaService } from 'src/database/PrismaService';
import { UserDTO } from './user.dto';


@Injectable()
export class UserService {
  constructor(private prisma: PrismaService){}
  async create(data: UserDTO){
    const userExist = await this.prisma.user.findFirst({
      where: {
        email: data.email,
      }
    }) 
    if(userExist){
      throw new Error("Este email já esta sendo utilizado.")
    }

    const newUser = await this.prisma.user.create({
      data,
    })
    return newUser
  }


}
