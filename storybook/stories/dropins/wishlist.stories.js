// Wishlist Dropin Stories
// Mix of UI components and data-dependent containers

import { mockProduct } from './mockData.js';

export default {
  title: 'Dropins/Wishlist',
  tags: ['autodocs'],
  parameters: {
    docs: {
      description: {
        component: 'Adobe Commerce Wishlist Dropin containers for saving favorite products.',
      },
    },
  },
};

// Helper to create static display
const createStaticDisplay = (content) => {
  const element = document.createElement('div');
  element.className = 'dropin-container wishlist-static';
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

// WishlistToggle Container (UI component)
export const WishlistToggleButton = {
  name: 'Wishlist Toggle',
  render: () => {
    return createStaticDisplay(`
      <div style="display: flex; align-items: center; gap: 16px;">
        <button style="width: 44px; height: 44px; border: 1px solid #e0e0e0; border-radius: 50%; background: #fff; cursor: pointer; display: flex; align-items: center; justify-content: center;">
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#666" stroke-width="2">
            <path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z"></path>
          </svg>
        </button>
        <span style="color: #666; font-size: 14px;">Add to Wishlist</span>
      </div>
    `);
  },
  parameters: {
    docs: {
      description: {
        story: 'Heart icon button to add/remove products from wishlist.',
      },
    },
  },
};

// Wishlist Toggle States
export const WishlistToggleStates = {
  name: 'Wishlist Toggle States',
  render: () => {
    return createStaticDisplay(`
      <div style="display: flex; gap: 32px; align-items: center;">
        <div style="text-align: center;">
          <button style="width: 44px; height: 44px; border: 1px solid #e0e0e0; border-radius: 50%; background: #fff; cursor: pointer; display: flex; align-items: center; justify-content: center;">
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#666" stroke-width="2">
              <path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z"></path>
            </svg>
          </button>
          <p style="margin: 8px 0 0; font-size: 12px; color: #666;">Not in wishlist</p>
        </div>
        <div style="text-align: center;">
          <button style="width: 44px; height: 44px; border: 1px solid #f44336; border-radius: 50%; background: #fff; cursor: pointer; display: flex; align-items: center; justify-content: center;">
            <svg width="24" height="24" viewBox="0 0 24 24" fill="#f44336" stroke="#f44336" stroke-width="2">
              <path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z"></path>
            </svg>
          </button>
          <p style="margin: 8px 0 0; font-size: 12px; color: #666;">In wishlist</p>
        </div>
        <div style="text-align: center;">
          <button disabled style="width: 44px; height: 44px; border: 1px solid #e0e0e0; border-radius: 50%; background: #f5f5f5; cursor: not-allowed; display: flex; align-items: center; justify-content: center; opacity: 0.5;">
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#999" stroke-width="2">
              <path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z"></path>
            </svg>
          </button>
          <p style="margin: 8px 0 0; font-size: 12px; color: #666;">Loading</p>
        </div>
      </div>
    `);
  },
  parameters: {
    docs: {
      description: {
        story: 'Different states of the wishlist toggle button.',
      },
    },
  },
};

// Wishlist Alert
export const WishlistAlertDisplay = {
  name: 'Wishlist Alert',
  render: () => {
    return createStaticDisplay(`
      <div style="display: flex; align-items: center; gap: 12px; padding: 12px 16px; background: #E8F5E9; border-radius: 4px;">
        <svg width="20" height="20" viewBox="0 0 24 24" fill="#4CAF50" stroke="#4CAF50" stroke-width="2">
          <path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z"></path>
        </svg>
        <span style="flex: 1; color: #2E7D32;">Product added to your wishlist!</span>
        <a href="#" style="color: #2E7D32; font-weight: 500;">View Wishlist</a>
      </div>
    `);
  },
  parameters: {
    docs: {
      description: {
        story: 'Notification alert when product is added to wishlist.',
      },
    },
  },
};

// Wishlist Item
export const WishlistItemDisplay = {
  name: 'Wishlist Item',
  render: () => {
    return createStaticDisplay(`
      <div style="display: flex; gap: 16px; padding: 16px; border: 1px solid #e0e0e0; border-radius: 8px;">
        <img src="${mockProduct.images[0].url}" alt="${mockProduct.name}"
             style="width: 120px; height: 120px; object-fit: cover; border-radius: 4px;" />
        <div style="flex: 1;">
          <div style="display: flex; justify-content: space-between; align-items: flex-start;">
            <div>
              <h4 style="margin: 0 0 4px; font-size: 16px;">${mockProduct.name}</h4>
              <p style="margin: 0; color: #666; font-size: 14px;">SKU: ${mockProduct.sku}</p>
            </div>
            <button style="background: none; border: none; cursor: pointer; color: #999; font-size: 20px;">×</button>
          </div>
          <p style="margin: 12px 0; font-size: 18px; font-weight: 600;">${formatPrice(mockProduct.prices.final.amount)}</p>
          <div style="display: flex; gap: 8px; margin-top: auto;">
            <span style="padding: 4px 8px; background: ${mockProduct.inStock ? '#E8F5E9' : '#FFEBEE'}; color: ${mockProduct.inStock ? '#4CAF50' : '#f44336'}; border-radius: 4px; font-size: 12px;">
              ${mockProduct.inStock ? 'In Stock' : 'Out of Stock'}
            </span>
          </div>
          <button style="margin-top: 12px; padding: 10px 20px; background: #333; color: #fff; border: none; border-radius: 4px; cursor: pointer; font-size: 14px;">
            Add to Cart
          </button>
        </div>
      </div>
    `);
  },
  parameters: {
    docs: {
      description: {
        story: 'Single wishlist item with product details and actions.',
      },
    },
  },
};

// Wishlist Grid
export const WishlistGridDisplay = {
  name: 'Wishlist Grid',
  render: () => {
    const products = [
      mockProduct,
      { ...mockProduct, name: 'Classic Polo Shirt', sku: 'PS01-M-Blue', prices: { final: { amount: 45, currency: 'USD' } } },
      { ...mockProduct, name: 'Canvas Belt', sku: 'CB01-L', prices: { final: { amount: 25, currency: 'USD' } }, inStock: false },
    ];
    return createStaticDisplay(`
      <div style="display: flex; justify-content: space-between; align-items: center; margin-bottom: 20px;">
        <h2 style="margin: 0; font-size: 24px; font-weight: 600;">My Wishlist</h2>
        <span style="color: #666;">${products.length} items</span>
      </div>
      <div style="display: grid; grid-template-columns: repeat(3, 1fr); gap: 20px;">
        ${products.map(product => `
          <div style="border: 1px solid #e0e0e0; border-radius: 8px; overflow: hidden;">
            <div style="position: relative;">
              <img src="${product.images[0].url}" alt="${product.name}"
                   style="width: 100%; height: 200px; object-fit: cover;" />
              <button style="position: absolute; top: 8px; right: 8px; width: 32px; height: 32px; border: none; border-radius: 50%; background: rgba(255,255,255,0.9); cursor: pointer; display: flex; align-items: center; justify-content: center;">
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="#333" stroke-width="2">
                  <line x1="18" y1="6" x2="6" y2="18"></line>
                  <line x1="6" y1="6" x2="18" y2="18"></line>
                </svg>
              </button>
            </div>
            <div style="padding: 16px;">
              <h4 style="margin: 0 0 8px; font-size: 14px; font-weight: 500;">${product.name}</h4>
              <p style="margin: 0 0 12px; font-size: 16px; font-weight: 600;">${formatPrice(product.prices.final.amount)}</p>
              <button style="width: 100%; padding: 10px; background: ${product.inStock ? '#333' : '#ccc'}; color: #fff; border: none; border-radius: 4px; cursor: ${product.inStock ? 'pointer' : 'not-allowed'}; font-size: 14px;">
                ${product.inStock ? 'Add to Cart' : 'Out of Stock'}
              </button>
            </div>
          </div>
        `).join('')}
      </div>
    `);
  },
  parameters: {
    docs: {
      description: {
        story: 'Grid view of wishlist items with quick add to cart.',
      },
    },
  },
};

// Empty Wishlist
export const EmptyWishlistDisplay = {
  name: 'Empty Wishlist',
  render: () => {
    return createStaticDisplay(`
      <div style="text-align: center; padding: 60px 20px;">
        <svg width="64" height="64" viewBox="0 0 24 24" fill="none" stroke="#ccc" stroke-width="1" style="margin-bottom: 16px;">
          <path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z"></path>
        </svg>
        <h3 style="margin: 0 0 8px; font-size: 20px; font-weight: 600;">Your wishlist is empty</h3>
        <p style="margin: 0 0 20px; color: #666;">Save your favorite items to buy later.</p>
        <button style="padding: 12px 24px; background: #333; color: #fff; border: none; border-radius: 4px; cursor: pointer; font-size: 16px;">
          Start Shopping
        </button>
      </div>
    `);
  },
  parameters: {
    docs: {
      description: {
        story: 'Empty state when no items in wishlist.',
      },
    },
  },
};
