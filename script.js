
async function fetchData() {
   
const url = 'https://concerts-artists-events-tracker.p.rapidapi.com/venue/past?name=Hollywood%20bowl&minDate=2022-01-25&maxDate=2023-01-30&page=1';
const options = {
	method: 'GET',
	headers: {
		'content-type': 'application/octet-stream',
		'X-RapidAPI-Key': 'test',
		'X-RapidAPI-Host': 'test'
	}
};

try {
	const response = await fetch(url, options);
	const result = await response.text();
	console.log(result);
} catch (error) {
	console.error(error);
}
    document.getElementById("concerts").innerHTML = result.data.map(item => `<li>${item.name}</li>`).join('');
}
fetchData(); 