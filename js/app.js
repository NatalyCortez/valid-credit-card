do {
  //  le pedimos al usuario su numero de tarjeta.
  var number = prompt('Ingrese el número de su tarjeta : ');
  //  si el usuario da click en "cancelar" emergera una ventana con un mensaje.
  if (number === null) {
    alert('Hasta luego,regrese pronto!');
    break;
  //  si el usuario ingresa informacion el programa desarrollara la funcion isValidCard.
  } else if (number !== '') {
    var validation = isValidCard(number);
    alert(validation);
  } else {

  }
  //  se repitira los pasos indicados arriba mientras el usuario no ingrese nada.
} while (!number);


function isValidCard(number) {
  var arrayNumber = [];
  var newArray ;
  for (var i = 0; i < number.length; i++) {
    arrayNumber[i] = number[i];
  }
  arrayNumber.reverse();
  var numberSum = 0 ;
  //  empezamos a recorrer el array posicion por posicion.
  for (var j = 0; j < arrayNumber.length; j++) {
    //  si el indice de la posicion es par y distinto de cero se hara lo siguiente.
    if (j % 2 !== 0) {
    //  duplicaremos el numero que esta en la posicion par por dos.
      var duplicate = arrayNumber[j] * 2;
      //  si el doble del numero es mayor o igual a diez.
      if (duplicate >= 10) {
        //  declaro una variable que almacene el valor duplicado y lo convierta a string.
        var newDuplicate = duplicate.toString();
        //  declaro un array vacio para guardar las cifras del numero duplicado.
        var cipherSum = [];
        //  recorro el numero duplicado de tipo string.
        for (var x = 0;x < newDuplicate.length;x++) {
          //  convierto las cifras del numero de tipo string a number y agrego al array cipherSum cada cifra.
          cipherSum[x] = parseInt(newDuplicate[x]);
        }
        cipherSum = cipherSum[0] + cipherSum[1];
        numberSum += cipherSum;
        //  si el doble del numero es menor a diez.
      } else {
        numberSum += parseInt(duplicate);
      }
      //  si el indice de la posicion es impar e igual a cero se hara lo siguiente.
    } else {
      numberSum += parseInt(arrayNumber[j]);
    }
  }
  //  verificamos si la suma de los numeros es multiplo de 10.
  if (numberSum % 10 === 0) {
    //  si el resultado es verdadero retornamos un mensaje que lo indique.
    return 'Tarjeta de crédito válida.';
  } else {
    //  si el resultado es falso retornamos un mensaje que lo indique.
    return 'Tarjeta de crédito inválida.';
  }
}
