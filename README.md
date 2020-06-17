## RealTime Covid19 MG :mask:

A serverless application to save and store covid19 data from Minas Gerais. :open_mouth:

Warning: This project is not completed, yet!


### How it works

![architecture](https://raw.githubusercontent.com/lesimoes/RealTimeCovidMG/master/AWS%20Project.png)

### Tools:

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
[x] Get covid19 data (Scheduler)
</br>
[x] Save on S3 Bucket
</br>
[x] Trigger Lambda when a csv file was created
</br>
[x] Send each line as a message to SQS
</br>
[ ] Trigger and scale a lambda for each message and save on DynamoDb
[ ] Provides Dynamo data as an API (Lambda) 

### How to intstall and run with docker :whale: + nodemon :grin:

Build and run (first time) </br>`docker-compose up --b`

Run </br>`docker-compose up`

### How to intstall and run local :computer:

Install</br>`npm install`

and run</br>`npm run invoke-local`



Made with :heart: and :coffee: by **lesimoes**.
