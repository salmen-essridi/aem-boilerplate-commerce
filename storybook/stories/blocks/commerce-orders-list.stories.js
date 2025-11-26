// Commerce Orders List Block Stories
// CSS loaded from: /blocks/commerce-orders-list/commerce-orders-list.css

import { mockProduct } from '../dropins/mockData.js';

export default {
  title: 'Blocks/Commerce Orders List',
  tags: ['autodocs'],
  parameters: {
    docs: {
      description: {
        component: `
Commerce Orders List block - Customer order history.

**CSS Location:** \`/blocks/commerce-orders-list/commerce-orders-list.css\`

**Drop-in:** \`@dropins/storefront-account\` - OrdersList component

Agency can edit the CSS file directly in the main project.
        `,
      },
    },
  },
};

const formatPrice = (value, currency = 'USD') => {
  return new Intl.NumberFormat('en-US', { style: 'currency', currency }).format(value);
};

// Orders List
export const OrdersList = {
  name: 'Orders List',
  render: () => {
    const element = document.createElement('div');
    element.className = 'commerce-orders-list';
    element.innerHTML = `
      <div class="dropin-design">
        <div class="account-orders">
          <h2 class="account-orders__title">My Orders</h2>
          <div class="account-orders__list">
            <div class="account-orders__item">
              <div class="account-orders__header">
                <div class="account-orders__info">
                  <span class="account-orders__number">Order #100000123</span>
                  <span class="account-orders__date">Nov 25, 2024</span>
                </div>
                <span class="account-orders__status account-orders__status--complete">Complete</span>
              </div>
              <div class="account-orders__products">
                <div class="account-orders__product">
                  <img src="${mockProduct.images[0].url}" alt="${mockProduct.name}" class="account-orders__product-image" />
                  <div class="account-orders__product-details">
                    <p class="account-orders__product-name">${mockProduct.name}</p>
                    <p class="account-orders__product-qty">Qty: 1</p>
                  </div>
                </div>
              </div>
              <div class="account-orders__footer">
                <span class="account-orders__total">Total: ${formatPrice(mockProduct.prices.final.amount)}</span>
                <button class="dropin-button dropin-button--secondary">View Details</button>
              </div>
            </div>
            <div class="account-orders__item">
              <div class="account-orders__header">
                <div class="account-orders__info">
                  <span class="account-orders__number">Order #100000122</span>
                  <span class="account-orders__date">Nov 20, 2024</span>
                </div>
                <span class="account-orders__status account-orders__status--shipped">Shipped</span>
              </div>
              <div class="account-orders__products">
                <div class="account-orders__product">
                  <img src="${mockProduct.images[0].url}" alt="${mockProduct.name}" class="account-orders__product-image" />
                  <div class="account-orders__product-details">
                    <p class="account-orders__product-name">${mockProduct.name}</p>
                    <p class="account-orders__product-qty">Qty: 2</p>
                  </div>
                </div>
              </div>
              <div class="account-orders__footer">
                <span class="account-orders__total">Total: ${formatPrice(mockProduct.prices.final.amount * 2)}</span>
                <button class="dropin-button dropin-button--secondary">View Details</button>
              </div>
            </div>
          </div>
        </div>
      </div>
    `;
    return element;
  },
};

// Empty Orders
export const EmptyOrders = {
  name: 'Empty Orders',
  render: () => {
    const element = document.createElement('div');
    element.className = 'commerce-orders-list';
    element.innerHTML = `
      <div class="dropin-design">
        <div class="account-orders account-orders--empty">
          <div class="account-orders__empty">
            <svg width="48" height="48" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1">
              <path d="M6 2L3 6v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2V6l-3-4z"></path>
              <line x1="3" y1="6" x2="21" y2="6"></line>
              <path d="M16 10a4 4 0 0 1-8 0"></path>
            </svg>
            <p>You haven't placed any orders yet.</p>
            <button class="dropin-button dropin-button--primary">Start Shopping</button>
          </div>
        </div>
      </div>
    `;
    return element;
  },
};
