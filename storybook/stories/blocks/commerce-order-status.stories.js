// Commerce Order Status Block Stories
// CSS loaded from: /blocks/commerce-order-status/commerce-order-status.css
import { mockProduct } from '../dropins/mockData.js';

export default {
  title: 'Blocks/Commerce Order Status',
  tags: ['autodocs'],
  parameters: {
    docs: {
      description: {
        component: `
Commerce Order Status block - Order status display with actions.

**CSS Location:** \`/blocks/commerce-order-status/commerce-order-status.css\`

**Drop-in:** \`@dropins/storefront-order\` - OrderStatus component

Agency can edit the CSS file directly in the main project.
        `,
      },
    },
  },
};

// Order Status Processing
export const OrderStatusProcessing = {
  name: 'Processing Status',
  render: () => {
    const element = document.createElement('div');
    element.className = 'commerce-order-status';
    element.innerHTML = `
      <div class="dropin-design">
        <div class="order-status">
          <div class="order-status__header">
            <div class="order-status__badge order-status__badge--processing">Processing</div>
            <p class="order-status__date">Placed on November 15, 2024</p>
          </div>
          <div class="order-status__timeline">
            <div class="order-status__step order-status__step--completed">
              <div class="order-status__step-icon">✓</div>
              <div class="order-status__step-label">Order Placed</div>
            </div>
            <div class="order-status__step order-status__step--active">
              <div class="order-status__step-icon">2</div>
              <div class="order-status__step-label">Processing</div>
            </div>
            <div class="order-status__step">
              <div class="order-status__step-icon">3</div>
              <div class="order-status__step-label">Shipped</div>
            </div>
            <div class="order-status__step">
              <div class="order-status__step-icon">4</div>
              <div class="order-status__step-label">Delivered</div>
            </div>
          </div>
          <div class="order-status__actions">
            <button class="dropin-button dropin-button--secondary">Request Return</button>
            <button class="dropin-button dropin-button--primary">Reorder</button>
          </div>
        </div>
      </div>
    `;
    return element;
  },
};

// Order Status Shipped
export const OrderStatusShipped = {
  name: 'Shipped Status',
  render: () => {
    const element = document.createElement('div');
    element.className = 'commerce-order-status';
    element.innerHTML = `
      <div class="dropin-design">
        <div class="order-status">
          <div class="order-status__header">
            <div class="order-status__badge order-status__badge--shipped">Shipped</div>
            <p class="order-status__date">Placed on November 15, 2024</p>
          </div>
          <div class="order-status__timeline">
            <div class="order-status__step order-status__step--completed">
              <div class="order-status__step-icon">✓</div>
              <div class="order-status__step-label">Order Placed</div>
            </div>
            <div class="order-status__step order-status__step--completed">
              <div class="order-status__step-icon">✓</div>
              <div class="order-status__step-label">Processing</div>
            </div>
            <div class="order-status__step order-status__step--active">
              <div class="order-status__step-icon">3</div>
              <div class="order-status__step-label">Shipped</div>
            </div>
            <div class="order-status__step">
              <div class="order-status__step-icon">4</div>
              <div class="order-status__step-label">Delivered</div>
            </div>
          </div>
          <div class="order-status__tracking">
            <p><strong>Tracking Number:</strong> <a href="#">1Z999AA10123456784</a></p>
          </div>
          <div class="order-status__actions">
            <button class="dropin-button dropin-button--secondary">Request Return</button>
            <button class="dropin-button dropin-button--primary">Reorder</button>
          </div>
        </div>
      </div>
    `;
    return element;
  },
};

// Order Status Delivered
export const OrderStatusDelivered = {
  name: 'Delivered Status',
  render: () => {
    const element = document.createElement('div');
    element.className = 'commerce-order-status';
    element.innerHTML = `
      <div class="dropin-design">
        <div class="order-status">
          <div class="order-status__header">
            <div class="order-status__badge order-status__badge--delivered">Delivered</div>
            <p class="order-status__date">Placed on November 15, 2024 • Delivered on November 20, 2024</p>
          </div>
          <div class="order-status__timeline">
            <div class="order-status__step order-status__step--completed">
              <div class="order-status__step-icon">✓</div>
              <div class="order-status__step-label">Order Placed</div>
            </div>
            <div class="order-status__step order-status__step--completed">
              <div class="order-status__step-icon">✓</div>
              <div class="order-status__step-label">Processing</div>
            </div>
            <div class="order-status__step order-status__step--completed">
              <div class="order-status__step-icon">✓</div>
              <div class="order-status__step-label">Shipped</div>
            </div>
            <div class="order-status__step order-status__step--completed">
              <div class="order-status__step-icon">✓</div>
              <div class="order-status__step-label">Delivered</div>
            </div>
          </div>
          <div class="order-status__actions">
            <button class="dropin-button dropin-button--secondary">Request Return</button>
            <button class="dropin-button dropin-button--primary">Reorder</button>
          </div>
        </div>
      </div>
    `;
    return element;
  },
};
