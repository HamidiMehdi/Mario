'use strict';

class Audio {

    static BACKGROUND_MUSIC = 'BACKGROUND_MUSIC';
    static ENDED_MUSIC = 'BACKGROUND_MUSIC';

    constructor() {
        this.backgroundMusic = document.querySelector('audio#background_music');
        this.backgroundMusicEnded = document.querySelector('audio#background_music_ended');
        this.marioJumpsSound = document.querySelector('audio#mario_jumps_sound');
    }

    play(target) {
        return;
        switch (target) {
            case Audio.BACKGROUND_MUSIC :
                this.backgroundMusic.play();
                this.backgroundMusic.volume = 0.5;
                break;
            case Audio.ENDED_MUSIC :
                this.backgroundMusic.pause();
                this.backgroundMusicEnded.start();
                this.backgroundMusicEnded.volume = 0.5;
                break;
        }
    }

    activeMarioJumpsSound() {
        return;
        this.marioJumpsSound.play();
        this.marioJumpsSound.volume = 0.6;
    }
}