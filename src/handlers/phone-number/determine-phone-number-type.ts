import { Context, APIGatewayProxyEvent } from 'aws-lambda';
import { ValidationService } from '../../services/ValidationService';
import { PhoneNumberMappingService } from '../../services/PhoneNumberMappingService';
import { PhoneNumberService } from '../../services/PhoneNumberService';
import { PhoneNumberResult } from '../../models/PhoneNumberResult';
import { HttpResponse } from '../../models/HttpResponse';
import { HttpStatusCode } from '../../enums/HttpStatusCode';

module.exports.handler = async (apiGatewayProxyEvent: APIGatewayProxyEvent, context: Context): Promise<HttpResponse> => {
    const requestBody = ValidationService.validateAndParseRequestBody(apiGatewayProxyEvent);

    if (requestBody) {
        const phoneNumberRequest = PhoneNumberMappingService.map(requestBody);
        
        const phoneNumberType = PhoneNumberService.determinePhoneNumberType(phoneNumberRequest.phoneNumber);

        const phoneNumberResult = new PhoneNumberResult(
            phoneNumberRequest.phoneNumber,
            phoneNumberType);

        return new HttpResponse(HttpStatusCode.OK, phoneNumberResult);
    }

    return new HttpResponse(HttpStatusCode.BAD_REQUEST);
};