class CartPage {
  constructor(page) {
    this.page = page;
    this.cartItemTitle = ".inventory_item_name";
    this.cartItemPrice = ".inventory_item_price";
    this.checkoutButton = "#checkout";
  }

  async navigateToCart() {
    await this.page.click(".shopping_cart_link");
  }

  async validateCartItem(title, price) {
    const itemTitle = await this.page.textContent(this.cartItemTitle);
    const itemPrice = await this.page.textContent(this.cartItemPrice);

    return itemTitle.includes(title) && itemPrice.includes(price);
  }

  async proceedToCheckout() {
    await this.page.click(this.checkoutButton);
  }
}

module.exports = CartPage;
