// Product Details Block Stories
// CSS loaded from main project: /blocks/product-details/product-details.css
// HTML structure matches blocks/product-details/product-details.js

import { mockProduct } from '../dropins/mockData.js';

export default {
  title: 'Blocks/Product Details',
  tags: ['autodocs'],
  parameters: {
    docs: {
      description: {
        component: `
Product Details block - displays product information on PDP.

**CSS Location:** \`/blocks/product-details/product-details.css\`

**HTML Structure from JS:**
\`\`\`html
<div class="product-details">
  <div class="product-details__alert"></div>
  <div class="product-details__wrapper">
    <div class="product-details__left-column">
      <div class="product-details__gallery"></div>
    </div>
    <div class="product-details__right-column">
      <div class="product-details__header"></div>
      <div class="product-details__price"></div>
      <div class="product-details__gallery"></div>
      <div class="product-details__short-description"></div>
      <div class="product-details__gift-card-options"></div>
      <div class="product-details__configuration">
        <div class="product-details__options"></div>
        <div class="product-details__quantity"></div>
        <div class="product-details__buttons">
          <div class="product-details__buttons__add-to-cart"></div>
          <div class="product-details__buttons__add-to-wishlist"></div>
        </div>
      </div>
      <div class="product-details__description"></div>
      <div class="product-details__attributes"></div>
    </div>
  </div>
</div>
\`\`\`

Agency can edit the CSS file directly in the main project. Changes will be reflected here automatically.
        `,
      },
    },
  },
};

const formatPrice = (value, currency = 'USD') => {
  return new Intl.NumberFormat('en-US', { style: 'currency', currency }).format(value);
};

// Full Product Details - Using actual HTML structure from product-details.js
export const FullProductDetails = {
  name: 'Full Product Details',
  render: () => {
    const element = document.createElement('div');
    element.className = 'product-details';
    element.innerHTML = `
      <!-- @block:product-details-0 -->
      <div class="product-details__alert"></div>
      <div class="product-details__wrapper">
        <div class="product-details__left-column">
          <div class="product-details__gallery">
            <div class="pdp-carousel">
              <div class="pdp-carousel__thumbnails">
                <button class="pdp-carousel__thumbnail pdp-carousel__thumbnail--active">
                  <img src="${mockProduct.images[0].url}" alt="${mockProduct.name}" />
                </button>
              </div>
              <div class="pdp-carousel__main">
                <img src="${mockProduct.images[0].url}" alt="${mockProduct.name}" />
              </div>
            </div>
          </div>
        </div>
        <div class="product-details__right-column">
          <div class="product-details__header">
            <h1 class="dropin-product-header__title">${mockProduct.name}</h1>
            <p class="dropin-product-header__sku">SKU: ${mockProduct.sku}</p>
          </div>
          <div class="product-details__price">
            <div class="dropin-price">
              ${mockProduct.prices.regular.amount > mockProduct.prices.final.amount ? `
                <span class="dropin-price--strikethrough">${formatPrice(mockProduct.prices.regular.amount)}</span>
                <span class="dropin-price--final dropin-price--sale">${formatPrice(mockProduct.prices.final.amount)}</span>
              ` : `
                <span class="dropin-price--final">${formatPrice(mockProduct.prices.final.amount)}</span>
              `}
            </div>
          </div>
          <div class="product-details__gallery">
            <!-- Mobile gallery - hidden on desktop -->
          </div>
          <div class="product-details__short-description">
            <p class="dropin-short-description">${mockProduct.shortDescription}</p>
          </div>
          <div class="product-details__gift-card-options"></div>
          <div class="product-details__configuration">
            <div class="product-details__options">
              <div class="dropin-product-options">
                <div class="dropin-product-options__option">
                  <label class="dropin-product-options__label">Size</label>
                  <div class="dropin-product-options__swatches">
                    ${['S', 'M', 'L', 'XL'].map((size, i) => `
                      <button class="dropin-swatch dropin-swatch--text ${i === 1 ? 'dropin-swatch--selected' : ''}">${size}</button>
                    `).join('')}
                  </div>
                </div>
                <div class="dropin-product-options__option">
                  <label class="dropin-product-options__label">Color</label>
                  <div class="dropin-product-options__swatches">
                    ${['#333', '#1976D2', '#8BC34A', '#FF5722'].map((color, i) => `
                      <button class="dropin-swatch dropin-swatch--color ${i === 1 ? 'dropin-swatch--selected' : ''}" style="background-color: ${color};"></button>
                    `).join('')}
                  </div>
                </div>
              </div>
            </div>
            <div class="product-details__quantity">
              <div class="dropin-incrementer">
                <label class="dropin-incrementer__label">Quantity</label>
                <div class="dropin-incrementer__controls">
                  <button class="dropin-incrementer__button">-</button>
                  <input type="number" class="dropin-incrementer__input" value="1" />
                  <button class="dropin-incrementer__button">+</button>
                </div>
              </div>
            </div>
            <div class="product-details__buttons">
              <div class="product-details__buttons__add-to-cart">
                <button class="dropin-button dropin-button--primary dropin-button--with-icon">
                  <svg class="dropin-icon" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                    <circle cx="9" cy="21" r="1"></circle>
                    <circle cx="20" cy="21" r="1"></circle>
                    <path d="M1 1h4l2.68 13.39a2 2 0 0 0 2 1.61h9.72a2 2 0 0 0 2-1.61L23 6H6"></path>
                  </svg>
                  Add to Cart
                </button>
              </div>
              <div class="product-details__buttons__add-to-wishlist">
                <button class="dropin-button dropin-button--secondary dropin-button--icon-only">
                  <svg class="dropin-icon" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                    <path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z"></path>
                  </svg>
                </button>
              </div>
            </div>
          </div>
          <div class="product-details__description">
            <details class="dropin-accordion" open>
              <summary class="dropin-accordion__header">Product Details</summary>
              <div class="dropin-accordion__content">
                <p>${mockProduct.shortDescription}</p>
              </div>
            </details>
          </div>
          <div class="product-details__attributes">
            <details class="dropin-accordion">
              <summary class="dropin-accordion__header">Specifications</summary>
              <div class="dropin-accordion__content">
                <table class="dropin-attributes">
                  <tr><td>Material</td><td>100% Cotton</td></tr>
                  <tr><td>Care</td><td>Machine wash cold</td></tr>
                </table>
              </div>
            </details>
          </div>
        </div>
      </div>
      <!-- @block:product-details-0:end -->
    `;
    return element;
  },
};

// Product with Alert
export const ProductWithAlert = {
  name: 'Product with Alert',
  render: () => {
    const element = document.createElement('div');
    element.className = 'product-details';
    element.innerHTML = `
      <!-- @block:product-details-0 -->
      <div class="product-details__alert">
        <div class="dropin-in-line-alert dropin-in-line-alert--warning">
          <svg class="dropin-in-line-alert__icon" width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
            <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm1 15h-2v-2h2v2zm0-4h-2V7h2v6z"/>
          </svg>
          <div class="dropin-in-line-alert__content">Only 3 items left in stock!</div>
        </div>
      </div>
      <div class="product-details__wrapper">
        <div class="product-details__left-column">
          <div class="product-details__gallery">
            <img src="${mockProduct.images[0].url}" alt="${mockProduct.name}" />
          </div>
        </div>
        <div class="product-details__right-column">
          <div class="product-details__header">
            <h1 class="dropin-product-header__title">${mockProduct.name}</h1>
          </div>
          <div class="product-details__price">
            <div class="dropin-price">
              <span class="dropin-price--final">${formatPrice(mockProduct.prices.final.amount)}</span>
            </div>
          </div>
        </div>
      </div>
      <!-- @block:product-details-0:end -->
    `;
    return element;
  },
};

// Mobile Layout
export const MobileLayout = {
  name: 'Mobile Layout',
  render: () => {
    const element = document.createElement('div');
    element.className = 'product-details';
    element.style.maxWidth = '375px';
    element.innerHTML = `
      <!-- @block:product-details-0 -->
      <div class="product-details__alert"></div>
      <div class="product-details__wrapper" style="display: block;">
        <div class="product-details__right-column" style="grid-column: 1 / span 4;">
          <div class="product-details__gallery">
            <div class="pdp-carousel pdp-carousel--mobile">
              <img src="${mockProduct.images[0].url}" alt="${mockProduct.name}" />
              <div class="pdp-carousel__dots">
                <span class="pdp-carousel__dot pdp-carousel__dot--active"></span>
                <span class="pdp-carousel__dot"></span>
                <span class="pdp-carousel__dot"></span>
              </div>
            </div>
          </div>
          <div class="product-details__header">
            <h1 class="dropin-product-header__title">${mockProduct.name}</h1>
            <p class="dropin-product-header__sku">SKU: ${mockProduct.sku}</p>
          </div>
          <div class="product-details__price">
            <div class="dropin-price">
              <span class="dropin-price--final">${formatPrice(mockProduct.prices.final.amount)}</span>
            </div>
          </div>
          <div class="product-details__configuration">
            <div class="product-details__buttons">
              <div class="product-details__buttons__add-to-cart">
                <button class="dropin-button dropin-button--primary">Add to Cart</button>
              </div>
              <div class="product-details__buttons__add-to-wishlist">
                <button class="dropin-button dropin-button--secondary dropin-button--icon-only">
                  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                    <path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z"></path>
                  </svg>
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
      <!-- @block:product-details-0:end -->
    `;
    return element;
  },
  parameters: {
    viewport: {
      defaultViewport: 'mobile1',
    },
  },
};
