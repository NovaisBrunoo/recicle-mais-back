import { Module } from '@nestjs/common';
import { UpdatePassService } from './update.pass.service';
import { PrismaService } from 'src/database/PrismaService';
import { UpdatePassController } from './update.pass.controller';

@Module({
  controllers: [UpdatePassController],
  providers: [UpdatePassService, PrismaService],
})
export class UpdatePassModule {}
