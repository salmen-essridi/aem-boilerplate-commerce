// Checkout Page Composition Story
// CSS is imported via preview.js from /styles/page-layouts.css and /styles/dropin-base.css
import { mockProduct } from '../dropins/mockData.js';

export default {
  title: 'Pages/Checkout Page',
  tags: ['autodocs'],
  parameters: {
    layout: 'fullscreen',
    docs: {
      description: {
        component: `
Full page composition showing the Checkout page with shipping, payment, and order summary.
All styles use design tokens from the theme - changes to main CSS will be reflected here.
        `,
      },
    },
  },
};

const formatPrice = (amount, currency = 'USD') => {
  return new Intl.NumberFormat('en-US', { style: 'currency', currency }).format(amount);
};

// Checkout Page
export const CheckoutPage = {
  name: 'Checkout Page',
  render: () => {
    const element = document.createElement('div');
    element.className = 'page-layout';
    element.innerHTML = `
      <!-- Header -->
      <header class="checkout-header">
        <div class="checkout-header__inner">
          <a href="#" class="checkout-header__logo">ACME Store</a>
          <div class="checkout-header__secure">
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
              <rect x="3" y="11" width="18" height="11" rx="2" ry="2"></rect>
              <path d="M7 11V7a5 5 0 0 1 10 0v4"></path>
            </svg>
            Secure Checkout
          </div>
        </div>
      </header>

      <!-- Main Content -->
      <main class="page-main">
        <div class="checkout-container">
          <div class="checkout-steps">
            <!-- Shipping Address -->
            <div class="checkout-step">
              <div class="checkout-step__header">
                <span class="checkout-step__number">1</span>
                <h2 class="checkout-step__title">Shipping Address</h2>
              </div>
              <div class="checkout-step__content">
                <div class="checkout-form__row">
                  <div class="checkout-form__field">
                    <label class="checkout-form__label">First Name *</label>
                    <input type="text" class="checkout-form__input" value="John" />
                  </div>
                  <div class="checkout-form__field">
                    <label class="checkout-form__label">Last Name *</label>
                    <input type="text" class="checkout-form__input" value="Doe" />
                  </div>
                </div>
                <div class="checkout-form__field">
                  <label class="checkout-form__label">Street Address *</label>
                  <input type="text" class="checkout-form__input" value="123 Main Street" />
                </div>
                <div class="checkout-form__field">
                  <label class="checkout-form__label">Apt, Suite, etc. (optional)</label>
                  <input type="text" class="checkout-form__input" value="Apt 4B" />
                </div>
                <div class="checkout-form__row">
                  <div class="checkout-form__field">
                    <label class="checkout-form__label">City *</label>
                    <input type="text" class="checkout-form__input" value="New York" />
                  </div>
                  <div class="checkout-form__field">
                    <label class="checkout-form__label">State *</label>
                    <input type="text" class="checkout-form__input" value="NY" />
                  </div>
                </div>
                <div class="checkout-form__row">
                  <div class="checkout-form__field">
                    <label class="checkout-form__label">ZIP Code *</label>
                    <input type="text" class="checkout-form__input" value="10001" />
                  </div>
                  <div class="checkout-form__field">
                    <label class="checkout-form__label">Phone *</label>
                    <input type="text" class="checkout-form__input" value="(555) 123-4567" />
                  </div>
                </div>
              </div>
            </div>

            <!-- Shipping Method -->
            <div class="checkout-step">
              <div class="checkout-step__header">
                <span class="checkout-step__number">2</span>
                <h2 class="checkout-step__title">Shipping Method</h2>
              </div>
              <div class="checkout-step__content">
                <div class="shipping-options">
                  <label class="shipping-option shipping-option--selected">
                    <input type="radio" name="shipping" checked />
                    <div class="shipping-option__info">
                      <p class="shipping-option__name">Standard Shipping</p>
                      <p class="shipping-option__time">5-7 business days</p>
                    </div>
                    <span class="shipping-option__price">${formatPrice(9.99)}</span>
                  </label>
                  <label class="shipping-option">
                    <input type="radio" name="shipping" />
                    <div class="shipping-option__info">
                      <p class="shipping-option__name">Express Shipping</p>
                      <p class="shipping-option__time">2-3 business days</p>
                    </div>
                    <span class="shipping-option__price">${formatPrice(19.99)}</span>
                  </label>
                  <label class="shipping-option">
                    <input type="radio" name="shipping" />
                    <div class="shipping-option__info">
                      <p class="shipping-option__name">Next Day Delivery</p>
                      <p class="shipping-option__time">Next business day</p>
                    </div>
                    <span class="shipping-option__price">${formatPrice(29.99)}</span>
                  </label>
                </div>
              </div>
            </div>

            <!-- Payment -->
            <div class="checkout-step">
              <div class="checkout-step__header">
                <span class="checkout-step__number">3</span>
                <h2 class="checkout-step__title">Payment</h2>
              </div>
              <div class="checkout-step__content">
                <div class="payment-cards">
                  <div class="payment-card"></div>
                  <div class="payment-card"></div>
                  <div class="payment-card"></div>
                  <div class="payment-card"></div>
                </div>
                <div class="checkout-form__field">
                  <label class="checkout-form__label">Card Number *</label>
                  <input type="text" class="checkout-form__input" placeholder="1234 5678 9012 3456" />
                </div>
                <div class="checkout-form__row">
                  <div class="checkout-form__field">
                    <label class="checkout-form__label">Expiration Date *</label>
                    <input type="text" class="checkout-form__input" placeholder="MM / YY" />
                  </div>
                  <div class="checkout-form__field">
                    <label class="checkout-form__label">CVV *</label>
                    <input type="text" class="checkout-form__input" placeholder="123" />
                  </div>
                </div>
                <div class="checkout-form__field">
                  <label class="checkout-form__label">Name on Card *</label>
                  <input type="text" class="checkout-form__input" placeholder="John Doe" />
                </div>
              </div>
            </div>
          </div>

          <!-- Order Summary -->
          <div class="checkout-summary">
            <h2 class="checkout-summary__title">Order Summary</h2>
            <div class="checkout-summary__items">
              <div class="checkout-summary__item">
                <img src="${mockProduct.images[0].url}" class="checkout-summary__item-image" />
                <div class="checkout-summary__item-details">
                  <p class="checkout-summary__item-name">${mockProduct.name}</p>
                  <p class="checkout-summary__item-variant">Size: M | Qty: 1</p>
                </div>
                <span class="checkout-summary__item-price">${formatPrice(mockProduct.price)}</span>
              </div>
              <div class="checkout-summary__item">
                <img src="${mockProduct.images[0].url}" class="checkout-summary__item-image" />
                <div class="checkout-summary__item-details">
                  <p class="checkout-summary__item-name">Classic Denim Jacket</p>
                  <p class="checkout-summary__item-variant">Size: L | Qty: 1</p>
                </div>
                <span class="checkout-summary__item-price">${formatPrice(89.99)}</span>
              </div>
            </div>
            <div class="checkout-summary__row">
              <span>Subtotal</span>
              <span>${formatPrice(234.98)}</span>
            </div>
            <div class="checkout-summary__row">
              <span>Shipping</span>
              <span>${formatPrice(9.99)}</span>
            </div>
            <div class="checkout-summary__row">
              <span>Tax</span>
              <span>${formatPrice(19.60)}</span>
            </div>
            <div class="checkout-summary__row checkout-summary__row--discount">
              <span>Discount (SAVE20)</span>
              <span>-${formatPrice(20.00)}</span>
            </div>
            <div class="checkout-summary__total">
              <span>Total</span>
              <span>${formatPrice(244.57)}</span>
            </div>
            <div class="checkout-summary__actions">
              <button class="dropin-button dropin-button--primary">Place Order</button>
            </div>
          </div>
        </div>
      </main>

      <!-- Footer -->
      <footer class="checkout-footer">
        <div class="checkout-footer__links">
          <a href="#">Privacy Policy</a>
          <a href="#">Terms of Service</a>
          <a href="#">Contact Us</a>
        </div>
        <p class="checkout-footer__copyright">© 2024 ACME Store. All rights reserved.</p>
      </footer>
    `;
    return element;
  },
};
