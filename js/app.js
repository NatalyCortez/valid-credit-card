do {
  var number = prompt('Ingrese el número de su tarjeta :');// number=45588855(string)
if (number === null){
    alert("Hasta luego,regrese pronto!");
    break;
  } else if (typeof(number) === typeof("a")){
    var validation = isValidCard(number);
    alert("El nùmero de tarjeta es :" + validation);
  } else {

  }
}while(!number);



function isValidCard(number){
  var arrayNumber = [];
  var newArray ;
  for (var i = 0; i < number.length; i++) {
  arrayNumber[i] = number[i];
  }
  newArray = arrayNumber.reverse();

  for(var a = 1; a < newArray.length; i++){
    if(a % 2 ===0){
      var duplicate = newArray[a]*2;
      var sum
      if(duplicate >= 10){

      }

    }
  }
  /*return newArray;*/
}
