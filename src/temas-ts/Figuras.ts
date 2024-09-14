export class Figura {
    constructor(protected nombre: string, protected color: string) {}
    imprimir(): void {
        console.log(`Figura: ${this.nombre}, Color: ${this.color}`);
    }
}
export class Cuadrado extends Figura {
    constructor(nombre: string, color: string, private lado: number) {
        super(nombre, color);
    }
    calcularArea(): number {
        return this.lado ** 2;
    }
    imprimir(): void {
        super.imprimir();
        console.log(`Área del cuadrado: ${this.calcularArea()}`);
    }
}
export class Rectangulo extends Figura {
    constructor(nombre: string, color: string, private largo: number, private ancho: number) {
        super(nombre, color);
    }
    calcularArea(): number {
        return this.largo * this.ancho;
    }
    imprimir(): void {
        super.imprimir();
        console.log(`Área del rectángulo: ${this.calcularArea()}`);
    }
}
export class Circulo extends Figura {
    constructor(nombre: string, color: string, private radio: number) {
        super(nombre, color);
    }
    calcularArea(): number {
        return Math.PI * this.radio ** 2;
    }
    imprimir(): void {
        super.imprimir();
        console.log(`Área del círculo: ${this.calcularArea().toFixed(2)}`);
    }
}
const figuras = [
    new Cuadrado("Cuadrado", "Rojo", 5),
    new Rectangulo("Rectángulo", "Azul", 10, 4),
    new Circulo("Círculo", "Verde", 3)
];
figuras.forEach(figura => figura.imprimir());