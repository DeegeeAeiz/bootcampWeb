// class Persona {

//     constructor(nombre, edad){
//         this.nombre=nombre
//         this.edad=edad
//     }

//     saludar(){
//         console.log(`Hola, mi nombre es ${this.nombre} y tengo ${this.edad}`)
//     }

//     hambre(){
//         console.log(`Soy ${this.nombre}, y tengo hambre ;/`)
//     }
// }

// const persona1 = new Persona("Alex", 21);
// persona1.saludar();
// persona1.hambre();

// const persona2 = new Persona("Elisa", 20);
// persona2.saludar();
// persona2.hambre();

// class Animales{
//     constructor(nombre){
//         this.nombre= nombre
//     }

//     sonido(){
//         return "El animal " + this.nombre + " hace un sonido desconocido"
//     }
// }

// class Perro extends Animales{
//     sonido(){
//         return "el perro" + this.nombre + "ladra"
//     }
// }

// class Gato extends Animales{
//     sonido(){
//         return "el gato" + this.nombre + "maulla"
//     }
// }

// class Chupacabras extends Animales{

// }

// const doggo = new Perro("Dogon")
// const miau = new Gato("Mao")
// const chuchu = new Chupacabras("huh")

// console.log(doggo.sonido())
// console.log(miau.sonido())
// console.log(chuchu.sonido())

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