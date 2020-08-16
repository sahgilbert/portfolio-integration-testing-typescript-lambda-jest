const url = 'http://localhost:3000';
const request = require('supertest')(url);

describe('/determine-phone-number-type UK_MOBILE_PHONE_NUMBER', () => {
  it('Should return UK_MOBILE_PHONE_NUMBER', () => {

    const phoneNumberRequest = {
        "phoneNumber": "+447890123456"
    };

    return request
      .post('/determine-phone-number-type')
      .send(phoneNumberRequest)
      .expect(200)
      .then((response) => {
        expect(response).toBeDefined();
        expect(response.body).toHaveProperty('phoneNumber', '+447890123456');
        expect(response.body).toHaveProperty('phoneNumberType', 'UK_MOBILE_PHONE_NUMBER');
      });
  });
});

describe('/determine-phone-number-type UK_LANDLINE_PHONE_NUMBER', () => {
    it('Should return UK_LANDLINE_PHONE_NUMBER', () => {
  
      const phoneNumberRequest = {
          "phoneNumber": "01617891234"
      };
  
      return request
        .post('/determine-phone-number-type')
        .send(phoneNumberRequest)
        .expect(200)
        .then((response) => {
          expect(response).toBeDefined();
          expect(response.body).toHaveProperty('phoneNumber', '01617891234');
          expect(response.body).toHaveProperty('phoneNumberType', 'UK_LANDLINE_PHONE_NUMBER');
        });
    });
  });

  describe('/determine-phone-number-type INVALID_PHONE_NUMBER', () => {
    it('Should return INVALID_PHONE_NUMBER', () => {
  
      const phoneNumberRequest = {
          "phoneNumber": "01234567891234567"
      };
  
      return request
        .post('/determine-phone-number-type')
        .send(phoneNumberRequest)
        .expect(200)
        .then((response) => {
          expect(response).toBeDefined();
          expect(response.body).toHaveProperty('phoneNumber', '01234567891234567');
          expect(response.body).toHaveProperty('phoneNumberType', 'INVALID_PHONE_NUMBER');
        });
    });
  });

  describe('/determine-phone-number-type HTTP 400 Bad Request', () => {
    it('Should return HTTP 400 Bad Request', () => {
  
      const phoneNumberRequest = null;
  
      return request
        .post('/determine-phone-number-type')
        .send(phoneNumberRequest)
        .expect(400);
    });
  });