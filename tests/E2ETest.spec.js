const { test, expect } = require('@playwright/test');
const { LoginPage } = require('../pages/LoginPage');
const { ProductsPage } = require('../pages/ProductsPage');
const { CartPage } = require('../pages/CartPage');
const { CheckoutPage } = require('../pages/CheckoutPage');
const userData = require('../data/userData.json');

test.describe('SauceDemo E2E', () => {
  test('Full happy path scenario', async ({ page }) => {
    const login = new LoginPage(page);
    const products = new ProductsPage(page);
    const cart = new CartPage(page);
    const checkout = new CheckoutPage(page);

    await login.navigate();
    
    await login.login(userData.validUser.username, userData.validUser.password);

    // Sort products low to high
    await products.sortByLowToHigh();

    // Add cheapest and most expensive
    await products.addLowestAnsHighestPricedItemsToCart();
    
    // Verify cart items count and names
    await products.goToCart();
    const cartItemNames = await cart.getCartItems();
    expect(cartItemNames.length).toBe(2);
    

    // Checkout
    await cart.checkout();
    await checkout.enterInfo(
      userData.checkout.firstName, 
      userData.checkout.lastName, 
      userData.checkout.postalCode
    );

    // Verify item total
      const { displayedValue, expectedTotal } = await checkout.getItemTotal();
      expect(displayedValue).toBe(expectedTotal);


    // Finish and assert confirmation
      checkout.finishOrder();
      expect(await checkout.getCompletionMsg()).toContain('Thank you'); 
  });



  test('Edge: Invalid password shows error', async ({ page }) => {
    const login = new LoginPage(page);

    await login.navigate();
    await login.login(userData.invalidUser.username, userData.invalidUser.password);

    expect(await login.getError()).toContain('Username and password do not match'); 
  });

  
});


