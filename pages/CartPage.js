class CartPage {
  constructor(page) {
    this.page = page;
    this.cartItems = '.cart_item';
    this.itemName = '.inventory_item_name';
    this.checkoutBtn = '[data-test="checkout"]';
  }
  
  async getCartItems() {
    const items = await this.page.$$(this.cartItems);
    return Promise.all(items.map(async (item) => {
      return await item.$eval(this.itemName, el => el.textContent);
    }));
  }

  async checkout() {
    await this.page.click(this.checkoutBtn);
  }
}

module.exports = { CartPage };
