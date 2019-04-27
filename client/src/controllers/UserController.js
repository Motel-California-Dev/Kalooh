import axios from "../../config/axios";

export async function login({ username, password, token }) {
  const credentials = { userName: username, password, token };
  try {
    const { data } = await axios.post("auth/login", credentials);
    return data;
  } catch (err) {
    console.log(`Error: ${JSON.stringify(err)}`);
  }
}

export async function updatePassword({ password }) {
  const userInfo = { password };
  try {
    const result = axios.patch(`users/${userInfo.id}`, userInfo);
    return result;
  } catch (err) {
    console.log(`Error when changing password: ${JSON.stringify(err)}`);
  }
}

export async function updateUsername({ username }) {
  const userInfo = { userName: username };
  try {
    const result = axios.patch(`users/${userInfo.id}`, userInfo);
    return result;
  } catch (err) {
    console.log(`Error when updating username: ${JSON.stringify(err)}`);
  }
}

export async function loginMock(credentials) {
  let { username, password, token } = credentials;

  let query =
    username && password
      ? `username=${username}&${password}`
      : `token=${token}`;

  return await axios
    //Change to your own IP Address
    .get(`users?${query}`)
    .then(res => {
      // console.log("///////////GOOD LOGIN///////////");
      // console.log(JSON.stringify(res, null, 2));
      // console.log("//////////////////////");

      if (res.data.length != 0) {
        console.log("successful login!");
        console.log(JSON.stringify(res.data[0], null, 2));
        return res.data[0];
      } else {
        console.log("hmmmmm. could not find user");
        return undefined;
      }
    })
    .catch(err => {
      console.log("\\\\\\\\\\BAD LOGIN\\\\\\\\\\\\");
      console.log(JSON.stringify(err));
      console.log("\\\\\\\\\\\\\\\\\\\\\\");
    });
}
