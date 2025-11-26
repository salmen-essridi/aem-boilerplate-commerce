// Home Page Composition Story
// CSS is imported via preview.js from /styles/page-layouts.css and /styles/dropin-base.css
import { mockProduct } from '../dropins/mockData.js';

export default {
  title: 'Pages/Home Page',
  tags: ['autodocs'],
  parameters: {
    layout: 'fullscreen',
    docs: {
      description: {
        component: `
Full page composition showing the Home page with header, hero, product grid, and footer.
All styles use design tokens from the theme - changes to main CSS will be reflected here.
        `,
      },
    },
  },
};

const formatPrice = (amount, currency = 'USD') => {
  return new Intl.NumberFormat('en-US', { style: 'currency', currency }).format(amount);
};

// Home Page
export const HomePage = {
  name: 'Home Page',
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

      <!-- Hero Section -->
      <section class="hero">
        <h1 class="hero__title">New Season Arrivals</h1>
        <p class="hero__subtitle">Discover our latest collection of premium clothing and accessories</p>
        <button class="dropin-button dropin-button--primary dropin-button--large">Shop Now</button>
      </section>

      <!-- Main Content -->
      <main class="page-main">
        <div class="page-container">
          <h2 class="page-title">Featured Products</h2>
          <p class="page-subtitle">Hand-picked favorites from our latest collection</p>

          <div class="product-grid">
            <div class="product-card">
              <button class="product-card__wishlist">
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                  <path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z"></path>
                </svg>
              </button>
              <img src="${mockProduct.images[0].url}" class="product-card__image" />
              <div class="product-card__content">
                <h3 class="product-card__name">${mockProduct.name}</h3>
                <p class="product-card__price">${formatPrice(mockProduct.price)}</p>
                <div class="product-card__rating">
                  <svg width="14" height="14" viewBox="0 0 24 24" fill="currentColor"><polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"></polygon></svg>
                  4.5 (128)
                </div>
              </div>
            </div>

            <div class="product-card">
              <span class="product-card__badge">-30%</span>
              <button class="product-card__wishlist">
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                  <path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z"></path>
                </svg>
              </button>
              <img src="${mockProduct.images[0].url}" class="product-card__image" />
              <div class="product-card__content">
                <h3 class="product-card__name">Classic Denim Jacket</h3>
                <p class="product-card__price">
                  <span class="product-card__price--original">${formatPrice(120)}</span>
                  <span class="product-card__price--sale">${formatPrice(84)}</span>
                </p>
                <div class="product-card__rating">
                  <svg width="14" height="14" viewBox="0 0 24 24" fill="currentColor"><polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"></polygon></svg>
                  4.8 (256)
                </div>
              </div>
            </div>

            <div class="product-card">
              <button class="product-card__wishlist">
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                  <path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z"></path>
                </svg>
              </button>
              <img src="${mockProduct.images[0].url}" class="product-card__image" />
              <div class="product-card__content">
                <h3 class="product-card__name">Leather Crossbody Bag</h3>
                <p class="product-card__price">${formatPrice(159)}</p>
                <div class="product-card__rating">
                  <svg width="14" height="14" viewBox="0 0 24 24" fill="currentColor"><polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"></polygon></svg>
                  4.3 (89)
                </div>
              </div>
            </div>

            <div class="product-card">
              <button class="product-card__wishlist">
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                  <path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z"></path>
                </svg>
              </button>
              <img src="${mockProduct.images[0].url}" class="product-card__image" />
              <div class="product-card__content">
                <h3 class="product-card__name">Running Sneakers</h3>
                <p class="product-card__price">${formatPrice(129)}</p>
                <div class="product-card__rating">
                  <svg width="14" height="14" viewBox="0 0 24 24" fill="currentColor"><polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"></polygon></svg>
                  4.6 (167)
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
