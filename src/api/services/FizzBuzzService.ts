import * as nums from '../../database/nums.json';

export class FizzBuzzService{
    async getNumbers(){
        const numbers = nums;
        return numbers;
    }
}