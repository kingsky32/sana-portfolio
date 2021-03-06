import { DatabaseType } from 'typeorm';
import { Module } from '@nestjs/common';
import { TypeOrmModule, TypeOrmModuleAsyncOptions } from '@nestjs/typeorm';
import { PostgresConfigModule } from '#config/database/postgres/config.module';
import { PostgresConfigService } from '#config/database/postgres/config.service';
@Module({
  imports: [
    TypeOrmModule.forRootAsync({
      imports: [PostgresConfigModule],
      useFactory: async (postgresConfigService: PostgresConfigService) => {
        return {
          type: 'postgres' as DatabaseType,
          host: postgresConfigService.host,
          port: postgresConfigService.port,
          username: postgresConfigService.username,
          password: postgresConfigService.password,
          database: postgresConfigService.database,
          entities: [__dirname + '../../../../**/*.entity{.ts,.js}'],
          synchronize: true,
        };
      },
      inject: [PostgresConfigService],
    } as TypeOrmModuleAsyncOptions),
  ],
})
export class PostgreDatabaseProviderModule {}
