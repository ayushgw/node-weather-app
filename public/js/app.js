const weatherForm = document.querySelector('form')
const search = document.querySelector('input')
const errorMsg = document.querySelector('#error')
const result = document.querySelector('#result')

weatherForm.addEventListener('submit', (e) => {
    e.preventDefault()

    const address = search.value

    errorMsg.textContent = ''
    result.textContent = 'Loading...'

    fetch('/weather?address=' + address)
        .then((response) => {
            response.json().then((data) => {
                if (data.error) {
                    errorMsg.textContent = data.error
                    result.textContent = ''
                }
                else {
                    errorMsg.textContent = ''
                    result.innerHTML = `
                    <p class="result-title">Location</p>
                    <p class="result-body">${data.location}</p>
                    <p class="result-title">Forecast</p>
                    <p class="result-body">${data.forecast}</p>
                    `
                }
            })
        })
})