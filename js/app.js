let timeframe = 'weekly'; 
const container = document.querySelector('.container');
let regularCards; /*place holder for all cards (works, play, study, etc)*/

/*1. initialize Menu*/ 
const menu = document.querySelectorAll('.menu-link');

menu.forEach(Element => {
    Element.addEventListener('click', menuOnClick);
});


/* 2. Get JSON Data & Create cards */
let data = {};

fetch('./js/data.json')
.then(resp => resp.json())
.then(jsonData => {
   jsonData.forEach(element => {
        container.insertAdjacentHTML('beforeend', createregularCards(element, timeframe));
   })
});


/*--------- Functions*/


function menuOnClick(event) {
    /*console.log('click',event.target.innerText.toLowerCase());*/
    menu.forEach(element => {
        element.classList.remove('menu-active');
    })
    event.target.classList.add('menu-active');
    timeframe = event.target.innerText.toLowerCase();

    updateCards(timeframe);
}

function updateCards(timeframe) {
    
}

function createregularCards(element, timeframe) {
    let title = element['title'];
    let current = element['timeframe'][timeframe]['current'];
    let previous = element['timeframes'][timeframe]['previous'];

    console.log(title, current, previous);
    return `
<div class="regular-card ${title.tolowerCase().replace(/\s/g, '')}">
    <div class="property-card">
       <div class="row">
           <div class="title">${title}</div>
           <div class="points">
               <div class="point"></div>
               <div class="point"></div>
               <div class="point"></div>
           </div>
       </div>

        <div class="row-2">
           <div class="hours">${current}hrs</div>
           <div class="description">${previous}10hrs</div>
        </div>
    </div>
</div>`

}
