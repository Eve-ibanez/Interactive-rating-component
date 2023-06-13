let numberContainer = document.querySelector ('.rating-state__div-container__numbers');
let numberSelected = document.querySelector ('.result--number-selected');
let submitButton = document.querySelector ('.rating-state__div-container__button');
let ratingState = document.querySelector ('.rating-state');
let thankYouState = document.querySelector ('.section-thank-you');

numberContainer.addEventListener('click',event=> {
    let numberResult = event.target.innerText;
    numberSelected.innerText = numberResult;
    if (numberResult == 1 || 2 || 3 || 4 || 5) {
        submitButton.addEventListener ('click', ()=> {
            ratingState.style.display = 'none';
            thankYouState.style.display = 'flex';
        })
    }
})