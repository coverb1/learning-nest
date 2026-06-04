import { Injectable } from "@nestjs/common";

@Injectable()

export class DevconfigServices{
    DBHOST='localhost';

    getDBHOST(){
        return this.DBHOST
    }
}