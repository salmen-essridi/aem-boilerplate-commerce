// Commerce Wishlist Block Stories
// CSS loaded from: /blocks/commerce-wishlist/commerce-wishlist.css

import { mockProduct } from '../dropins/mockData.js';

export default {
  title: 'Blocks/Commerce Wishlist',
  tags: ['autodocs'],
  parameters: {
    docs: {
      description: {
        component: `
Commerce Wishlist block - Customer wishlist management.

**CSS Location:** \`/blocks/commerce-wishlist/commerce-wishlist.css\`

**Drop-in:** \`@dropins/storefront-wishlist\` - Wishlist component

Agency can edit the CSS file directly in the main project.
        `,
      },
    },
  },
};

const formatPrice = (value, currency = 'USD') => {
  return new Intl.NumberFormat('en-US', { style: 'currency', currency }).format(value);
};

// Wishlist with Items
export const WishlistWithItems = {
  name: 'Wishlist with Items',
  render: () => {
    const element = document.createElement('div');
    element.className = 'commerce-wishlist';
    element.innerHTML = `
      <div class="dropin-design">
        <div class="wishlist">
          <h2 class="wishlist__title">My Wishlist</h2>
          <div class="wishlist__grid">
            <div class="wishlist__item">
              <div class="wishlist__item-image">
                <img src="${mockProduct.images[0].url}" alt="${mockProduct.name}" />
                <button class="wishlist__remove" aria-label="Remove from wishlist">
                  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                    <line x1="18" y1="6" x2="6" y2="18"></line>
                    <line x1="6" y1="6" x2="18" y2="18"></line>
                  </svg>
                </button>
              </div>
              <div class="wishlist__item-details">
                <a href="#" class="wishlist__item-name">${mockProduct.name}</a>
                <div class="wishlist__item-price">
                  <span class="dropin-price--final">${formatPrice(mockProduct.prices.final.amount)}</span>
                </div>
                <button class="dropin-button dropin-button--primary">Add to Cart</button>
              </div>
            </div>
            <div class="wishlist__item">
              <div class="wishlist__item-image">
                <img src="${mockProduct.images[0].url}" alt="Another Product" />
                <button class="wishlist__remove" aria-label="Remove from wishlist">
                  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                    <line x1="18" y1="6" x2="6" y2="18"></line>
                    <line x1="6" y1="6" x2="18" y2="18"></line>
                  </svg>
                </button>
              </div>
              <div class="wishlist__item-details">
                <a href="#" class="wishlist__item-name">Another Product</a>
                <div class="wishlist__item-price">
                  <span class="dropin-price--strikethrough">${formatPrice(89.99)}</span>
                  <span class="dropin-price--final dropin-price--sale">${formatPrice(69.99)}</span>
                </div>
                <button class="dropin-button dropin-button--primary">Add to Cart</button>
              </div>
            </div>
          </div>
        </div>
      </div>
    `;
    return element;
  },
};

// Empty Wishlist
export const EmptyWishlist = {
  name: 'Empty Wishlist',
  render: () => {
    const element = document.createElement('div');
    element.className = 'commerce-wishlist';
    element.innerHTML = `
      <div class="dropin-design">
        <div class="wishlist wishlist--empty">
          <div class="wishlist__empty">
            <svg width="48" height="48" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1">
              <path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z"></path>
            </svg>
            <h3>Your wishlist is empty</h3>
            <p>Start adding items you love to your wishlist.</p>
            <button class="dropin-button dropin-button--primary">Start Shopping</button>
          </div>
        </div>
      </div>
    `;
    return element;
  },
};
