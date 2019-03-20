const fs = require('fs');
const jsf = require('json-schema-faker');

jsf.extend('faker', function() {
  const faker = require('faker');
  faker.locale = "en";

  return faker;
});

jsf.option({
  resolveJsonPath: true,
  alwaysFakeOptionals: true,
});

const schema = {
  "type": "object",
  "properties": {
    "users": {
      "type": "array",
      "minItems": 10,
      "maxItems": 50,
      "items": {
        "type": "object",
        "properties": {
          "id": {
            "type": "integer",
            "unique": true,
            "minimum": 1,
            "initialOffset": 1,
            "autoIncrement": true
          },
          "username": {
            "type": "string",
            "unique": true,
            "faker": {
              "internet.userName": ["#{firstName}", "#{lastName}"]
            }
          },
          "firstName": {
            "type": "string",
            "faker": "name.firstName"
          },
          "lastName": {
            "type": "string",
            "faker": "name.lastName"
          },
          "email": {
            "type": "string",
            "faker": { "internet.email": ["#{firstName}", "#{lastName}", "gmail.com"] }
          },
          "password": {
            "type": "string",
            "faker": "internet.password"
          }
        },
        "required": [
          "id",
          "firstName",
          "lastName",
          "email",
          "username",
          "password"
        ]
      }
    },
    "posts": {
      "type": "array",
      "minItems": 10,
      "maxItems": 100,
      "items": {
        "type": "object",
        "properties": {
          "id": {
            "type": "integer",
            "unique": true,
            "minimum": 1,
            "initialOffset": 1,
            "autoIncrement": true
          },
          "userId": {
            "jsonPath": `$..users[*].id` 
          },
          "created_at": {
            "type": "string",
            "faker": {
              "date.between": ['2017-01-01', '2019-03-09']
            }
          },
          "title": {
            "type": "string",
            "faker": "lorem.sentence"
          },
          "message": {
            "type": "string",
            "faker": "lorem.sentences"
          },
          "lati": {
            "type": "number",
            "faker": {
              "random.number": {
                "min": 33.763625, 
                "max": 33.802531,
                "precision": parseFloat((0.0).toPrecision(6) + '1')
              }
            }
          },
          "long": {
            "type": "number",
            "faker": {
              "random.number": {
                "min": -118.091649, 
                "max": -118.207846, 
                "precision": parseFloat((0.0).toPrecision(6) + '1') 
              }
            }
          }
        },
        "required": [
          "id",
          "userId",
          "created_at",
          "title",
          "message",
          "lati",
          "long"
        ]
      }
    },
    "comments": {
      "type": "array",
      "minItems": 20,
      "maxItems": 100,
      "items": {
        "type": "object",
        "properties": {
          "id": {
            "type": "integer",
            "unique": true,
            "minimum": 1,
            "initialOffset": 1,
            "autoIncrement": true
          },
          "post": {
            "jsonPath": "$..posts[*].id"
          },
          "user": {
            "jsonPath": "$..users[*].id"
          },
          "created_at": {
            "type": "string",
            "faker": {
              "date.between": ['2017-01-01', '2019-03-09']
            }
          },
          "message": {
            "type": "string",
            "faker": "lorem.sentences"
          }
        },
        "required": [
          "id",
          "post",
          "user",
          "created_at",
          "message"
        ]
      }
    }
  },
  "required": [
    "users",
    "posts",
    "comments"
  ]
};

fs.writeFile("__mock__/db.json", JSON.stringify(jsf(schema)), err => {
  if (err) {
    console.log(`ERROR generating JSON: ${err}`);
  } else {
    console.log('Mock data successfully generated.');
  }
});

