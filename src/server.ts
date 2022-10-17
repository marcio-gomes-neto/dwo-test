import { IServerConfiguration } from './interfaces/configuration/IServerConfiguration';
import { Request, Server } from 'hapi';

import * as FizzBuzz from './api/controllers/fizzBuzz';

export class FizzBuzzServer {
    constructor (private configs: IServerConfiguration) {}

    private registerRoutes(server: Server, config: IServerConfiguration){
        FizzBuzz.startRoute(server, config);
        console.log('Routes registered.');
    }

    private registerExtensions(server: Server){
        server.events.on('request', (request: Request) => {
          const remoteAddress = request.info.remoteAddress;
          const method = request.method.toUpperCase();
          const path = request.path;
          
          console.log(`${remoteAddress} // ${method} ${path}`);
        });
    }

    async init(): Promise<Server> {
        const server = new Server({
            debug: { request: ['error'] },
            port: this.configs.server.port,
            routes: {
                cors: {
                    origin: ['*'],
                },
                validate: {
                    failAction: async (request, h , err) => {
                        if (err){
                            if(err['isJoi']) throw err;
                        }
                    }
                }
            }
        });

        server.realm.modifiers.route.prefix = '/api';

        this.registerRoutes(server, this.configs);
        this.registerExtensions(server);

        return server;
    }
}