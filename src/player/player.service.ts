import { Injectable } from '@nestjs/common';
import { Player } from "./player.entity";
import { getRepository } from "typeorm";

@Injectable()
export class PlayerService {



  async createPlayer(playerLogin: string, playerPassword: string) {
    const player = new Player();
    player.playerLogin = playerLogin;
    player.playerPassword = playerPassword;

    await getRepository(Player).insert(player);
  }
}
