import Boom from 'boom';
import * as Hapi from 'hapi';
import { INumbers } from '../../../interfaces/configuration/database/INumbers';

import { IServerConfiguration } from '../../../interfaces/configuration/IServerConfiguration';
import { FizzBuzzService } from '../../services/FizzBuzzService';

export class FizzBuzzController {
    private fizzBuzzService = new FizzBuzzService();
    constructor(private config:IServerConfiguration){}

    async getFizzBuzz(request: Hapi.Request, h: Hapi.ResponseToolkit){
        try {
            const numbers: INumbers = await this.fizzBuzzService.getNumbers();
            const response = {
                success: true,
                numbers: []   
            };
            numbers.nums.forEach(element => {
                if(element%3 === 0 && element%5 === 0) response.numbers.push(element);
            });
            return h.response(response).code(200);
        } catch (error) {
            console.log(error);
            return Boom.internal('Unexpected Error');   
        }
    }

    async getFizz(request: Hapi.Request, h: Hapi.ResponseToolkit){
        try {
            const numbers: INumbers = await this.fizzBuzzService.getNumbers();
            const response = {
                success: true,
                numbers: []   
            };
            numbers.nums.forEach(element => {
                if(element%3 === 0) response.numbers.push(element);
            });
            return h.response(response).code(200);
        } catch (error) {
            console.log(error);
            return Boom.internal('Unexpected Error');   
        }
    }

    async getBuzz(request: Hapi.Request, h: Hapi.ResponseToolkit){
        try {
            const numbers: INumbers = await this.fizzBuzzService.getNumbers();
            const response = {
                success: true,
                numbers: []   
            };
            numbers.nums.forEach(element => {
                if(element%5 === 0) response.numbers.push(element);
            });
            return h.response(response).code(200);
        } catch (error) {
            console.log(error);
            return Boom.internal('Unexpected Error');   
        }
    }
    async getOther(request: Hapi.Request, h: Hapi.ResponseToolkit){
        try {
            const numbers: INumbers = await this.fizzBuzzService.getNumbers();
            const response = {
                success: true,
                numbers: []   
            };
            numbers.nums.forEach(element => {
                if(!(element%3 === 0) && !(element%5 === 0)) response.numbers.push(element);
            });
            return h.response(response).code(200);
        } catch (error) {
            console.log(error);
            return Boom.internal('Unexpected Error');   
        }
    }
}