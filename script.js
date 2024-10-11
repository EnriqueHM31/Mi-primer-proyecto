const resultado = document.getElementById("mostrar_resultado")
const operacion = document.getElementById("operacion")
const btn_Borrar = document.getElementById("borrar")
const btn_Porcentaje = document.getElementById("porcentaje")
const btn_MasMenos = document.getElementById("mas_menos")
const botones = document.querySelectorAll(".botones")

/*El addEventListener para el boton resultado (hace la operacion puesta)*/
resultado.addEventListener("click", () => {

    if (ValidarInput(operacion)) {
        const calcular = obtenerOperacion(operacion)
        const resultado = eval(calcular)
        operacion.value = resultado
    } else {
        operacion.value = "ERROR"
    }

})

/*El addEventListener para LOS BOTONES (INGRESAR VALORES)*/
botones.forEach(boton => {
    boton.addEventListener("click", () => {
        const valor = boton.value
        operacion.value += valor
    })
})

/*El addEventListener para el boton C (BORRAR)*/
btn_Borrar.addEventListener("click", () => {
    operacion.value = ""
})

/*El addEventListener para el boton % (PORCENTAJE)*/
btn_Porcentaje.addEventListener("click", () => {

    const validar = ValidarInput(operacion)

    console.log(validar)

    if (ValidarInput(operacion)) {
        const numero = parseFloat(obtenerOperacion(operacion))
        const resultado = (numero / 100).toString();
        operacion.value = resultado;
    } else {
        operacion.value = "ERROR"
    }

})

/*Funcion para el boton mas menos*/
btn_MasMenos.addEventListener("click", () => {

    if (ValidarInput(operacion)) {

        let numero = obtenerOperacion(operacion)

        if (!isNaN(numero[0])) {
            numero = "-" + numero
        } else {
            numero = Math.abs(numero)
        }

        operacion.value = numero.toString()
    } else {
        operacion.value = "ERROR"
    }

})

//Funcion para validar si el input tiene datos
function ValidarInput(string) {

    return !(string.value.trim() === "") ? true : false;
    
}

//Funcion para obtener el valor del input
function obtenerOperacion(input) {
    const operacion = input.value
    return operacion
}

