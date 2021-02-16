import { Module } from '@nestjs/common';
import { AddictService } from './addict.service';
import { AddictController } from './addict.controller';
import { TypeOrmModule } from "@nestjs/typeorm";
import { Addict } from "./addict.entity";

@Module({
  imports: [TypeOrmModule.forFeature([Addict])],
  providers: [AddictService],
  controllers: [AddictController]
})
export class AddictModule {}
