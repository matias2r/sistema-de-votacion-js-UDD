class Pregunta {
  constructor(titulo, opciones, respuestaCorrecta) {
      this.titulo = titulo;
      this.opciones = opciones;
      this.respuestaCorrecta = respuestaCorrecta;
  }

  mostrarPregunta() {
      console.log(this.titulo);
      this.opciones.forEach((opcion, index) => {
          console.log(`${index + 1}. ${opcion}`);
      });
  }

  verificarRespuesta(respuestaUsuario) {
      return respuestaUsuario === this.respuestaCorrecta;
  }
}

class Quiz {
  constructor() {
      this.preguntas = [];
  }

  agregarPregunta() {
      let titulo = prompt('Ingrese el titulo de la pregunta:');
      let opciones = [];
      let respuestaCorrecta = -1;


      //! Para cambiar las alternativas de cada pregunta se debe modificar el for :)
      //! Actualmente posee 3 alternativas. (i > 3)

      for (let i = 0; i < 3; i++) {
          let opcion = prompt(`Ingrese la opción ${i + 1}:`);
          opciones.push(opcion);
      }

      while (respuestaCorrecta < 1 || respuestaCorrecta > opciones.length || isNaN(respuestaCorrecta)) {
          respuestaCorrecta = parseInt(prompt(`Ingrese el número de la respuesta correcta (1-${opciones.length}):`));
      }

      let pregunta = new Pregunta(titulo, opciones, respuestaCorrecta);
      this.preguntas.push(pregunta);
  }

  iniciarQuiz() {
      this.preguntas.forEach((pregunta) => {
          pregunta.mostrarPregunta();
          let respuesta = prompt('Ingrese el número de la respuesta correcta:');
          if (pregunta.verificarRespuesta(parseInt(respuesta))) {
              alert('¡Correcto!');
          } else {
              alert(`Incorrecto. La respuesta correcta es ${pregunta.respuestaCorrecta}`);
          }
      });
  }
}


let quiz = new Quiz();


alert('Bienvenido al sistema de Encuestas');
let numPreguntas = parseInt(prompt('Ingrese el número de preguntas que desea agregar:'));

//! Para ser testeado con un minimo de 1 o 2 preguntas con sus respectivas alternativas modificar la condicion de numPreguntas
if (numPreguntas >= 8) {
    for (let i = 0; i < numPreguntas; i++) {
        quiz.agregarPregunta();
    }
} else {
    alert('Deben ser minimo 8 preguntas, refrescar el navegador!');
} 


quiz.iniciarQuiz();