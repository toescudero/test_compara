class Product {
  constructor(name, sellIn, price) {
    this.name = name;
    this.sellIn = sellIn;
    this.price = price;
  }
  updatePrice() {
      if (this.price > 0 && this.sellIn >= 0){
        this.price -= 1;
      }else if (this.price > 0 && this.sellIn < 0){
        this.price -= 2;
      }
      this.sellIn -= 1;
    }
}



class CarInsurance {
  constructor(products = []) {
    this.products = products;
  }
  updatePrice() {
    for (var i = 0; i < this.products.length; i++) {
      this.products[i].updatePrice()
    }
    return this.products;
  }
}

class MegaInsurance extends Product {
  updatePrice() {
      return this;
    }
}
class SuperSaleInsurance extends Product {
  updatePrice() {
    if (this.price > 0 && this.sellIn > 0){
      this.price -= 2;
    }else if (this.price > 0 && this.sellIn < 0){
      this.price -= 4;
    }
    this.sellIn -= 1;
  }
}
class SpecialFullInsurance extends Product {
  updatePrice() {
    if (this.price != null){
      if ( (this.price < 50 && this.sellIn > 10) || (this.price == 49 && this.sellIn > 5) ){
        this.price += 1;
      }else if ((this.price < 49 && this.sellIn > 5) || (this.price == 48 && this.sellIn <= 5))  {
        this.price += 2;
      }else if (this.price < 48 && this.sellIn <= 5){
        this.price += 3;
      }else if (this.sellIn == 0){
        this.price = null;
      }
      if (this.sellIn > 0){
        this.sellIn =- 1;
      }
    }
  }
}
class FullInsurance extends Product {
  updatePrice() {
    if (this.price < 50 && this.sellIn >= 0){
      this.price += 2;
    }else if (this.price < 50 && this.sellIn < 0){
      this.price += 4;
    }
    this.sellIn -= 1;
  }
}
module.exports = {
  Product,
  CarInsurance,
  SuperSaleInsurance,
  SpecialFullInsurance,
  MegaInsurance,
  FullInsurance
}
