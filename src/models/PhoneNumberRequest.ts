export class PhoneNumberRequest {
    phoneNumber: string;
    
    constructor(phoneNumber?: string)
    {
        if(phoneNumber){
            this.phoneNumber = phoneNumber;
        }
    }
}