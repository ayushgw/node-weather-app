console.log('Client side js is loaded!');

const weatherForm = document.querySelector('form')
const search = document.querySelector('input')
const errorMsg = document.querySelector('#error')
const result = document.querySelector('#result')

weatherForm.addEventListener('submit', (e) => {
    e.preventDefault()

    const address = search.value

    errorMsg.textContent = ''
    result.textContent = 'Loading...'

    fetch('http://localhost:3000/weather?address=' + address)
        .then((response) => {
            response.json().then((data) => {
                if (data.error) {
                    errorMsg.textContent = data.error
                    result.textContent = ''
                }
                else {
                    errorMsg.textContent = ''
                    result.innerHTML = `Location: ${data.location} <br><br> Forecast: ${data.forecast}`
                }
            })
        })
})