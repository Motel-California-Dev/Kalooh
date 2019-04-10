//Test user
//"username": "Coy69",
//"password": "a8qw8nBxbdOeRDc",

import axios from '../../config/axios';

export async function login(credentials) {
  let { username, password, token } = credentials;

  let query = (username && password) ? 
    `username=${username}&${password}` :
    `token=${token}`;

  return await axios
    //Change to your own IP Address
    .get(`users?${query}`)
      .then(res => {
        // console.log("///////////GOOD LOGIN///////////");
        // console.log(JSON.stringify(res, null, 2));
        // console.log("//////////////////////");

        if(res.data.length != 0){
          console.log('successful login!');
          console.log(JSON.stringify(res.data[0], null, 2));
          return res.data[0];
        }
        else{
          console.log('hmmmmm. could not find user');
          return undefined;
        }
      })
      .catch(err => {
        console.log("\\\\\\\\\\BAD LOGIN\\\\\\\\\\\\");
        console.log(JSON.stringify(err));
        console.log("\\\\\\\\\\\\\\\\\\\\\\");
      });
}