class ProductsPage {
  constructor(page) {
    this.page = page;
    this.productTitle = ".inventory_item_name";
    this.productPrice = ".inventory_item_price";
    this.addToCartButton = ".btn_inventory";
  }

  async validateProduct(title, price) {
    const productTitle = await this.page.textContent(this.productTitle);
    const productPrice = await this.page.textContent(this.productPrice);
    return productTitle.includes(title) && productPrice.includes(price);
  }

  async addToCart() {
    await this.page.click(this.addToCartButton);
  }
}

module.exports = ProductsPage;
