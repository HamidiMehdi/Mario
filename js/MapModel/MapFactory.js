'use strict';

class MapFactory {

    static FIRST_LEVEL_MAP = 'FIRST_LEVEL_MAP';
    static SECOND_LEVEL_MAP = 'SECOND_LEVEL_MAP';
    static THIRD_LEVEL_MAP = 'THIRD_LEVEL_MAP';

    constructor() {
        this.mapGenerator = new MapGenerator();
    }

    build(mapLevel) {
        switch (mapLevel) {
            case MapFactory.FIRST_LEVEL_MAP:
                this.mapGenerator.firstMap();
                break;
            case MapFactory.SECOND_LEVEL_MAP:
                this.mapGenerator.secondMap();
                break;
            case MapFactory.THIRD_LEVEL_MAP:
                this.mapGenerator.thirdMap();
                break;
        }
    }
}