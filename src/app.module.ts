import { Module } from '@nestjs/common';
import { UserModule } from './modules/user/user.module';
import { AuthModule } from './modules/Auth/auth.module';

@Module({
  imports: [UserModule, AuthModule],
  controllers: [],
  providers: [],
})
export class AppModule {}
