const axios = require("axios");

export function login(credentials) {
  let { username, password } = credentials;
  console.log(username);
  console.log(password);
  axios
    //Change to your own IP Address
    .get(`http://134.139.210.64:3000/users`)
    .then(res => {
      console.log("//////////////////////");
      console.log(JSON.stringify(res));
      console.log("//////////////////////");
    })
    .catch(err => {
      console.log("\\\\\\\\\\\\\\\\\\\\\\");
      console.log(JSON.stringify(err));
      console.log("\\\\\\\\\\\\\\\\\\\\\\");
    });
}
