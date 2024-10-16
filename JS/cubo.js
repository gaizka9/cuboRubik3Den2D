const cuboDiv = document.getElementById('cubo');

// Función para crear una tabla 3x3 
function crearTabla(cara, className) {
    const tabla = document.createElement('table');
    tabla.classList.add(className);  // Añadir la clase 
    for (let i = 0; i < 3; i++) {
        const fila = document.createElement('tr');
        for (let j = 0; j < 3; j++) {
            const celda = document.createElement('td');
            celda.setAttribute('id', `${cara}-${i}-${j}`);  // Añadir una id
            celda.setAttribute('data-color', cara);
            fila.appendChild(celda);
        }
        tabla.appendChild(fila);
    }
    return tabla;
}

// Añadir las tablas en sus respectivas posiciones y clases
cuboDiv.appendChild(crearTabla("Y", 'table-yellow'));  
cuboDiv.appendChild(crearTabla("R", 'table-red'));     
cuboDiv.appendChild(crearTabla("B", 'table-blue'));   
cuboDiv.appendChild(crearTabla("W", 'table-white'));   
cuboDiv.appendChild(crearTabla("G", 'table-green'));   
cuboDiv.appendChild(crearTabla("O", 'table-orange'));  


const celdas = document.querySelectorAll('td');

celdas.forEach(celda => {
    celda.addEventListener('click', function() {
        console.log(`Coordenadas: ${this.id}`);
    });
});