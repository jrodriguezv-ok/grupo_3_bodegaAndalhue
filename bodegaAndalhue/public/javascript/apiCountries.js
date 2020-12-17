window.addEventListener('load', function() {
    fetch("https://restcountries.eu/rest/v2/all")
        .then(function(response) {
            return response.json();
        })
        .then(function(data) {
            let selectCountry = document.getElementById("country");
            for (let i = 0; i < data.length; i++) {
                if (data[i].region == "Americas") {
                    selectCountry.innerHTML += "<option value='" + data[i].name + "'>" + data[i].name + "</option>"
                }
            }
        })
})