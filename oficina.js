/*menu mobile*/
let btnAbrir = document.getElementById("btnAbrir");
let menu = document.getElementById("menu-mobile");

function abrir(){
    menu.className = 'menu-mobile';
}
function fechar(){
    menu.className = 'abrir-menu';
}
/*carrose de imagem*/
const imgs = document.getElementById("img");
const img = document.querySelectorAll("#img img");

let i = 0;

function carrosel(){
    i++
    if(i > img.length - 1){
        i=0;
    }
    imgs.style.transform = `translateX(${-i*1100}px)`;
}
setInterval(carrosel,2800);