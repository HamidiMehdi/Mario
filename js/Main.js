'use strict';

class Main {

    constructor() {
        this.map = new Map();
        this.map.buildMap(MapFactory.FIRST_LEVEL_MAP);

        this.audio = new Audio();
        this.mario = new Mario(this.map, this.audio);

        let self = this;
        document.querySelector('.button_start').addEventListener('click', function () {
            self.play();
        });
    }

    play() {
        document.querySelector('.button_start').classList.add('button_start_animation');
        // delete popup after 1 second
        let self = this;
        setTimeout(function () {
            document.querySelector('.popup_start').remove();
            self.addEventsListener();
        }, 1000);
    }

    addEventsListener() {
        this.mario.eventsListener();
        this.audio.play(Audio.BACKGROUND_MUSIC);
    }
}

let test = {
    test: function() {
        let mario = document.querySelector('.mario');
        let elements = document.getElementsByClassName('random_floor');

        for (let i = 0; i < elements.length; i++) {
            let currentElement = document.getElementsByClassName('random_floor')[i];
            if (
                (mario.offsetLeft + mario.offsetWidth) >= currentElement.offsetLeft &&
                (mario.offsetLeft) <= (currentElement.offsetLeft + currentElement.offsetWidth) &&
                Converter.valueWithPx(mario.style.bottom) === (Converter.valueWithPx(currentElement.style.bottom) + currentElement.offsetHeight)
            ) {
                return currentElement;
            }
        }
    }
}

window.onload = () => {
    new Main();

};