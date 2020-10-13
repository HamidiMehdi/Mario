'use strict';

class MapGenerator {

    constructor() {
        this.map = undefined;
        this.model = new MapModel();
    }

    firstMap() {
        this.map = MapFactory.FIRST_LEVEL_MAP;
        this.build(this.model.firstMapModel());
    }

    secondMap() {
        this.map = MapFactory.SECOND_LEVEL_MAP;
        this.build(this.model.secondMapModel());
    }

    thirdMap() {
        this.map = MapFactory.THIRD_LEVEL_MAP;
        this.build(this.model.thirdMapModel());
    }

    build(data) {
        this.addDecoration();
        let mapDecoration = document.querySelector('.map_decoration');

        for (let i = 0; i < data.length; i++) {
            let decoration = data[i];
            let element = document.createElement('div');

            switch (decoration.type) {
                case 'floor':
                    element.classList.add(decoration.class);
                    element.classList.add('random_floor');
                    break;
                case 'flag':
                    element.classList.add(decoration.class);
                    break;
                case 'castle':
                    element.classList.add(decoration.class);
                    break;
            }

            element.classList.add('leftable');
            element.style.width = decoration.width + 'px';
            element.style.left = decoration.left + 'px';
            element.style.bottom = decoration.bottom + 'px';

            mapDecoration.appendChild(element);
        }
    }

    addDecoration() {
        let container = document.querySelector('#container');
        container.querySelectorAll('*').forEach(el => el.remove());
        document.body.style.backgroundPositionX = 0 + 'px';

        if (this.map === MapFactory.FIRST_LEVEL_MAP) {
            container.appendChild(this.popupStart());
        }

        let landscape = document.createElement('div');
        landscape.classList.add('landscape');
        container.appendChild(landscape);

        let map = document.createElement('div');
        map.classList.add('map_decoration');
        container.appendChild(map);

        let mario = document.createElement('div');
        mario.classList.add('mario');
        container.appendChild(mario);

        let floor = document.createElement('div');
        floor.classList.add('floor');
        container.appendChild(floor);
    }

    popupStart() {
        let popupStart = document.createElement('div');
        popupStart.classList.add('popup_start');

        let buttonStart = document.createElement('div');
        buttonStart.classList.add('button_start');

        let textButton = document.createElement('span');
        textButton.classList.add('button_start_text');
        textButton.innerHTML  = 'Play';

        let rivetContainer = document.createElement('div');
        for (let i = 0; i >= 4; i++) {
            let rivet = document.createElement('div');
            rivet.classList.add('button_start_rivet');
            rivetContainer.appendChild(rivet);
        }

        buttonStart.appendChild(textButton);
        buttonStart.appendChild(rivetContainer);
        popupStart.appendChild(buttonStart);

        return popupStart;
    }
}

