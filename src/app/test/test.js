"use strict";
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
exports.__esModule = true;
var Producto = /** @class */ (function () {
    function Producto(nuevoId, nuevoTitulo) {
        this.id = nuevoId;
        this.titulo = nuevoTitulo;
    }
    Producto.prototype.getId = function () {
        return this.id;
    };
    Producto.prototype.getTitulo = function () {
        return this.titulo;
    };
    return Producto;
}());
exports.Producto = Producto;
var BuscadorGeneral = /** @class */ (function () {
    function BuscadorGeneral(claveBusqueda) {
        this.clave = claveBusqueda;
    }
    BuscadorGeneral.prototype.buscar = function () {
        console.log('armando sql para ejectuar la busqueda...');
        var sql = 'SELECT * FROM LIBRO ';
        var sqlHija = this.getSQLHija();
        console.log("sql generada " + (sql + sqlHija));
        var productos = this.ejecutarBusqueda(sql + sqlHija);
        return productos;
    };
    BuscadorGeneral.prototype.ejecutarBusqueda = function (sql) {
        var productos = [];
        var producto = new Producto(1, 'Pendriver');
        productos.push(producto);
        producto = new Producto(2, 'Mouse Óptico');
        productos.push(producto);
        producto = new Producto(3, 'Teclado Óptico');
        productos.push(producto);
        return productos;
    };
    return BuscadorGeneral;
}());
exports.BuscadorGeneral = BuscadorGeneral;
var BuscadorTitulo = /** @class */ (function (_super) {
    __extends(BuscadorTitulo, _super);
    function BuscadorTitulo(clave) {
        var _this = _super.call(this, clave) || this;
        console.log('creando buscado por titulo');
        return _this;
    }
    BuscadorTitulo.prototype.getSQLHija = function () {
        return "where titulo like \"" + this.clave + "\" ";
    };
    return BuscadorTitulo;
}(BuscadorGeneral));
exports.BuscadorTitulo = BuscadorTitulo;
var BuscadorAutor = /** @class */ (function (_super) {
    __extends(BuscadorAutor, _super);
    function BuscadorAutor(clave) {
        var _this = _super.call(this, clave) || this;
        console.log('creando buscado por autor');
        return _this;
    }
    BuscadorAutor.prototype.getSQLHija = function () {
        return "where autor like \"" + this.clave + "\" ";
    };
    return BuscadorAutor;
}(BuscadorGeneral));
exports.BuscadorAutor = BuscadorAutor;
var claveBusqeda = 'harry potter';
var bt = new BuscadorTitulo(claveBusqeda);
var productos = bt.buscar();
console.log('productos obtenidos:');
console.log(productos);
bt = new BuscadorAutor(claveBusqeda);
productos = bt.buscar();
console.log('productos obtenidos:');
console.log(productos);
