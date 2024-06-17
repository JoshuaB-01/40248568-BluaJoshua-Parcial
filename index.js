let tareaId = 1;
const tareas = [];


document.getElementById('tareaForm').addEventListener('submit', function(event) {

    event.preventDefault();
    const titulo = document.getElementById('titulo').value;
    const descripcion = document.getElementById('descripcion').value;
    const fechaLimite = document.getElementById('fechaLimite').value;
    
    
    const tarea = {
        id: tareaId++,  
        titulo: titulo,
        descripcion: descripcion,
        fechaLimite: fechaLimite,
        estado: true 
    };

   
    tareas.push(tarea);
    displayTareas();
    this.reset();
});


function displayTareas() {
    const tareaLista = document.getElementById('tareaLista');
    tareaLista.innerHTML = '';
    
    tareas.forEach(tarea => {
        const tareaCard = document.createElement('div');
        tareaCard.className = 'col-md-4 mb-3';
        
        tareaCard.innerHTML = `
            <div class="card">
                <div class="card-body">
                    <h5>${tarea.titulo}</h5>
                    <p>Descripcion: ${tarea.descripcion}</p>
                    <p>Fecha límite: ${tarea.fechaLimite}</p>
                    <button class="btn btn-success" onclick="CambioTareaEstado(${tarea.id})">Marcar como ${tarea.estado ? 'Incompleta' : 'Completa'}</button>
                    <button class="btn btn-danger" onclick="EliminarTarea(${tarea.id})">Eliminar</button>
                </div>
            </div>
        `;
        
        tareaLista.appendChild(tareaCard);
    });
}



function CambioTareaEstado(tareaId) {
    const tarea = tareas.find(tarea => tarea.id === tareaId);
    tarea.estado = !tarea.estado;
    displayTareas();
}


function EliminarTarea(tareaId) {
    const tareaPosicion = tareas.findIndex(tarea => tarea.id === tareaId);
    tareas.splice(tareaPosicion, 1);
    displayTareas();
}