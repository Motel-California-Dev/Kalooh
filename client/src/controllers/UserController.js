import axios from "../../config/axios";

export async function signUp({
  username,
  firstName,
  lastName,
  email,
  password
}) {
  const credentials = {
    userName: username,
    firstName,
    lastName,
    email,
    password,
    token
  };
  try {
    const { data } = await axios.post("/users", credentials);
    return data;
  } catch (err) {
    console.log(`Error: ${JSON.stringify(err)}`);
  }
}

export async function login({ username, password, token }) {
  const credentials = { username, password, token };
  try {
    const { data } = await axios.post("auth/login", credentials);
    return data;
  } catch (err) {
    console.log(`Error: ${JSON.stringify(err)}`);
  }
}

export async function loginGoogle({ code, redirectUrl }) {
  console.log("Received code, trying to use it now...");
  console.log(code);
  console.log(redirectUrl);
  try {
    const data = await axios.get("auth/google/callback", {
      params: {
        code,
        redirectUrl
      }
    });
    console.log(data);

    return data;
  } catch (err) {
    console.log("ERROR");
    console.log(`Error: ${JSON.stringify(err)}`);
  }
}

export async function updatePassword({ id, password }) {
  const userInfo = { id, password };
  try {
    const result = await axios.patch(`users/${userInfo.id}`, userInfo);
    return { result };
  } catch (err) {
    console.log(`Error when changing password: ${JSON.stringify(err)}`);
  }
}

export async function updateUsername({ username }) {
  const userInfo = { userName: username };
  try {
    const { result } = await axios.patch(`users/${userInfo.id}`, userInfo);
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

export async function getFollowers(id) {
  try {
    const { data } = await axios.get(`users/${id}/followers`);
    return data;
  } catch (err) {
    console.log('Error in UserController.getFollowers');
    console.log(JSON.stringify(err));
  }
};

export async function addFollower(id, userId) {
  try {
    return await axios.post(`followers`, {
      follower: userId,
      leader: id
    });
  } catch (err) {
    console.log('Error in UserController.getFollowers');
    console.log(JSON.stringify(err));
  }
}

