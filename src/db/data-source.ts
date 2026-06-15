import { DataSource, DataSourceOptions } from "typeorm";

export const datasourceOptions: DataSourceOptions = {
    type: 'postgres',
    host: 'localhost',
    port: 5432,
    username: 'postgres',
    password: 'kabanyana123cecile.',
    database: 'spotifyClone',

    entities: [
        'dist/**/*.entity.js'
    ],

    synchronize: false,

    migrations: [
        'dist/db/migrations/*.js'
    ]
};

const dataSource = new DataSource(datasourceOptions);
export default dataSource;