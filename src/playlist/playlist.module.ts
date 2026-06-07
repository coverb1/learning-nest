import { Module } from "@nestjs/common";
import { TypeOrmModule } from "@nestjs/typeorm";
import { Playlist } from "./playlist.entity";
import { Songs } from "src/songs/song.entity";
import { User } from "src/User/user.entity";

import { PlaylistService } from "./playist.service";
import { playListController } from "./playlist.controller";

@Module({
    imports:[
        TypeOrmModule.forFeature([
            Playlist,
            Songs,
            User 
        ])
    ],
    controllers:[playListController],
    providers:[PlaylistService]
})
export class PlaylistModule {}