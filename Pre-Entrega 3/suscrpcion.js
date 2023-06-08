

var suscripcion = [ 
    {nombre:'ariela', mail:'acrnicolini@yahoo.com.ar'},
    {nombre:'vernica', mail:'vero@gmail.com'},
    {nombre: 'peggy', mail: 'peggy@gmail.com'}
]
console.log (suscripcion, "suscriptos")

let datoConvertido = JSON.stringify(suscripcion);
console.log (datoConvertido);


let jsonConvertido = JSON.parse(datoConvertido)
console.log (jsonConvertido)
suscripcion.push ({nombre: 'ignacio', mail:'ignacio@gmail.com'})
console.log (suscripcion)


document.addEventListener("submit", function(event) {
    event.preventDefault(); 
    nuevaSuscripcion();});

function nuevaSuscripcion() {
        let nuevoNombre = document.getElementById("nombre").value;
        let nuevoCorreo = document.getElementById("email").value;
      
        suscripcion.push({ nombre: nuevoNombre, mail: nuevoCorreo });
}


console.log (suscripcion, "suscriptos");