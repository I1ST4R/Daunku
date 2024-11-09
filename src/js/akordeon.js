var columnTtileName = 'footer__column-title'
var columnListName = 'footer__list'
var arrowName = 'footer__arrow'

const columnTitles = document.querySelectorAll('.' + columnTtileName)
const columnLists = document.querySelectorAll('.' + columnListName)
const arrows = document.querySelectorAll('.' + arrowName)

document.addEventListener("click", function(e){
  const target = e.target.closest('.' + columnTtileName)
  if(target) akordeon(+ target.id.slice(columnTtileName.length))
})

function akordeon(i){
  console.log(i)
  arrows[i].classList.toggle(arrowName + '--rotated');
  columnTitles[i].classList.toggle(columnTtileName + '--rotated');
  columnLists[i].classList.toggle(columnListName + '--rotated');
}