import { Module } from "@nestjs/common";
import { userClassController } from "./user.controller";
import { userClassService } from "./user.service";
import { TypeOrmModule } from "@nestjs/typeorm";
import { User } from "./user.entity";

@Module({
    imports: [TypeOrmModule.forFeature([User])],
    controllers: [userClassController],
    providers: [userClassService],
    exports: [userClassService]
})
export class userModule {}