// import $ from 'jquery';
import 'bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import './css/styles.css';

function amountTocoins(amount, coins) {
  if (amount === 0) {
    return [];
  } else {
    if (amount >= coins[0]) {
      const remaining = amount - coins[0];
      console.log(remaining);
      return [coins[0]].concat(amountTocoins(remaining, coins));
    } else {
      console.log('coins: ' + coins);
      coins.shift();

      return amountTocoins(amount, coins);
    }
  }
}
console.log(amountTocoins(499, [25, 10, 5, 1]));

// function howManyQuarters(array, coinType) {
//   const filteredArray = array.filter(coinType => coinType).length;
//   return filteredArray;
// }

function superCoinCounterThing(coinType) {
  return amountTocoins(499, [25, 10, 5, 1]).filter(coin => coin == coinType)
    .length;
}

console.log(superCoinCounterThing(1));

// const howManyQuarters = amountTocoins(499, [25, 10, 5, 1]).filter(coinType => coinType == 25).length;
// // console.log("howManyQuarters: " + howManyQuarters);
// howManyQuarters();
// const howManyDimes = amountTocoins(499, [25, 10, 5, 1]).filter(coinType => coinType == 10).length;
// console.log("howManyDimes: " + howManyDimes);
// const howManyNickels = amountTocoins(499, [25, 10, 5, 1]).filter(coinType => coinType == 5).length;
// console.log("howManyNickels: " + howManyNickels);
// const howManyPennies = amountTocoins(499, [25, 10, 5, 1]).filter(coinType => coinType == 1).length;
// console.log("howManyPennies: " + howManyPennies);

// amountTocoins = [25, 25, 25, 25, 25, 25, 10, 10, 10, 5, 1]
// console.log(
//   'howManyQuarters(): ' +
//     howManyQuarters(amountTocoins(499, [25, 10, 5, 1]), 17)
// );

// const result = words.filter(word => word.length > 6);

// function counter(coinsArray) {
//   const coinsTally = coinsArray.reduce(function (coinsFinal, coinsArray) {
//     coinsFinal[coinsArray] = (coinsFinal[coinsArray] || 0) + 1;
//     return coinsFinal;
//   });
// }

// counter(amountTocoins(499, [25, 10, 5, 1]));

// > toDos
// ["hike", "go out to eat", "swim", "play games", "hike", "cook meals", "sleep", "swim", "play games", "hike", "swim", "play games"]

// const toDoTally = toDos.reduce(function(voteTally, toDo) {
//   voteTally[toDo] = (voteTally[toDo] || 0) + 1;
//   return voteTally;
// }, {});
// toDos = coins
// toDoTally = coinsTally
// voteTally = coinsFinal
