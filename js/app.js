do {
  var number = prompt('Ingrese el número de su tarjeta :');// number=45588855(string)
  if (number === null) {
    alert('Hasta luego,regrese pronto!');
    break;
  } else if (number !== '') {
    var validation = isValidCard(number);
    alert('El nùmero de tarjeta es :' + validation);
  } else {

  }
} while (!number);


function isValidCard(number) {
  var arrayNumber = [];
  var newArray ;
  for (var i = 0; i < number.length; i++) {
    arrayNumber[i] = number[i];
  }
  newArray = arrayNumber.reverse();
  var sum = 0 ;
  var numberSum = 0 ;
  //  empezamos a recorrer el array posicion por posicion
  for (var j = 1; j < newArray.length; j++) {
    //  si el indice de la posicion es par y distinto de cero se hara lo siguiente
    if (j % 2 === 0 && j !== 0) {//  "numero"%2
      //  duplicaremos el numero que esta en la posicion par por dos
      var duplicate = newArray[j] * 2;//  10 tipo number
      //  si el doble del numero es mayor o igual a diez
      if (duplicate >= 10) {
        //  declaro una variable que almacene el valor duplicado y lo convierta a string
        var newDuplicate = duplicate.toString();
        //  declaro un array vacio para guardar las cifras del numero duplicado
        var cipherSum = [];
        //  recorro el numero duplicado de tipo string
        for (var x = 0;x < newDuplicate.length;x++) {
          //  convierto las cifras del numero de tipo string a number y agrego al array sum cada cifra
          cipherSum[x] = parseInt(newDuplicate[x]);
        }
        cipherSum = cipherSum[0] + cipherSum[1];
      }
      sum += cipherSum;
    } else {
      numberSum += parseInt(newArray[j]);
    }
  }
  var totalSum = (sum + numberSum) ;
}
