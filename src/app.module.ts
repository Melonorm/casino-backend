import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { TypeOrmModule } from "@nestjs/typeorm";
import { Player } from "./player/player.entity";
import { PlayerModule } from './player/player.module';
import { AddictModule } from './addict/addict.module';
import { Addict } from "./addict/addict.entity";

@Module({
  imports: [TypeOrmModule.forRoot({
    type: 'mysql',
    host: '134.249.157.65',
    port: 3306,
    username: 'admin',
    password: 'postgres',
    database: 'top',
    entities: [Addict],
    // entities: ['/../**/*.entity_db{.ts,.js}'],

    synchronize: true
  }), PlayerModule, AddictModule,],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
