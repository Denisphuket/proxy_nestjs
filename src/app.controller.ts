import {Body, Controller, Get, Headers, Post, Query} from '@nestjs/common';
import {AppService} from './app.service';

@Controller()
export class AppController {
	constructor(private readonly appService: AppService) {
	}

	@Post()
	postNew(
		@Headers() headers: any,
		@Query('url') url: string,
		@Body() dto: any,
	) {
		return this.appService.post(headers, url, dto);
	}


	@Get()
	getNew(
		@Headers() headers: any,
		@Query('url') url: string,
	) {
		return this.appService.get(headers, url);
	}

}
