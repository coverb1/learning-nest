import { Injectable } from "@nestjs/common";
import { Repository } from "typeorm";
import { createSongsDTO } from "./dto/create-song-dto";
import { InjectRepository } from "@nestjs/typeorm";
import { Playlist } from "src/playlist/playlist.entity";
import { Songs } from "./song.entity";
import { Artist } from "src/artitsts/artitits.entity";

@Injectable()

export class SongsService{
    constructor(
        @InjectRepository(Songs)
        private SongsRepo:Repository<Songs>,

              @InjectRepository(Artist)
        private ArtistRepo:Repository<Artist>,

    ){}

    async create(songsDTO:createSongsDTO):Promise<Songs>{
        const song=new Songs()

        const artits=await this.ArtistRepo.findByIds(songsDTO.artists)
        song.artist=artits

        return this.SongsRepo.save(song)
    }
}