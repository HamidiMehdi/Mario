'use strict';

class Mario {

    constructor(map) {
        this.mario = document.querySelector('.mario');
        this.map = map;
        this.marioCanJumps = true;
        this.isWalking = false;
        this.walkInterval = undefined;
    }

    walk(event) {
        let self = this;
        switch(event.key){
            case 'ArrowLeft':
                this.map.handleParallaxe();
                this.mario.classList.add('mario_run');
                this.mario.classList.add('mario_inverse_image');
                this.map.handleShift(true);
                break;
            case 'ArrowRight':
                this.map.handleParallaxe();
                this.mario.classList.add('mario_run');
                this.mario.classList.remove('mario_inverse_image');
                this.map.handleShift(false);
                break;
            case 'ArrowUp':
                if (this.marioCanJumps === false) {
                    return;
                }
                this.mario.classList.add('mario_jumps');
                this.marioCanJumps = false;
                setTimeout(function () {
                    self.mario.classList.remove('mario_jumps');
                    self.marioCanJumps = true;
                }, 1600);
                break;
        }
    }

    stopWalking() {
        this.mario.classList.remove('mario_run');
    }

    eventsListener() {
        let self = this;
        document.addEventListener('keydown', function (event) {
            if (!self.isWalking) {
                self.isWalking = true;
                self.walkInterval = setInterval(function () {
                    self.walk(event);
                }, 25);
            }
        });
        document.addEventListener('keyup', function () {
            if (self.isWalking) {
                self.isWalking = false;
                self.stopWalking();
                clearInterval(self.walkInterval);
            }
        });
    }
}