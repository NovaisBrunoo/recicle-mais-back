import { Module } from '@nestjs/common';
import { UserModule } from './modules/user/user.module';
import { AuthModule } from './modules/Auth/auth.module';
import { UpdatePassModule } from './modules/updatePass/update.pass.module';

@Module({
  imports: [UserModule, AuthModule, UpdatePassModule],
  controllers: [],
  providers: [],
})
export class AppModule {}
