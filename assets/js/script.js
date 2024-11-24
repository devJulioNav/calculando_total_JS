//Captura de elementos del DOM y declaraciones
const precioInicial = document.querySelector('.precio-inicial')
const cantidad = document.querySelector('.cantidad')
const valorTotal = document.querySelector('.valor-total')

const mas = document.querySelector('#adicionar')
const menos = document.querySelector('#disminuir')

//Valores predeterminados a mostrar
precioInicial.innerHTML = 400000
valorTotal.innerHTML = 0

//Ejecución de eventos en los botones de adición y sustracción
mas.addEventListener('click', () => {
    cantidad.innerHTML++
    valorTotal.innerHTML = (precioInicial.innerHTML * cantidad.innerHTML).toLocaleString()

    //Mostrar cero en total a pagar para cantidades negativas
    if (cantidad.innerHTML < 0) {
        valorTotal.innerHTML = 0
    }
})

menos.addEventListener('click', () => {
    cantidad.innerHTML--
    valorTotal.innerHTML = (precioInicial.innerHTML * cantidad.innerHTML).toLocaleString()

    //Mostrar cero en total a pagar para cantidades negativas
    if (cantidad.innerHTML < 0) {
        valorTotal.innerHTML = 0
    }
})