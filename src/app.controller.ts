import { Controller, Get, Req, UseGuards } from '@nestjs/common';
import { AppService } from './app.service';
import { request } from 'node:http';
import { AuthGuard } from '@nestjs/passport';
import { jwtAuthGuard } from './auth/jwt-guard';
import { ApiBearerAuth } from '@nestjs/swagger';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get()
  getHello(): string {
    return this.appService.getHello();
  }

  @Get('profile')
  @UseGuards(jwtAuthGuard)
  @ApiBearerAuth('JWT-auth')
getprofile(@Req()
  request
){
  return request.user
}
}
