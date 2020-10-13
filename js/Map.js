'use strict';

class Map {

    static SKY_SPEED = 1;
    static LANDSCAPE_SPEED = 2;
    static SECOND_FLOOR_SPEED = 4;
    static FLOOR_SPEED = 4;

    constructor() {
        this.sky = undefined;
        this.landscape = undefined;
        this.floor = undefined;
        this.shift = 0;
    }

    buildMap (map) {
        let mapFactory = new MapFactory();
        mapFactory.build(map);

        this.sky = document.querySelector('body');
        this.landscape = document.querySelector('.landscape');
        this.floor = document.querySelector('.floor');
    }

    handleParallaxe (increase) {
        increase ? this.shift++ : this.shift--;

        if (this.shift > 100) {
            this.shift = 100;
        }

        // parallax background image
        this.sky.style.backgroundPositionX = (this.shift * Map.SKY_SPEED) + 'px';
        this.landscape.style.backgroundPositionX = (this.shift * Map.LANDSCAPE_SPEED) + 'px';
        this.floor.style.backgroundPositionX = (this.shift * Map.FLOOR_SPEED) + 'px';

        if (this.shift >= 100) {
            return;
        }

        let allFloors = document.getElementsByClassName('leftable');
        for (let i = 0; i < allFloors.length; i++) {
            let currentFloor = allFloors[i];

            if (increase) {
                currentFloor.style.left = (Converter.valueWithPx(currentFloor.style.left) + Map.SECOND_FLOOR_SPEED) + 'px';
                continue;
            }
            currentFloor.style.left = (Converter.valueWithPx(currentFloor.style.left) - Map.SECOND_FLOOR_SPEED) + 'px';
        }
    }
}