// Commerce Search Order Block Stories
// CSS loaded from: /blocks/commerce-search-order/commerce-search-order.css

export default {
  title: 'Blocks/Commerce Search Order',
  tags: ['autodocs'],
  parameters: {
    docs: {
      description: {
        component: `
Commerce Search Order block - Guest order lookup form.

**CSS Location:** \`/blocks/commerce-search-order/commerce-search-order.css\`

**Drop-in:** \`@dropins/storefront-order\` - OrderSearch component

Agency can edit the CSS file directly in the main project.
        `,
      },
    },
  },
};

// Order Search Form
export const OrderSearchForm = {
  name: 'Order Search Form',
  render: () => {
    const element = document.createElement('div');
    element.className = 'commerce-search-order';
    element.innerHTML = `
      <div class="dropin-design">
        <div class="order-search">
          <h2 class="order-search__title">Find Your Order</h2>
          <p class="order-search__description">Enter your order number and email address to view your order details.</p>
          <form class="order-search__form">
            <div class="order-search__field">
              <label class="dropin-field__label">Order Number *</label>
              <input type="text" class="dropin-field__input" placeholder="e.g., 000012345" />
            </div>
            <div class="order-search__field">
              <label class="dropin-field__label">Email Address *</label>
              <input type="email" class="dropin-field__input" placeholder="email@example.com" />
            </div>
            <div class="order-search__field">
              <label class="dropin-field__label">Billing Zip/Postal Code *</label>
              <input type="text" class="dropin-field__input" placeholder="10001" />
            </div>
            <div class="order-search__actions">
              <button type="submit" class="dropin-button dropin-button--primary">Find Order</button>
            </div>
          </form>
          <div class="order-search__footer">
            <p>Have an account? <a href="#" class="dropin-link">Sign in</a> to view all your orders.</p>
          </div>
        </div>
      </div>
    `;
    return element;
  },
};

// Sign In Required
export const SignInRequired = {
  name: 'Sign In Required',
  render: () => {
    const element = document.createElement('div');
    element.className = 'commerce-search-order';
    element.innerHTML = `
      <div class="dropin-design">
        <div class="order-search order-search--signin">
          <h2 class="order-search__title">Enter your password to view order details</h2>
          <form class="order-search__form">
            <div class="order-search__field">
              <label class="dropin-field__label">Email Address</label>
              <input type="email" class="dropin-field__input" value="john.doe@example.com" disabled />
            </div>
            <div class="order-search__field">
              <label class="dropin-field__label">Password *</label>
              <input type="password" class="dropin-field__input" placeholder="••••••••" />
            </div>
            <div class="order-search__actions">
              <button type="submit" class="dropin-button dropin-button--primary">View order</button>
            </div>
          </form>
          <div class="order-search__footer">
            <a href="#" class="dropin-link">Forgot password?</a>
          </div>
        </div>
      </div>
    `;
    return element;
  },
};

// Order Not Found
export const OrderNotFound = {
  name: 'Order Not Found',
  render: () => {
    const element = document.createElement('div');
    element.className = 'commerce-search-order';
    element.innerHTML = `
      <div class="dropin-design">
        <div class="order-search order-search--error">
          <div class="order-search__error-message">
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
              <circle cx="12" cy="12" r="10"></circle>
              <line x1="12" y1="8" x2="12" y2="12"></line>
              <line x1="12" y1="16" x2="12.01" y2="16"></line>
            </svg>
            <p>We couldn't find an order matching those details. Please check your information and try again.</p>
          </div>
          <form class="order-search__form">
            <div class="order-search__field">
              <label class="dropin-field__label">Order Number *</label>
              <input type="text" class="dropin-field__input" placeholder="e.g., 000012345" />
            </div>
            <div class="order-search__field">
              <label class="dropin-field__label">Email Address *</label>
              <input type="email" class="dropin-field__input" placeholder="email@example.com" />
            </div>
            <div class="order-search__field">
              <label class="dropin-field__label">Billing Zip/Postal Code *</label>
              <input type="text" class="dropin-field__input" placeholder="10001" />
            </div>
            <div class="order-search__actions">
              <button type="submit" class="dropin-button dropin-button--primary">Find Order</button>
            </div>
          </form>
        </div>
      </div>
    `;
    return element;
  },
};
