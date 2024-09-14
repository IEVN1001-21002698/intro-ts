import { Cuadrado, Rectangulo, Circulo } from './Figuras';
class PrismaRectangular extends Rectangulo {
    constructor(nombre: string, color: string, largo: number, ancho: number, private altura: number) {
        super(nombre, color, largo, ancho);
    }
    calcularVolumen(): number {
        return this.calcularArea() * this.altura;
    }
    imprimir(): void {
        super.imprimir();
        console.log(`Volumen del prisma rectangular: ${this.calcularVolumen()}`);
    }
}
class Piramide extends Cuadrado {
    constructor(nombre: string, color: string, lado: number, private altura: number) {
        super(nombre, color, lado);
    }
    calcularVolumen(): number {
        return (this.calcularArea() * this.altura) / 3;
    }

    imprimir(): void {
        super.imprimir();
        console.log(`Volumen de la pirámide: ${this.calcularVolumen()}`);
    }
}
class Cilindro extends Circulo {
    constructor(nombre: string, color: string, radio: number, private altura: number) {
        super(nombre, color, radio);
    }
    calcularVolumen(): number {
        return this.calcularArea() * this.altura;
    }
    imprimir(): void {
        super.imprimir();
        console.log(`Volumen del cilindro: ${this.calcularVolumen().toFixed(2)}`);
    }
}
const volumenes = [
    new PrismaRectangular("Prisma Rectangular", "Amarillo", 10, 5, 15),
    new Piramide("Pirámide", "Morado", 6, 12),
    new Cilindro("Cilindro", "Naranja", 3, 7)
];
volumenes.forEach(volumen => volumen.imprimir());
