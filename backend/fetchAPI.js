const url = 'https://dietagram.p.rapidapi.com/apiFood.php?name=Jab%C5%82ko&lang=pl';
const options = {
	method: 'GET',
	headers: {
		'x-rapidapi-key': '0e86196495msh8ee08517b899577p1093fajsnbf3eae91bef4',
		'x-rapidapi-host': 'dietagram.p.rapidapi.com'
	}
};

try {
	const response = await fetch(url, options);
	const result = await response.text();
	console.log(result);
} catch (error) {
	console.error(error);
}
