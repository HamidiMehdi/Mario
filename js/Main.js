'use strict';

class Main {

    constructor() {
        this.map = new Map();
        this.audio = new Audio();
        this.mario = new Mario(this.map, this.audio);

        this.map.buildMap();
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
        this.map.eventsListener();
        this.mario.eventsListener();
        this.audio.play(Audio.BACKGROUND_MUSIC);
    }
}

window.onload = () => {
    new Main();
};