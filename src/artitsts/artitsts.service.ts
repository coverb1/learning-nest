import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm'
import { Artist } from './artitits.entity';
import { Repository } from 'typeorm';

@Injectable()
export class ArtitstsService {
    constructor(
        @InjectRepository(Artist)
        private ArtistReposit:Repository<Artist>
    ){}

    async findArtist(userId:number):Promise<Artist|null>{
        return this.ArtistReposit.findOneBy({user:{id:userId}})
    }
}
