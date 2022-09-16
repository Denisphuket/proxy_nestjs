import {Body, Controller, Post} from '@nestjs/common';
import { AppService } from './app.service';
import {GetDto} from "./dto/get.dto";
import {PostDto} from "./dto/post.dto";

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Post('get')
  get(@Body() dto: GetDto){
    return this.appService.get(dto);
  }

  @Post('post')
  post(@Body() dto: PostDto){
    return this.appService.post(dto);
  }
}
