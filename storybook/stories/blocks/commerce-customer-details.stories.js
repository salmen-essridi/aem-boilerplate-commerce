// Commerce Customer Details Block Stories
// CSS loaded from: /blocks/commerce-customer-details/commerce-customer-details.css

export default {
  title: 'Blocks/Commerce Customer Details',
  tags: ['autodocs'],
  parameters: {
    docs: {
      description: {
        component: `
Commerce Customer Details block - Order customer information display.

**CSS Location:** \`/blocks/commerce-customer-details/commerce-customer-details.css\`

**Drop-in:** \`@dropins/storefront-order\` - CustomerDetails component

Agency can edit the CSS file directly in the main project.
        `,
      },
    },
  },
};

// Customer Details
export const CustomerDetails = {
  name: 'Customer Details',
  render: () => {
    const element = document.createElement('div');
    element.className = 'commerce-customer-details';
    element.innerHTML = `
      <div class="dropin-design">
        <div class="order-customer-details">
          <div class="order-customer-details__section">
            <h3 class="order-customer-details__title">Shipping Address</h3>
            <div class="order-customer-details__content">
              <p class="order-customer-details__name">John Doe</p>
              <p class="order-customer-details__line">123 Main Street</p>
              <p class="order-customer-details__line">Apt 4B</p>
              <p class="order-customer-details__line">New York, NY 10001</p>
              <p class="order-customer-details__line">United States</p>
              <p class="order-customer-details__phone">+1 (555) 123-4567</p>
            </div>
          </div>
          <div class="order-customer-details__section">
            <h3 class="order-customer-details__title">Billing Address</h3>
            <div class="order-customer-details__content">
              <p class="order-customer-details__name">John Doe</p>
              <p class="order-customer-details__line">123 Main Street</p>
              <p class="order-customer-details__line">Apt 4B</p>
              <p class="order-customer-details__line">New York, NY 10001</p>
              <p class="order-customer-details__line">United States</p>
              <p class="order-customer-details__phone">+1 (555) 123-4567</p>
            </div>
          </div>
          <div class="order-customer-details__section">
            <h3 class="order-customer-details__title">Shipping Method</h3>
            <div class="order-customer-details__content">
              <p class="order-customer-details__method">Standard Shipping</p>
              <p class="order-customer-details__estimate">Estimated delivery: 5-7 business days</p>
            </div>
          </div>
          <div class="order-customer-details__section">
            <h3 class="order-customer-details__title">Payment Method</h3>
            <div class="order-customer-details__content">
              <p class="order-customer-details__payment">Credit Card ending in 4242</p>
            </div>
          </div>
        </div>
      </div>
    `;
    return element;
  },
};
