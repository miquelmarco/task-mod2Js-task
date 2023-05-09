
let divGeneral = document.getElementById('cardContainer')

function plantillaCard(obj){
    return `<div class="card mt-3 mb-3" style="width: 18rem;">
            <img src=${obj.image} class="card-img-top p-4" alt="food fair">
            <div class="card-body">
            <h5 class="card-title">${obj.name}</h5>
            <p class="cardp card-text">${obj.description}</p>
            <h6>Price: ${obj.price}</h6>
            <a href="./pages/details.html" class="btn btn-primary btn2">See More...</a>
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

printCard(data.events, divGeneral)

// task 3

let checkboxContainer = document.querySelector(`#checkContainer`)
let datos = data.events

function plantillaCheckbox(obj){
    return `<div class="d-flex justify-content-center align-items-center">
    <input class="ms-1" type="checkbox" id=${obj.category} value="museum">
    <label for="${obj.category}">${obj.category}</label>
</div>`
}

function printCheckbox(lista, checkboxContainer){
    let template = ``
    for (let check of lista) {
        template += plantillaCheckbox(check)
    }
    checkboxContainer.innerHTML = template
}

printCheckbox(data.events, checkboxContainer)

// let arrayCompleto = datos[0].category

// function filtrar (array){
// for(i = 0; i < array.length; i++){
//     let datosFiltrados = []
//     if(i != array[i]){
//         datosFiltrados.push(i)
//         console.log(datosFiltrados)
//     }
// }
// }
// filtrar(arrayCompleto)