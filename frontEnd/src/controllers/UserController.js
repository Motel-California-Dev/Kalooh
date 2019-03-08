const axios = require('axios');

export function login(credentials) {
	// credentials = { username, password }
	axios.get("http://localhost:3000/user")
		.then(res => {
			console.log(res);
		})
		.catch(err => {
			console.log(err);
		});

}
