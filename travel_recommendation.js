const report = document.getElementById("report");
const btnSearch = document.getElementById('btnSearch');

function searchCondition() {
    const input = document.getElementById('conditionInput').value.toLowerCase();
    const resultDiv = document.getElementById('result');
    resultDiv.innerHTML = '';

    fetch('travel_recommendation_api.json')
      .then(response => response.json())
      .then(data => {
        const condition = data.conditions.find(item => item.name.toLowerCase() === input);

        if (condition) {
            const countries = condition.countries.join(', ');
            const temples = condition.temples.join(', ');
            const beaches = condition.beaches.join(', ');
            const countries = condition.countrie.join(', ');
            const temples = condition.temple.join(', ');
            const beaches = condition.beache.join(', ');
    
          resultDiv.innerHTML += `<h2>${condition.name}</h2>`;
          resultDiv.innerHTML += `<img src="${condition.imagesrc}" alt="hjh">`;

          resultDiv.innerHTML += `<p><strong>countries:</strong> ${countries}</p>`;
          resultDiv.innerHTML += `<p><strong>temples:</strong> ${temples}</p>`;
          resultDiv.innerHTML += `<p><strong>beaches:</strong> ${beaches}</p>`;
        } else {
          resultDiv.innerHTML = 'Condition not found.';
        }
      })
      .catch(error => {
        console.error('Error:', error);
        resultDiv.innerHTML = 'An error occurred while fetching data.';
      });
  }
    btnSearch.addEventListener('click', searchCondition);