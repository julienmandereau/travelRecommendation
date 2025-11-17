const btnSearch = document.getElementById('btnSearch');

function searchCondition() {
    const input = document.getElementById('conditionInput').value.toLowerCase();
    const resultDiv = document.getElementById('result');
    resultDiv.innerHTML = '';

    fetch('travel_recommendation_api.json')
      .then(response => response.json())
      .then(data => {
        const countrie = data.countries.find(item => ('countries' or 'countrie') === input);
        const temples = data.temples.find(item => 'temples' === input);
        const beaches = data.beaches.find(item => 'beaches' === input);

        if (countrie) {
            const cities = countrie.cities.join(', ');
                for (let i = 0; i < cities.length; i++) {
                    resultDiv.innerHTML += `<p><strong>${data.countries[0].cities[i].name}</strong></p>`;
                    resultDiv.innerHTML += `<img src="${data.countries[0].cities[i].imageUrl}" alt="hjh">`;
                    resultDiv.innerHTML += `<p>${data.countries[0].cities[i].description}</p>`;
                    resultDiv.innerHTML += `<p><strong>${data.countries[1].cities[i].name}</strong></p>`;
                    resultDiv.innerHTML += `<img src="${data.countries[1].cities[i].imageUrl}" alt="hjh">`;
                    resultDiv.innerHTML += `<p>${data.countries[1].cities[i].description}</p></p>`;
                    resultDiv.innerHTML += `<p><strong>${data.countries[2].cities[i].name}</strong></p>`;
                    resultDiv.innerHTML += `<img src="${data.countries[2].cities[i].imageUrl}" alt="hjh">`;
                    resultDiv.innerHTML += `<p>${data.countries[2].cities[i].description}</p>`;
                }
            }
            if (temples) {
                for (let i = 0; i < 2; i++) {
                    resultDiv.innerHTML += `<p><strong>${data.temples[i].name}</strong></p>`;
                    resultDiv.innerHTML += `<img src="${data.temples[i].imageUrl}" alt="hjh">`;
                    resultDiv.innerHTML += `<p>${data.temples[i].description}</p>`;
                }
            } 
            if (beaches) {
                for (let i = 0; i < 2; i++) {
                    resultDiv.innerHTML += `<p><strong>${data.beaches[i].name}</strong></p>`;
                    resultDiv.innerHTML += `<img src="${data.beaches[i].imageUrl}" alt="hjh">`;
                    resultDiv.innerHTML += `<p>${data.beaches[i].description}</p>`;
                }
            } 
            else {
          resultDiv.innerHTML = 'Condition not found.';
        }
      })
      ;
  }
    btnSearch.addEventListener('click', searchCondition);