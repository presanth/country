function search(){
    let cname = country.value
    fetch(`https://restcountries.com/v2/name/${cname}?fullText=true`).then(data=>data.json()).then(data=>displayData(data))
}

function displayData(values){

    countryName = values[0].name
    capital = values[0].capital
    population= values[0].population
    flag= values[0].flag
    currency=values[0].currencies[0].code
    symbol=values[0].currencies[0].symbol
    lang = values[0].languages[0].name

    detailsbox.innerHTML = `
            <div class="flag">
                <img src="${flag}" alt="" srcset="">
            </div>
            <div class="details">
                <p>COUNTRY NAME :${countryName}</p>
                <p>CAPITAL : ${capital}</p>
                <p>POPULATION :${population}</p>
                <p>LANGUAGE :${lang}</p>
                <p>CURRENCY :${currency}</p>
                <p>SYMBOL :${symbol}</p>
            </div>`
}