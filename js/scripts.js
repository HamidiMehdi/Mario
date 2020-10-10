let marioFunc = {
    mario : document.querySelector("#mario"),
    secondFloor : document.querySelector("#second-floor"),
    floor : document.querySelector("#floor"),
    landscape : document.querySelector("#landscape"),
    sky : document.querySelector("body"),
    backgroundMusic: document.querySelector('audio.background-music'),
    shift : 0,
    walk: function (event) {
        switch(event.key){
            case "ArrowLeft":
                marioFunc.mario.classList.add("mario-left");
                marioFunc.mario.classList.remove("mario-right");
                marioFunc.parallaxe();
                marioFunc.shift++;
                break;
            case "ArrowRight":
                marioFunc.mario.classList.add("mario-right");
                marioFunc.mario.classList.remove("mario-left");
                marioFunc.parallaxe();
                marioFunc.shift--;
                break
        }
    },
    stopWalking: function () {
        marioFunc.mario.classList.remove("mario-left");
        marioFunc.mario.classList.remove("mario-right");
    },
    parallaxe: function () {
        marioFunc.floor.style.backgroundPositionX = (marioFunc.shift * 4) + "px";
        marioFunc.secondFloor.style.backgroundPositionX = (marioFunc.shift * 4) + "px";
        marioFunc.landscape.style.backgroundPositionX = (marioFunc.shift * 2) + "px";
        marioFunc.sky.style.backgroundPositionX = marioFunc.shift + "px";
    },
    startBackgroundMusic: function () {
        console.log(marioFunc.backgroundMusic);
        marioFunc.backgroundMusic.play();
    }
};

let marioListener = {
    onLoad : function () {
        marioListener.onKey();
        marioListener.onAudio();
    },
    onKey : function () {
        document.addEventListener("keydown", marioFunc.walk);
        document.addEventListener("keyup", marioFunc.stopWalking);
    },
    onAudio : function () {
        marioFunc.startBackgroundMusic();
    },
};

window.onload = () => {
    marioListener.onLoad();
};