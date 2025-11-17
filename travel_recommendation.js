const btnSearch = document.getElementById('btnSearch');

function searchCondition() {
    const input = document.getElementById('conditionInput').value.toLowerCase();
    const resultDiv = document.getElementById('result');
    resultDiv.innerHTML = '';

    fetch('travel_recommendation_api.json')
      .then(response => response.json())
      .then(data => {
        const countrie = data.countries.find(item => item.name.toLowerCase() === input);
  
        if (countrie) {
        
          resultDiv.innerHTML += `<h2>${countrie.name}</h2>`;
          resultDiv.innerHTML += `<img src="${countrie.imageUrl}" alt="hjh">`;
        } else {
          resultDiv.innerHTML = 'Condition not found.';
        }
      })
      ;
  }
    btnSearch.addEventListener('click', searchCondition);