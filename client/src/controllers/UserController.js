import axios from '../../config/axios';

export function login(credentials) {
  let { username, password } = credentials;
  console.log(username);
  console.log(password);
  axios
    //Change to your own IP Address
    .get('users')
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
