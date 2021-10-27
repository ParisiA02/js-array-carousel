const items = [
    'img/01.jpg',
    'img/02.jpg',
    'img/03.jpg',
    'img/04.jpg',
    'img/05.jpg'
];

const title = [
    'Svezia',
    'Svizzera',
    'Gran Bretagna',
    'Germania',
    'Paradise'
];

const text = [
    'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Et temporibus voluptatum suscipit tempore aliquid deleniti aut veniam inventore eligendi ex ad ullam, cumque provident totam omnis, magnam dolores dolorum corporis.',
    'Lorem ipsum',
    'Lorem ipsum, dolor sit amet consectetur adipisicing elit.',
    'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Et temporibus voluptatum suscipit tempore aliquid deleniti aut veniam inventore eligendi ex ad ullam,',
    'Et temporibus voluptatum suscipit tempore aliquid deleniti aut veniam inventore eligendi ex ad ullam,',
];


let imageCont = document.querySelector(".img-container");
let thumbCont = document.querySelector(".thumb-container");

let image="";
let thumb="";


for(let i = 0; i < items.length; i++){

    image += `
        <div class="image">
            <img src="${items[i]}" alt="">
        </div>
        <div class="title">
            ${title[i]}
        </div>
        <div class="text">
            ${text[i]}
        </div>
    `;

    thumb += `

        <div class="thumb">
            <img src="${items[i]}" alt="${title[i]}">
        </div>

    `;
}
    
imageCont.innerHTML += image;
document.getElementsByClassName("image")[0].classList.add("active");
document.getElementsByClassName("title")[0].classList.add("active");
document.getElementsByClassName("text")[0].classList.add("active");

thumbCont.innerHTML += thumb;
document.getElementsByClassName("thumb")[0].classList.add("active2");

let active = 0;

document.querySelector(".next-arrow").addEventListener("click", function(){

    ++active;
    console.log(active);

    if (active === 5){
        active = 0;
    }
        
    document.querySelector(".image.active").classList.remove("active");
    document.getElementsByClassName("image")[active].classList.add("active");

    document.querySelector(".title.active").classList.remove("active");
    document.getElementsByClassName("title")[active].classList.add("active");

    document.querySelector(".text.active").classList.remove("active");
    document.getElementsByClassName("text")[active].classList.add("active");


    document.querySelector(".thumb.active2").classList.remove("active2");
    document.getElementsByClassName("thumb")[active].classList.add("active2");
        
    

});


document.querySelector(".prev-arrow").addEventListener("click", function(){

    active --;
    console.log(active);

    if (active === -1){
        active = 4;
    }

    document.querySelector(".image.active").classList.remove("active");
    document.getElementsByClassName("image")[active].classList.add("active");

    document.querySelector(".title.active").classList.remove("active");
    document.getElementsByClassName("title")[active].classList.add("active");

    document.querySelector(".text.active").classList.remove("active");
    document.getElementsByClassName("text")[active].classList.add("active");


    document.querySelector(".thumb.active2").classList.remove("active2");
    document.getElementsByClassName("thumb")[active].classList.add("active2");
    
});