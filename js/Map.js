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
        this.mario = undefined;
        this.flag = undefined;
        this.castle = undefined;
        this.level = undefined;
        this.shift = 0;

    }

    buildMap (map) {
        let mapFactory = new MapFactory();
        mapFactory.build(map);

        this.sky = document.querySelector('body');
        this.landscape = document.querySelector('.landscape');
        this.floor = document.querySelector('.floor');
        this.mario = document.querySelector('.mario');
        this.flag = document.querySelector('.flag');
        this.castle = document.querySelector('.castle');
        this.level = map;
    }

    handleParallaxe (increase) {
        if (this.shift >= 100) {
            return;
        }

        if (
            !increase &&
            (this.castle.offsetLeft + this.castle.offsetWidth) <= ((this.mario.offsetLeft + this.mario.offsetWidth) - 100)
        ) {
            return;
        }

        if (
            this.mario.offsetLeft >= (this.castle.offsetLeft + ((this.castle.offsetWidth / 2) - 33)) &&
            (this.mario.offsetLeft + this.mario.offsetWidth) <= (this.castle.offsetLeft + ((this.castle.offsetWidth / 2) + 40))
        ){
            this.nextLevel();
            return;
        }

        increase ? this.shift++ : this.shift--;
        // parallax background image
        this.sky.style.backgroundPositionX = (this.shift * Map.SKY_SPEED) + 'px';
        this.landscape.style.backgroundPositionX = (this.shift * Map.LANDSCAPE_SPEED) + 'px';
        this.floor.style.backgroundPositionX = (this.shift * Map.FLOOR_SPEED) + 'px';

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

    nextLevel() {
        if (this.level === MapFactory.FIRST_LEVEL_MAP) {
            this.buildMap(MapFactory.SECOND_LEVEL_MAP);
            Mario.eventsListener();
        } else if (this.level === MapFactory.SECOND_LEVEL_MAP) {
            this.buildMap(MapFactory.THIRD_LEVEL_MAP);
            Mario.eventsListener();
        } else if (this.level === MapFactory.THIRD_LEVEL_MAP) {
            this.buildMap(MapFactory.END_LEVEL_MAP);
            Mario.eventsListener();
        }
    }
}