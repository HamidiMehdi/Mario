'use strict';

class Converter {

    static valueWithPx(value) {
        return value.includes('px') ? parseInt(value.slice(0, -2)) : parseInt(value);
    }
}