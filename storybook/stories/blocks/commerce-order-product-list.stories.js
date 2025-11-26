// Commerce Order Product List Block Stories
// CSS loaded from: /blocks/commerce-order-product-list/commerce-order-product-list.css
import { mockProduct } from '../dropins/mockData.js';

const formatPrice = (amount, currency = 'USD') => {
  return new Intl.NumberFormat('en-US', { style: 'currency', currency }).format(amount);
};

export default {
  title: 'Blocks/Commerce Order Product List',
  tags: ['autodocs'],
  parameters: {
    docs: {
      description: {
        component: `
Commerce Order Product List block - Products in an order.

**CSS Location:** \`/blocks/commerce-order-product-list/commerce-order-product-list.css\`

**Drop-in:** \`@dropins/storefront-order\` - OrderProductList component

Agency can edit the CSS file directly in the main project.
        `,
      },
    },
  },
};

// Order Product List
export const OrderProductList = {
  name: 'Order Product List',
  render: () => {
    const element = document.createElement('div');
    element.className = 'commerce-order-product-list';
    element.innerHTML = `
      <div class="dropin-design">
        <div class="order-product-list">
          <h3 class="order-product-list__title">Items in this order</h3>
          <div class="order-product-list__items">
            <div class="order-product-list__item">
              <a href="#" class="order-product-list__image-link">
                <img src="${mockProduct.images[0].url}" alt="${mockProduct.name}" class="order-product-list__image" />
              </a>
              <div class="order-product-list__details">
                <a href="#" class="order-product-list__name">${mockProduct.name}</a>
                <p class="order-product-list__sku">SKU: ${mockProduct.sku}</p>
                <div class="order-product-list__options">
                  <span class="order-product-list__option">Size: M</span>
                  <span class="order-product-list__option">Color: Black</span>
                </div>
                <p class="order-product-list__qty">Qty: 1</p>
              </div>
              <div class="order-product-list__price">
                <p class="order-product-list__price-value">${formatPrice(mockProduct.price)}</p>
              </div>
            </div>
            <div class="order-product-list__item">
              <a href="#" class="order-product-list__image-link">
                <img src="${mockProduct.images[0].url}" alt="Another Product" class="order-product-list__image" />
              </a>
              <div class="order-product-list__details">
                <a href="#" class="order-product-list__name">Classic White Sneakers</a>
                <p class="order-product-list__sku">SKU: WS-001</p>
                <div class="order-product-list__options">
                  <span class="order-product-list__option">Size: 10</span>
                </div>
                <p class="order-product-list__qty">Qty: 2</p>
              </div>
              <div class="order-product-list__price">
                <p class="order-product-list__price-value">${formatPrice(89.99)}</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    `;
    return element;
  },
};

// Single Item
export const SingleItem = {
  name: 'Single Item',
  render: () => {
    const element = document.createElement('div');
    element.className = 'commerce-order-product-list';
    element.innerHTML = `
      <div class="dropin-design">
        <div class="order-product-list">
          <h3 class="order-product-list__title">Items in this order</h3>
          <div class="order-product-list__items">
            <div class="order-product-list__item">
              <a href="#" class="order-product-list__image-link">
                <img src="${mockProduct.images[0].url}" alt="${mockProduct.name}" class="order-product-list__image" />
              </a>
              <div class="order-product-list__details">
                <a href="#" class="order-product-list__name">${mockProduct.name}</a>
                <p class="order-product-list__sku">SKU: ${mockProduct.sku}</p>
                <p class="order-product-list__qty">Qty: 1</p>
              </div>
              <div class="order-product-list__price">
                <p class="order-product-list__price-value">${formatPrice(mockProduct.price)}</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    `;
    return element;
  },
};
