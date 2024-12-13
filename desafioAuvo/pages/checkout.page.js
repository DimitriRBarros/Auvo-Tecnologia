class CheckoutPage {
  constructor(page) {
    this.page = page;
    this.firstNameInput = "#first-name";
    this.lastNameInput = "#last-name";
    this.postalCodeInput = "#postal-code";
    this.continueButton = "#continue";
    this.finishButton = "#finish";
    this.confirmationMessage = ".complete-header";
  }

  async fillCheckoutDetails(firstName, lastName, postalCode) {
    await this.page.fill(this.firstNameInput, firstName);
    await this.page.fill(this.lastNameInput, lastName);
    await this.page.fill(this.postalCodeInput, postalCode);
    await this.page.click(this.continueButton);
  }

  async completeCheckout() {
    await this.page.click(this.finishButton);
  }

  async validateConfirmation() {
    const message = await this.page.textContent(this.confirmationMessage);
    return message.includes("Thank you for your order!");
  }
}

module.exports = CheckoutPage;
