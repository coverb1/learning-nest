import { Body, Controller, Delete, Get, HttpException, HttpStatus, Inject, Param, ParseIntPipe, Patch, Post, Put } from '@nestjs/common';
import { SongsService } from './songs.service';
import { createSongsDTO } from './dto/create-song-dto';
import { Songs } from './song.entity';
import { UpdateResult } from 'typeorm';
import { UpdateSOngDto } from './dto/update-songDto';
import { error } from 'node:console';

@Controller('songs')
export class SongsController {
    constructor(private songsServices: SongsService,
        
    ) {
        
    }


    @Post()
    create(@Body() createSong: createSongsDTO) {
        return this.songsServices.create(createSong)
    }

    @Get(':id')
    findOne(
        @Param( 'id', new ParseIntPipe({ errorHttpStatusCode: HttpStatus.NOT_ACCEPTABLE }), )id: number
    ) :Promise<Songs|null> {
        return this.songsServices.findOne(id)
    }

    @Patch(":id")
    async update(
        @Param("id",ParseIntPipe)id:number, @Body() recordUpdate:UpdateSOngDto,
    ){
        const result=await this.songsServices.update(id,recordUpdate)

        if (!result) {
            throw new HttpException('Songs not found',HttpStatus.NOT_FOUND)
        }
        return{
            message:"Song updated successfully",
            data:result
        }
    }

    @Delete(':id')
    Delete(
        @Param("id",new ParseIntPipe({errorHttpStatusCode:HttpStatus.NOT_ACCEPTABLE})) id:number
    ) :Promise<void>{
       return this.songsServices.remove(id)
    }
}
