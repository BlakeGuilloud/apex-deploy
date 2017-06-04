## A proof of concept app I built to demonstrate serverless architecture.

### Stack:
#### Apex
- for deployments and project initialization.
- uses some sort of cloud formation template to generate a lambda function and corresponding role.

#### Lambda
- business logic of the application.
- single functions that listen for a trigger, and query the database.

#### DynamoDB
- NoSQL database hosted by AWS.
- accepts requests from specified lambda functions.

#### API Gateway
- exposes a collection of lambda functions in the shape of an API.
