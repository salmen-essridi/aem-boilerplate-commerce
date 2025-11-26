// Account Page Composition Story
// CSS is imported via preview.js from /styles/page-layouts.css and /styles/dropin-base.css
import { mockProduct } from '../dropins/mockData.js';

export default {
  title: 'Pages/Account Page',
  tags: ['autodocs'],
  parameters: {
    layout: 'fullscreen',
    docs: {
      description: {
        component: `
Full page composition showing the My Account page with sidebar navigation.
All styles use design tokens from the theme - changes to main CSS will be reflected here.
        `,
      },
    },
  },
};

const formatPrice = (amount, currency = 'USD') => {
  return new Intl.NumberFormat('en-US', { style: 'currency', currency }).format(amount);
};

// Account Dashboard
export const AccountDashboard = {
  name: 'Account Dashboard',
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
            <div class="account-sidebar__user">
              <div class="account-sidebar__avatar">JD</div>
              <p class="account-sidebar__name">John Doe</p>
              <p class="account-sidebar__email">john.doe@example.com</p>
            </div>
            <nav>
              <a href="#" class="account-nav__item account-nav__item--active">
                <svg class="account-nav__icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                  <rect x="3" y="3" width="18" height="18" rx="2" ry="2"></rect>
                  <line x1="3" y1="9" x2="21" y2="9"></line>
                  <line x1="9" y1="21" x2="9" y2="9"></line>
                </svg>
                Dashboard
              </a>
              <a href="#" class="account-nav__item">
                <svg class="account-nav__icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                  <path d="M6 2L3 6v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2V6l-3-4z"></path>
                  <line x1="3" y1="6" x2="21" y2="6"></line>
                  <path d="M16 10a4 4 0 0 1-8 0"></path>
                </svg>
                Orders
              </a>
              <a href="#" class="account-nav__item">
                <svg class="account-nav__icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                  <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"></path>
                  <circle cx="12" cy="10" r="3"></circle>
                </svg>
                Addresses
              </a>
              <a href="#" class="account-nav__item">
                <svg class="account-nav__icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                  <path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z"></path>
                </svg>
                Wishlist
              </a>
              <a href="#" class="account-nav__item">
                <svg class="account-nav__icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                  <polyline points="16 3 21 3 21 8"></polyline>
                  <line x1="4" y1="20" x2="21" y2="3"></line>
                  <polyline points="21 16 21 21 16 21"></polyline>
                  <line x1="15" y1="15" x2="21" y2="21"></line>
                </svg>
                Returns
              </a>
              <a href="#" class="account-nav__item">
                <svg class="account-nav__icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                  <circle cx="12" cy="12" r="3"></circle>
                  <path d="M19.4 15a1.65 1.65 0 0 0 .33 1.82l.06.06a2 2 0 0 1 0 2.83 2 2 0 0 1-2.83 0l-.06-.06a1.65 1.65 0 0 0-1.82-.33 1.65 1.65 0 0 0-1 1.51V21a2 2 0 0 1-2 2 2 2 0 0 1-2-2v-.09A1.65 1.65 0 0 0 9 19.4a1.65 1.65 0 0 0-1.82.33l-.06.06a2 2 0 0 1-2.83 0 2 2 0 0 1 0-2.83l.06-.06a1.65 1.65 0 0 0 .33-1.82 1.65 1.65 0 0 0-1.51-1H3a2 2 0 0 1-2-2 2 2 0 0 1 2-2h.09A1.65 1.65 0 0 0 4.6 9a1.65 1.65 0 0 0-.33-1.82l-.06-.06a2 2 0 0 1 0-2.83 2 2 0 0 1 2.83 0l.06.06a1.65 1.65 0 0 0 1.82.33H9a1.65 1.65 0 0 0 1-1.51V3a2 2 0 0 1 2-2 2 2 0 0 1 2 2v.09a1.65 1.65 0 0 0 1 1.51 1.65 1.65 0 0 0 1.82-.33l.06-.06a2 2 0 0 1 2.83 0 2 2 0 0 1 0 2.83l-.06.06a1.65 1.65 0 0 0-.33 1.82V9a1.65 1.65 0 0 0 1.51 1H21a2 2 0 0 1 2 2 2 2 0 0 1-2 2h-.09a1.65 1.65 0 0 0-1.51 1z"></path>
                </svg>
                Settings
              </a>
              <a href="#" class="account-nav__item account-nav__item--signout">
                <svg class="account-nav__icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                  <path d="M9 21H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h4"></path>
                  <polyline points="16 17 21 12 16 7"></polyline>
                  <line x1="21" y1="12" x2="9" y2="12"></line>
                </svg>
                Sign Out
              </a>
            </nav>
          </aside>

          <!-- Content -->
          <div class="account-content">
            <h1 class="account-content__title">My Account</h1>

            <div class="account-section">
              <div class="account-section__content">
                <div class="account-section__info">
                  <h3 class="account-section__title">Contact Information</h3>
                  <p>John Doe</p>
                  <p>john.doe@example.com</p>
                </div>
                <button class="dropin-button dropin-button--tertiary">Edit</button>
              </div>
            </div>

            <div class="account-section">
              <div class="account-section__content">
                <div class="account-section__info">
                  <h3 class="account-section__title">Default Shipping Address</h3>
                  <p>123 Main Street</p>
                  <p>Apt 4B</p>
                  <p>New York, NY 10001</p>
                </div>
                <button class="dropin-button dropin-button--tertiary">Edit</button>
              </div>
            </div>

            <div class="account-section">
              <h3 class="account-section__title">Recent Orders</h3>
              <div class="recent-orders__item">
                <div class="recent-orders__images">
                  <img src="${mockProduct.images[0].url}" class="recent-orders__image" />
                  <img src="${mockProduct.images[0].url}" class="recent-orders__image" />
                </div>
                <div class="recent-orders__info">
                  <p class="recent-orders__number">Order #000012345</p>
                  <p class="recent-orders__date">Nov 15, 2024 • 3 items • ${formatPrice(234.97)}</p>
                </div>
                <span class="recent-orders__status recent-orders__status--delivered">Delivered</span>
                <button class="dropin-button dropin-button--tertiary">View</button>
              </div>
              <div class="recent-orders__item">
                <div class="recent-orders__images">
                  <img src="${mockProduct.images[0].url}" class="recent-orders__image" />
                </div>
                <div class="recent-orders__info">
                  <p class="recent-orders__number">Order #000012344</p>
                  <p class="recent-orders__date">Nov 20, 2024 • 1 item • ${formatPrice(89.99)}</p>
                </div>
                <span class="recent-orders__status recent-orders__status--processing">Processing</span>
                <button class="dropin-button dropin-button--tertiary">View</button>
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
