import * as dotenv from 'dotenv' 
import { IServerConfiguration } from "../interfaces/configuration/IServerConfiguration";
dotenv.config();

export class ServerConfiguration implements IServerConfiguration {
    server = {
        port: process.env.PORT ? parseInt(process.env.PORT) : 5000,
        baseURL: process.env.API_URL
    };
}