import { Body, Controller, Get, HttpStatus, Param, Post, Redirect } from "@nestjs/common";
import { AddictService } from "./addict.service";
import { Addict } from "./addict.entity";

@Controller('addict')
export class AddictController {
  constructor(private addictService: AddictService) {
  }

  @Post(':addictLogin')
  create(@Param('addictLogin') addictLogin: string, @Param('addictPassword') addictPassword: string) {
    this.addictService.create(addictLogin, addictPassword);
    return "addict created";
  }

  @Get('redirect')
  @Redirect('https://134.249.157.65:3666/checkHash', HttpStatus.OK)
  redirectTestDrive(): string {
    return " Test redirect......"
  }

  @Get('tests')
  gettest() {
    return "dssg"
  }
}
