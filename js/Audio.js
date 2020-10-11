'use strict';

class Audio {

    static BACKGROUND_MUSIC = 'BACKGROUND_MUSIC';
    static ENDED_MUSIC = 'BACKGROUND_MUSIC';

    constructor() {
        this.backgroundMusic = document.querySelector('audio.background_music');
    }

    play(target) {
        switch (target) {
            case Audio.BACKGROUND_MUSIC :
                //this.backgroundMusic.play();
                break;
            case Audio.ENDED_MUSIC :
                break;
        }
    }
}