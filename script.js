var cardsArray = [{
        'name': 'aceHeart',
        'img': 'img/aceHeart.png',
},
    {
        'name': 'aceSpade',
        'img': 'img/Ace.png',
},
    {
        'name': 'joker',
        'img': 'img/joker.jpg',
}
]


cardsArray.sort(() => 0.5 - Math.random());

var table = document.getElementById('table');
var grid = document.createElement('div');
var card = document.querySelectorAll('.card');

grid.setAttribute('class', 'grid');
table.appendChild(grid);


cardsArray.forEach(item => {

    const card = document.createElement('div');
    card.classList.add('card');

    card.setAttribute('name', item.name);


    const front = document.createElement('div');
    front.classList.add('front');
    front.classList.add('slideInLeft')


    const back = document.createElement('div');
    back.classList.add('back');
    back.style.backgroundImage = `url(${item.img})`;


    grid.appendChild(card);
    card.appendChild(front);
    card.appendChild(back);
});


var back = document.querySelectorAll('.back');
back.forEach(item => {
    setTimeout(() => {
        item.classList.add('opacity');
    }, 1000)
})


let joker = document.querySelector("div[name='joker']")
let win = document.getElementById('win');
let lost = document.getElementById('lost');
let count = 0;


grid.addEventListener('click', event => {
    const clicked = event.target;

    if (count < 2 && clicked.parentNode.classList.contains('card')) {

        count++
        clicked.parentNode.classList.add('clicked');

        if (count < 2 && clicked.parentNode.getAttribute('name') === 'joker') {

            win.classList.add('scale')
            count++

        } else {

            joker.classList.add('delay');
            joker.classList.add('clicked');
            lost.classList.add('scale')
            count++
        }
    }
})

win.addEventListener('click', e => {
    const clicked = e.target;
    if (clicked.classList.contains('btn')) {
        location.reload()
    }
})
lost.addEventListener('click', e => {
    const clicked = e.target;
    if (clicked.classList.contains('btn')) {
        location.reload()
    }
})
