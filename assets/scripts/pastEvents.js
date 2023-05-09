let divGeneralPe = document.getElementById('cardContainerPe')

function plantillaCard(obj){
    return `<div class="card mt-3 mb-3" style="width: 18rem;">
            <img src=${obj.image} class="card-img-top p-4" alt="food fair">
            <div class="card-body">
            <h5 class="card-title">${obj.name}</h5>
            <p class="cardp card-text">${obj.description}</p>
            <h6>Price: ${obj.price}<</h6>
            <a href="../pages/details.html" class="btn btn-primary btn2">See More...</a>
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