import { PhoneNumberResult } from './PhoneNumberResult';

export class HttpResponse {
    statusCode: number;
    body?: string;

    constructor(statusCode: number, phoneNumberResult?: PhoneNumberResult) {
        this.statusCode = statusCode
        this.body = this.convertBodyToString(phoneNumberResult);
    }

    private convertBodyToString(phoneNumberResult?: PhoneNumberResult) {
        const result = JSON.stringify(phoneNumberResult, null, 2);

        console.log(result);

        return result;
    }
}