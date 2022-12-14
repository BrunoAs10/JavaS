function Producto(nombre, precio, stock, cat){
    this.nombre = nombre;
    this.precio =precio;
    this.stock = stock || 0;
    this.cat = cat
    this.restarStock = function(cantidad){
        this.stock -= cantidad
    }
    this.sumarStock = function(cantidad){
        this.stock += cantidad
    }
}

let productoA = new Producto("Tortillas De Harina de Maiz", 350, 10, "Comida")
let productoB = new Producto("Tortillas de Harina de Trigo", 300, 10, "Comida")
let productoC = new Producto("Tortillas de Harina de Trigo para Burritos", 300, 10, "Comida")
let productoD = new Producto("Nachos de Harina de Maiz", 250, 10, "Comida")
let productoE = new Producto("Salsa Tabasco", 750, 10, "Salsa")
let productoF = new Producto("Salsa Picante Valentina", 1200, 10, "Salsa")
let productoG = new Producto("Chiles Picantes Varios jalapeños,Habaneros, Arbol", 250, 10, "Comida")
let productoH = new Producto("Tequila", 2000, 10, "Bebida")
let productoI = new Producto("Mezcal", 2500, 10, "Bebida")

let listaProductos = [productoA, productoB, productoC, productoD, productoE, productoF, productoG, productoH, productoI]

let listaProductosConStock = listaProductos.filter((prod) => prod.stock > 0)

let listaNombres = listaProductosConStock.map((prod) => prod.nombre)

let precioTotal = 0

let catalogo = document.getElementById("catalogo")

function render(lista) {
    //catalogo.innerHTML = ""

    for(const prod of lista){

        let card = document.createElement("div")
        
        card.className = "card"

        card.innerHTML = `<h2>${prod.nombre}<h2><p>$${prod.precio}</p>`

        catalogo.append(card)
    }
}
render(listaProductosConStock)

let categoria = prompt("Ingrese la categoria que quiere ver: \n1- Bebida\n2 - Comida\n3 - Salsa")

let filtroActual = listaProductos.filter((prod)=>prod.cat == categoria)



render(filtroActual)





/*for(const prod of listaProductos){
    if(prod.stock > 0){
        listaNombres.push(prod.nombre)
    }
} */

/*alert("Estos son nuestros productos: \n - "+  listaNombres.join("\n - "))

function calculoPrecio(cantidad, precio){
    precioTotal += (cantidad * precio)
}

function CalculoStock(cantidad, stock, precio){
    if(cantidad <= stock){
        calculoPrecio(cantidad, precio)
    }
    else{
        alert("Actualmente tenemos " + stock + " unidades de este producto")
    }
}

let opcion = prompt("Ingrese que es lo que desea comprar: \n1 - Tortillas de Harina de Maíz\n2 - Tortillas de Harina de Trigo\n3 - Tortillas de Harina de Trigo para Burritos\n4 - Nachos de Harina de Maiz\n5 - Salsa Tabasco\n6 - Salsa Picante Valentina\n7 - Chiles Picantes Varios jalapeños,Habaneros, Arbol\n8 - Tequila\n9 - Mezcal\n -ESC")

while(opcion != "ESC"){
    
    if(opcion.toUpperCase() == '1'){
        let cantidadProductoA = prompt("ingrese que cantidad de " + productoA.nombre + " desea comprar:")
        CalculoStock(cantidadProductoA, productoA.stock, productoA.precio)
        productoA.restarStock(cantidadProductoA)

    }
    else if(opcion == '2'){
        let cantidadProductoB = prompt("ingrese que cantidad de " + productoB.nombre + " desea comprar:")
        CalculoStock(cantidadProductoB, productoB.stock, productoB.precio)
        productoB.restarStock(cantidadProductoB)
    }
    else if(opcion == '3'){
        let cantidadProductoC = prompt("ingrese que cantidad de " + productoC.nombre + " desea comprar:")
        CalculoStock(cantidadProductoC, productoC.stock, productoC.precio)
        productoC.restarStock(cantidadProductoC)
    }
    else if(opcion == '4'){
        let cantidadProductoD = prompt("ingrese que cantidad de " + productoD.nombre + " desea comprar:")
        CalculoStock(cantidadProductoD, productoD.stock, productoD.precio)
        productoD.restarStock(cantidadProductoD)
    }
    else if(opcion == '5'){
        let cantidadProductoE = prompt("ingrese que cantidad de " + productoE.nombre + " desea comprar:")
        CalculoStock(cantidadProductoE, productoE.stock, productoE.precio)
        productoE.restarStock(cantidadProductoE)
    }
    else if(opcion == '6'){
        let cantidadProductoF = prompt("ingrese que cantidad de " + productoF.nombre + " desea comprar:")
        CalculoStock(cantidadProductoF, productoF.stock, productoF.precio)
        productoF.restarStock(cantidadProductoF)
    }
    else if(opcion == '7'){
        let cantidadProductoG = prompt("ingrese que cantidad de " + productoG.nombre + " desea comprar:")
        CalculoStock(cantidadProductoG, productoG.stock, productoG.precio)
        productoG.restarStock(cantidadProductoG)
    }
    else if(opcion == '8'){
        let cantidadProductoH = prompt("ingrese que cantidad de " + productoH.nombre + " desea comprar:")
        CalculoStock(cantidadProductoH, productoH.stock, productoH.precio)
        productoH.restarStock(cantidadProductoH)
    }
    else if(opcion == '9'){
        let cantidadProductoI = prompt("ingrese que cantidad de " + productoI.nombre + " desea comprar:")
        CalculoStock(cantidadProductoI, productoI.stock, productoI.precio)
        productoI.restarStock(cantidadProductoI)
    }
    else{
        alert("No tenemos ese producto a la venta")
    }
    opcion = prompt("Ingrese que es lo que desea comprar: \n1 - Tortillas de Harina de Maíz\n2 - Tortillas de Harina de Trigo\n3 - Tortillas de Harina de Trigo para Burritos\n4 - Nachos de Harina de Maiz\n5 - Salsa Tabasco\n6 - Salsa Picante Valentina\n7 - Chiles Picantes Varios jalapeños,Habaneros, Arbol\n8 - Tequila\n9 - Mezcal\n10 - ESC")
}

if(precioTotal != 0){
    alert("El precio total es: " + precioTotal)
}*/
