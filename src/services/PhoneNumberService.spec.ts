import { expect } from 'chai';
import 'mocha';
import { PhoneNumberService } from './PhoneNumberService';
import { PhoneNumberType } from '../enums/PhoneNumberType';

describe('PhoneNumberService.isValid_TRUE', () => {

    it('should return TRUE', () => {
        const expectedResult = true;

        const mobilePhoneNumbers = new Array<string>();
        mobilePhoneNumbers.push("+447890123456");
        mobilePhoneNumbers.push("07890123456");

        const landlinePhoneNumbers = new Array<string>();
        landlinePhoneNumbers.push("01222555555");
        landlinePhoneNumbers.push("01617891234");

        for (let phoneNumber of mobilePhoneNumbers) {
            const result = PhoneNumberService.isValid(phoneNumber);

            expect(result).equal(expectedResult);
        }

        for (let phoneNumber of landlinePhoneNumbers) {
            const result = PhoneNumberService.isValid(phoneNumber);

            expect(result).equal(expectedResult);
        }

    });

});

describe('PhoneNumberService.isValid_FALSE', () => {

    it('should return FALSE', () => {
        const expectedResult = false;

        const mobilePhoneNumbers = new Array<string>();
        mobilePhoneNumbers.push("4478901234560");
        mobilePhoneNumbers.push("078901234560");

        const landlinePhoneNumbers = new Array<string>();
        landlinePhoneNumbers.push("012225555559");
        landlinePhoneNumbers.push("016178912349");
        landlinePhoneNumbers.push("01234567");
        landlinePhoneNumbers.push("01234567891234567");

        for (let phoneNumber of mobilePhoneNumbers) {
            const result = PhoneNumberService.isValid(phoneNumber);

            expect(result).equal(expectedResult);
        }

        for (let phoneNumber of landlinePhoneNumbers) {
            const result = PhoneNumberService.isValid(phoneNumber);

            expect(result).equal(expectedResult);
        }

    });

});

describe('PhoneNumberService.determinePhoneNumberType_UK_MOBILE_PHONE_NUMBER', () => {

    it('should return UK_MOBILE_PHONE_NUMBER', () => {
        const expectedResult = PhoneNumberType.UK_MOBILE_PHONE_NUMBER;

        const phoneNumbers = new Array<string>();
        phoneNumbers.push("+447890123456");
        phoneNumbers.push("07890123456");

        for (let phoneNumber of phoneNumbers) {
            const result = PhoneNumberService.determinePhoneNumberType(phoneNumber);

            expect(result).equal(expectedResult);
        }

    });

});

describe('PhoneNumberService.determinePhoneNumberType_UK_LANDLINE_PHONE_NUMBER', () => {

    it('should return UK_LANDLINE_PHONE_NUMBER', () => {
        const expectedResult = PhoneNumberType.UK_LANDLINE_PHONE_NUMBER;

        const phoneNumbers = new Array<string>();
        phoneNumbers.push("01222555555");
        phoneNumbers.push("01617891234");

        for (let phoneNumber of phoneNumbers) {
            const result = PhoneNumberService.determinePhoneNumberType(phoneNumber);

            expect(result).equal(expectedResult);
        }

    });

});

describe('PhoneNumberService.determinePhoneNumberType_INVALID_PHONE_NUMBER', () => {

    it('should return INVALID_PHONE_NUMBER', () => {
        const expectedResult = PhoneNumberType.INVALID_PHONE_NUMBER;

        const phoneNumbers = new Array<string>();
        phoneNumbers.push("4478901234560");
        phoneNumbers.push("078901234560");
        phoneNumbers.push("012225555559");
        phoneNumbers.push("016178912349");
        phoneNumbers.push("01234567");
        phoneNumbers.push("01234567891234567");

        for (let phoneNumber of phoneNumbers) {
            const result = PhoneNumberService.determinePhoneNumberType(phoneNumber);

            expect(result).equal(expectedResult);
        }

    });

});