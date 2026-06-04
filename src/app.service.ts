import { Injectable } from '@nestjs/common';
import { DevconfigServices } from './common/providers/DevconfigService';

@Injectable()
export class AppService {

  constructor(private devConfigService:DevconfigServices){

  }

  getHello(): string {
    return `Hello am learning nestjs fundamentamel! ${this.devConfigService.getDBHOST()}`;
  }
}
