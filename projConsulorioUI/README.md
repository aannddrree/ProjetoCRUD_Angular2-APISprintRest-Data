# ProjUiConsultorio

## Description

Projeto Consultório 

## Version

0.0.1 

## Generation
  
**Angular 2 CRUD**

This code is generated using a cli ***(yo angular2-crud)*** with a reference to a file  **dataModel.json** in the root of your project.

The code generated is a complete dashboard to handle (CRUD) the models defined into the **dataModel.json**

### Models

 ```
 {
  "Doctor": {
    "id": {
      "key": "true"
    },
    "name": {
      "type": "string",
      "require": "true"
    },
    "address": "string",
    "available": "boolean"
  },
  "Patient": {
    "id": {
      "key": "true"
    },
    "name": {
      "type": "string",
      "require": "true"
    },
    "address": "string",
    "age": "number",
    "history": {
      "type": "string",
      "textArea": "true"
    },
    "doctorId": {
      "referent": "Doctors",
      "render": "name"
    }
  },
  "relativeURI": "/api"
} 
 ```
 
The folder structure generated, how interact with the server and how keep the states in the client is based in the [angular 2 fundamentals course](http://courses.angularclass.com/courses/angular-2-fundamentals)


## Usage

```
npm start
```
http://0.0.0.0:3000

