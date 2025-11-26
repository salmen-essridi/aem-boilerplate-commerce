// Returns Page Composition Story
// CSS is imported via preview.js from /styles/page-layouts.css and /styles/dropin-base.css

export default {
  title: 'Pages/Returns Page',
  tags: ['autodocs'],
  parameters: {
    layout: 'fullscreen',
    docs: {
      description: {
        component: `
Full page composition showing the Returns management page with return requests.
All styles use design tokens from the theme - changes to main CSS will be reflected here.
        `,
      },
    },
  },
};

const formatPrice = (amount, currency = 'USD') => {
  return new Intl.NumberFormat('en-US', { style: 'currency', currency }).format(amount);
};

// Returns Page
export const ReturnsPage = {
  name: 'Returns Page',
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
                <a href="#" class="account-sidebar__link">Orders</a>
              </li>
              <li class="account-sidebar__item">
                <a href="#" class="account-sidebar__link account-sidebar__link--active">Returns</a>
              </li>
              <li class="account-sidebar__item">
                <a href="#" class="account-sidebar__link">Addresses</a>
              </li>
              <li class="account-sidebar__item">
                <a href="#" class="account-sidebar__link">Settings</a>
              </li>
            </ul>
          </aside>

          <!-- Returns Content -->
          <div class="account-content">
            <div class="page-title-row">
              <h1 class="page-title--small">My Returns</h1>
              <button class="dropin-button dropin-button--secondary">Start New Return</button>
            </div>

            <div class="returns-list">
              <!-- Return 1 - Approved -->
              <div class="return-card">
                <div class="return-card__header">
                  <div class="return-card__info">
                    <div>
                      <p class="return-card__label">Return Number</p>
                      <p class="return-card__value">#RET-2024-000456</p>
                    </div>
                    <div>
                      <p class="return-card__label">Order Number</p>
                      <p class="return-card__value">#ORD-2024-001234</p>
                    </div>
                    <div>
                      <p class="return-card__label">Submitted</p>
                      <p class="return-card__value">Nov 20, 2024</p>
                    </div>
                  </div>
                  <span class="return-card__status return-card__status--approved">Approved</span>
                </div>
                <div class="return-card__body">
                  <div class="return-card__item">
                    <div class="return-card__item-image"></div>
                    <div class="return-card__item-details">
                      <p class="return-card__item-name">Premium Cotton T-Shirt</p>
                      <p class="return-card__item-variant">Size: M | Color: Navy Blue</p>
                      <p class="return-card__item-reason"><strong>Reason:</strong> Wrong size - too small</p>
                    </div>
                    <span class="return-card__item-price">${formatPrice(49.99)}</span>
                  </div>
                  <div class="return-timeline">
                    <p class="return-timeline__title">Return Progress</p>
                    <div class="return-timeline__steps">
                      <div class="return-timeline__step return-timeline__step--completed">
                        <div class="return-timeline__step-dot"></div>
                        <span class="return-timeline__step-label">Submitted</span>
                      </div>
                      <div class="return-timeline__step return-timeline__step--completed">
                        <div class="return-timeline__step-dot"></div>
                        <span class="return-timeline__step-label">Approved</span>
                      </div>
                      <div class="return-timeline__step return-timeline__step--current">
                        <div class="return-timeline__step-dot"></div>
                        <span class="return-timeline__step-label">Ship Item</span>
                      </div>
                      <div class="return-timeline__step">
                        <div class="return-timeline__step-dot"></div>
                        <span class="return-timeline__step-label">Received</span>
                      </div>
                      <div class="return-timeline__step">
                        <div class="return-timeline__step-dot"></div>
                        <span class="return-timeline__step-label">Refunded</span>
                      </div>
                    </div>
                  </div>
                  <div class="return-card__footer">
                    <span class="return-card__refund">Refund Amount: ${formatPrice(49.99)}</span>
                    <div class="return-card__actions">
                      <button class="dropin-button dropin-button--primary">Print Label</button>
                      <button class="dropin-button dropin-button--secondary">View Details</button>
                    </div>
                  </div>
                </div>
              </div>

              <!-- Return 2 - Refunded -->
              <div class="return-card">
                <div class="return-card__header">
                  <div class="return-card__info">
                    <div>
                      <p class="return-card__label">Return Number</p>
                      <p class="return-card__value">#RET-2024-000450</p>
                    </div>
                    <div>
                      <p class="return-card__label">Order Number</p>
                      <p class="return-card__value">#ORD-2024-001200</p>
                    </div>
                    <div>
                      <p class="return-card__label">Submitted</p>
                      <p class="return-card__value">Nov 5, 2024</p>
                    </div>
                  </div>
                  <span class="return-card__status return-card__status--refunded">Refunded</span>
                </div>
                <div class="return-card__body">
                  <div class="return-card__item">
                    <div class="return-card__item-image"></div>
                    <div class="return-card__item-details">
                      <p class="return-card__item-name">Classic Denim Jacket</p>
                      <p class="return-card__item-variant">Size: L | Color: Indigo</p>
                      <p class="return-card__item-reason"><strong>Reason:</strong> Changed my mind</p>
                    </div>
                    <span class="return-card__item-price">${formatPrice(89.99)}</span>
                  </div>
                  <div class="return-card__footer">
                    <span class="return-card__refund">Refunded: ${formatPrice(89.99)} on Nov 15, 2024</span>
                    <div class="return-card__actions">
                      <button class="dropin-button dropin-button--secondary">View Details</button>
                    </div>
                  </div>
                </div>
              </div>

              <!-- Return 3 - Pending -->
              <div class="return-card">
                <div class="return-card__header">
                  <div class="return-card__info">
                    <div>
                      <p class="return-card__label">Return Number</p>
                      <p class="return-card__value">#RET-2024-000460</p>
                    </div>
                    <div>
                      <p class="return-card__label">Order Number</p>
                      <p class="return-card__value">#ORD-2024-001233</p>
                    </div>
                    <div>
                      <p class="return-card__label">Submitted</p>
                      <p class="return-card__value">Nov 24, 2024</p>
                    </div>
                  </div>
                  <span class="return-card__status return-card__status--pending">Pending Review</span>
                </div>
                <div class="return-card__body">
                  <div class="return-card__item">
                    <div class="return-card__item-image"></div>
                    <div class="return-card__item-details">
                      <p class="return-card__item-name">Leather Crossbody Bag</p>
                      <p class="return-card__item-variant">Color: Black</p>
                      <p class="return-card__item-reason"><strong>Reason:</strong> Defective - zipper broken</p>
                    </div>
                    <span class="return-card__item-price">${formatPrice(159.00)}</span>
                  </div>
                  <div class="return-card__footer">
                    <span class="return-card__refund">Pending Refund: ${formatPrice(159.00)}</span>
                    <div class="return-card__actions">
                      <button class="dropin-button dropin-button--secondary">View Details</button>
                      <button class="dropin-button dropin-button--tertiary">Cancel Return</button>
                    </div>
                  </div>
                </div>
              </div>
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
