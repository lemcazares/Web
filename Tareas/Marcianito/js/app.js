function elegir(){

  var respuesta = Math.random();

  if (respuesta < 0.20){
    respuesta = "No cuentes con ello";
  }else if (respuesta <= 0.40) {
    respuesta = "Quizá";
  }else if (respuesta <= 0.60){
    respuesta = "Seguramente sí";
  }else if (respuesta <= 0.80) {
    respuesta = "La respuesta es el alcohol";
  }else {
    respuesta = "Ella no te quiere";
  }

  swal("El marcianito dice", respuesta);

}
