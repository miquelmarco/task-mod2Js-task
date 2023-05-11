let divGeneralPe = document.getElementById('cardContainerPe')
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
    for(let info of list){
        template += plantillaCard(info)
    }
    lugarImpresion.innerHTML = template
}

function filterDataPast(evento){
    return evento.date < data.currentDate
}

const pastEvents = data.events.filter((filterDataPast));

printCard(pastEvents, divGeneralPe)

// // checkbox dinámico

let checkboxContainerPs = document.querySelector(`#checkboxContainerPs`)

function plantillaCheckbox(check){
    return `<div class="d-flex justify-content-center align-items-center">
            <input class="ms-1" type="checkbox" id=${check} value="museum">
            <label for="${check}">${check}</label>
            </div>`
}

function printCheckbox(lista, checkboxContainerPs){
    let template = ``
    for (let check of lista) {
        template += plantillaCheckbox(check)
    }
    checkboxContainerPs.innerHTML = template
}

let arrayFiltradoPs = datos.map((item) => item.category)
let newArrayFiltradoPs = [...new Set(arrayFiltradoPs)]

printCheckbox(newArrayFiltradoPs, checkboxContainerPs)