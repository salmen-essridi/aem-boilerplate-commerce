// Commerce Shipping Status Block Stories
// CSS loaded from: /blocks/commerce-shipping-status/commerce-shipping-status.css
import { mockProduct } from '../dropins/mockData.js';

export default {
  title: 'Blocks/Commerce Shipping Status',
  tags: ['autodocs'],
  parameters: {
    docs: {
      description: {
        component: `
Commerce Shipping Status block - Shipment tracking and delivery status.

**CSS Location:** \`/blocks/commerce-shipping-status/commerce-shipping-status.css\`

**Drop-in:** \`@dropins/storefront-order\` - ShippingStatus component

Agency can edit the CSS file directly in the main project.
        `,
      },
    },
  },
};

// Shipping Status In Transit
export const ShippingInTransit = {
  name: 'In Transit',
  render: () => {
    const element = document.createElement('div');
    element.className = 'commerce-shipping-status';
    element.innerHTML = `
      <div class="dropin-design">
        <div class="shipping-status">
          <div class="shipping-status__header">
            <h3 class="shipping-status__title">Shipment 1 of 1</h3>
            <div class="shipping-status__badge shipping-status__badge--transit">In Transit</div>
          </div>
          <div class="shipping-status__tracking">
            <p class="shipping-status__carrier">UPS Ground</p>
            <p class="shipping-status__tracking-number">
              Tracking: <a href="#" class="dropin-link">1Z999AA10123456784</a>
            </p>
            <p class="shipping-status__estimate">Estimated delivery: November 22, 2024</p>
          </div>
          <div class="shipping-status__items">
            <h4 class="shipping-status__items-title">Items in this shipment</h4>
            <div class="shipping-status__item">
              <img src="${mockProduct.images[0].url}" alt="${mockProduct.name}" class="shipping-status__item-image" />
              <div class="shipping-status__item-details">
                <p class="shipping-status__item-name">${mockProduct.name}</p>
                <p class="shipping-status__item-qty">Qty: 1</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    `;
    return element;
  },
};

// Shipping Status Delivered
export const ShippingDelivered = {
  name: 'Delivered',
  render: () => {
    const element = document.createElement('div');
    element.className = 'commerce-shipping-status';
    element.innerHTML = `
      <div class="dropin-design">
        <div class="shipping-status">
          <div class="shipping-status__header">
            <h3 class="shipping-status__title">Shipment 1 of 1</h3>
            <div class="shipping-status__badge shipping-status__badge--delivered">Delivered</div>
          </div>
          <div class="shipping-status__tracking">
            <p class="shipping-status__carrier">UPS Ground</p>
            <p class="shipping-status__tracking-number">
              Tracking: <a href="#" class="dropin-link">1Z999AA10123456784</a>
            </p>
            <p class="shipping-status__delivered">Delivered on November 20, 2024 at 2:34 PM</p>
          </div>
          <div class="shipping-status__items">
            <h4 class="shipping-status__items-title">Items in this shipment</h4>
            <div class="shipping-status__item">
              <img src="${mockProduct.images[0].url}" alt="${mockProduct.name}" class="shipping-status__item-image" />
              <div class="shipping-status__item-details">
                <p class="shipping-status__item-name">${mockProduct.name}</p>
                <p class="shipping-status__item-qty">Qty: 1</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    `;
    return element;
  },
};

// Not Yet Shipped
export const NotYetShipped = {
  name: 'Not Yet Shipped',
  render: () => {
    const element = document.createElement('div');
    element.className = 'commerce-shipping-status';
    element.innerHTML = `
      <div class="dropin-design">
        <div class="shipping-status">
          <div class="shipping-status__header">
            <h3 class="shipping-status__title">Not Yet Shipped</h3>
            <div class="shipping-status__badge shipping-status__badge--pending">Pending</div>
          </div>
          <div class="shipping-status__info">
            <p>These items are being prepared for shipment. You will receive tracking information once they ship.</p>
          </div>
          <div class="shipping-status__items">
            <h4 class="shipping-status__items-title">Items awaiting shipment</h4>
            <div class="shipping-status__item">
              <img src="${mockProduct.images[0].url}" alt="${mockProduct.name}" class="shipping-status__item-image" />
              <div class="shipping-status__item-details">
                <p class="shipping-status__item-name">${mockProduct.name}</p>
                <p class="shipping-status__item-qty">Qty: 2</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    `;
    return element;
  },
};
