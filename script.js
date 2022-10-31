const inputL = document.querySelector('.input-left')
const inputR = document.querySelector('.input-right')
const selL = document.querySelector('#currency-left')
const selR = document.querySelector('#currency-right')
const swapBtn = document.querySelector('button')
const info = document.querySelector('.result')

const sectionL = document.querySelector('.section-left')
const sectionR = document.querySelector('.section-right')

let rateL;
let rateR;
let valueToConvert;

// const RateNamesArray =      ['PLN', 'GBP', 'EUR', 'CHF', 'USD']
// const plnInRelationToOther =[  1  , 0.18 , 0.21 , 0.20 , 0.20 ]
// const plnInRelationToOther2=[  1  , 0.18 , 0.21 , 0.20 , 0.20 ]

// let PLN = 1.00
// let GBP = 0.18
// let EUR = 0.21
// let CHF = 0.20
// let USD = 0.20
// console.log(typeof(PLN));



const changeFontColorL = () => {
    selL.classList.toggle('change-color')
}

const changeFontColorR = () => {
    selR.classList.toggle('change-color')
}

const convert = () => {
    checkRateL()
    checkRateR()
    calculate()
}

const calculate = () => {
    valueToConvert = parseFloat(inputL.value)
    let result = valueToConvert * rateR / rateL
    inputR.value = result.toFixed(2)
    info.textContent = `${inputL.value} ${selL.options[selL.selectedIndex].text} = ${inputR.value} ${selR.options[selR.selectedIndex].text}`
}

const checkRateL = () => {
    rateL = parseFloat(selL.options[selL.selectedIndex].value)
    // console.log(rateL);
}

const checkRateR = () => {
    rateR = parseFloat(selR.options[selR.selectedIndex].value)
    console.log(rateR);
}

const swap = () => {
    sectionL.classList.toggle('move-right')
    sectionR.classList.toggle('move-left')
    convert()
}


inputL.addEventListener('keyup', convert)
inputR.addEventListener('keyup', convert)
swapBtn.addEventListener('click', swap)