const expect = require('chai').expect;

const coTest = require('../src/coTest');
const CarInsurance = coTest.CarInsurance;
const Product = coTest.Product;
const { FullInsurance, MegaInsurance, SpecialFullInsurance, SuperSaleInsurance } = require("../src/coTest");

describe("Co Test", function() {
  it("should insurance update", function() {
    const coTest = new CarInsurance([
      new Product('Medium Coverage', 10, 20),                    // 0
      new FullInsurance('Full Coverage', 2, 0),                  // 1
      new Product('Low Coverage', -1, 7),                         // 2
      new MegaInsurance('Mega Coverage', 0, 80),                 // 3
      new SpecialFullInsurance('Special Full Coverage', 2, 30),  // 4
      new SpecialFullInsurance('Special Full Coverage', 9, 20),  // 5
      new SpecialFullInsurance('Special Full Coverage', 11, 49), // 6
      new SpecialFullInsurance('Special Full Coverage', 11, 24), // 7
      new SpecialFullInsurance('Special Full Coverage', 2, 48),  // 8
      new SpecialFullInsurance('Special Full Coverage', 15, 50), // 9
      new SpecialFullInsurance('Special Full Coverage', 9, 49),  // 10
      new SuperSaleInsurance('Super Sale', 3, 6),                // 11
      new SuperSaleInsurance('Super Sale', -1, 6),                // 12
    ]);
    const products = coTest.updatePrice();
    expect(products[0].price).equal(19);
    expect(products[0].sellIn).equal(9);
    expect(products[1].price).equal(2);
    expect(products[2].price).equal(5);
    expect(products[3].price).equal(80);
    expect(products[4].price).equal(33);
    expect(products[5].price).equal(22);
    expect(products[6].price).equal(50);
    expect(products[7].price).equal(25);
    expect(products[8].price).equal(50);
    expect(products[9].price).equal(50);
    expect(products[10].price).equal(50);
    expect(products[11].price).equal(4);
    expect(products[12].price).equal(2);
  });
});
