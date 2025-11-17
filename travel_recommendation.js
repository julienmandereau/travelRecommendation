const btnSearch = document.getElementById('btnSearch');

function searchCondition() {
    const input = document.getElementById('conditionInput').value.toLowerCase();
    const resultDiv = document.getElementById('result');
    resultDiv.innerHTML = '';

    fetch('travel_recommendation_api.json')
      .then(response => response.json())
      .then(data => {
        const countrie = data.countries.find(item => 'countries' === input);

        if (countrie) {
            const cities = countrie.cities.join(', ');
            for (let j = 0; j < countries.length; j++) {
                for (let i = 0; i < cities.length; i++) {
                    resultDiv.innerHTML += `<p><strong>${data.countries[j].cities[i].name}</strong></p>`;
                    resultDiv.innerHTML += `<img src="${data.countries[j].cities[i].imageUrl}" alt="hjh">`;
                    resultDiv.innerHTML += `${data.countries[j].cities[i].description}</p>`;
            }
            } 
            else {
          resultDiv.innerHTML = 'Condition not found.';
        }
      })
      ;
  }
    btnSearch.addEventListener('click', searchCondition);