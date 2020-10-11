'use strict';

class Map {

    static FLOOR_SMALL_SIZE = 356;
    static FLOOR_MEDIUM_SIZE = 493;
    static FLOOR_LARGE_SIZE = 628;
    static FLOOR_COUNTER = {min:3, max:5};

    constructor() {
        this.sky = document.querySelector('body');
        this.landscape = document.querySelector('.landscape');
        this.floor = document.querySelector('.floor');
        this.secondFloor = document.querySelector('.second_floor');
        this.shift = 0;
        this.floorCounter = undefined;
    }

    buildMap () {
        this.floorCounter = Math.floor(
            Math.random() * (Map.FLOOR_COUNTER['max'] - Map.FLOOR_COUNTER['min'] + 1) + Map.FLOOR_COUNTER['min']
        );

        let lastFloorAdded = 0;
        for (let i = 1; i <= this.floorCounter; i++) {
            let randomFloor = this.randomFloorSize(i % 3);

            let floorDiv = document.createElement('div');
            floorDiv.classList.add(randomFloor.class);
            floorDiv.classList.add('random_floor');
            floorDiv.classList.add('leftable');
            floorDiv.style.width = randomFloor.floor_size + 'px';

            if (lastFloorAdded === 0) {
                floorDiv.style.left = randomFloor.floor_size + 'px';
            } else {
                floorDiv.style.left = (randomFloor.floor_size + lastFloorAdded) + 'px';
            }
            lastFloorAdded = lastFloorAdded + (randomFloor.floor_size * 2);

            this.secondFloor.appendChild(floorDiv);
        }

        let flag = document.createElement('div');
        flag.style.left = (lastFloorAdded + 300) + 'px';
        flag.classList.add('flag');
        flag.classList.add('leftable');
        this.secondFloor.appendChild(flag);

        let castle = document.createElement('div');
        castle.style.left = (lastFloorAdded + 700) + 'px';
        castle.classList.add('castle');
        castle.classList.add('leftable');
        this.secondFloor.appendChild(castle);
    }

    handleParallaxe (increase) {
        increase ? this.shift++ : this.shift--;

        this.floor.style.backgroundPositionX = (this.shift * 4) + 'px';
        this.landscape.style.backgroundPositionX = (this.shift * 2) + 'px';
        this.sky.style.backgroundPositionX = this.shift + 'px';

        let allFloors = document.getElementsByClassName('leftable');
        for (let i = 0; i < allFloors.length; i++) {
            let currentFloor = allFloors[i];
            let currentLeftValue = parseInt(currentFloor.style.left.slice(0, -2));

            if (increase) {
                currentFloor.style.left = (currentLeftValue + 4) + 'px';
                continue;
            }
            currentFloor.style.left = (currentLeftValue - 4) + 'px';
        }
    }

    eventsListener () {
        return null;
    }

    randomFloorSize (size) {
        switch (size) {
            case 0 :
                return {class: 'second_floor_small', floor_size: Map.FLOOR_SMALL_SIZE};
            case 1 :
                return {class: 'second_floor_medium', floor_size: Map.FLOOR_MEDIUM_SIZE};
            case 2 :
                return {class: 'second_floor_large', floor_size: Map.FLOOR_LARGE_SIZE};
        }
    }
}