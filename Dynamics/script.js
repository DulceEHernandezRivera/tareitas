
function agregarTarea()
{

    const contenedor = document.getElementById("contenedor");
    const tareita = document.createElement("div");
    tareita.className = "tareita";
   /* tareita.textContent = "Tarea";*/
    const imagen = document.createElement("img");
    imagen.src = "../imagenes/tareai.JPG"
    tareita.appendChild(imagen);
    imagen.style.width = "90%";
    contenedor.appendChild(tareita);

}


function eliminarTarea()
{
    const contenedor = document.getElementById("contenedor");
    const ultimaTarea = contenedor.lastElementChild;
    
    if(ultimaTarea)
    {
        contenedor.removeChild(ultimaTarea);
    }
}
