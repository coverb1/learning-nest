
import { Controller, MiddlewareConsumer, Module, NestModule, RequestMethod } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { SongsModule } from './songs/songs.module';
import { LoggerMiddleware } from './common/middleware/logger.middleware';

import { DevconfigServices } from './common/providers/DevconfigService';
import { TypeOrmModule } from '@nestjs/typeorm';

import { ConfigModule } from '@nestjs/config';
import { Songs } from './songs/song.entity';
import { Playlist } from './playlist/playlist.entity';
import { Artist } from './artitsts/artitits.entity';
import { User } from './User/user.entity';
import { PlaylistModule } from './playlist/playlist.module';
import { userModule } from './User/user.module';
import { AuthModule } from './auth/auth.module';
// import { ArtistsModule } from './artists/artists.module';
import { ArtitstsModule } from './artitsts/artitsts.module';
import dataSource, { datasourceOptions } from './db/data-source';
import { SeedsModule } from './seeds/seeds.module';
import configuration from './config/configuration';
@Module({
  imports: [
    TypeOrmModule.forRoot(datasourceOptions),
    SongsModule,
    PlaylistModule,
    userModule,
    AuthModule,
    // ArtistsModule,
    ArtitstsModule,
    SeedsModule,
    ConfigModule.forRoot({
      envFilePath:['.env.development','.env.production'],
      isGlobal:true,
      load:[configuration]
    })
   
  ],
  controllers: [AppController],
  providers: [AppService, DevconfigServices]
})


export class AppModule implements NestModule {
  configure(consumer: MiddlewareConsumer) {
    // consumer.apply(LoggerMiddleware).forRoutes('songs') //optionn1
    // consumer.apply(LoggerMiddleware).forRoutes({path:'songs', method:RequestMethod.POST}) //Option2
  }
}
