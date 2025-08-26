class ProductsPage {
  constructor(page) {
    this.page = page;
    this.sortDropdown = '[data-test="product-sort-container"]';
    this.inventoryItems = '.inventory_item';
    this.priceTag = '.inventory_item_price';
    this.itemName = '.inventory_item_name';
    this.addBtn = '.btn_inventory';
    this.cartIcon = '.shopping_cart_link';
    this.lowestPriceOption = this.page.locator('.inventory_item_price').nth(0);
    this.highestPriceOption = this.page.locator('.inventory_item_price').nth(5);
  }

  async sortByLowToHigh() {
    await this.page.selectOption(this.sortDropdown, 'lohi');
  }


  async addLowestAnsHighestPricedItemsToCart() {
    const addToCartButtons = await this.page.$$('button.btn_inventory');
    await addToCartButtons[0].click();
    await addToCartButtons[addToCartButtons.length - 1].click();
  }

  async goToCart() {
    await this.page.click(this.cartIcon);
  }
}
module.exports = { ProductsPage };
