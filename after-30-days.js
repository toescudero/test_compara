const { FullInsurance, MegaInsurance, SpecialFullInsurance, SuperSaleInsurance, Product, CarInsurance } = require("./src/coTest");

const productsAtDayZero = [
  new Product('Medium Coverage', 10, 20),
  new FullInsurance('Full Coverage', 2, 0),
  new Product('Low Coverage', 5, 7),
  new MegaInsurance('Mega Coverage', 0, 80),
  new MegaInsurance('Mega Coverage', -1, 80),
  new SpecialFullInsurance('Special Full Coverage', 15, 20),
  new SpecialFullInsurance('Special Full Coverage', 10, 49),
  new SpecialFullInsurance('Special Full Coverage', 5, 49),
  new SuperSaleInsurance('Super Sale', 3, 6),
];

const carInsurance = new CarInsurance(productsAtDayZero);
const productPrinter = function (product) {
  console.log(`${product.name}, ${product.sellIn}, ${product.price}`);
};

for (let i = 1; i <= 30; i += 1) {
  console.log(`Day ${i}`);
  console.log('name, sellIn, price');
  carInsurance.updatePrice().forEach(productPrinter);
  console.log('');
}