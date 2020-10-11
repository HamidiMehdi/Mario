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
                this.map.handleParallaxe(true);
                this.mario.classList.add('mario_run');
                this.mario.classList.add('mario_inverse_image');
                break;
            case 'ArrowRight':
                this.map.handleParallaxe(false);
                this.mario.classList.add('mario_run');
                this.mario.classList.remove('mario_inverse_image');
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

                let elements = document.getElementsByClassName('random_floor');
                //console.log(this.mario.offsetLeft);
                for (let i = 0; i < elements.length; i++) {
                    let currentElement = document.getElementsByClassName('random_floor')[i];
                    if (this.mario.offsetLeft >= currentElement.offsetLeft && (this.mario.offsetLeft + this.mario.offsetWidth) <= (currentElement.offsetLeft + currentElement.offsetWidth)) {
                        console.log('mario peut sauter sur le sol au dessus')
                        // jumps animation
                    }
                }
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