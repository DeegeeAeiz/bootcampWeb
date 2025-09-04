class Rectangulo{
    constructor(nombre, ancho, altura){
        this.nombre=nombre
        this.ancho=ancho
        this.altura=altura
    }

    calcPerimetro(){
        console.log(`El perimetro de ${this.nombre} es de ${((this.altura*2) + (this.ancho*2))}`)
    }

    calcArea(){
        console.log(`El area de ${this.nombre} es de ${(this.altura*this.ancho)}`)
    }
}

const rect1 = new Rectangulo("rect1", 5, 5)
rect1.calcPerimetro()
rect1.calcArea()

const rect2 = new Rectangulo("rect2",10, 10)
rect2.calcPerimetro()
rect2.calcArea()