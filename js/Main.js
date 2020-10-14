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

window.onload = () => {
    new Main();
};