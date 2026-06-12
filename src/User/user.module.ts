import { Controller, Module } from "@nestjs/common";
import { userClassController } from "./user.controller";
import { userClassService } from "./user.service";
import { Connection } from "typeorm/browser";
import { TypeOrmModule } from "@nestjs/typeorm";
import { Playlist } from "src/playlist/playlist.entity";
import { Songs } from "src/songs/song.entity";
import { User } from "./user.entity";

@Module({
    imports:[
        TypeOrmModule.forFeature([User])],
    controllers:[userClassController],
    providers:[userClassService],
    exports:[userClassService]
})
export class userModule{}