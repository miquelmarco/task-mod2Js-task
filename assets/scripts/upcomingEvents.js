let divGeneralUp = document.getElementById('cardContainerUp')
let datos = data.events

function plantillaCard(obj){
    return `<div class="card mt-3 mb-3" style="width: 18rem;">
                    <img src=${obj.image} class="card-img-top p-4" alt="food fair">
                <div class="card-body">
                    <h5 class="card-title">${obj.name}</h5>
                    <p class="cardp card-text">${obj.description}</p>
                    <h6>Price: ${obj.price}<</h6>
                    <a href="../pages/details.html?_id=${obj._id}" class="btn btn-primary btn2">See More...</a>
                </div>
            </div> `
}

function printCard(list, lugarImpresion){
    let template = ''
    if(list == 0){
        template = `Without results, not your lucky day!`
    }
    for(let info of list){
        template += plantillaCard(info)
    }
    lugarImpresion.innerHTML = template
}

function filterDataUpcoming(evento){
    return evento.date > data.currentDate
}

const upcomingEvents = data.events.filter(filterDataUpcoming);

printCard(upcomingEvents, divGeneralUp)

// // impresión checkbox dinámico

let checkboxContainerUp = document.querySelector(`#checkboxContainerUp`)
let inputBusquedaUp = document.querySelector(`#inputBusquedaUp`)

function plantillaCheckbox(check){
    return `<div class="d-flex justify-content-center align-items-center">
                <input class="ms-1" type="checkbox" id='${check}' value='${check}'>
                <label for='${check}'>${check}</label>
            </div>`
}

function printCheckbox(lista, checkboxContainerUp){
    let template = ``
    for (let check of lista) {
        template += plantillaCheckbox(check)
    }
    checkboxContainerUp.innerHTML = template
}

let arrayFiltradoUp = datos.map((item) => item.category)
let newArrayFiltradoUp = [...new Set(arrayFiltradoUp)]

printCheckbox(newArrayFiltradoUp, checkboxContainerUp)

// // hacer filtros para checkbox e imput search

// // eventos del filtrado

inputBusquedaUp.addEventListener('input', () => {
    filtroDoble()
})

checkboxContainerUp.addEventListener('change', () => {
    filtroDoble()
})

// // funciones del filtrado

function filtrarSearch(array, input) {
    let filtroSearchPs = array.filter(item => item.name.toLowerCase().includes(input.toLowerCase()))
    return filtroSearchPs
}

function filtrarInput (eventos, category){
    if(category.length == 0){
        return eventos
    }
    return eventos.filter(evento => category.includes(evento.category))
}

// // filtro doble

function filtroDoble (){
    let checkeados = Array.from(document.querySelectorAll('input[type="checkbox"]:checked')).map(item => item.value)
    let filtroSearchPs = filtrarSearch(upcomingEvents, inputBusquedaUp.value)
    let filtroInput = filtrarInput(filtroSearchPs, checkeados)
    printCard(filtroInput, divGeneralUp)
}