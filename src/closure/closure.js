const moneyBox = (coins) => {
  var saveCoins = 0;
  saveCoins += coins;
  console.log(`MoneyBox: ${saveCoins}`);
};

moneyBox(5);
moneyBox(10);

//  Con un closure que es una funcion o un objeto de funciones
//  que recuerda el estado de las variables al momento de ser invocadas
//  y conserva ese estado a traves de reiteradas ejecuciones
const moneyBox = () => {
  var saveCoins = 0;
  const countCoins = (coins) => {
    saveCoins += coins;
    console.log(`MoneyBox: ${saveCoins} $us`);
  };
  return countCoins;
};

let myMoneyBox = moneyBox();
myMoneyBox(4);
myMoneyBox(6);
myMoneyBox(10);

//  Lo anterior seria el equivalente a esto:
var saveCoins = 0;

let myMoneyBox = (coins) => {
  saveCoins += coins;
  console.log(`MoneyBox: ${saveCoins} $us`);
};

myMoneyBox(4);
myMoneyBox(6);
myMoneyBox(10);

//  Buenas explicaciones:
//  https://platzi.com/comentario/919760/
//  https://medium.com/dailyjs/i-never-understood-javascript-closures-9663703368e8
