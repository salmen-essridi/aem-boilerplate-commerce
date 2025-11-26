// Product Detail Page Composition Story
// CSS is imported via preview.js from /styles/page-layouts.css and /styles/dropin-base.css
import { mockProduct } from '../dropins/mockData.js';

export default {
  title: 'Pages/Product Detail Page',
  tags: ['autodocs'],
  parameters: {
    layout: 'fullscreen',
    docs: {
      description: {
        component: `
Full page composition showing the Product Detail Page (PDP) with header, product info, recommendations, and footer.
All styles use design tokens from the theme - changes to main CSS will be reflected here.
        `,
      },
    },
  },
};

const formatPrice = (amount, currency = 'USD') => {
  return new Intl.NumberFormat('en-US', { style: 'currency', currency }).format(amount);
};

// Product Detail Page
export const ProductDetailPage = {
  name: 'Product Detail Page',
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
        <!-- Breadcrumb -->
        <nav class="breadcrumb">
          <a href="#">Home</a> / <a href="#">Women</a> / <a href="#">Tops</a> / ${mockProduct.name}
        </nav>

        <!-- PDP Section -->
        <section class="pdp-section">
          <div class="pdp-gallery">
            <div class="pdp-gallery__thumbnails">
              <img src="${mockProduct.images[0].url}" class="pdp-gallery__thumb pdp-gallery__thumb--active" />
              <img src="${mockProduct.images[0].url}" class="pdp-gallery__thumb" />
              <img src="${mockProduct.images[0].url}" class="pdp-gallery__thumb" />
              <img src="${mockProduct.images[0].url}" class="pdp-gallery__thumb" />
            </div>
            <div class="pdp-gallery__main">
              <img src="${mockProduct.images[0].url}" alt="${mockProduct.name}" />
            </div>
          </div>
          <div class="pdp-info">
            <h1 class="pdp-info__title">${mockProduct.name}</h1>
            <p class="pdp-info__price">${formatPrice(mockProduct.price)}</p>
            <div class="pdp-info__rating">
              <span class="pdp-info__stars">★★★★☆</span>
              <span class="pdp-info__reviews">(128 reviews)</span>
            </div>
            <p class="pdp-info__description">
              A versatile and stylish piece perfect for any occasion. Made with premium materials
              for comfort and durability. Features a modern fit that flatters all body types.
            </p>

            <div class="pdp-options">
              <p class="pdp-options__label">Color: Black</p>
              <div class="pdp-options__swatches">
                <div class="pdp-swatch pdp-swatch--active" style="background: #000"></div>
                <div class="pdp-swatch" style="background: #fff; border: 1px solid #ccc"></div>
                <div class="pdp-swatch" style="background: #1a365d"></div>
                <div class="pdp-swatch" style="background: #742a2a"></div>
              </div>
            </div>

            <div class="pdp-options">
              <p class="pdp-options__label">Size</p>
              <div class="pdp-sizes">
                <div class="pdp-size">XS</div>
                <div class="pdp-size">S</div>
                <div class="pdp-size pdp-size--active">M</div>
                <div class="pdp-size">L</div>
                <div class="pdp-size">XL</div>
              </div>
            </div>

            <div class="pdp-quantity">
              <span class="pdp-options__label">Quantity:</span>
              <button class="pdp-quantity__btn">-</button>
              <span class="pdp-quantity__value">1</span>
              <button class="pdp-quantity__btn">+</button>
            </div>

            <div class="pdp-actions">
              <button class="dropin-button dropin-button--primary">Add to Cart</button>
              <button class="pdp-wishlist">
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                  <path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z"></path>
                </svg>
              </button>
            </div>
          </div>
        </section>

        <!-- Recommendations -->
        <section class="recommendations-section">
          <h2 class="recommendations-section__title">You May Also Like</h2>
          <div class="products-grid">
            <div class="product-card">
              <img src="${mockProduct.images[0].url}" class="product-card__image" />
              <div class="product-card__details">
                <p class="product-card__name">Classic Denim Jacket</p>
                <p class="product-card__price">${formatPrice(89.99)}</p>
              </div>
            </div>
            <div class="product-card">
              <img src="${mockProduct.images[0].url}" class="product-card__image" />
              <div class="product-card__details">
                <p class="product-card__name">Leather Belt</p>
                <p class="product-card__price">${formatPrice(45.00)}</p>
              </div>
            </div>
            <div class="product-card">
              <img src="${mockProduct.images[0].url}" class="product-card__image" />
              <div class="product-card__details">
                <p class="product-card__name">Canvas Tote</p>
                <p class="product-card__price">${formatPrice(59.99)}</p>
              </div>
            </div>
            <div class="product-card">
              <img src="${mockProduct.images[0].url}" class="product-card__image" />
              <div class="product-card__details">
                <p class="product-card__name">Wool Scarf</p>
                <p class="product-card__price">${formatPrice(35.00)}</p>
              </div>
            </div>
          </div>
        </section>
      </main>

      <!-- Footer -->
      <footer class="page-footer">
        <div class="page-footer__inner">
          <div class="page-footer__column">
            <h4>Shop</h4>
            <ul>
              <li><a href="#">Women</a></li>
              <li><a href="#">Men</a></li>
              <li><a href="#">Accessories</a></li>
            </ul>
          </div>
          <div class="page-footer__column">
            <h4>Help</h4>
            <ul>
              <li><a href="#">Contact Us</a></li>
              <li><a href="#">Shipping</a></li>
              <li><a href="#">Returns</a></li>
            </ul>
          </div>
          <div class="page-footer__column">
            <h4>About</h4>
            <ul>
              <li><a href="#">Our Story</a></li>
              <li><a href="#">Careers</a></li>
            </ul>
          </div>
          <div class="page-footer__column">
            <h4>Connect</h4>
            <ul>
              <li><a href="#">Instagram</a></li>
              <li><a href="#">Facebook</a></li>
            </ul>
          </div>
        </div>
        <div class="page-footer__bottom">
          © 2024 ACME Store. All rights reserved.
        </div>
      </footer>
    `;
    return element;
  },
};
