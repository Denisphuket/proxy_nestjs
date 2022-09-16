import {HttpException, HttpStatus, Injectable} from '@nestjs/common';
import {HttpService} from "@nestjs/axios";

@Injectable()
export class AppService {
	constructor(private readonly httpService: HttpService) {
	}


	async get(headers, url) {
		delete headers['accept-encoding']
		delete headers['host']
		try {
			const response = await this.httpService.axiosRef.get(
				url,
				{
					headers: {...headers}
				}
			)
			return {
				...response.data,
				responseHeaders: response.headers,
			}
		} catch (error) {
			throw new HttpException(error.message, error.status | HttpStatus.BAD_REQUEST)
		}
	}

	async post(headers, url, dto) {
		delete headers['accept']
		delete headers['host']
		delete headers['accept-encoding']
		delete headers['content-length']
		try {
			const response = await this.httpService.axiosRef.post(
				url,
				{...dto},
				{
					headers: {...headers}
				}
			)
			return {
				...response.data,
				responseHeaders: response.headers,
			}
		} catch (error) {
			throw new HttpException(error.message, error.status | HttpStatus.BAD_REQUEST)
		}
	}

}
