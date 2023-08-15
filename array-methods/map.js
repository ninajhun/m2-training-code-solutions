const prices = [42.42, 10, 28.2234, 3.2, 5, 12];

const priceObjs = prices.map((price) => {
  return {
    price,
    salePrice: price / 2,
  };
});

console.log('priceObjs: ', priceObjs);

const formattedPrice = prices.map((price) => `$${price.toFixed(2)}`);
console.log('formattedPrices: ', formattedPrice);
