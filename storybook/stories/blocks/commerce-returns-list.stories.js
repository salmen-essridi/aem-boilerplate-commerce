// Commerce Returns List Block Stories
// CSS loaded from: /blocks/commerce-returns-list/commerce-returns-list.css
import { mockProduct } from '../dropins/mockData.js';

export default {
  title: 'Blocks/Commerce Returns List',
  tags: ['autodocs'],
  parameters: {
    docs: {
      description: {
        component: `
Commerce Returns List block - List of all customer returns.

**CSS Location:** \`/blocks/commerce-returns-list/commerce-returns-list.css\`

**Drop-in:** \`@dropins/storefront-order\` - ReturnsList component

Agency can edit the CSS file directly in the main project.
        `,
      },
    },
  },
};

// Returns List
export const ReturnsList = {
  name: 'Returns List',
  render: () => {
    const element = document.createElement('div');
    element.className = 'commerce-returns-list';
    element.innerHTML = `
      <div class="dropin-design">
        <div class="returns-list">
          <div class="returns-list__items">
            <div class="returns-list__item">
              <div class="returns-list__item-header">
                <div class="returns-list__item-info">
                  <a href="#" class="returns-list__return-number">Return #R000001234</a>
                  <span class="returns-list__badge returns-list__badge--pending">Pending</span>
                </div>
                <span class="returns-list__order-link">
                  From <a href="#">Order #000012345</a>
                </span>
              </div>
              <div class="returns-list__item-date">Requested on Nov 18, 2024</div>
              <div class="returns-list__item-products">
                <div class="returns-list__product">
                  <img src="${mockProduct.images[0].url}" alt="${mockProduct.name}" class="returns-list__product-image" />
                  <div class="returns-list__product-details">
                    <p class="returns-list__product-name">${mockProduct.name}</p>
                    <p class="returns-list__product-reason">Item didn't fit</p>
                  </div>
                </div>
              </div>
            </div>
            <div class="returns-list__item">
              <div class="returns-list__item-header">
                <div class="returns-list__item-info">
                  <a href="#" class="returns-list__return-number">Return #R000001233</a>
                  <span class="returns-list__badge returns-list__badge--complete">Refunded</span>
                </div>
                <span class="returns-list__order-link">
                  From <a href="#">Order #000012340</a>
                </span>
              </div>
              <div class="returns-list__item-date">Requested on Nov 10, 2024</div>
              <div class="returns-list__item-products">
                <div class="returns-list__product">
                  <img src="${mockProduct.images[0].url}" alt="Product" class="returns-list__product-image" />
                  <div class="returns-list__product-details">
                    <p class="returns-list__product-name">Leather Wallet</p>
                    <p class="returns-list__product-reason">Defective item</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    `;
    return element;
  },
};

// Empty Returns
export const EmptyReturns = {
  name: 'No Returns',
  render: () => {
    const element = document.createElement('div');
    element.className = 'commerce-returns-list';
    element.innerHTML = `
      <div class="dropin-design">
        <div class="returns-list returns-list--empty">
          <div class="returns-list__empty">
            <svg width="48" height="48" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
              <polyline points="16 3 21 3 21 8"></polyline>
              <line x1="4" y1="20" x2="21" y2="3"></line>
              <polyline points="21 16 21 21 16 21"></polyline>
              <line x1="15" y1="15" x2="21" y2="21"></line>
              <line x1="4" y1="4" x2="9" y2="9"></line>
            </svg>
            <h3 class="returns-list__empty-title">No returns yet</h3>
            <p class="returns-list__empty-message">You haven't made any return requests.</p>
            <a href="#" class="dropin-button dropin-button--primary">View Orders</a>
          </div>
        </div>
      </div>
    `;
    return element;
  },
};

// Minified View
export const MinifiedView = {
  name: 'Minified View',
  render: () => {
    const element = document.createElement('div');
    element.className = 'commerce-returns-list';
    element.innerHTML = `
      <div class="dropin-design">
        <div class="returns-list returns-list--minified">
          <h3 class="returns-list__title">Recent Returns</h3>
          <div class="returns-list__items">
            <div class="returns-list__item returns-list__item--compact">
              <div class="returns-list__item-info">
                <a href="#" class="returns-list__return-number">Return #R000001234</a>
                <span class="returns-list__badge returns-list__badge--pending">Pending</span>
              </div>
              <span class="returns-list__item-date">Nov 18, 2024</span>
            </div>
            <div class="returns-list__item returns-list__item--compact">
              <div class="returns-list__item-info">
                <a href="#" class="returns-list__return-number">Return #R000001233</a>
                <span class="returns-list__badge returns-list__badge--complete">Refunded</span>
              </div>
              <span class="returns-list__item-date">Nov 10, 2024</span>
            </div>
          </div>
          <a href="#" class="returns-list__view-all">View all returns →</a>
        </div>
      </div>
    `;
    return element;
  },
};
