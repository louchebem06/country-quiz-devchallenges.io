function getValues() {
	const url = "https://restcountries.com/v3.1/all";
	return (
		fetch(url)
			.then(async (response) => {
				const values = await response.json();
				return ({values});
			})
	);
}

export async function load() {
	return (getValues());
}
