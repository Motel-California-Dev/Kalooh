const axios = require('axios');
const ip = require('ip');

export function login(credentials) {
	// credentials = { username, password }
	axios.get(`http://${SERVER_IP}:3000/user`)
		.then(res => {
			console.log(res);
		})
		.catch(err => {
			console.log(err);
		});

}
