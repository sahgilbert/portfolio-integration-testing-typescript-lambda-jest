import { PhoneNumberType } from '../enums/PhoneNumberType';
const UK_Phone_Number_Regex = /^(\+44\s?\d{10}|0044\s?\d{10}|0\s?\d{10})?$/;
const UK_Mobile_Phone_Number_Regex = /^((0|\+44)7\d{3}\s?\d{6})$/;
const _ukPhoneNumberRegExp = new RegExp(UK_Phone_Number_Regex);
const _ukMobilePhoneNumberRegExp = new RegExp(UK_Mobile_Phone_Number_Regex);

export class PhoneNumberService {
    public static determinePhoneNumberType(phoneNumber: string): PhoneNumberType {
        const phoneNumberIsValid = this.isValid(phoneNumber);

        if (phoneNumberIsValid) {
            if (this.isUKMobilePhoneNumber(phoneNumber))
                return PhoneNumberType.UK_MOBILE_PHONE_NUMBER;
            else
                return PhoneNumberType.UK_LANDLINE_PHONE_NUMBER;
        }

        return PhoneNumberType.INVALID_PHONE_NUMBER;
    }

    public static isUKMobilePhoneNumber(phoneNumber: string): boolean {
        const isUKMobilePhoneNumber = _ukMobilePhoneNumberRegExp.test(phoneNumber);

        return isUKMobilePhoneNumber;
    }

    public static isValid(phoneNumber: string): boolean {
        const isValidUKPhoneNumber = _ukPhoneNumberRegExp.test(phoneNumber);

        return isValidUKPhoneNumber;
    }
}
