
let divGeneral = document.getElementById('cardContainer')
let datos = data.events



function plantillaCard(obj) {
    return `<div class="card mt-3 mb-3" style="width: 18rem;">
    <img src=${obj.image} class="card-img-top p-4" alt="food fair">
    <div class="card-body">
    <h5 class="card-title">${obj.name}</h5>
    <p class="cardp card-text">${obj.description}</p>
    <h6>Price: ${obj.price}</h6>
    <a href="./pages/details.html?_id=${obj._id}" class="btn btn-primary btn2">See More...</a>
    </div>
    </div> `
}

function printCard(list, lugarImpresion) {
    let template = ''
    if(list == 0){
        template = `Without results, not your lucky day!`
    }
    for (let info of list) {
        template += plantillaCard(info)
    }
    lugarImpresion.innerHTML = template
}

printCard(datos, divGeneral)

// // task 3

// // Poner checkbox dinámicos filtrando duplicados

let checkboxContainer = document.querySelector(`#checkboxContainer`)
let inputBusqueda = document.querySelector(`#inputBusqueda`)
// console.log(imputBusqueda)
// console.log(checkboxContainer)
function plantillaCheckbox(check) {
    return `<div id='checkboxUnit' class="d-flex justify-content-center align-items-center">
                <input class="ms-1" type="checkbox" id='${check}' value='${check}'>
                <label for='${check}'>${check}</label>
            </div>`
}

function printCheckbox(lista, checkboxContainer) {
    let template = ``
    for (let check of lista) {
        template += plantillaCheckbox(check)
    }
    checkboxContainer.innerHTML = template
}

let arrayFiltrado = datos.map((item) => item.category)
// console.log(arrayFiltrado)
let newArrayFiltrado = [...new Set(arrayFiltrado)]
// console.log(newArrayFiltrado)

printCheckbox(newArrayFiltrado, checkboxContainer)

// // hacer filtros para checkbox e imput search

// // eventos de filtrado

inputBusqueda.addEventListener('input', () => {
    filtroDoble()
})

checkboxContainer.addEventListener('change', () => {
    filtroDoble()
})

// // funciones de filtrado

function filtrarSearch(array, input) {
    let filtroSearch = array.filter(item => item.name.toLowerCase().includes(input.toLowerCase()))
    return filtroSearch
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
    let filtroSearch = filtrarSearch(datos, inputBusqueda.value)
    let filtroInput = filtrarInput(filtroSearch, checkeados)

    printCard(filtroInput, divGeneral)
}