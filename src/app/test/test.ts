export class Producto {
    private id: number;
    private titulo: string;
    constructor(nuevoId: number, nuevoTitulo: string) {
        this.id = nuevoId;
        this.titulo = nuevoTitulo;
    }
    public getId(): number {
        return this.id;
    }
    public getTitulo(): string {
        return this.titulo;
    }
}

export interface Ordenable {
    ordenar(): Producto[];
}

export abstract class BuscadorGeneral {
    protected clave: string;
    constructor(claveBusqueda: string) {
        this.clave = claveBusqueda;
    }
    public buscar(): Producto[] {
        console.log('armando sql para ejectuar la busqueda...');
        const sql = 'SELECT * FROM LIBRO ';
        const sqlHija = this.getSQLHija();
        console.log(`sql generada ${sql + sqlHija}`);
        const productos: Producto[] = this.ejecutarBusqueda(sql + sqlHija);
        return productos;
    }
    protected abstract getSQLHija(): string;

    private ejecutarBusqueda(sql: string): Producto[] {

        const productos: Producto[] = [];

        let producto = new Producto(1, 'Pendriver');
        productos.push(producto);

        producto = new Producto(2, 'Mouse Óptico');
        productos.push(producto);

        producto = new Producto(3, 'Teclado Óptico');
        productos.push(producto);

        return productos;
    }

}

export class BuscadorTitulo extends BuscadorGeneral {

    constructor(clave: string) {
        super(clave);
        console.log('creando buscado por titulo');
    }

    getSQLHija(): string {
        return `where titulo like "${this.clave}" `;
    }
}

export class BuscadorAutor extends BuscadorGeneral {
    constructor(clave: string) {
        super(clave);
        console.log('creando buscado por autor');
    }
    getSQLHija(): string {
        return `where autor like "${this.clave}" `;
    }
}

const claveBusqeda = 'harry potter';

let bt = new BuscadorTitulo(claveBusqeda);

let productos = bt.buscar();

console.log('productos obtenidos:');

console.log(productos);

bt = new BuscadorAutor(claveBusqeda);

productos = bt.buscar();

console.log('productos obtenidos:');

console.log(productos);
