// Cart Dropin Stories
// Mix of form-based containers and data-dependent containers

import { mockCart } from './mockData.js';

export default {
  title: 'Dropins/Cart',
  tags: ['autodocs'],
  parameters: {
    docs: {
      description: {
        component: 'Adobe Commerce Cart Dropin containers for shopping cart functionality.',
      },
    },
  },
};

// Helper to create static cart display
const createStaticCart = (content) => {
  const element = document.createElement('div');
  element.className = 'dropin-container cart-static';
  element.innerHTML = `
    <div style="padding: 16px; border: 1px solid #e0e0e0; border-radius: 8px; background: #fff;">
      ${content}
    </div>
  `;
  return element;
};

const formatPrice = (value, currency = 'USD') => {
  return new Intl.NumberFormat('en-US', { style: 'currency', currency }).format(value);
};

// Coupons Container (form-based)
export const CouponsForm = {
  name: 'Coupons',
  render: () => {
    return createStaticCart(`
      <div style="max-width: 400px;">
        <h4 style="margin: 0 0 12px; font-size: 16px; font-weight: 600;">Apply Coupon</h4>
        <div style="display: flex; gap: 8px;">
          <input type="text" placeholder="Enter coupon code" style="flex: 1; padding: 10px; border: 1px solid #e0e0e0; border-radius: 4px; font-size: 14px;" />
          <button style="padding: 10px 20px; background: #333; color: #fff; border: none; border-radius: 4px; cursor: pointer; font-size: 14px;">Apply</button>
        </div>
      </div>
    `);
  },
  parameters: {
    docs: {
      description: {
        story: 'Coupon/discount code entry form. Allows users to apply promotional codes to their cart.',
      },
    },
  },
};

// EmptyCart Container
export const EmptyCartDisplay = {
  name: 'Empty Cart',
  render: () => {
    return createStaticCart(`
      <div style="text-align: center; padding: 60px 20px;">
        <svg width="64" height="64" viewBox="0 0 24 24" fill="none" stroke="#ccc" stroke-width="1" style="margin-bottom: 16px;">
          <circle cx="9" cy="21" r="1"></circle>
          <circle cx="20" cy="21" r="1"></circle>
          <path d="M1 1h4l2.68 13.39a2 2 0 0 0 2 1.61h9.72a2 2 0 0 0 2-1.61L23 6H6"></path>
        </svg>
        <h3 style="margin: 0 0 8px; font-size: 20px; font-weight: 600;">Your cart is empty</h3>
        <p style="margin: 0 0 20px; color: #666;">Looks like you haven't added anything to your cart yet.</p>
        <button style="padding: 12px 24px; background: #333; color: #fff; border: none; border-radius: 4px; cursor: pointer; font-size: 16px;">
          Continue Shopping
        </button>
      </div>
    `);
  },
  parameters: {
    docs: {
      description: {
        story: 'Empty cart state with call-to-action to continue shopping.',
      },
    },
  },
};

// GiftCards Container (form-based)
export const GiftCardsForm = {
  name: 'Gift Cards',
  render: () => {
    return createStaticCart(`
      <div style="max-width: 400px;">
        <h4 style="margin: 0 0 12px; font-size: 16px; font-weight: 600;">Gift Card</h4>
        <div style="display: flex; gap: 8px;">
          <input type="text" placeholder="Enter gift card code" style="flex: 1; padding: 10px; border: 1px solid #e0e0e0; border-radius: 4px; font-size: 14px;" />
          <button style="padding: 10px 20px; background: #333; color: #fff; border: none; border-radius: 4px; cursor: pointer; font-size: 14px;">Apply</button>
        </div>
      </div>
    `);
  },
  parameters: {
    docs: {
      description: {
        story: 'Gift card entry form. Users can apply gift card codes for payment.',
      },
    },
  },
};

// Cart Summary List (with mock data)
export const CartSummaryList = {
  name: 'Cart Summary List',
  render: () => {
    return createStaticCart(`
      <div style="display: flex; flex-direction: column; gap: 16px;">
        ${mockCart.items.map(item => `
          <div style="display: flex; gap: 16px; padding-bottom: 16px; border-bottom: 1px solid #e0e0e0;">
            <img src="${item.product.image.url}" alt="${item.product.name}"
                 style="width: 80px; height: 80px; object-fit: cover; border-radius: 4px;" />
            <div style="flex: 1;">
              <h4 style="margin: 0 0 4px; font-size: 16px;">${item.product.name}</h4>
              <p style="margin: 0; color: #666; font-size: 14px;">
                ${item.configurableOptions.map(opt => `${opt.optionLabel}: ${opt.valueLabel}`).join(' | ')}
              </p>
              <div style="margin-top: 8px; display: flex; justify-content: space-between; align-items: center;">
                <span style="color: #666;">Qty: ${item.quantity}</span>
                <span style="font-weight: 600;">${formatPrice(item.prices.rowTotal.value)}</span>
              </div>
            </div>
          </div>
        `).join('')}
      </div>
    `);
  },
  parameters: {
    docs: {
      description: {
        story: 'List view of cart items with product image, options, quantity, and price.',
      },
    },
  },
};

// Mini Cart
export const MiniCartDisplay = {
  name: 'Mini Cart',
  render: () => {
    return createStaticCart(`
      <div style="width: 320px;">
        <div style="display: flex; justify-content: space-between; align-items: center; margin-bottom: 16px; padding-bottom: 12px; border-bottom: 1px solid #e0e0e0;">
          <h3 style="margin: 0; font-size: 18px;">Cart (${mockCart.totalQuantity})</h3>
          <button style="background: none; border: none; cursor: pointer; font-size: 20px;">×</button>
        </div>
        <div style="max-height: 300px; overflow-y: auto;">
          ${mockCart.items.map(item => `
            <div style="display: flex; gap: 12px; margin-bottom: 12px;">
              <img src="${item.product.image.url}" alt="${item.product.name}"
                   style="width: 60px; height: 60px; object-fit: cover; border-radius: 4px;" />
              <div style="flex: 1; min-width: 0;">
                <p style="margin: 0 0 4px; font-size: 14px; font-weight: 500; white-space: nowrap; overflow: hidden; text-overflow: ellipsis;">${item.product.name}</p>
                <p style="margin: 0; color: #666; font-size: 12px;">Qty: ${item.quantity}</p>
                <p style="margin: 4px 0 0; font-weight: 600;">${formatPrice(item.prices.rowTotal.value)}</p>
              </div>
            </div>
          `).join('')}
        </div>
        <div style="margin-top: 16px; padding-top: 12px; border-top: 1px solid #e0e0e0;">
          <div style="display: flex; justify-content: space-between; margin-bottom: 12px;">
            <span style="font-weight: 600;">Subtotal</span>
            <span style="font-weight: 600;">${formatPrice(mockCart.prices.subtotalExcludingTax.value)}</span>
          </div>
          <button style="width: 100%; padding: 12px; background: #333; color: #fff; border: none; border-radius: 4px; cursor: pointer; font-size: 16px;">
            View Cart
          </button>
        </div>
      </div>
    `);
  },
  parameters: {
    docs: {
      description: {
        story: 'Compact cart view for header dropdown. Shows items and quick checkout access.',
      },
    },
  },
};

// Order Summary
export const OrderSummaryDisplay = {
  name: 'Order Summary',
  render: () => {
    return createStaticCart(`
      <h3 style="margin: 0 0 16px; font-size: 18px; font-weight: 600;">Order Summary</h3>
      <div style="display: flex; flex-direction: column; gap: 8px;">
        <div style="display: flex; justify-content: space-between;">
          <span>Subtotal</span>
          <span>${formatPrice(mockCart.prices.subtotalExcludingTax.value)}</span>
        </div>
        ${mockCart.prices.appliedTaxes.map(tax => `
          <div style="display: flex; justify-content: space-between; color: #666;">
            <span>${tax.label}</span>
            <span>${formatPrice(tax.amount.value)}</span>
          </div>
        `).join('')}
        <div style="display: flex; justify-content: space-between; padding-top: 12px; border-top: 1px solid #e0e0e0; margin-top: 8px; font-weight: 600; font-size: 18px;">
          <span>Total</span>
          <span>${formatPrice(mockCart.prices.grandTotal.value)}</span>
        </div>
      </div>
    `);
  },
  parameters: {
    docs: {
      description: {
        story: 'Order totals summary including subtotal, taxes, discounts, and grand total.',
      },
    },
  },
};
