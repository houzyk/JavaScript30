const endpoint = 'https://gist.githubusercontent.com/Miserlou/c5cd8364bf9b2420bb29/raw/2bf258763cdddd704f8ffd3ea9a3e81d25e2c6f6/cities.json';
const searchForm = document.querySelector('.search-form');
const suggestions = document.querySelector('.suggestions');
searchForm.addEventListener('input', () => {
  const searchFormQuery = document.querySelector('.search');
  fetch(endpoint)
    .then(response => response.json())
    .then((data) => {
      const filteredCities = data.filter(city => city['city'].includes(searchFormQuery.value));
      if (filteredCities.length === 0) {
        suggestions.innerHTML = "";
        suggestions.insertAdjacentHTML('beforeend',
          `<li>Unvalid name..<li>`);
      } else {
        suggestions.innerHTML = "";
        filteredCities.forEach((city) => {
          const name = city.city.replace(searchFormQuery.value, `<span class="hl">${searchFormQuery.value}</span>`);
          const state = city.state.replace(searchFormQuery.value, `<span class="hl">${searchFormQuery.value}</span>`);
          suggestions.insertAdjacentHTML('beforeend',
          `<li>
            <span>${name}, ${state} </span>
            <span class="population">${city.population}</span>
          </li>`);
        });
      }
    });
});
