import {Module} from '@nestjs/common';
import {AppController} from './app.controller';
import {AppService} from './app.service';
import {HttpModule} from "@nestjs/axios";
import {HttpsProxyAgent} from "https-proxy-agent";
import {ConfigModule} from "@nestjs/config";

@Module({
	imports: [
		ConfigModule.forRoot({
			envFilePath: `.${process.env.NODE_ENV}.env`
		}),
		HttpModule.registerAsync({
			useFactory: () => ({
				httpsAgent: new HttpsProxyAgent(`${process.env.HTTP_PROXY_TYPE}${process.env.HTTP_PROXY_LOGIN}:${process.env.HTTP_PROXY_PASSWORD}@${process.env.HTTP_PROXY_SERVER}:${process.env.HTTP_PROXY_PORT}`),
			})
		})
	],
	controllers: [AppController],
	providers: [AppService],
})
export class AppModule {
}
