module.exports = {
  type: 'postgres',
  host: process.env.DB_HOST,
  port: process.env.DB_PORT,
  username: process.env.DB_USER,
  password: process.env.DB_PASS,
  database: process.env.DB_DATABASE,
  entities:
    process.env.ENVIRONMENT === 'production'
      ? ['dist/modules/**/infra/typeorm/entities/*.js']
      : ['src/modules/**/infra/typeorm/entities/*.ts'],
  migrations: ['src/infra/typeorm/database/migrations/*.ts'],
  cli: {
    migrationsDir: 'src/infra/typeorm/database/migrations/,',
  },
};
