const mainContainer = document.querySelector('.ratingContainer')
const thankYouContainer = document.querySelector('.thankYouContainer')
const rating = document.querySelector('.specialText')
const submit = document.querySelector('.submit')
const buttons = document.querySelectorAll('.btn')

for (let rate of buttons) {
    rating.innerText = `You selected 5 out of 5`
    rate.addEventListener('click', () => {
        rating.innerText = `You selected ${rate.innerText} out of 5`
    })
}

submit.addEventListener('click', () => {
    mainContainer.classList.add('hidden')
    thankYouContainer.classList.remove('hidden')
})

thankYouContainer.addEventListener('click', () => {
    mainContainer.classList.remove('hidden')
    thankYouContainer.classList.add('hidden')
})