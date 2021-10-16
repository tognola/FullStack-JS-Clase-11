let newItem = document.getElementById("newItem")
let addBtn = document.getElementById("addBtn")
let list = document.getElementById("list")

let numTotal = document.getElementById('total')
let numPendientes = document.getElementById('pendientes')


let tasks = JSON.parse(localStorage.getItem("tasks"));

if(tasks == null){
    tasks = []
}

numTotal.innerText = tasks.length


dibujarTareas()
updatePendientes();




addBtn.addEventListener('click', (event) =>{
    event.preventDefault();
    
    if(newItem.value.length > 0){
        tasks.push(newItem.value)
        guardarLista()
        dibujarTareas()
        updatePendientes()
    }    

})

list.addEventListener('dblclick', (e) => {
    // list.removeChild(e.target)
    e.target.classList.toggle('finished')
    updatePendientes()

})

function dibujarTareas() {

    list.innerHTML = '';
    tasks.forEach( task => {
        let li = document.createElement('li')
        li.innerText = task;    
        list.appendChild(li)
        newItem.value = '';
  
        numTotal.innerText = tasks.length
    })
}

function updatePendientes(){

    numPendientes.innerText = parseInt(numTotal.innerText) - document.getElementsByClassName('finished').length
}

function guardarLista() {
    localStorage.setItem( "tasks", JSON.stringify(tasks) )    
}
