let mario = document.querySelector("#mario");
let secondFloor = document.querySelector("#second-floor");
let floor = document.querySelector("#floor");
let landscape = document.querySelector("#landscape");
let sky = document.querySelector("body");

// Save the shift of elements
let shift = 0;

window.onload = () => {
    document.addEventListener("keydown", walk);
    document.addEventListener("keyup", stopWalking);
};

function walk(event){
    switch(event.key){
        case "ArrowLeft":
            mario.classList.add("mario-left");
            mario.classList.remove("mario-right");
            parallaxe();
            shift++;
            break;
        case "ArrowRight":
            mario.classList.add("mario-right");
            mario.classList.remove("mario-left");
            parallaxe();
            shift--;
            break
    }
}

function stopWalking(){
    mario.classList.remove("mario-left");
    mario.classList.remove("mario-right");
}

function parallaxe(){
    floor.style.backgroundPositionX = (shift * 4) + "px";
    secondFloor.style.backgroundPositionX = (shift * 4) + "px";
    landscape.style.backgroundPositionX = (shift * 2) + "px";
    sky.style.backgroundPositionX = shift + "px";
}