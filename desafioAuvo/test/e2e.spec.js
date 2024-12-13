const { test, expect } = require("@playwright/test");
const LoginPage = require("../pages/login.page");
const ProductsPage = require("../pages/products.page");
const CartPage = require("../pages/cart.page");
const CheckoutPage = require("../pages/checkout.page");

test.describe("E-commerce Flow", () => {
  let loginPage, productsPage, cartPage, checkoutPage;

  test.beforeEach(async ({ page }) => {
    loginPage = new LoginPage(page);
    productsPage = new ProductsPage(page);
    cartPage = new CartPage(page);
    checkoutPage = new CheckoutPage(page);
  });

  test("Complete E-commerce Flow", async ({ page }) => {
    // Login
    await loginPage.navigate();
    await loginPage.login("standard_user", "secret_sauce");

    // Produto
    await productsPage.validateProduct("Sauce Labs Backpack", "$29.99");
    await productsPage.addToCart();

    // Carrinho
    await cartPage.navigateToCart();
    expect(
      await cartPage.validateCartItem("Sauce Labs Backpack", "$29.99")
    ).toBeTruthy();
    await cartPage.proceedToCheckout();

    // Checkout
    await checkoutPage.fillCheckoutDetails("Dimitri", "Barros", "06440260");
    await checkoutPage.completeCheckout();
    expect(await checkoutPage.validateConfirmation()).toBeTruthy();
  });
});
