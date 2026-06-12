
import { Controller, MiddlewareConsumer, Module, NestModule, RequestMethod } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { SongsModule } from './songs/songs.module';
import { LoggerMiddleware } from './common/middleware/logger.middleware';
import { DevconfigServices } from './common/providers/DevconfigService';
import { TypeOrmModule } from '@nestjs/typeorm';


import { Songs } from './songs/song.entity';
import { Playlist } from './playlist/playlist.entity';
import { Artist } from './artitsts/artitits.entity';
import { User } from './User/user.entity';
import { PlaylistModule } from './playlist/playlist.module';
import { userModule } from './User/user.module';
import { AuthModule } from './auth/auth.module';

@Module({
  imports: [
    TypeOrmModule.forRoot({
      type: 'postgres',
      database: 'spotifyClone',
      host: 'localhost',
      port: 5432,
      username: 'postgres',
      password: 'kabanyana123cecile.',
      entities: [Songs, Playlist, Artist, User],
      synchronize: true
    }),
    SongsModule,
    PlaylistModule,
    userModule,
    AuthModule
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
