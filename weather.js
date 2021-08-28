const searchload = () => {
    const SearchFild = document.getElementById('search-fild');
    const SearchText = SearchFild.value;
    // console.log(SearchText)
    const url = ` http://api.weatherapi.com/v1/current.json?key=dd37207b161b4e00a92184716212808&q=${SearchText}&aqi=no`
    // console.log(url),,,,,,

    fetch(url)
        .then(response => response.json())
        .then(data => DisplaySearchResult(data.current))

    SearchFild.value = '';
}


const DisplaySearchResult = data => {
    console.log(data.temperature)
    const searchResult = document.getElementById('search-result')
    // data.forEach(weather => {
    //     console.log(weather)
    searchResult.textContent = '';
    const div = document.createElement('div');
    div.classList.add('country');
    div.innerHTML = `
            <div class="text-center">
            <h1 class="" > <img width="100px", src="${data.condition.icon}" > </h1>
            <h1 class='text-warning mb-3'>${data.temp_c} C</h1>
            <h1 class='mt-3 mb-3 text-info'> feelslike: ${data.feelslike_c} C </h1>
            <h1 class='mt-3 mb-3 text-white'> wind:   ${data.wind_kph} kph</h1>
            <h1 class='mt-3 mb-3 text-white'> humidity:  ${data.humidity} </h1>
            <h1 class='mt-3 mb-3 text-white'> cloud:  ${data.cloud} </h1>
            </div>

        `;

    searchResult.appendChild(div);

    // });
}