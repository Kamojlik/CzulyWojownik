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

			let typeRozwojowy = document.querySelector('.rozwojowy');
			let typeRelacje = document.querySelector('.relacje');
			let typeInter = document.querySelector('.interpersonalny');
			let typeMeskiKrag = document.querySelector('.meski-krag');
			let template = document.querySelector('template');
			
			let container = document.querySelector('.container');

			data.forEach((row) => {
				let copy;

				if(row['Typ'] === 'Rozwojowy'){
					copy = typeRozwojowy.content.cloneNode(true);		
				};

				if(row['Typ'] === 'Relacje'){
					copy = typeRelacje.content.cloneNode(true);		
				};

				if(row['Typ'] === 'Interpersonalny'){
					copy = typeInter.content.cloneNode(true);		
				};

				if(row['Typ'] === 'Meski Krag'){
					copy = typeMeskiKrag.content.cloneNode(true);		
				};

				// add the data from JSON to the template
				copy.querySelector('.workshop-title').textContent = row['Nazwa'];
				copy.querySelector('.workshop-date').textContent = row['Data'];
				copy.querySelector('.price').textContent = row['Cena'];
				copy.querySelector('.workshop-link').href = row['Link'];
			
				// place the copy filled with data in the right place in HTML
				container.appendChild(copy);
				console.log(container);
			});
		});
});