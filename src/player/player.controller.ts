import { Controller, Post } from "@nestjs/common";
import { PlayerService } from "./player.service";

@Controller('player')
export class PlayerController {
  constructor(private playerService: PlayerService) {
  }

  @Post('create')
  createPlayer(){
    this.playerService.createPlayer("test1", "123")
    return "Created player"
  }

}
