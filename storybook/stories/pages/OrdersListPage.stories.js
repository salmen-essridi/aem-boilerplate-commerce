// Orders List Page Composition Story
// CSS is imported via preview.js from /styles/page-layouts.css and /styles/dropin-base.css

export default {
  title: 'Pages/Orders List Page',
  tags: ['autodocs'],
  parameters: {
    layout: 'fullscreen',
    docs: {
      description: {
        component: `
Full page composition showing the Orders List page with all customer orders.
All styles use design tokens from the theme - changes to main CSS will be reflected here.
        `,
      },
    },
  },
};

const formatPrice = (amount, currency = 'USD') => {
  return new Intl.NumberFormat('en-US', { style: 'currency', currency }).format(amount);
};

// Orders List Page
export const OrdersListPage = {
  name: 'Orders List Page',
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
        <div class="account-container">
          <!-- Sidebar -->
          <aside class="account-sidebar">
            <ul class="account-sidebar__nav">
              <li class="account-sidebar__item">
                <a href="#" class="account-sidebar__link">Dashboard</a>
              </li>
              <li class="account-sidebar__item">
                <a href="#" class="account-sidebar__link account-sidebar__link--active">Orders</a>
              </li>
              <li class="account-sidebar__item">
                <a href="#" class="account-sidebar__link">Addresses</a>
              </li>
              <li class="account-sidebar__item">
                <a href="#" class="account-sidebar__link">Wishlist</a>
              </li>
              <li class="account-sidebar__item">
                <a href="#" class="account-sidebar__link">Settings</a>
              </li>
            </ul>
          </aside>

          <!-- Orders Content -->
          <div class="account-content">
            <h1 class="page-title--small">My Orders</h1>

            <div class="orders-filters">
              <button class="orders-filter orders-filter--active">All Orders</button>
              <button class="orders-filter">Processing</button>
              <button class="orders-filter">Shipped</button>
              <button class="orders-filter">Delivered</button>
              <button class="orders-filter">Cancelled</button>
            </div>

            <div class="orders-list">
              <!-- Order 1 - Delivered -->
              <div class="order-card">
                <div class="order-card__header">
                  <div class="order-card__info">
                    <div>
                      <p class="order-card__label">Order Number</p>
                      <p class="order-card__value">#ORD-2024-001234</p>
                    </div>
                    <div>
                      <p class="order-card__label">Order Date</p>
                      <p class="order-card__value">Nov 15, 2024</p>
                    </div>
                    <div>
                      <p class="order-card__label">Items</p>
                      <p class="order-card__value">3 items</p>
                    </div>
                  </div>
                  <span class="order-card__status order-card__status--delivered">Delivered</span>
                </div>
                <div class="order-card__body">
                  <div class="order-card__items">
                    <div class="order-card__item-image"></div>
                    <div class="order-card__item-image"></div>
                    <div class="order-card__item-image"></div>
                  </div>
                  <div class="order-card__footer">
                    <span class="order-card__total">Total: ${formatPrice(234.98)}</span>
                    <div class="order-card__actions">
                      <button class="dropin-button dropin-button--secondary">View Details</button>
                      <button class="dropin-button dropin-button--tertiary">Track Package</button>
                    </div>
                  </div>
                </div>
              </div>

              <!-- Order 2 - Shipped -->
              <div class="order-card">
                <div class="order-card__header">
                  <div class="order-card__info">
                    <div>
                      <p class="order-card__label">Order Number</p>
                      <p class="order-card__value">#ORD-2024-001233</p>
                    </div>
                    <div>
                      <p class="order-card__label">Order Date</p>
                      <p class="order-card__value">Nov 20, 2024</p>
                    </div>
                    <div>
                      <p class="order-card__label">Items</p>
                      <p class="order-card__value">1 item</p>
                    </div>
                  </div>
                  <span class="order-card__status order-card__status--shipped">Shipped</span>
                </div>
                <div class="order-card__body">
                  <div class="order-card__items">
                    <div class="order-card__item-image"></div>
                  </div>
                  <div class="order-card__footer">
                    <span class="order-card__total">Total: ${formatPrice(89.99)}</span>
                    <div class="order-card__actions">
                      <button class="dropin-button dropin-button--secondary">View Details</button>
                      <button class="dropin-button dropin-button--primary">Track Package</button>
                    </div>
                  </div>
                </div>
              </div>

              <!-- Order 3 - Processing -->
              <div class="order-card">
                <div class="order-card__header">
                  <div class="order-card__info">
                    <div>
                      <p class="order-card__label">Order Number</p>
                      <p class="order-card__value">#ORD-2024-001235</p>
                    </div>
                    <div>
                      <p class="order-card__label">Order Date</p>
                      <p class="order-card__value">Nov 24, 2024</p>
                    </div>
                    <div>
                      <p class="order-card__label">Items</p>
                      <p class="order-card__value">2 items</p>
                    </div>
                  </div>
                  <span class="order-card__status order-card__status--processing">Processing</span>
                </div>
                <div class="order-card__body">
                  <div class="order-card__items">
                    <div class="order-card__item-image"></div>
                    <div class="order-card__item-image"></div>
                  </div>
                  <div class="order-card__footer">
                    <span class="order-card__total">Total: ${formatPrice(159.00)}</span>
                    <div class="order-card__actions">
                      <button class="dropin-button dropin-button--secondary">View Details</button>
                      <button class="dropin-button dropin-button--tertiary">Cancel Order</button>
                    </div>
                  </div>
                </div>
              </div>

              <!-- Order 4 - Cancelled -->
              <div class="order-card">
                <div class="order-card__header">
                  <div class="order-card__info">
                    <div>
                      <p class="order-card__label">Order Number</p>
                      <p class="order-card__value">#ORD-2024-001230</p>
                    </div>
                    <div>
                      <p class="order-card__label">Order Date</p>
                      <p class="order-card__value">Nov 10, 2024</p>
                    </div>
                    <div>
                      <p class="order-card__label">Items</p>
                      <p class="order-card__value">1 item</p>
                    </div>
                  </div>
                  <span class="order-card__status order-card__status--cancelled">Cancelled</span>
                </div>
                <div class="order-card__body">
                  <div class="order-card__items">
                    <div class="order-card__item-image"></div>
                  </div>
                  <div class="order-card__footer">
                    <span class="order-card__total">Total: ${formatPrice(45.00)}</span>
                    <div class="order-card__actions">
                      <button class="dropin-button dropin-button--secondary">View Details</button>
                      <button class="dropin-button dropin-button--tertiary">Reorder</button>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div class="orders-pagination">
              <button class="orders-pagination__btn orders-pagination__btn--active">1</button>
              <button class="orders-pagination__btn">2</button>
              <button class="orders-pagination__btn">3</button>
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
