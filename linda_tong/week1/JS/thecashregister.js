// Write a function called cashRegister that takes a shopping cart object. The object contains item names and prices (itemName: itemPrice). The function should return the total price of the shopping cart.
//
// // Output
// cashRegister(cartForParty)); // 60.55
// Raw

const cartForParty = {
  banana: 1.25,
  handkerchief: .99,
  Tshirt: 25.01,
  apple: 0.60,
  nalgene: 10.34,
  proteinShake: 22.36
};

const cashRegister = function(cart) {
  let sum = 0;
  let prices = Object.values(cart)
  for (let i = 0; i < prices.length; i++) {
    sum += prices[i];
  }
  return sum;
};

console.log(cashRegister(cartForParty));
