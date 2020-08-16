# Integration Testing a Typescript Lambda API using Jest & Supertest

- Implementation coded by **Simon Gilbert**.
- An `AWS Serverless Lambda REST Api using Typescript with Integration Testing (Jest & Supertest)`.
- Designed to also run locally using `serverless offline`.

## Features
- Submit a phone number, and determine the phone number type.

## Frameworks, Packages & Platforms Used
- Integration Testing - Jest & Supertest
- Typescript
- AWS Serverless Lambda
- AWS API Gateway

---

## Run Integration Tests Locally

- Firstly, run the Serverless offline command, to run the API locally on your machine.

```
$ npm install
$ sls offline
```

- Then execute the integration test script.

```
$ npm run integration
```

## Read My Accompanying Blog
- https://www.simongilbert.net/integration-testing-typescript-lambda-api-jest-supertest/


### License
See the [LICENSE](LICENSE.md) file for license rights and limitations (MIT).