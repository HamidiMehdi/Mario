'use strict';

class Map {

    constructor() {
        this.sky = document.querySelector('body');
        this.landscape = document.querySelector('.landscape');
        this.floor = document.querySelector('.floor');
        this.secondFloor = document.querySelector('.second_floor');
        this.shift = 0;
    }

    buildMap () {
        return {
            counter: 10,
            map: [200, 140, 252, 187, 352]
        };
    }

    handleParallaxe () {
        this.floor.style.backgroundPositionX = (this.shift * 4) + 'px';
        this.secondFloor.style.backgroundPositionX = (this.shift * 4) + 'px';
        this.landscape.style.backgroundPositionX = (this.shift * 2) + 'px';
        this.sky.style.backgroundPositionX = this.shift + 'px';
    }

    handleShift (increase) {
        increase ? this.shift++ : this.shift--;
    }

    eventsListener () {
        return null;
    }
}