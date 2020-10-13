'use strict';

class Mario {

    constructor(map, audio) {
        this.mario = document.querySelector('.mario');
        this.map = map;
        this.audio = audio;
        this.isWalking = false;
        this.walkInterval = undefined;
        this.marioCanJumps = true;
    }

    onWalking(event) {
        switch(event.key){
            case 'ArrowLeft':
                this.walkLeft();
                break;
            case 'ArrowRight':
                this.walkRight();
                break;
            case 'ArrowUp':
                this.jumps();
                break;
        }
    }

    walkLeft() {
        this.map.handleParallaxe(true);
        this.mario.classList.add('mario_run');
        this.mario.classList.add('mario_inverse_image');
    }

    walkRight() {
        this.map.handleParallaxe(false);
        this.mario.classList.add('mario_run');
        this.mario.classList.remove('mario_inverse_image');
    }

    jumps() {
        if (this.marioCanJumps === false) {
            return;
        }

        let self = this;
        this.audio.activeMarioJumpsSound();
        this.mario.classList.add('mario_jumps');
        this.marioCanJumps = false;
        setTimeout(function () {
            self.mario.classList.remove('mario_jumps');
            self.marioCanJumps = true;
        }, 1200);

        let elements = document.getElementsByClassName('random_floor');
        //console.log(this.mario.offsetLeft);
        for (let i = 0; i < elements.length; i++) {
            let currentElement = document.getElementsByClassName('random_floor')[i];
            if (this.mario.offsetLeft >= currentElement.offsetLeft && (this.mario.offsetLeft + this.mario.offsetWidth) <= (currentElement.offsetLeft + currentElement.offsetWidth)) {
                console.log('mario peut sauter sur le sol au dessus')
                // jumps animation
            }
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
                    self.onWalking(event);
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