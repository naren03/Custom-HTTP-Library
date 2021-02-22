class easyHTTP {
	//GET Request
	get(url) {
		return new Promise((resolve, reject) => {
			fetch(url)
				.then((res) => res.json())
				.then((data) => resolve(data))
				.catch((err) => reject(err));
		});
	}

	//POST Request
	post(url, user) {
		return new Promise((resolve, reject) => {
			fetch(url, {
				method: 'POST',
				headers: {
					'Content-type': 'application/json',
				},
				body: JSON.stringify(user),
			})
				.then((res) => res.json())
				.then((data) => resolve(data))
				.catch((err) => reject(err));
		});
	}

	//PUT method
	put(url, user) {
		return new Promise((resolve, reject) => {
			fetch(url, {
				method: 'PUT',
				headers: {
					'Content-type': 'application/json',
				},
				body: JSON.stringify(user),
			})
				.then((res) => res.json())
				.then((data) => resolve(data))
				.catch((err) => reject(err));
		});
	}

	//DELETE method
	delete(url) {
		return new Promise((resolve, reject) => {
			fetch(url, {
				method: 'DELETE',
				headers: {
					'Content-type': 'application/json',
				},
			})
				.then((res) => res.json())
				.then((data) => resolve('User Deleted'))
				.catch((err) => reject(err));
		});
	}
}
