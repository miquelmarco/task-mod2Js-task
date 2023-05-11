
// // detail dinámico

let detailContainer = document.querySelector('#detailContainer')
let datos = data.events



let parametrosDelSearch = new URLSearchParams(location.search)
let getId = parametrosDelSearch.get(`_id`)
let buscarIdOfEvent = datos.find(id => id._id == getId)

document.title = `Details of ${buscarIdOfEvent.name}`

detailContainer.innerHTML = `<div>
                                <img class="imgdetail" src=${buscarIdOfEvent.image} alt="books de prueba">
                                </div>
                                <div class="txtdetail d-flex justify-content-center align-items-center flex-column">
                                <h5 class="mb-5">${buscarIdOfEvent.name}</h5>
                                <p><span class="text-secondary">${buscarIdOfEvent.description}</span></p>
                                <p><span class="text-secondary">Date:</span> ${buscarIdOfEvent.date}</p>
                                <p><span class="text-secondary">Place:</span> ${buscarIdOfEvent.place}</p>
                                <p><span class="text-secondary">Max</span> capacity: ${buscarIdOfEvent.capacity}</p>
                                <p><span class="text-secondary">Entry Price </span> ${buscarIdOfEvent.price} USD</p>
                            </div>`