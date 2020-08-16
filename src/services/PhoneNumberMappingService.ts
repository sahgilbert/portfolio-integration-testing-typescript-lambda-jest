import { APIGatewayProxyEvent } from 'aws-lambda';
import { PhoneNumberRequest } from '../models/PhoneNumberRequest';

export class PhoneNumberMappingService {
    public static map(requestBody: any): PhoneNumberRequest {
        return new PhoneNumberRequest(
            this.parsePhoneNumber(requestBody),
        );
    }

    private static parsePhoneNumber(requestBody: any): string {
        const phoneNumber = requestBody.phoneNumber;

        return phoneNumber;
    }
}