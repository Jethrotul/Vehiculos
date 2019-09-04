let car: Car;
document
  .getElementById("botonCrearCoche")
  .addEventListener("click", function() {
    let a: string = (document.getElementById("plate") as HTMLInputElement)
      .value;
    let b: string = (document.getElementById("brand") as HTMLInputElement)
      .value;
    let c: string = (document.getElementById("color") as HTMLInputElement)
      .value;
    document.getElementsByClassName("primerpaso")this.style.display = "none";
      return createCar(a, b, c);
  });
function createCar(plate: string, brand: string, color: string) {
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
  .addEventListener("click", function() {
    let m1: string = (document.getElementById("brandW1") as HTMLInputElement)
      .value;
    let m2: string = (document.getElementById("brandW2") as HTMLInputElement)
      .value;
    let m3: string = (document.getElementById("brandW3") as HTMLInputElement)
      .value;
    let m4: string = (document.getElementById("brandW4") as HTMLInputElement)
      .value;
    let d1: number = parseFloat(
      (<HTMLInputElement>document.getElementById("diameterW1")).value
    );
    let d2: number = parseFloat(
      (<HTMLInputElement>document.getElementById("diameterW2")).value
    );
    let d3: number = parseFloat(
      (<HTMLInputElement>document.getElementById("diameterW3")).value
    );
    let d4: number = parseFloat(
      (<HTMLInputElement>document.getElementById("diameterW4")).value
    );
    return (
      createCarRuedas(d1, m1),
      createCarRuedas(d2, m2),
      createCarRuedas(d3, m3),
      createCarRuedas(d4, m4)
    );
  });
let contadorRuedas = 1;
function createCarRuedas(diameter: number, brand: string) {
  let wheel1 = new Wheel(diameter, brand);
  car.addWheel(wheel1);
  console.log (car.wheels[contadorRuedas-1].diameter <2);
  console.log (car.wheels[contadorRuedas-1].diameter >0.4);
  if (car.wheels[contadorRuedas-1].diameter <2 && car.wheels[contadorRuedas-1].diameter >0.4){
    document.getElementById("rbrandW" + contadorRuedas).innerHTML = `Marca de la rueda ${contadorRuedas} es = ${car.wheels[contadorRuedas - 1].brand}`;
    document.getElementById("rdiameterW" + contadorRuedas).innerHTML = `Diametro de la rueda ${contadorRuedas} es = ${car.wheels[contadorRuedas - 1].diameter}`;
    contadorRuedas++;
  }
  else {
    console.log("eso es incorrecto");
    document.getElementById("rbrandW" + contadorRuedas).innerHTML = `Marca de la rueda ${contadorRuedas} es = ${car.wheels[contadorRuedas - 1].brand}`;
    document.getElementById("rdiameterW" + contadorRuedas).innerHTML = `Diametro de la rueda ${contadorRuedas} es = Inválido`;
    contadorRuedas++;
  };
};
