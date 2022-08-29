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

function counter(coinsArray) {
  const coinsTally = coinsArray.reduce(function (coinsFinal, coinsArray) {
    coinsFinal[coinsArray] = (coinsFinal[coinsArray] || 0) + 1;
    return coinsFinal;
  });
}

counter(amountTocoins(499, [25, 10, 5, 1]));

// > toDos
// ["hike", "go out to eat", "swim", "play games", "hike", "cook meals", "sleep", "swim", "play games", "hike", "swim", "play games"]

// const toDoTally = toDos.reduce(function(voteTally, toDo) {
//   voteTally[toDo] = (voteTally[toDo] || 0) + 1;
//   return voteTally;
// }, {});
// toDos = coins
// toDoTally = coinsTally
// voteTally = coinsFinal
