// Commerce Order Returns Block Stories
// CSS loaded from: /blocks/commerce-order-returns/commerce-order-returns.css
import { mockProduct } from '../dropins/mockData.js';

export default {
  title: 'Blocks/Commerce Order Returns',
  tags: ['autodocs'],
  parameters: {
    docs: {
      description: {
        component: `
Commerce Order Returns block - Returns associated with an order.

**CSS Location:** \`/blocks/commerce-order-returns/commerce-order-returns.css\`

**Drop-in:** \`@dropins/storefront-order\` - OrderReturns component

Agency can edit the CSS file directly in the main project.
        `,
      },
    },
  },
};

// Order Returns List
export const OrderReturnsList = {
  name: 'Order Returns List',
  render: () => {
    const element = document.createElement('div');
    element.className = 'commerce-order-returns';
    element.innerHTML = `
      <div class="dropin-design">
        <div class="order-returns">
          <h3 class="order-returns__title">Returns for this order</h3>
          <div class="order-returns__list">
            <div class="order-returns__item">
              <div class="order-returns__item-header">
                <div class="order-returns__item-info">
                  <span class="order-returns__return-number">Return #R000001234</span>
                  <span class="order-returns__badge order-returns__badge--pending">Pending</span>
                </div>
                <span class="order-returns__date">Requested on Nov 18, 2024</span>
              </div>
              <div class="order-returns__item-products">
                <div class="order-returns__product">
                  <img src="${mockProduct.images[0].url}" alt="${mockProduct.name}" class="order-returns__product-image" />
                  <div class="order-returns__product-details">
                    <p class="order-returns__product-name">${mockProduct.name}</p>
                    <p class="order-returns__product-reason">Reason: Item didn't fit</p>
                    <p class="order-returns__product-qty">Qty: 1</p>
                  </div>
                </div>
              </div>
              <div class="order-returns__item-actions">
                <a href="#" class="dropin-button dropin-button--tertiary">View Return Details</a>
              </div>
            </div>
          </div>
        </div>
      </div>
    `;
    return element;
  },
};

// Return with Tracking
export const ReturnWithTracking = {
  name: 'Return With Tracking',
  render: () => {
    const element = document.createElement('div');
    element.className = 'commerce-order-returns';
    element.innerHTML = `
      <div class="dropin-design">
        <div class="order-returns">
          <h3 class="order-returns__title">Returns for this order</h3>
          <div class="order-returns__list">
            <div class="order-returns__item">
              <div class="order-returns__item-header">
                <div class="order-returns__item-info">
                  <span class="order-returns__return-number">Return #R000001234</span>
                  <span class="order-returns__badge order-returns__badge--shipped">Return Shipped</span>
                </div>
                <span class="order-returns__date">Requested on Nov 15, 2024</span>
              </div>
              <div class="order-returns__tracking">
                <p>Tracking: <a href="#" class="dropin-link">1Z999AA10123456784</a></p>
              </div>
              <div class="order-returns__item-products">
                <div class="order-returns__product">
                  <img src="${mockProduct.images[0].url}" alt="${mockProduct.name}" class="order-returns__product-image" />
                  <div class="order-returns__product-details">
                    <p class="order-returns__product-name">${mockProduct.name}</p>
                    <p class="order-returns__product-reason">Reason: Changed my mind</p>
                    <p class="order-returns__product-qty">Qty: 1</p>
                  </div>
                </div>
              </div>
              <div class="order-returns__item-actions">
                <a href="#" class="dropin-button dropin-button--tertiary">View Return Details</a>
              </div>
            </div>
          </div>
        </div>
      </div>
    `;
    return element;
  },
};

// No Returns
export const NoReturns = {
  name: 'No Returns',
  render: () => {
    const element = document.createElement('div');
    element.className = 'commerce-order-returns';
    element.innerHTML = `
      <div class="dropin-design">
        <div class="order-returns order-returns--empty">
          <h3 class="order-returns__title">Returns for this order</h3>
          <p class="order-returns__empty-message">No returns have been requested for this order.</p>
        </div>
      </div>
    `;
    return element;
  },
};
