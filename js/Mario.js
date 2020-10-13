'use strict';

class Mario {

    static JUMPS_HEIGHT = 150;

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
        if (!this.marioCanJumps) {
            return;
        }

        let self = this;
        this.marioCanJumps = false;
        this.audio.activeMarioJumpsSound();

        let bottomHistory = this.mario.style.bottom === "" ? 0 : Converter.valueWithPx(this.mario.style.bottom);
        let jumpsAverage = this.mario.style.bottom === "" ? 0 : Converter.valueWithPx(this.mario.style.bottom);
        let jumpsStarted = false;
        let hasAscend = false;

        let jumpsAnimation = setInterval(animation, 2.5);

        function animation () {
            if (jumpsStarted && jumpsAverage === 0) {
                clearInterval(jumpsAnimation);
                jumpsStarted = false;
                self.marioCanJumps = true;
            } else {
                jumpsStarted = true;
                if (jumpsAverage < (bottomHistory + Mario.JUMPS_HEIGHT) && !hasAscend) {
                    jumpsAverage++;
                } else {
                    if (self.checkIfHaveElement()) {
                        clearInterval(jumpsAnimation);
                        jumpsStarted = false;
                        self.marioCanJumps = true;
                        jumpsAverage = jumpsAverage - 5;
                    }
                    jumpsAverage--;
                    hasAscend = true;
                }
                self.mario.style.bottom = jumpsAverage + 'px';
            }
        }
    }

    checkIfHaveElement() {
        let elements = document.getElementsByClassName('random_floor');
        for (let i = 0; i < elements.length; i++) {
            let currentElement = document.getElementsByClassName('random_floor')[i];
            if (
                (this.mario.offsetLeft + this.mario.offsetWidth - 10) >= currentElement.offsetLeft &&
                (this.mario.offsetLeft + 10) <= (currentElement.offsetLeft + currentElement.offsetWidth) &&
                Converter.valueWithPx(this.mario.style.bottom) === (Converter.valueWithPx(currentElement.style.bottom) + currentElement.offsetHeight)
            ) {
                return currentElement;
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