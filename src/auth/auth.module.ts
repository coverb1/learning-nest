import { Module } from '@nestjs/common';
import { AuthService } from './auth.service';
import { AuthController } from './auth.controller';
import { userModule } from 'src/User/user.module';
import { TypeOrmModule } from '@nestjs/typeorm';
import { User } from 'src/User/user.entity';
import { JwtModule } from '@nestjs/jwt';
import { authaconstants } from './auth.constants';
import { JwtStrategy } from './jwt.strategy';
import { ArtitstsModule } from 'src/artitsts/artitsts.module';

@Module({
  
  imports:[userModule,ArtitstsModule,JwtModule.register({secret:authaconstants.secrete,signOptions:{
    expiresIn:"1d"
  }})],
  providers: [AuthService,JwtStrategy],
  controllers: [AuthController],
  exports:[AuthService]
})
export class AuthModule {}
