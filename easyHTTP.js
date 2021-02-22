class easyHTTP {
	//GET Request
	async get(url) {
		const response = await fetch(url);

		const resData = await response.json();

		return resData;
	}

	//POST Request
	async post(url, user) {
		const response = await fetch(url, {
			method: 'POST',
			headers: {
				'Content-type': 'application/json',
			},
			body: JSON.stringify(user),
		});

		const resData = await response.json();

		return resData;
	}

	//PUT method
	async put(url, user) {
		const response = await fetch(url, {
			method: 'PUT',
			headers: {
				'Content-type': 'application/json',
			},
			body: JSON.stringify(user),
		});

		const resData = await response.json();

		return resData;
	}

	//DELETE method
	async delete(url) {
		const response = await fetch(url, {
			method: 'DELETE',
			headers: {
				'Content-type': 'application/json',
			},
		});

		const resData = await 'Resource Deleted';

		return resData;
	}
}
