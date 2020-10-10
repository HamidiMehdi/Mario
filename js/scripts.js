let marioFunc = {
    mario : document.querySelector('.mario'),
    secondFloor : document.querySelector('.second_floor'),
    floor : document.querySelector('.floor'),
    landscape : document.querySelector('.landscape'),
    sky : document.querySelector('body'),
    backgroundMusic: document.querySelector('audio.background_music'),
    shift : 0,
    marioCanJumps : true,
    isWalking: false,
    walkInterval: null,
    play: function () {
        // add animation button
        document.querySelector('.button_start').classList.add('button_start_animation');
        // delete popup after 1 second
        setTimeout(function () {
            document.querySelector('.popup_start').remove();
            marioListener.onLoadPlay();
        }, 1000);
    },
    walk: function (event) {
        console.log('ici');
        switch(event.key){
            case 'ArrowLeft':
                marioFunc.parallaxe();
                marioFunc.mario.classList.add('mario_run');
                marioFunc.mario.classList.add('mario_inverse_image');
                marioFunc.shift++;
                break;
            case 'ArrowRight':
                marioFunc.parallaxe();
                marioFunc.mario.classList.add('mario_run');
                marioFunc.mario.classList.remove('mario_inverse_image');
                marioFunc.shift--;
                break;
            case 'ArrowUp':
                if (marioFunc.marioCanJumps === false) {
                    return;
                }
                marioFunc.mario.classList.add('mario_jumps');
                marioFunc.marioCanJumps = false;
                setTimeout(function () {
                    marioFunc.mario.classList.remove('mario_jumps');
                    marioFunc.marioCanJumps = true;
                }, 1600);
        }
    },
    stopWalking: function () {
        marioFunc.mario.classList.remove('mario_run');
    },
    parallaxe: function () {
        marioFunc.floor.style.backgroundPositionX = (marioFunc.shift * 4) + 'px';
        marioFunc.secondFloor.style.backgroundPositionX = (marioFunc.shift * 4) + 'px';
        marioFunc.landscape.style.backgroundPositionX = (marioFunc.shift * 2) + 'px';
        marioFunc.sky.style.backgroundPositionX = marioFunc.shift + 'px';
    },
    startBackgroundMusic: function () {
        marioFunc.backgroundMusic.play();
    }
};

let marioListener = {
    onLoad : function () {
        marioListener.onPopupStart();
    },
    onLoadPlay: function () {
        marioListener.onKey();
        marioListener.onAudio();
    },
    onPopupStart: function () {
        document.querySelector('.button_start').addEventListener('click', function () {
            marioFunc.play();
        });
    },
    onKey : function () {
        document.addEventListener('keydown', function (event) {
            if (!marioFunc.isWalking) {
                marioFunc.isWalking = true;
                marioFunc.walkInterval = setInterval(function () {
                    marioFunc.walk(event);
                }, 25);
            }
        });
        document.addEventListener('keyup', function () {
            if (marioFunc.isWalking) {
                marioFunc.isWalking = false;
                marioFunc.stopWalking();
                clearInterval(marioFunc.walkInterval);
            }
        });
    },
    onAudio : function () {
        marioFunc.startBackgroundMusic();
    },
};

window.onload = () => {
    marioListener.onLoad();
};