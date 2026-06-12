import { Module } from '@nestjs/common';
import { AuthService } from './auth.service';
import { AuthController } from './auth.controller';
import { userModule } from 'src/User/user.module';
import { TypeOrmModule } from '@nestjs/typeorm';
import { User } from 'src/User/user.entity';

@Module({
  
  imports:[userModule],
  providers: [AuthService],
  controllers: [AuthController],
  exports:[AuthService]
})
export class AuthModule {}
