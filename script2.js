const amountOne = document.querySelector('.input-left')
const amountTwo = document.querySelector('.input-right')
const currencyOne = document.querySelector('#currency-left')
const currencyTwo = document.querySelector('#currency-right')
const swapBtn = document.querySelector('button')
const rateInfo = document.querySelector('.result')


const calculate = () => {
    const URL = `https://api.exchangerate.host/latest?base=${currencyOne.value}&symbols=${currencyTwo.value}`

    fetch(URL)
        .then(res => res.json())
        .then(data => {
            const rate = data.rates[currencyTwo.value]
            amountTwo.value = (amountOne.value * rate).toFixed(2)

            rateInfo.textContent = `1 ${currencyOne.value} = ${rate.toFixed(4)} ${currencyTwo.value}`


        })
}      

const swap = () => {
    const newBox = currencyOne.value
    currencyOne.value = currencyTwo.value
    currencyTwo.value = newBox
    calculate()
}

amountOne.addEventListener('keyup', calculate)
currencyOne.addEventListener('change', calculate)
currencyTwo.addEventListener('change', calculate)
swapBtn.addEventListener('click', swap)

calculate()