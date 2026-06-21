import { DataSource, DataSourceOptions } from "typeorm";
import { User } from "src/User/user.entity";
import { Songs } from "src/songs/song.entity";
import { Artist } from "src/artitsts/artitits.entity";
import { Playlist } from "src/playlist/playlist.entity";

export const datasourceOptions: DataSourceOptions = {
    type: 'postgres',
    host: 'localhost',
    port: 5432,
    username: 'postgres',
    password: 'kabanyana123cecile.',
    database: 'spotifyClone',

    entities: [User, Songs, Artist, Playlist], // ✅ use classes, not file paths

    synchronize: false,

    migrations: [
        'dist/db/migrations/*.js'
    ]
};

const dataSource = new DataSource(datasourceOptions);
export default dataSource;