import { expect } from 'chai';
import 'mocha';
import { HelloWorldService } from './HelloWorldService';

describe('Hello World string function', () => {

  it('should return Hello world!', () => {
    const result = HelloWorldService();

    const expectedResult = 'Hello world!';

    expect(result).to.equal(expectedResult);

  });

});