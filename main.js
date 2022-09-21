class Suplemento{
    constructor(nombre,precio,cantidad){
        this.nombre = nombre;
        this.precio = precio;
        this.cantidad = cantidad;
    }
}

const creatina = new Suplemento("Creatina",5000,10);
const proteina = new Suplemento("Proteína",2500,5);
const preWorkout = new Suplemento("Pre-entreno",3500,0);
const massGainer = new Suplemento("Ganador de masa",2000,3);

let nombre = prompt("Bienvenido, ingrese su nombre: ")

const inventarioDeProductos = [];
inventarioDeProductos.push(massGainer);
inventarioDeProductos.push(proteina);
inventarioDeProductos.push(preWorkout);
inventarioDeProductos.push(creatina);

const contenedorSuplementos = document.getElementById("contenedorSuplementos");


const mensaje = document.getElementById("mensaje");
mensaje.innerText = `¡Bienvenido ${nombre}, espero que tengas buen día! `

const formulario = document.getElementById("formulario");

formulario.addEventListener("submit",(e)=>{
    e.preventDefault();
    const nombre = document.getElementById("nuevoNombre");
    const precio = document.getElementById("nuevoPrecio");
    const cantidad = document.getElementById("nuevaCantidad");
    const suplemento = new Suplemento(nombre.value,precio.value,cantidad.value);
    inventarioDeProductos.push(suplemento);
    console.log(inventarioDeProductos);
    formulario.reset();
    let contenedor = document.createElement("div");
    contenedor.innerHTML = `<h3>Producto: ${suplemento.nombre} </h3>
                            <p>Tiene un precio de $${suplemento.precio}.</p>
                            <p>Quedan ${suplemento.cantidad} unidades.</p>
                            `
    const boton = document.createElement("button");
    boton.innerText = `Comprar`
    contenedorSuplementos.appendChild(contenedor)
    contenedorSuplementos.appendChild(boton)
    boton.addEventListener("click",()=>{
        console.log("¡Agregaste un elemento al carrito!")
        if(suplemento.cantidad >= 1){
            suplemento.cantidad--;
        }else{
            alert("¡No queda stock!")
        }
        contenedor.innerHTML = `<h3>Producto: ${suplemento.nombre} </h3>
                            <p>Tiene un precio de $${suplemento.precio}.</p>
                            <p>Quedan ${suplemento.cantidad} unidades.</p>
                            `
    })
})


inventarioDeProductos.forEach(suplemento => {
    let contenedor = document.createElement("div");
    contenedor.innerHTML = `<h3>Producto: ${suplemento.nombre} </h3>
                            <p>Tiene un precio de $${suplemento.precio}.</p>
                            <p>Quedan ${suplemento.cantidad} unidades.</p>
                            `
    const boton = document.createElement("button");
    boton.innerText = `Comprar`
    contenedorSuplementos.appendChild(contenedor);
    contenedorSuplementos.appendChild(boton)
    boton.addEventListener("click",()=>{
        console.log("¡Agregaste un elemento al carrito!")
        if(suplemento.cantidad >= 1){
            suplemento.cantidad--;
        }else{
            alert("¡No queda stock!")
        }
        contenedor.innerHTML = `<h3>Producto: ${suplemento.nombre} </h3>
                            <p>Tiene un precio de $${suplemento.precio}.</p>
                            <p>Quedan ${suplemento.cantidad} unidades.</p>
                            `
    })
})








