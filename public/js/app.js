console.log('Client side js is loaded!');

const submitForm = (address) => {
    fetch('http://localhost:3000/weather?address=' + address)
        .then((response) => {
            response.json().then((data) => {
                if (data.error) return console.log(data.error)

                console.log('Location: ', data.location);
                console.log('Forecast: ', data.forecast);
            })
        })
}

const weatherForm = document.querySelector('form');
const search = document.querySelector('input')

weatherForm.addEventListener('submit', (e) => {
    e.preventDefault()

    const address = search.value
    submitForm(address)
})