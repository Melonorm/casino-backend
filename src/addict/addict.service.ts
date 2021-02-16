import { Injectable } from '@nestjs/common';
import { Addict } from "./addict.entity";
import { getRepository, Repository } from "typeorm";

@Injectable()
export class AddictService {

  async create(login: string, password: string) {
    const addict = new Addict();
    addict.addictLogin = login;
    addict.addictPassword = password;

    await getRepository(Addict).insert(addict);
  }
}
