import { PhoneNumberType } from '../enums/PhoneNumberType';

export class PhoneNumberResult {
    phoneNumber?: string;
    phoneNumberType?: PhoneNumberType;
    
    constructor(phoneNumber?: string, phoneNumberType?: PhoneNumberType)
    {
        if(phoneNumber){
            this.phoneNumber = phoneNumber;
        }
    
        if(phoneNumberType){
            this.phoneNumberType = phoneNumberType;
        }
    }
}