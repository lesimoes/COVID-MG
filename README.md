## COVID-MG :mask:

![Node.js CI](https://github.com/lesimoes/RealTimeCovidMG/workflows/Node.js%20CI/badge.svg?branch=master)

A serverless application to store COVID19 data from Minas Gerais in DynamoDB. :open_mouth:

**Warning**: This project is not completed, yet! Checkout the checklist. 


### How it works

![architecture](https://raw.githubusercontent.com/lesimoes/RealTimeCovidMG/master/AWS%20Project.png)

### Tooling:

:whale: Docker
</br>
:cloud: AWS Lambda
</br>
:floppy_disk: AWS S3
</br>
:arrow_forward: AWS SQS
</br>
:fireworks: Serverless Framework


and some: Enums, Factories and DIs :sunglasses:

### Checklist
[x] Get covid19 data (lambda: Scheduler)
</br>
[x] Stores data on S3 Bucket (lambda: Scheduler)
</br>
[x] Triggers Lambda when a csv file was created
</br>
[x] Sends each line as a message to SQS (lambda: S3Listener)
</br>
[x] Triggers a lambda to get messages and store on DynamoDB (lambda: SQSListener)
</br>
[ ] Provides data as an API

### How to intstall and run with docker :whale: + nodemon :grin:

Build and run (first time) </br>`docker-compose up --b`

Run </br>`docker-compose up`

### How to intstall and run local :computer:

Install</br>`npm install`

and run</br>`npm run invoke-local`


### How to deploy on AWS :cloud:

Install</br>`npm install`

and just run</br>`npm run deploy:prod`</br>

then run</br>`npm run invoke:scheduler-prod`

To activate automatic scheduler change 'autostart' property in serverless.yml



Made with :heart: and :coffee: by **lesimoes**.
