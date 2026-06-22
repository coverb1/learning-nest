import { Body, Controller, DefaultValuePipe, Delete, Get, HttpException, HttpStatus, Inject, Param, ParseEnumPipe, ParseIntPipe, Patch, Post, Put, Query } from '@nestjs/common';
import { SongsService } from './songs.service';
import { createSongsDTO } from './dto/create-song-dto';
import { Songs } from './song.entity';
import { UpdateResult } from 'typeorm';
import { UpdateSOngDto } from './dto/update-songDto';
import { error } from 'node:console';
import { Pagination } from 'nestjs-typeorm-paginate';
import { ApiTags } from '@nestjs/swagger';


@Controller('songs')
@ApiTags('songs')
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
        @Param('id', new ParseIntPipe({ errorHttpStatusCode: HttpStatus.NOT_ACCEPTABLE }),) id: number
    ): Promise<Songs | null> {
        return this.songsServices.findOne(id)
    }

    @Patch(":id")
    async update(
        @Param("id", ParseIntPipe) id: number, @Body() recordUpdate: UpdateSOngDto,
    ) {
        const result = await this.songsServices.update(id, recordUpdate)

        if (!result) {
            throw new HttpException('Songs not found', HttpStatus.NOT_FOUND)
        }
        return {
            message: "Song updated successfully",
            data: result
        }
    }

    @Delete(':id')
    Delete(
        @Param("id", new ParseIntPipe({ errorHttpStatusCode: HttpStatus.NOT_ACCEPTABLE })) id: number
    ): Promise<void> {
        return this.songsServices.remove(id)
    }
@Get()

findAll(
    @Query('page',new DefaultValuePipe(1),ParseIntPipe)
    page=1,
    @Query('limit',new DefaultValuePipe(10),ParseIntPipe)
    limit:number=10
):Promise<Pagination<Songs>>{
    limit=limit>100?100:limit;
    return this.songsServices.paginate({
        page,
        limit
    })
}


}
