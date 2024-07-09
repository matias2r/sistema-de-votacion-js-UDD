alert('Bienvenido al sistema de Encuestas');

function crearPregunta() {
    let titulo = prompt("Ingrese el titulo de la pregunta:")
    let opciones = [];
    let respuestaCorrecta = -1;


    //! Para cambiar las alternativas de cada pregunta se debe modificar el for :)
    //! Actualmente posee 3 alternativas. (i > 3)
    for (let i = 0; i < 3; i++) {
        let opcion = prompt(`Ingrese la opcion ${i + 1}:`);
        opciones.push(opcion);
    }

    while (respuestaCorrecta < 1 || respuestaCorrecta > opciones.length || isNaN(respuestaCorrecta)) {
        respuestaCorrecta = parseInt(prompt(`Ingrese el numero de la respuesta correcta (1-${opciones.length})`));
    }

    return{
        titulo,
        opciones,
        respuestaCorrecta,
    }
}

function mostrarPregunta(pregunta){
    console.log(pregunta.titulo)
    pregunta.opciones.forEach((opcion, i) => { console.log(`${i + 1} ${opcion}`)});
}

function verificarRespuesta (pregunta, respuestaUsuario ) {
    return respuestaUsuario === pregunta.respuestaCorrecta;
}

function iniciarQuiz(preguntas) {
    preguntas.forEach((pregunta) => {
        mostrarPregunta(pregunta);
        let respuesta = prompt('Ingrese el número de la respuesta correcta:');
        if (verificarRespuesta(pregunta, parseInt(respuesta))) {
            alert('¡Correcto!');
        } else {
            alert(`Incorrecto. La respuesta correcta es ${pregunta.respuestaCorrecta}`);
        }
    });
}


let preguntas = [];
let numPreguntas = parseInt(prompt('Ingrese el número de preguntas que desea agregar:'));


//! Para ser testeado con un minimo de 1 o 2 preguntas con sus respectivas alternativas modificar la condicion de numPreguntas
if (numPreguntas >= 8) {
    for (let i = 0; i < numPreguntas; i++) {
        let pregunta = crearPregunta();
        preguntas.push(pregunta);
    }
} else {
    alert('Deben ser minimo 8 preguntas, refrescar el navegador!');
}


iniciarQuiz(preguntas);