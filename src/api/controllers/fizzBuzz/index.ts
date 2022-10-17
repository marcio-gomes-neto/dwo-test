// import * as Joi from 'joi;'
import * as Hapi from 'hapi';

import { FizzBuzzController } from './fizzbuzz-controller';

import { IServerConfiguration } from '../../../interfaces/configuration/IServerConfiguration';


export function startRoute (server: Hapi.Server, configs: IServerConfiguration) {
    const fizzBuzzController = new FizzBuzzController(configs);
    server.bind(fizzBuzzController);

    server.route({
        method: "GET",
        path: `/fizz-buzz`,
        options:{
            handler: fizzBuzzController.getFizzBuzz,
            tags: ['api', 'fizzbuzz'],
            description: 'Route to get FizzBuzz',
            plugins: {
                'hapi-swagger': {
                    responses: {
                        '200': {
                            description: 'Success.'
                        },
                        '500': {
                            description: 'Unexpected error'
                        }
                    }
                }
            }
        }
    });
    server.route({
        method: "GET",
        path: `/fizz`,
        options:{
            handler: fizzBuzzController.getFizz,
            tags: ['api', 'fizzbuzz'],
            description: 'Route to get Fizz',
            plugins: {
                'hapi-swagger': {
                    responses: {
                        '200': {
                            description: 'Success.'
                        },
                        '500': {
                            description: 'Unexpected error'
                        }
                    }
                }
            }
        }
    });
    server.route({
        method: "GET",
        path: `/buzz`,
        options:{
            handler: fizzBuzzController.getBuzz,
            tags: ['api', 'fizzbuzz'],
            description: 'Route to get Buzz',
            plugins: {
                'hapi-swagger': {
                    responses: {
                        '200': {
                            description: 'Success.'
                        },
                        '500': {
                            description: 'Unexpected error'
                        }
                    }
                }
            }
        }
    });
    server.route({
        method: "GET",
        path: `/other`,
        options:{
            handler: fizzBuzzController.getOther,
            tags: ['api', 'fizzbuzz'],
            description: 'Route to get Other',
            plugins: {
                'hapi-swagger': {
                    responses: {
                        '200': {
                            description: 'Success.'
                        },
                        '500': {
                            description: 'Unexpected error'
                        }
                    }
                }
            }
        }
    });
}