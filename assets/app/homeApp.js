import { renderCartBadge } from "../modules/cartLogic.js";
import { getItemsLS } from "../modules/localStorage.js";

const carrusel = document.querySelector(".carrusel-items");
 
let intervalo = null;
let step = 1;
let maxScrollLeft = carrusel.scrollWidth - carrusel.clientWidth;

renderCartBadge(getItemsLS('compras'))


const start = () => {
    intervalo = setInterval(function () {
        carrusel.scrollLeft += step;
        if(carrusel.scrollLeft >= maxScrollLeft || carrusel.scrollLeft === 0){
            step *= -1;
        }
    }, 15);
};

const stop = () =>{
    clearInterval(intervalo);
}

carrusel.addEventListener('mouseover', ()=>{
    stop()
})

carrusel.addEventListener('mouseout', () => {
    start()
})

start();



