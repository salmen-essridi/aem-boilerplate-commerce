// Addresses Page Composition Story
// CSS is imported via preview.js from /styles/page-layouts.css and /styles/dropin-base.css

export default {
  title: 'Pages/Addresses Page',
  tags: ['autodocs'],
  parameters: {
    layout: 'fullscreen',
    docs: {
      description: {
        component: `
Full page composition showing the Addresses management page.
All styles use design tokens from the theme - changes to main CSS will be reflected here.
        `,
      },
    },
  },
};

// Addresses Page
export const AddressesPage = {
  name: 'Addresses Page',
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
                <a href="#" class="account-sidebar__link account-sidebar__link--active">Addresses</a>
              </li>
              <li class="account-sidebar__item">
                <a href="#" class="account-sidebar__link">Wishlist</a>
              </li>
              <li class="account-sidebar__item">
                <a href="#" class="account-sidebar__link">Settings</a>
              </li>
            </ul>
          </aside>

          <!-- Addresses Content -->
          <div class="account-content">
            <div class="page-title-row">
              <h1 class="page-title--small">My Addresses</h1>
              <button class="dropin-button dropin-button--primary">Add New Address</button>
            </div>

            <div class="addresses-grid">
              <!-- Default Shipping Address -->
              <div class="address-card address-card--default">
                <span class="address-card__badge">Default Shipping</span>
                <p class="address-card__type">Home</p>
                <p class="address-card__name">John Doe</p>
                <p class="address-card__line">123 Main Street, Apt 4B</p>
                <p class="address-card__line">New York, NY 10001</p>
                <p class="address-card__line">United States</p>
                <p class="address-card__phone">(555) 123-4567</p>
                <div class="address-card__actions">
                  <button class="address-card__action">Edit</button>
                  <button class="address-card__action">Set as Default Billing</button>
                </div>
              </div>

              <!-- Default Billing Address -->
              <div class="address-card address-card--default">
                <span class="address-card__badge">Default Billing</span>
                <p class="address-card__type">Work</p>
                <p class="address-card__name">John Doe</p>
                <p class="address-card__line">456 Business Ave, Suite 200</p>
                <p class="address-card__line">New York, NY 10022</p>
                <p class="address-card__line">United States</p>
                <p class="address-card__phone">(555) 987-6543</p>
                <div class="address-card__actions">
                  <button class="address-card__action">Edit</button>
                  <button class="address-card__action">Set as Default Shipping</button>
                </div>
              </div>

              <!-- Additional Address -->
              <div class="address-card">
                <p class="address-card__type">Parents' Home</p>
                <p class="address-card__name">John Doe</p>
                <p class="address-card__line">789 Elm Street</p>
                <p class="address-card__line">Boston, MA 02101</p>
                <p class="address-card__line">United States</p>
                <p class="address-card__phone">(555) 456-7890</p>
                <div class="address-card__actions">
                  <button class="address-card__action">Edit</button>
                  <button class="address-card__action">Set as Default</button>
                  <button class="address-card__action address-card__action--delete">Delete</button>
                </div>
              </div>

              <!-- Add New Address Card -->
              <div class="add-address-card">
                <svg class="add-address-card__icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5">
                  <circle cx="12" cy="12" r="10"></circle>
                  <line x1="12" y1="8" x2="12" y2="16"></line>
                  <line x1="8" y1="12" x2="16" y2="12"></line>
                </svg>
                <p class="add-address-card__text">Add New Address</p>
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
