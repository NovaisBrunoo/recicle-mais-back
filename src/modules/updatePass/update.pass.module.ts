import { Module } from '@nestjs/common';
import { UpdatePassService } from './update.pass.service';
import { PrismaService } from 'src/database/PrismaService';
import { UpdatePassController } from './update.pass.controller';
import { JwtModule } from '@nestjs/jwt';

@Module({
  imports: [
    JwtModule.register({
      secret: 'recicleMais',
      signOptions: { expiresIn: '24h' },
    }),
  ],
  controllers: [UpdatePassController],
  providers: [UpdatePassService, PrismaService],
})
export class UpdatePassModule {}
