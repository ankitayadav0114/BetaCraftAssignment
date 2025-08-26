class CheckoutPage {
  constructor(page) {
    this.page = page;
    this.firstName = '[data-test="firstName"]';
    this.lastName = '[data-test="lastName"]';
    this.postalCode = '[data-test="postalCode"]';
    this.continueBtn = '[data-test="continue"]';
    this.summaryTotal = '.summary_subtotal_label';
    this.finishBtn = '[data-test="finish"]';
    this.completeHeader = '.complete-header';
  }
  async enterInfo(first, last, postal) {
    await this.page.fill(this.firstName, first);
    await this.page.fill(this.lastName, last);
    await this.page.fill(this.postalCode, postal);
    await this.page.click(this.continueBtn);
  }
  async getItemTotal() {
  const firstPriceText = await this.page.locator('.inventory_item_price').nth(0).textContent();
  const firstPrice = parseFloat(firstPriceText.replace('$', ''));
  const secondPriceText = await this.page.locator('.inventory_item_price').nth(1).textContent();
  const secondPrice = parseFloat(secondPriceText.replace('$', ''));
  const expectedTotal = firstPrice + secondPrice;
  const displayedItemTotal = await this.page.locator('.summary_subtotal_label').textContent();
  const displayedValue = parseFloat(displayedItemTotal.replace('Item total: $', ''));

   return {
      displayedValue: displayedValue,
      expectedTotal: expectedTotal
    };
  }


  async finishOrder() {
    await this.page.click(this.finishBtn);
  }
  async getCompletionMsg() {
    return await this.page.textContent(this.completeHeader);
  }
}
module.exports = { CheckoutPage };
