// Función para verificar si una persona es mayor de edad
function verificarEdad(edad) {
    if (edad >= 18) {
    console.log("Eres mayor de edad.");
    } else {
    console.log("Eres menor de edad.");
    }
    }
    
    // para imprimir la acción realizada
    function imprimirAccion(accion) {
    switch (accion) {
    case "crear":
    console.log("La acción es crear.");
    break;
    case "colocar":
    console.log("La acción es colocar.");
    break;
    case "actualizar":
    console.log("La acción es actualizar.");
    break;
    case "borrar":
    console.log("La acción es borrar.");
    break;
    default:
    console.log("Acción no reconocida.");
    break;
    }
    }
    
    // si un número es par o impar
    function verificarParImpar(numero) {
    if (numero % 2 === 0) {
    console.log("El número ingresado es par.");
    } else {
    console.log("El número ingresado es impar.");
    }
    }
    
    const edad = 20;
    const accion = "crear";
    const numero = 7;
    
    verificarEdad(edad);
    imprimirAccion(accion);
    verificarParImpar(numero);