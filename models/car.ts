class Car{
    plate:string;
    color:string;
    brand:string;
    wheels:Wheel[]=new Array();
    
    constructor(plate:string,color:string,brand:string){
        this.plate=plate;
        this.color=color;
        this.brand=brand;
    }
    
    addWheel(wheel:Wheel):void{
        console.log(this.wheels);
        this.wheels.push(wheel);
    }
}