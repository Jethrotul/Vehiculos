"use strict";
var Car = /** @class */ (function () {
    function Car(plate, color, brand) {
        this.wheels = new Array();
        this.plate = plate;
        this.color = color;
        this.brand = brand;
    }
    Car.prototype.addWheel = function (wheel) {
        console.log(this.wheels);
        this.wheels.push(wheel);
    };
    return Car;
}());
