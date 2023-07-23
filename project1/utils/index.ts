// const url = 'https://cars-by-api-ninjas.p.rapidapi.com/v1/cars?model=corolla';
// const options = {
// 	method: 'GET',
// 	headers: {
// 		'X-RapidAPI-Key': '9cff506b22msh1f500e4b70a85e5p1dede0jsn1cc859a71a1d',
// 		'X-RapidAPI-Host': 'cars-by-api-ninjas.p.rapidapi.com'
// 	}
// };

// try {
// 	const response = await fetch(url, options);
// 	const result = await response.text();
// 	console.log(result);
// } catch (error) {
// 	console.error(error);
// }

export async function fetchCars(){
    const headers= {
		'X-RapidAPI-Key': '9cff506b22msh1f500e4b70a85e5p1dede0jsn1cc859a71a1d',
		'X-RapidAPI-Host': 'cars-by-api-ninjas.p.rapidapi.com'
	}
    const response=await fetch(`https://cars-by-api-ninjas.p.rapidapi.com/v1/cars?model=corolla`,{
        headers:headers
    })
    const result= response.json()
    return result
}