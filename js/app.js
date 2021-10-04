let timeframe = 'weekly'; 
const container = document.querySelector(.container),
let regularCards; /*place holder for all cards (works, play, study, etc)*/

/*1. initialize Menu*/ 
const menu = document.querySelectorAll('.menu-link');

menu.forEach(Element => {
    Element.addEventListener('click', menuOnClick);
})