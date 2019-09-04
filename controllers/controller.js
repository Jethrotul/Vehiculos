"use strict";
let car;
document
    .getElementById("botonCrearCoche")
    .addEventListener("click", function () {
    let a = document.getElementById("plate")
        .value;
    let b = document.getElementById("brand")
        .value;
    let c = document.getElementById("color")
        .value;
    
    return createCar(a, b, c), primerpaso(), segundopaso();
});
function createCar(plate, brand, color) {
    car = new Car(plate, color, brand);
    if (!car.plate.match(/[0-9]{4}-[a-z]{3}/g)) {
        car.plate = "Matricula Invalida";
        document.getElementById("carPlate").innerText =
            "Matricula del coche = " + car.plate;
        document.getElementById("carBrand").innerText =
            "Marca del coche = " + car.brand;
        document.getElementById("carColor").innerText =
            "Color del coche = " + car.color;
    }
    document.getElementById("carPlate").innerText =
        "Matricula del coche = " + car.plate;
    document.getElementById("carBrand").innerText =
        "Marca del coche = " + car.brand;
    document.getElementById("carColor").innerText =
        "Color del coche = " + car.color;
}
document
    .getElementById("botonCrearRuedas")
    .addEventListener("click", function () {
    let m1 = document.getElementById("brandW1")
        .value;
    let m2 = document.getElementById("brandW2")
        .value;
    let m3 = document.getElementById("brandW3")
        .value;
    let m4 = document.getElementById("brandW4")
        .value;
    let d1 = parseFloat(document.getElementById("diameterW1").value);
    let d2 = parseFloat(document.getElementById("diameterW2").value);
    let d3 = parseFloat(document.getElementById("diameterW3").value);
    let d4 = parseFloat(document.getElementById("diameterW4").value);
    return (createCarRuedas(d1, m1),
        createCarRuedas(d2, m2),
        createCarRuedas(d3, m3),
        createCarRuedas(d4, m4));
});
let contadorRuedas = 1;
function createCarRuedas(diameter, brand) {
    let wheel1 = new Wheel(diameter, brand);
    car.addWheel(wheel1);
    console.log(car.wheels[contadorRuedas - 1].diameter < 2);
    console.log(car.wheels[contadorRuedas - 1].diameter > 0.4);
    if (car.wheels[contadorRuedas - 1].diameter < 2 && car.wheels[contadorRuedas - 1].diameter > 0.4) {
        document.getElementById("rbrandW" + contadorRuedas).innerHTML = "Marca de la rueda " + contadorRuedas + " es = " + car.wheels[contadorRuedas - 1].brand;
        document.getElementById("rdiameterW" + contadorRuedas).innerHTML = "Diametro de la rueda " + contadorRuedas + " es = " + car.wheels[contadorRuedas - 1].diameter;
        contadorRuedas++;
    }
    else {
        console.log("eso es incorrecto");
        document.getElementById("rbrandW" + contadorRuedas).innerHTML = "Marca de la rueda " + contadorRuedas + " es = " + car.wheels[contadorRuedas - 1].brand;
        document.getElementById("rdiameterW" + contadorRuedas).innerHTML = "Diametro de la rueda " + contadorRuedas + " es = Inv\u00E1lido";
        contadorRuedas++;
    }
    ;
}

function primerpaso (){
    if (car.plate.match(/[0-9]{4}-[a-z]{3}/g)) {
        let x = document.getElementsByClassName("primerpaso");
        let i;
        for (i = 0; i < x.length; i++) {
        x[i].style.display = "none";
        }
}
}

function segundopaso(){
    if (car.plate.match(/[0-9]{4}-[a-z]{3}/g)) {
        let x = document.getElementsByClassName("segundopaso");
        let i;
        for (i = 0; i < x.length; i++) {
        x[i].style.display = "block";
        }
}
}
