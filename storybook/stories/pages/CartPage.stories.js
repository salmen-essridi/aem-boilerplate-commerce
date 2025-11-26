// Cart Page Composition Story
// CSS is imported via preview.js from /styles/page-layouts.css and /styles/dropin-base.css
import { mockProduct } from '../dropins/mockData.js';

export default {
  title: 'Pages/Cart Page',
  tags: ['autodocs'],
  parameters: {
    layout: 'fullscreen',
    docs: {
      description: {
        component: `
Full page composition showing the Cart page with items and summary.
All styles use design tokens from the theme - changes to main CSS will be reflected here.
        `,
      },
    },
  },
};

const formatPrice = (amount, currency = 'USD') => {
  return new Intl.NumberFormat('en-US', { style: 'currency', currency }).format(amount);
};

// Cart Page
export const CartPage = {
  name: 'Cart Page',
  render: () => {
    const element = document.createElement('div');
    element.className = 'page-layout';
    element.innerHTML = `
      <!-- Header -->
      <header class="page-header">
        <div class="page-header__inner">
          <a href="#" class="page-header__logo">ACME Store</a>
          <nav class="page-header__nav">
            <a href="#">Women</a>
            <a href="#">Men</a>
            <a href="#">Accessories</a>
            <a href="#">Sale</a>
          </nav>
          <div class="page-header__actions">
            <svg class="page-header__icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
              <circle cx="11" cy="11" r="8"></circle>
              <line x1="21" y1="21" x2="16.65" y2="16.65"></line>
            </svg>
            <svg class="page-header__icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
              <path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2"></path>
              <circle cx="12" cy="7" r="4"></circle>
            </svg>
            <svg class="page-header__icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
              <circle cx="9" cy="21" r="1"></circle>
              <circle cx="20" cy="21" r="1"></circle>
              <path d="M1 1h4l2.68 13.39a2 2 0 0 0 2 1.61h9.72a2 2 0 0 0 2-1.61L23 6H6"></path>
            </svg>
          </div>
        </div>
      </header>

      <!-- Main Content -->
      <main class="page-main">
        <div class="cart-container">
          <div class="cart-items">
            <h1 class="page-title--small">Shopping Cart</h1>
            <p class="page-subtitle">3 items in your cart</p>

            <div class="cart-item">
              <img src="${mockProduct.images[0].url}" class="cart-item__image" />
              <div class="cart-item__details">
                <h3 class="cart-item__name">${mockProduct.name}</h3>
                <p class="cart-item__variant">Size: M | Color: Navy Blue</p>
                <div class="cart-item__quantity">
                  <button class="cart-item__qty-btn">-</button>
                  <span class="cart-item__qty-value">1</span>
                  <button class="cart-item__qty-btn">+</button>
                </div>
                <button class="cart-item__remove">Remove</button>
              </div>
              <div class="cart-item__price">
                <p class="cart-item__unit-price">${formatPrice(mockProduct.price)} each</p>
                <p class="cart-item__total-price">${formatPrice(mockProduct.price)}</p>
              </div>
            </div>

            <div class="cart-item">
              <img src="${mockProduct.images[0].url}" class="cart-item__image" />
              <div class="cart-item__details">
                <h3 class="cart-item__name">Classic Denim Jacket</h3>
                <p class="cart-item__variant">Size: L | Color: Indigo</p>
                <div class="cart-item__quantity">
                  <button class="cart-item__qty-btn">-</button>
                  <span class="cart-item__qty-value">1</span>
                  <button class="cart-item__qty-btn">+</button>
                </div>
                <button class="cart-item__remove">Remove</button>
              </div>
              <div class="cart-item__price">
                <p class="cart-item__unit-price">${formatPrice(89.99)} each</p>
                <p class="cart-item__total-price">${formatPrice(89.99)}</p>
              </div>
            </div>

            <div class="cart-item">
              <img src="${mockProduct.images[0].url}" class="cart-item__image" />
              <div class="cart-item__details">
                <h3 class="cart-item__name">Leather Belt</h3>
                <p class="cart-item__variant">Size: 34 | Color: Brown</p>
                <div class="cart-item__quantity">
                  <button class="cart-item__qty-btn">-</button>
                  <span class="cart-item__qty-value">2</span>
                  <button class="cart-item__qty-btn">+</button>
                </div>
                <button class="cart-item__remove">Remove</button>
              </div>
              <div class="cart-item__price">
                <p class="cart-item__unit-price">${formatPrice(45)} each</p>
                <p class="cart-item__total-price">${formatPrice(90)}</p>
              </div>
            </div>
          </div>

          <div class="cart-summary">
            <h2 class="cart-summary__title">Order Summary</h2>
            <div class="cart-summary__row">
              <span>Subtotal (4 items)</span>
              <span>${formatPrice(324.98)}</span>
            </div>
            <div class="cart-summary__row">
              <span>Shipping</span>
              <span>Calculated at checkout</span>
            </div>
            <div class="cart-summary__row">
              <span>Tax</span>
              <span>Calculated at checkout</span>
            </div>
            <div class="cart-summary__row cart-summary__row--discount">
              <span>Discount (SAVE20)</span>
              <span>-${formatPrice(20)}</span>
            </div>
            <div class="cart-summary__total">
              <span>Estimated Total</span>
              <span>${formatPrice(304.98)}</span>
            </div>
            <div class="cart-summary__actions">
              <button class="dropin-button dropin-button--primary">Proceed to Checkout</button>
              <button class="dropin-button dropin-button--secondary">Continue Shopping</button>
            </div>
          </div>
        </div>
      </main>

      <!-- Footer -->
      <footer class="page-footer">
        <div class="page-footer__inner">
          <div>
            <h4 class="page-footer__title">Shop</h4>
            <ul class="page-footer__links">
              <li><a href="#">New Arrivals</a></li>
              <li><a href="#">Best Sellers</a></li>
              <li><a href="#">Sale</a></li>
            </ul>
          </div>
          <div>
            <h4 class="page-footer__title">Help</h4>
            <ul class="page-footer__links">
              <li><a href="#">Shipping</a></li>
              <li><a href="#">Returns</a></li>
              <li><a href="#">FAQ</a></li>
            </ul>
          </div>
          <div>
            <h4 class="page-footer__title">Account</h4>
            <ul class="page-footer__links">
              <li><a href="#">My Account</a></li>
              <li><a href="#">Orders</a></li>
              <li><a href="#">Wishlist</a></li>
            </ul>
          </div>
          <div>
            <h4 class="page-footer__title">About</h4>
            <ul class="page-footer__links">
              <li><a href="#">Our Story</a></li>
              <li><a href="#">Careers</a></li>
              <li><a href="#">Contact</a></li>
            </ul>
          </div>
        </div>
        <p class="page-footer__bottom">© 2024 ACME Store. All rights reserved.</p>
      </footer>
    `;
    return element;
  },
};

// Empty Cart
export const EmptyCart = {
  name: 'Empty Cart',
  render: () => {
    const element = document.createElement('div');
    element.className = 'page-layout';
    element.innerHTML = `
      <!-- Header -->
      <header class="page-header">
        <div class="page-header__inner">
          <a href="#" class="page-header__logo">ACME Store</a>
          <nav class="page-header__nav">
            <a href="#">Women</a>
            <a href="#">Men</a>
            <a href="#">Accessories</a>
            <a href="#">Sale</a>
          </nav>
          <div class="page-header__actions">
            <svg class="page-header__icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
              <circle cx="11" cy="11" r="8"></circle>
              <line x1="21" y1="21" x2="16.65" y2="16.65"></line>
            </svg>
            <svg class="page-header__icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
              <path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2"></path>
              <circle cx="12" cy="7" r="4"></circle>
            </svg>
            <svg class="page-header__icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
              <circle cx="9" cy="21" r="1"></circle>
              <circle cx="20" cy="21" r="1"></circle>
              <path d="M1 1h4l2.68 13.39a2 2 0 0 0 2 1.61h9.72a2 2 0 0 0 2-1.61L23 6H6"></path>
            </svg>
          </div>
        </div>
      </header>

      <!-- Main Content -->
      <main class="page-main">
        <div class="page-container">
          <h1 class="page-title--small">Shopping Cart</h1>

          <div class="empty-state">
            <svg class="empty-state__icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5">
              <circle cx="9" cy="21" r="1"></circle>
              <circle cx="20" cy="21" r="1"></circle>
              <path d="M1 1h4l2.68 13.39a2 2 0 0 0 2 1.61h9.72a2 2 0 0 0 2-1.61L23 6H6"></path>
            </svg>
            <h2 class="empty-state__title">Your cart is empty</h2>
            <p class="empty-state__text">Looks like you haven't added anything to your cart yet</p>
            <button class="dropin-button dropin-button--primary">Start Shopping</button>
          </div>
        </div>
      </main>

      <!-- Footer -->
      <footer class="page-footer">
        <div class="page-footer__inner">
          <div>
            <h4 class="page-footer__title">Shop</h4>
            <ul class="page-footer__links">
              <li><a href="#">New Arrivals</a></li>
              <li><a href="#">Best Sellers</a></li>
              <li><a href="#">Sale</a></li>
            </ul>
          </div>
          <div>
            <h4 class="page-footer__title">Help</h4>
            <ul class="page-footer__links">
              <li><a href="#">Shipping</a></li>
              <li><a href="#">Returns</a></li>
              <li><a href="#">FAQ</a></li>
            </ul>
          </div>
          <div>
            <h4 class="page-footer__title">Account</h4>
            <ul class="page-footer__links">
              <li><a href="#">My Account</a></li>
              <li><a href="#">Orders</a></li>
              <li><a href="#">Wishlist</a></li>
            </ul>
          </div>
          <div>
            <h4 class="page-footer__title">About</h4>
            <ul class="page-footer__links">
              <li><a href="#">Our Story</a></li>
              <li><a href="#">Careers</a></li>
              <li><a href="#">Contact</a></li>
            </ul>
          </div>
        </div>
        <p class="page-footer__bottom">© 2024 ACME Store. All rights reserved.</p>
      </footer>
    `;
    return element;
  },
};
