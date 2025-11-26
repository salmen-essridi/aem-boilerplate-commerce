// Commerce Mini Cart Block Stories
// CSS loaded from main project: /blocks/commerce-mini-cart/commerce-mini-cart.css

import { mockProduct } from '../dropins/mockData.js';

export default {
  title: 'Blocks/Commerce Mini Cart',
  tags: ['autodocs'],
  parameters: {
    docs: {
      description: {
        component: `
Commerce Mini Cart block - slide-out cart panel.

**CSS Location:** \`/blocks/commerce-mini-cart/commerce-mini-cart.css\`

Agency can edit the CSS file directly in the main project.
        `,
      },
    },
  },
};

const formatPrice = (value, currency = 'USD') => {
  return new Intl.NumberFormat('en-US', { style: 'currency', currency }).format(value);
};

// Mini Cart Panel
export const MiniCartPanel = {
  name: 'Mini Cart Panel',
  render: () => {
    const element = document.createElement('div');
    element.className = 'commerce-mini-cart';
    element.style.cssText = 'width: 400px; background: #fff; box-shadow: -4px 0 20px rgba(0,0,0,0.1); height: 600px; display: flex; flex-direction: column;';
    element.innerHTML = `
      <div style="padding: 20px; border-bottom: 1px solid #e0e0e0; display: flex; justify-content: space-between; align-items: center;">
        <h3 style="margin: 0; font-size: 18px;">Shopping Cart (2)</h3>
        <button style="background: none; border: none; font-size: 24px; cursor: pointer; color: #666;">&times;</button>
      </div>

      <div class="commerce-mini-cart__message-wrapper commerce-mini-cart__message-wrapper--visible">
        <div class="commerce-mini-cart__update-message commerce-mini-cart__update-message--visible">
          Item quantity updated!
        </div>
      </div>

      <div style="flex: 1; overflow-y: auto; padding: 20px;">
        ${[mockProduct, { ...mockProduct, name: 'Another Product', prices: { final: { amount: 45 } } }].map(product => `
          <div style="display: flex; gap: 12px; margin-bottom: 20px; padding-bottom: 20px; border-bottom: 1px solid #e0e0e0;">
            <img src="${product.images[0].url}" alt="${product.name}" style="width: 80px; height: 80px; object-fit: cover; border-radius: 4px;" />
            <div style="flex: 1;">
              <h4 style="margin: 0 0 4px; font-size: 14px;">${product.name}</h4>
              <p style="margin: 0 0 8px; color: #666; font-size: 12px;">Size: M | Color: Blue</p>
              <div style="display: flex; justify-content: space-between; align-items: center;">
                <div style="display: flex; align-items: center; gap: 4px;">
                  <button style="width: 24px; height: 24px; border: 1px solid #e0e0e0; background: #fff; cursor: pointer;">-</button>
                  <span style="width: 24px; text-align: center;">1</span>
                  <button style="width: 24px; height: 24px; border: 1px solid #e0e0e0; background: #fff; cursor: pointer;">+</button>
                </div>
                <span style="font-weight: 600;">${formatPrice(product.prices.final.amount)}</span>
              </div>
            </div>
            <button style="background: none; border: none; color: #999; cursor: pointer; font-size: 18px; align-self: flex-start;">&times;</button>
          </div>
        `).join('')}
      </div>

      <div style="padding: 20px; border-top: 1px solid #e0e0e0; background: #f9f9f9;">
        <div style="display: flex; justify-content: space-between; margin-bottom: 16px;">
          <span style="font-size: 16px;">Subtotal</span>
          <span style="font-size: 18px; font-weight: 600;">${formatPrice(mockProduct.prices.final.amount + 45)}</span>
        </div>
        <button style="width: 100%; padding: 14px; background: #333; color: #fff; border: none; border-radius: 4px; font-size: 16px; cursor: pointer; margin-bottom: 8px;">
          Checkout
        </button>
        <button style="width: 100%; padding: 14px; background: #fff; color: #333; border: 1px solid #333; border-radius: 4px; font-size: 16px; cursor: pointer;">
          View Cart
        </button>
      </div>
    `;
    return element;
  },
};

// Empty Mini Cart
export const EmptyMiniCart = {
  name: 'Empty Mini Cart',
  render: () => {
    const element = document.createElement('div');
    element.className = 'commerce-mini-cart';
    element.style.cssText = 'width: 400px; background: #fff; box-shadow: -4px 0 20px rgba(0,0,0,0.1); height: 400px; display: flex; flex-direction: column;';
    element.innerHTML = `
      <div style="padding: 20px; border-bottom: 1px solid #e0e0e0; display: flex; justify-content: space-between; align-items: center;">
        <h3 style="margin: 0; font-size: 18px;">Shopping Cart</h3>
        <button style="background: none; border: none; font-size: 24px; cursor: pointer; color: #666;">&times;</button>
      </div>
      <div style="flex: 1; display: flex; flex-direction: column; align-items: center; justify-content: center; padding: 40px;">
        <svg width="48" height="48" viewBox="0 0 24 24" fill="none" stroke="#ccc" stroke-width="1.5" style="margin-bottom: 16px;">
          <circle cx="9" cy="21" r="1"></circle>
          <circle cx="20" cy="21" r="1"></circle>
          <path d="M1 1h4l2.68 13.39a2 2 0 0 0 2 1.61h9.72a2 2 0 0 0 2-1.61L23 6H6"></path>
        </svg>
        <p style="margin: 0 0 16px; color: #666; text-align: center;">Your cart is empty</p>
        <button style="padding: 12px 24px; background: #333; color: #fff; border: none; border-radius: 4px; cursor: pointer;">
          Continue Shopping
        </button>
      </div>
    `;
    return element;
  },
};

// Mini Cart Header Icon
export const MiniCartIcon = {
  name: 'Mini Cart Icon (Header)',
  render: () => {
    const element = document.createElement('div');
    element.innerHTML = `
      <div style="display: flex; gap: 24px; align-items: center;">
        <div style="position: relative; cursor: pointer;">
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#333" stroke-width="2">
            <circle cx="9" cy="21" r="1"></circle>
            <circle cx="20" cy="21" r="1"></circle>
            <path d="M1 1h4l2.68 13.39a2 2 0 0 0 2 1.61h9.72a2 2 0 0 0 2-1.61L23 6H6"></path>
          </svg>
          <span style="position: absolute; top: -8px; right: -8px; width: 18px; height: 18px; background: #f44336; color: #fff; border-radius: 50%; font-size: 11px; display: flex; align-items: center; justify-content: center;">2</span>
        </div>
        <div style="position: relative; cursor: pointer;">
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#333" stroke-width="2">
            <circle cx="9" cy="21" r="1"></circle>
            <circle cx="20" cy="21" r="1"></circle>
            <path d="M1 1h4l2.68 13.39a2 2 0 0 0 2 1.61h9.72a2 2 0 0 0 2-1.61L23 6H6"></path>
          </svg>
        </div>
      </div>
      <p style="margin-top: 16px; color: #666; font-size: 14px;">Left: with items | Right: empty</p>
    `;
    return element;
  },
};
