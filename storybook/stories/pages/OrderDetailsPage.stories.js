// Order Details Page Composition Story
// CSS is imported via preview.js from /styles/page-layouts.css and /styles/dropin-base.css
import { mockProduct } from '../dropins/mockData.js';

export default {
  title: 'Pages/Order Details Page',
  tags: ['autodocs'],
  parameters: {
    layout: 'fullscreen',
    docs: {
      description: {
        component: `
Full page composition showing the Order Details page with status, products, and summary.
All styles use design tokens from the theme - changes to main CSS will be reflected here.
        `,
      },
    },
  },
};

const formatPrice = (amount, currency = 'USD') => {
  return new Intl.NumberFormat('en-US', { style: 'currency', currency }).format(amount);
};

// Order Details Page
export const OrderDetailsPage = {
  name: 'Order Details Page',
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
          </nav>
          <div class="page-header__actions">
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
        <div class="order-container">
          <a href="#" class="order-back">
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
              <line x1="19" y1="12" x2="5" y2="12"></line>
              <polyline points="12 19 5 12 12 5"></polyline>
            </svg>
            Back to all orders
          </a>

          <div class="order-header">
            <div>
              <h1 class="order-title">Order #000012345</h1>
              <p class="order-date">Placed on November 15, 2024</p>
            </div>
            <div class="order-actions">
              <button class="dropin-button dropin-button--secondary">Request Return</button>
              <button class="dropin-button dropin-button--primary">Reorder</button>
            </div>
          </div>

          <div class="order-content">
            <div class="order-main">
              <!-- Order Status -->
              <div class="order-card">
                <div class="order-card__header">
                  <h2 class="order-card__title">Order Status</h2>
                  <span class="order-status__badge">Delivered</span>
                </div>
                <div class="order-card__content">
                  <div class="order-status__timeline">
                    <div class="order-status__step">
                      <div class="order-status__step-icon">✓</div>
                      <span class="order-status__step-label">Ordered</span>
                    </div>
                    <div class="order-status__step">
                      <div class="order-status__step-icon">✓</div>
                      <span class="order-status__step-label">Processing</span>
                    </div>
                    <div class="order-status__step">
                      <div class="order-status__step-icon">✓</div>
                      <span class="order-status__step-label">Shipped</span>
                    </div>
                    <div class="order-status__step">
                      <div class="order-status__step-icon">✓</div>
                      <span class="order-status__step-label">Delivered</span>
                    </div>
                  </div>
                  <p class="order-status__delivery-note">
                    Delivered on November 20, 2024 at 2:34 PM
                  </p>
                </div>
              </div>

              <!-- Order Items -->
              <div class="order-card">
                <div class="order-card__header">
                  <h2 class="order-card__title">Items (3)</h2>
                </div>
                <div class="order-card__content">
                  <div class="order-product">
                    <img src="${mockProduct.images[0].url}" class="order-product__image" />
                    <div class="order-product__details">
                      <h3 class="order-product__name">${mockProduct.name}</h3>
                      <p class="order-product__variant">Size: M | Color: Black</p>
                      <p class="order-product__qty">Qty: 1</p>
                    </div>
                    <span class="order-product__price">${formatPrice(mockProduct.price)}</span>
                  </div>
                  <div class="order-product">
                    <img src="${mockProduct.images[0].url}" class="order-product__image" />
                    <div class="order-product__details">
                      <h3 class="order-product__name">Classic Denim Jacket</h3>
                      <p class="order-product__variant">Size: L | Color: Blue</p>
                      <p class="order-product__qty">Qty: 1</p>
                    </div>
                    <span class="order-product__price">${formatPrice(89.99)}</span>
                  </div>
                  <div class="order-product">
                    <img src="${mockProduct.images[0].url}" class="order-product__image" />
                    <div class="order-product__details">
                      <h3 class="order-product__name">Canvas Sneakers</h3>
                      <p class="order-product__variant">Size: 10 | Color: White</p>
                      <p class="order-product__qty">Qty: 1</p>
                    </div>
                    <span class="order-product__price">${formatPrice(79.99)}</span>
                  </div>
                </div>
              </div>

              <!-- Addresses -->
              <div class="order-card">
                <div class="order-card__header">
                  <h2 class="order-card__title">Shipping & Billing</h2>
                </div>
                <div class="order-card__content">
                  <div class="order-addresses">
                    <div class="order-address">
                      <h3 class="order-address__title">Shipping Address</h3>
                      <p>John Doe</p>
                      <p>123 Main Street, Apt 4B</p>
                      <p>New York, NY 10001</p>
                      <p>+1 (555) 123-4567</p>
                    </div>
                    <div class="order-address">
                      <h3 class="order-address__title">Billing Address</h3>
                      <p>John Doe</p>
                      <p>123 Main Street, Apt 4B</p>
                      <p>New York, NY 10001</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div class="order-sidebar">
              <!-- Order Summary -->
              <div class="order-summary">
                <h2 class="order-summary__title">Order Summary</h2>
                <div class="order-summary__row">
                  <span>Subtotal</span>
                  <span>${formatPrice(314.97)}</span>
                </div>
                <div class="order-summary__row">
                  <span>Shipping</span>
                  <span>${formatPrice(9.99)}</span>
                </div>
                <div class="order-summary__row">
                  <span>Tax</span>
                  <span>${formatPrice(26.00)}</span>
                </div>
                <div class="order-summary__total">
                  <span>Total</span>
                  <span>${formatPrice(350.96)}</span>
                </div>
                <p class="order-summary__payment">
                  Paid with Credit Card ending in 4242
                </p>
              </div>

              <!-- Need Help -->
              <div class="order-help">
                <h2 class="order-help__title">Need Help?</h2>
                <div class="order-help__links">
                  <a href="#" class="order-help__link">Track Shipment</a>
                  <a href="#" class="order-help__link">Request a Return</a>
                  <a href="#" class="order-help__link">Contact Support</a>
                  <a href="#" class="order-help__link">Download Invoice</a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>

      <!-- Footer -->
      <footer class="page-footer">
        <div class="page-footer__inner">
          <div class="page-footer__column">
            <h4>Shop</h4>
            <ul>
              <li><a href="#">Women</a></li>
              <li><a href="#">Men</a></li>
            </ul>
          </div>
          <div class="page-footer__column">
            <h4>Help</h4>
            <ul>
              <li><a href="#">Contact Us</a></li>
              <li><a href="#">Returns</a></li>
            </ul>
          </div>
          <div class="page-footer__column">
            <h4>About</h4>
            <ul>
              <li><a href="#">Our Story</a></li>
            </ul>
          </div>
          <div class="page-footer__column">
            <h4>Connect</h4>
            <ul>
              <li><a href="#">Instagram</a></li>
            </ul>
          </div>
        </div>
        <div class="page-footer__bottom">© 2024 ACME Store</div>
      </footer>
    `;
    return element;
  },
};
