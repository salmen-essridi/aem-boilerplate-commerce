// Commerce Order Cost Summary Block Stories
// CSS loaded from: /blocks/commerce-order-cost-summary/commerce-order-cost-summary.css

const formatPrice = (amount, currency = 'USD') => {
  return new Intl.NumberFormat('en-US', { style: 'currency', currency }).format(amount);
};

export default {
  title: 'Blocks/Commerce Order Cost Summary',
  tags: ['autodocs'],
  parameters: {
    docs: {
      description: {
        component: `
Commerce Order Cost Summary block - Order totals and pricing breakdown.

**CSS Location:** \`/blocks/commerce-order-cost-summary/commerce-order-cost-summary.css\`

**Drop-in:** \`@dropins/storefront-order\` - OrderCostSummary component

Agency can edit the CSS file directly in the main project.
        `,
      },
    },
  },
};

// Order Cost Summary
export const OrderCostSummary = {
  name: 'Order Cost Summary',
  render: () => {
    const element = document.createElement('div');
    element.className = 'commerce-order-cost-summary';
    element.innerHTML = `
      <div class="dropin-design">
        <div class="order-cost-summary">
          <h3 class="order-cost-summary__title">Order Summary</h3>
          <div class="order-cost-summary__rows">
            <div class="order-cost-summary__row">
              <span class="order-cost-summary__label">Subtotal</span>
              <span class="order-cost-summary__value">${formatPrice(234.97)}</span>
            </div>
            <div class="order-cost-summary__row">
              <span class="order-cost-summary__label">Shipping</span>
              <span class="order-cost-summary__value">${formatPrice(9.99)}</span>
            </div>
            <div class="order-cost-summary__row">
              <span class="order-cost-summary__label">Tax</span>
              <span class="order-cost-summary__value">${formatPrice(19.60)}</span>
            </div>
            <div class="order-cost-summary__row order-cost-summary__row--discount">
              <span class="order-cost-summary__label">Discount (SAVE20)</span>
              <span class="order-cost-summary__value">-${formatPrice(20.00)}</span>
            </div>
          </div>
          <div class="order-cost-summary__total">
            <span class="order-cost-summary__total-label">Order Total</span>
            <span class="order-cost-summary__total-value">${formatPrice(244.56)}</span>
          </div>
        </div>
      </div>
    `;
    return element;
  },
};

// Simple Summary
export const SimpleSummary = {
  name: 'Simple Summary',
  render: () => {
    const element = document.createElement('div');
    element.className = 'commerce-order-cost-summary';
    element.innerHTML = `
      <div class="dropin-design">
        <div class="order-cost-summary">
          <h3 class="order-cost-summary__title">Order Summary</h3>
          <div class="order-cost-summary__rows">
            <div class="order-cost-summary__row">
              <span class="order-cost-summary__label">Subtotal</span>
              <span class="order-cost-summary__value">${formatPrice(149.99)}</span>
            </div>
            <div class="order-cost-summary__row">
              <span class="order-cost-summary__label">Shipping</span>
              <span class="order-cost-summary__value">Free</span>
            </div>
            <div class="order-cost-summary__row">
              <span class="order-cost-summary__label">Tax</span>
              <span class="order-cost-summary__value">${formatPrice(12.00)}</span>
            </div>
          </div>
          <div class="order-cost-summary__total">
            <span class="order-cost-summary__total-label">Order Total</span>
            <span class="order-cost-summary__total-value">${formatPrice(161.99)}</span>
          </div>
        </div>
      </div>
    `;
    return element;
  },
};
