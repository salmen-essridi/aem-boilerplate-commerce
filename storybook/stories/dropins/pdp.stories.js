// PDP (Product Details Page) Dropin Stories
// These containers display product data using mock data

import { mockProduct } from './mockData.js';

export default {
  title: 'Dropins/PDP',
  tags: ['autodocs'],
  parameters: {
    docs: {
      description: {
        component: 'Adobe Commerce PDP (Product Details Page) Dropin containers for displaying product information.',
      },
    },
  },
};

// Helper to create static product display
const createStaticProduct = (content, title) => {
  const element = document.createElement('div');
  element.className = 'dropin-container pdp-static';
  element.innerHTML = `
    <div style="padding: 16px; border: 1px solid #e0e0e0; border-radius: 8px; background: #fff;">
      ${content}
    </div>
  `;
  return element;
};

// ProductHeader - shows product name
export const Header = {
  name: 'Product Header',
  render: () => {
    return createStaticProduct(`
      <h1 style="margin: 0; font-size: 24px; font-weight: 600;">${mockProduct.name}</h1>
      <p style="margin: 8px 0 0; color: #666; font-size: 14px;">SKU: ${mockProduct.sku}</p>
    `, 'Product Header');
  },
  parameters: {
    docs: {
      description: {
        story: 'Displays the product name and SKU. Primary heading element for PDP.',
      },
    },
  },
};

// ProductPrice
export const Price = {
  name: 'Product Price',
  render: () => {
    const formatter = new Intl.NumberFormat('en-US', { style: 'currency', currency: mockProduct.prices.final.currency });
    return createStaticProduct(`
      <div style="font-size: 24px; font-weight: 600; color: #333;">
        ${formatter.format(mockProduct.prices.final.amount)}
      </div>
      ${mockProduct.prices.regular.amount !== mockProduct.prices.final.amount ? `
        <div style="font-size: 16px; color: #999; text-decoration: line-through;">
          ${formatter.format(mockProduct.prices.regular.amount)}
        </div>
      ` : ''}
    `, 'Product Price');
  },
  parameters: {
    docs: {
      description: {
        story: 'Shows product pricing including regular and sale prices with currency formatting.',
      },
    },
  },
};

// ProductGallery
export const Gallery = {
  name: 'Product Gallery',
  render: () => {
    return createStaticProduct(`
      <div style="display: flex; gap: 12px;">
        <div style="flex: 1;">
          <img src="${mockProduct.images[0].url}" alt="${mockProduct.images[0].label}"
               style="width: 100%; max-width: 400px; height: auto; border-radius: 4px;" />
        </div>
        <div style="display: flex; flex-direction: column; gap: 8px;">
          ${mockProduct.images.map(img => `
            <img src="${img.url}" alt="${img.label}"
                 style="width: 80px; height: 80px; object-fit: cover; border-radius: 4px; border: 1px solid #e0e0e0; cursor: pointer;" />
          `).join('')}
        </div>
      </div>
    `, 'Product Gallery');
  },
  parameters: {
    docs: {
      description: {
        story: 'Image gallery with main image and thumbnails. Supports zoom and navigation.',
      },
    },
  },
};

// ProductDescription
export const Description = {
  name: 'Product Description',
  render: () => {
    return createStaticProduct(`
      <h3 style="margin: 0 0 12px; font-size: 18px; font-weight: 600;">Description</h3>
      <div style="color: #333; line-height: 1.6;">
        ${mockProduct.description}
      </div>
    `, 'Product Description');
  },
  parameters: {
    docs: {
      description: {
        story: 'Full product description with HTML content support. Typically displayed below the fold.',
      },
    },
  },
};

// ProductShortDescription
export const ShortDescription = {
  name: 'Product Short Description',
  render: () => {
    return createStaticProduct(`
      <p style="margin: 0; color: #666; line-height: 1.5;">
        ${mockProduct.shortDescription}
      </p>
    `, 'Product Short Description');
  },
  parameters: {
    docs: {
      description: {
        story: 'Brief product summary displayed near the product header.',
      },
    },
  },
};

// ProductOptions
export const Options = {
  name: 'Product Options',
  render: () => {
    return createStaticProduct(`
      ${mockProduct.options.map(option => `
        <div style="margin-bottom: 16px;">
          <label style="display: block; margin-bottom: 8px; font-weight: 600;">${option.label}</label>
          <div style="display: flex; gap: 8px; flex-wrap: wrap;">
            ${option.items.map(item => `
              <button style="
                padding: 8px 16px;
                border: 2px solid ${item.selected ? '#333' : '#e0e0e0'};
                border-radius: 4px;
                background: ${item.selected ? '#333' : '#fff'};
                color: ${item.selected ? '#fff' : '#333'};
                cursor: ${item.inStock ? 'pointer' : 'not-allowed'};
                opacity: ${item.inStock ? 1 : 0.5};
                font-size: 14px;
              ">${item.label}</button>
            `).join('')}
          </div>
        </div>
      `).join('')}
    `, 'Product Options');
  },
  parameters: {
    docs: {
      description: {
        story: 'Configurable product options like size, color. Supports swatches and dropdowns.',
      },
    },
  },
};

// ProductQuantity
export const Quantity = {
  name: 'Product Quantity',
  render: () => {
    return createStaticProduct(`
      <div style="display: flex; align-items: center; gap: 8px;">
        <label style="font-weight: 600;">Quantity:</label>
        <div style="display: flex; align-items: center; border: 1px solid #e0e0e0; border-radius: 4px;">
          <button style="padding: 8px 12px; border: none; background: none; cursor: pointer; font-size: 18px;">−</button>
          <input type="number" value="1" min="1" style="width: 50px; text-align: center; border: none; font-size: 16px;" />
          <button style="padding: 8px 12px; border: none; background: none; cursor: pointer; font-size: 18px;">+</button>
        </div>
      </div>
    `, 'Product Quantity');
  },
  parameters: {
    docs: {
      description: {
        story: 'Quantity selector with increment/decrement buttons and input field.',
      },
    },
  },
};

// ProductAttributes
export const Attributes = {
  name: 'Product Attributes',
  render: () => {
    return createStaticProduct(`
      <h3 style="margin: 0 0 12px; font-size: 18px; font-weight: 600;">Product Details</h3>
      <table style="width: 100%; border-collapse: collapse;">
        ${mockProduct.attributes.map(attr => `
          <tr>
            <td style="padding: 8px 16px 8px 0; border-bottom: 1px solid #e0e0e0; color: #666; width: 40%;">${attr.name}</td>
            <td style="padding: 8px 0; border-bottom: 1px solid #e0e0e0; color: #333;">${attr.value}</td>
          </tr>
        `).join('')}
      </table>
    `, 'Product Attributes');
  },
  parameters: {
    docs: {
      description: {
        story: 'Product specifications and attributes displayed in a table format.',
      },
    },
  },
};

// Stock Status
export const StockStatus = {
  name: 'Stock Status',
  render: () => {
    return createStaticProduct(`
      <div style="display: flex; align-items: center; gap: 8px;">
        <span style="
          display: inline-block;
          width: 10px;
          height: 10px;
          border-radius: 50%;
          background: ${mockProduct.inStock ? '#4CAF50' : '#f44336'};
        "></span>
        <span style="font-weight: 500; color: ${mockProduct.inStock ? '#4CAF50' : '#f44336'};">
          ${mockProduct.inStock ? 'In Stock' : 'Out of Stock'}
        </span>
      </div>
    `, 'Stock Status');
  },
  parameters: {
    docs: {
      description: {
        story: 'Shows product availability status with visual indicator.',
      },
    },
  },
};
