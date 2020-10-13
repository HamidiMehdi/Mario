'use strict';

class MapModel {

    static SMALL_FLOOR = {CLASS: 'small_floor', SIZE: 356};
    static MEDIUM_FLOOR = {CLASS: 'medium_floor', SIZE: 493};
    static LARGE_FLOOR = {CLASS: 'large_floor', SIZE: 628};
    static FLAG = {CLASS: 'flag', SIZE: 149};
    static CASTLE = {CLASS: 'castle', SIZE: 677};

    firstMapModel() {
        return [
            {type: 'floor', class: MapModel.SMALL_FLOOR.CLASS , width: MapModel.SMALL_FLOOR.SIZE, left: 250, bottom: 0},
            {type: 'floor', class: MapModel.SMALL_FLOOR.CLASS , width: MapModel.SMALL_FLOOR.SIZE, left: 1210, bottom: 69},
            {type: 'floor', class: MapModel.LARGE_FLOOR.CLASS , width: MapModel.LARGE_FLOOR.SIZE, left: 700, bottom: 0},
            {type: 'floor', class: MapModel.SMALL_FLOOR.CLASS , width: MapModel.SMALL_FLOOR.SIZE, left: 1450, bottom: 0},
            {type: 'floor', class: MapModel.MEDIUM_FLOOR.CLASS , width: MapModel.MEDIUM_FLOOR.SIZE, left: 1950, bottom: 0},
            {type: 'flag', class: MapModel.FLAG.CLASS , width: MapModel.FLAG.SIZE, left: 2600, bottom: 0},
            {type: 'castle', class: MapModel.CASTLE.CLASS , width: MapModel.CASTLE.SIZE, left: 2950, bottom: -8}
        ];
    }

    secondMapModel() {
        return {
            type : 'floor', left: 250, top: 250
        };
    }

    thirdMapModel() {
        return {
            type : 'floor', left: 250, top: 250
        };
    }

}