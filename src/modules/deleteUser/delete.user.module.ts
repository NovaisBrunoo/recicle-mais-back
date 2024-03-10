import { Module } from '@nestjs/common';
import { DeleteUserController } from './delete.user.controller';
import { DeleteUserService } from './delete.user.service';
import { PrismaService } from 'src/database/PrismaService';

@Module({
  controllers: [DeleteUserController],
  providers: [DeleteUserService, PrismaService],
})
export class DeleteUserModule {}
