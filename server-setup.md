# Setup

Before you clone the repo, make sure you have the following installed:
* Node >= 10.15.0
* Docker
* Curl or Postman (anything that can make network calls, Curl will be documented here)

Clone the repo using the command `git clone http://github.com/Motel-California-Dev/test-repo.git`

Then, `cd` into the `server` folder and run `npm i`.

Do the same for the `client` folder. `cd client && npm i`.

To run the program, open 3 terminals, one in the `server` folder, another in the `db` folder, and another anywhere.


In `db`, run `docker-compose up`.

In `server`, run `node server.js`.

Then, in the last terminal, once both of the other terminals show that they are running, run the following command: `curl -X POST localhost:3000/user`.

This will create the `User` table and add a predefined user to it for now.

Then, you can also try `curl localhost:3000/`, which should return a list of the users, which in this case will just be `{id: 1, name: "bob"}`.

`curl` will give a network call to the declared location, and will return some data.

