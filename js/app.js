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

  for (var j = 1; j < newArray.length; j++) {
    var result;
    if (j % 2 === 0 && j !== 0) {//  "numero"%2
      var duplicate = newArray[j] * 2;//  10 tipo number

      if (duplicate >= 10) {
        var newDuplicate = duplicate.toString();
        var sum = '';
        for (var x = 0;x < newDuplicate.length;x++) {
          sum[x] = parseInt(newDuplicate[x]);
        }

        sum = sum[0] + sum[1];
        result = sum;
      }
    } else {


    }
  }
}
