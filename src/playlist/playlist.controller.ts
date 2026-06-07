import { Body,Controller,Post } from "@nestjs/common";
import { Playlist } from "./playlist.entity";
import { creatPlayListDto } from "./dto/create-playlist.dto";
import { PlaylistService } from "./playist.service";

@Controller("Playlist")

export class playListController{
    constructor(private playlistService:PlaylistService){}
    @Post()
    create(@Body() PlayListDto:creatPlayListDto): Promise<Playlist>{
        return this.playlistService.create(PlayListDto)
    }
}