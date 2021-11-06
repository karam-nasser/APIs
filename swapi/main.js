const getResidentButton = document.querySelector("Get Residents");
btn.addEventListener('click', function() {
    axios.get('https://swapi.dev/api/')
    .then(function(res) {
        console.log(res, data)
    })
}
