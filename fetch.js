// wait for the page to load
document.addEventListener('DOMContentLoaded', () => {

	// Google Sheet ID (string)
	const sheetId = '1XgQSF9W1f7-L7dNQFGJw1N-JsQhga0cDTeoq8o-zXaw';
	// Google Sheet tab name
	const tabName = 'Warsztaty';
	// JSON endpoint URL (string);
	const endpoint = 'https://opensheet.elk.sh/';

// HTML container that will be used to put the data into (DOM node)
	const workshopContainer = document.querySelector('.workshop-container');

// fetch the data from the endpoint
	fetch(`${endpoint}/${sheetId}/${tabName}`)
		// convert the data to JSON
		.then((response) => response.json())
		.then((data) => {
			// log the JSON to console for testing
			console.log(data);

// for each row in the sheet
			data.forEach((row) => {

				let workshop = '';

				if(row['Typ'] === 'Rozwojowy'){
					workshop = document.querySelector('.workshop-rozwojowy');
				}
				if(row['Typ'] === 'Zaawansowany'){
					workshop = document.querySelector('.workshop-zaawansowany');
				}
				if(row['Typ'] === 'Interpersonalny'){
					workshop = document.querySelector('.workshop-interpersonalny');
				}

				workshop.querySelector('.workshop-date').textContent = row['Data'];
				workshop.querySelector('.workshop-link').href = row['Link'];

				
			});
		});

});