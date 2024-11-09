
const basket = document.getElementById('basket');
const basketCounter = document.getElementById('basket__counter');

basket.addEventListener("click", function(){
  basketCounter.innerHTML = +basketCounter.innerHTML + 1;
})