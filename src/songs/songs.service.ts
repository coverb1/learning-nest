import { Injectable } from "@nestjs/common";
import { Repository } from "typeorm";
import { createSongsDTO } from "./dto/create-song-dto";
import { InjectRepository } from "@nestjs/typeorm";
import { Playlist } from "src/playlist/playlist.entity";
import { Songs } from "./song.entity";
import { Artist } from "src/artitsts/artitits.entity";
import { UpdateResult } from "typeorm/browser";
import { UpdateSOngDto } from "./dto/update-songDto";

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
        song.tittle=songsDTO.tittle
        song.releaseDate=songsDTO.releaseDate,
        song.duration=songsDTO.duration

if (songsDTO.artists){
  const artist=await this.SongsRepo.findByIds(songsDTO.artists)
}
 return this.SongsRepo.save(song)
    }

    findAll():Promise<Songs[]>{
        return this.SongsRepo.find()
    }

    findOne(id:number):Promise<Songs|null>{
        return this.SongsRepo.findOneBy({id})
    }

    async remove(id:number):Promise<void>{
        await this.SongsRepo.delete(id)
    }



  async  update(id:number,recordToUpdate:UpdateSOngDto){
      const song=await this.SongsRepo.preload({
        id,
        ...recordToUpdate
      });

      if (!song) {
        return null
      }
const updatedsong=await this.SongsRepo.save(song)
return updatedsong
    }
}