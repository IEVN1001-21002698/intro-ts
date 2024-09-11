
import { calcularIVA2, Producto } from './05-desestructurar-funciones';

const productosN:Producto[]=[
    {
        desc:"telefono1",
        precio:1000
    },
    {
        desc:"telefono2",
        precio:2000
    },
    {
        desc:"telefono3",
        precio:3000   }
]
const [total,iva]=calcularIVA2(productosN);
console.log(total,iva);
