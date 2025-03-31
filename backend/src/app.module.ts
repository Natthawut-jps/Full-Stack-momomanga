import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { SourceModule } from './source/source.module';
import { GenresModule } from './genres/genres.module';
import { SeriesModule } from './series/series.module';

@Module({
  imports: [
    TypeOrmModule.forRoot({
      type: 'mysql',
      host: 'localhost',
      port: 3306,
      username: 'root',
      password: 'root',
      database: 'test',
      entities: ['dist/**/*.entity{.ts,.js}'],
      autoLoadEntities: true,
      synchronize: true,
    }),
    SourceModule,
    GenresModule,
    SeriesModule
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
