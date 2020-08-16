import { APIGatewayProxyEvent } from 'aws-lambda';

export class ValidationService {
    public static validateAndParseRequestBody(apiGatewayProxyEvent: APIGatewayProxyEvent): any | null {
        if (apiGatewayProxyEvent !== null && apiGatewayProxyEvent.body !== null && apiGatewayProxyEvent.body !== undefined) {
            const requestBody: string = JSON.parse(apiGatewayProxyEvent.body);

            return requestBody;
        }

        return null;
    }
}