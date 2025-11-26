// Commerce Cart Block Stories
// CSS loaded from main project: /blocks/commerce-cart/commerce-cart.css
// HTML structure matches blocks/commerce-cart/commerce-cart.js

import { mockProduct } from '../dropins/mockData.js';

export default {
  title: 'Blocks/Commerce Cart',
  tags: ['autodocs'],
  parameters: {
    docs: {
      description: {
        component: `
Commerce Cart block - displays shopping cart with items and order summary.

**CSS Location:** \`/blocks/commerce-cart/commerce-cart.css\`

**HTML Structure from JS:**
\`\`\`html
<div class="commerce-cart">
  <div class="cart__notification brand-notification"></div>
  <div class="cart__wrapper brand-layout">
    <div class="cart__left-column brand-main-column">
      <h2 class="brand-section-title">Shopping Bag</h2>
      <div class="cart__list brand-items-container"></div>
    </div>
    <div class="cart__right-column brand-summary-column">
      <h3 class="brand-summary-title">Order Summary</h3>
      <div class="cart__order-summary brand-totals"></div>
      <div class="cart__gift-options brand-extras"></div>
    </div>
  </div>
  <div class="cart__empty-cart brand-empty-bag"></div>
</div>
\`\`\`

Agency can edit the CSS file directly in the main project.
        `,
      },
    },
  },
};

const formatPrice = (value, currency = 'USD') => {
  return new Intl.NumberFormat('en-US', { style: 'currency', currency }).format(value);
};

// Cart with Items - Using actual HTML structure from commerce-cart.js
export const CartWithItems = {
  name: 'Cart with Items',
  render: () => {
    const element = document.createElement('div');
    element.className = 'commerce-cart';
    element.innerHTML = `
      <!-- @block:commerce-cart-0 -->
      <div class="cart__notification brand-notification"></div>
      <div class="cart__wrapper brand-layout">
        <div class="cart__left-column brand-main-column">
          <h2 class="brand-section-title">Shopping Bag</h2>
          <div class="cart__list brand-items-container">
            <!-- Cart Item rendered by dropin -->
            <div class="dropin-cart-item">
              <div class="dropin-cart-item__image">
                <a href="/products/sample-product/SKU123">
                  <img src="${mockProduct.images[0].url}" alt="${mockProduct.name}" />
                </a>
              </div>
              <div class="dropin-cart-item__content">
                <div class="dropin-cart-item__title">${mockProduct.name}</div>
                <div class="dropin-cart-item__sku">SKU: ${mockProduct.sku}</div>
                <div class="dropin-cart-item__options">Size: M | Color: Blue</div>
                <div class="dropin-cart-item__quantity">
                  <button class="dropin-incrementer__button">-</button>
                  <span class="dropin-incrementer__value">1</span>
                  <button class="dropin-incrementer__button">+</button>
                </div>
                <div class="dropin-cart-item__footer">
                  <div class="cart-item-edit-link">
                    <button class="dropin-button dropin-button--tertiary">Edit</button>
                  </div>
                  <div class="cart__action--wishlist-toggle">
                    <button class="dropin-button dropin-button--tertiary">Add to Wishlist</button>
                  </div>
                </div>
              </div>
              <div class="dropin-cart-item__price">${formatPrice(mockProduct.prices.final.amount)}</div>
            </div>
          </div>
        </div>
        <div class="cart__right-column brand-summary-column">
          <h3 class="brand-summary-title">Order Summary</h3>
          <div class="cart__order-summary brand-totals">
            <div class="dropin-order-summary">
              <div class="dropin-order-summary__line">
                <span>Subtotal</span>
                <span>${formatPrice(mockProduct.prices.final.amount)}</span>
              </div>
              <div class="dropin-order-summary__line">
                <span>Shipping</span>
                <span>Calculated at checkout</span>
              </div>
              <div class="dropin-order-summary__total">
                <span>Total</span>
                <span>${formatPrice(mockProduct.prices.final.amount)}</span>
              </div>
              <button class="dropin-button dropin-button--primary">Proceed to Checkout</button>
            </div>
          </div>
          <div class="cart__gift-options brand-extras">
            <a href="#">Gift Options</a>
          </div>
        </div>
      </div>
      <div class="cart__empty-cart brand-empty-bag" hidden>
        <p class="brand-empty-message">Your shopping bag is empty</p>
      </div>
      <!-- @block:commerce-cart-0:end -->
    `;
    return element;
  },
};

// Empty Cart
export const EmptyCart = {
  name: 'Empty Cart',
  render: () => {
    const element = document.createElement('div');
    element.className = 'commerce-cart';
    element.innerHTML = `
      <!-- @block:commerce-cart-0 -->
      <div class="cart__notification brand-notification"></div>
      <div class="cart__wrapper brand-layout" hidden></div>
      <div class="cart__empty-cart brand-empty-bag">
        <div class="dropin-empty-cart">
          <svg class="dropin-empty-cart__icon" width="64" height="64" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1">
            <circle cx="9" cy="21" r="1"></circle>
            <circle cx="20" cy="21" r="1"></circle>
            <path d="M1 1h4l2.68 13.39a2 2 0 0 0 2 1.61h9.72a2 2 0 0 0 2-1.61L23 6H6"></path>
          </svg>
          <p class="brand-empty-message">Your shopping bag is empty</p>
          <button class="dropin-button dropin-button--primary">Continue Shopping</button>
        </div>
      </div>
      <!-- @block:commerce-cart-0:end -->
    `;
    return element;
  },
};

// Cart Notification (Success Alert)
export const CartNotification = {
  name: 'Cart Notification',
  render: () => {
    const element = document.createElement('div');
    element.className = 'commerce-cart';
    element.innerHTML = `
      <!-- @block:commerce-cart-0 -->
      <div class="cart__notification brand-notification">
        <div class="dropin-in-line-alert dropin-in-line-alert--success">
          <svg class="dropin-in-line-alert__icon" width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
            <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"></path>
            <polyline points="22 4 12 14.01 9 11.01"></polyline>
          </svg>
          <div class="dropin-in-line-alert__content">
            Item added to cart successfully!
          </div>
          <button class="dropin-in-line-alert__dismiss">&times;</button>
        </div>
      </div>
      <div class="cart__wrapper brand-layout">
        <div class="cart__left-column brand-main-column">
          <h2 class="brand-section-title">Shopping Bag</h2>
          <div class="cart__list brand-items-container">
            <p>Cart items would appear here...</p>
          </div>
        </div>
        <div class="cart__right-column brand-summary-column">
          <h3 class="brand-summary-title">Order Summary</h3>
          <div class="cart__order-summary brand-totals"></div>
        </div>
      </div>
      <div class="cart__empty-cart brand-empty-bag" hidden></div>
      <!-- @block:commerce-cart-0:end -->
    `;
    return element;
  },
};
