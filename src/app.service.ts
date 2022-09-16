import {HttpException, HttpStatus, Injectable} from '@nestjs/common';
import {HttpService} from "@nestjs/axios";
import {GetDto} from "./dto/get.dto";
import {PostDto} from "./dto/post.dto";

@Injectable()
export class AppService {
	constructor(private readonly httpService: HttpService) {
	}


	async get(dto: GetDto) {
		try {
			const response = await this.httpService.axiosRef.get(
				dto.url,
				{...dto.config}
			)
			return {
				...response.data,
				...response.headers,
			}
		} catch (error) {
			console.error(error)
			throw new HttpException(error.message, error.status | HttpStatus.BAD_REQUEST)
		}
	}

	async post(dto: PostDto) {
		try {
			const response = await this.httpService.axiosRef.post(
				dto.url,
				{...dto.data},
				{...dto.config}
			)
			return {
				...response.data,
				...response.headers,
			}
		} catch (error) {
			throw new HttpException(error.message, error.status | HttpStatus.BAD_REQUEST)
		}
	}
}
