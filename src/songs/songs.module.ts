import {Module} from  "@nestjs/common"
import { TypeOrmModule } from "@nestjs/typeorm"
import { Playlist } from "src/playlist/playlist.entity"
import { Songs } from "./song.entity"
import { User } from "src/User/user.entity"
import { Artist } from "src/artitsts/artitits.entity"

import { SongsService } from "./songs.service"
import { SongsController } from "./songs.controller"
import { Connection } from "typeorm/browser"

@Module({
  imports:[
    TypeOrmModule.forFeature([
        Playlist,
        Songs,
        User,
        Artist
    ])
  ],
  controllers:[SongsController],
  providers:[SongsService]
})
export class SongsModule{}