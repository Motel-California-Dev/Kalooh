Feature: Create User
  Clients should be able to send a request to our API in order to create a new user in the database. Our API should also validate the structure of the request and respond with an error if it is invalid.

  Scenario: Minimal Valid User
    If a client sends a request to our API with a valid username, email, password, first_name, and last_name, it should receive a response with a 201 Created HTTP status code.

    When the user creates a POST request to /users
    And attaches a valid Create User payload
    And sends the request
    Then our API should respond with a 201 HTTP status code
    And the payload object should be added to the database
    And the user should be deleted from the database
      
