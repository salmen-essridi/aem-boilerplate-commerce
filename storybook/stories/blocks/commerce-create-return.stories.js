// Commerce Create Return Block Stories
// CSS loaded from: /blocks/commerce-create-return/commerce-create-return.css
import { mockProduct } from '../dropins/mockData.js';

const formatPrice = (amount, currency = 'USD') => {
  return new Intl.NumberFormat('en-US', { style: 'currency', currency }).format(amount);
};

export default {
  title: 'Blocks/Commerce Create Return',
  tags: ['autodocs'],
  parameters: {
    docs: {
      description: {
        component: `
Commerce Create Return block - Return request form.

**CSS Location:** \`/blocks/commerce-create-return/commerce-create-return.css\`

**Drop-in:** \`@dropins/storefront-order\` - CreateReturn component

Agency can edit the CSS file directly in the main project.
        `,
      },
    },
  },
};

// Create Return Form
export const CreateReturnForm = {
  name: 'Create Return Form',
  render: () => {
    const element = document.createElement('div');
    element.className = 'commerce-create-return';
    element.innerHTML = `
      <div class="dropin-design">
        <div class="create-return">
          <h2 class="create-return__title">Request a Return</h2>
          <p class="create-return__description">Select the items you'd like to return from order #000012345.</p>

          <div class="create-return__items">
            <div class="create-return__item">
              <div class="create-return__item-checkbox">
                <input type="checkbox" id="item1" checked />
              </div>
              <img src="${mockProduct.images[0].url}" alt="${mockProduct.name}" class="create-return__item-image" />
              <div class="create-return__item-details">
                <p class="create-return__item-name">${mockProduct.name}</p>
                <p class="create-return__item-sku">SKU: ${mockProduct.sku}</p>
                <p class="create-return__item-price">${formatPrice(mockProduct.price)}</p>
              </div>
              <div class="create-return__item-form">
                <div class="create-return__field">
                  <label class="dropin-field__label">Quantity to Return</label>
                  <select class="dropin-field__select">
                    <option>1</option>
                    <option>2</option>
                  </select>
                </div>
                <div class="create-return__field">
                  <label class="dropin-field__label">Reason for Return *</label>
                  <select class="dropin-field__select">
                    <option value="">Select a reason</option>
                    <option value="size">Item didn't fit</option>
                    <option value="quality">Quality not as expected</option>
                    <option value="wrong">Wrong item received</option>
                    <option value="damaged">Item arrived damaged</option>
                    <option value="mind">Changed my mind</option>
                  </select>
                </div>
                <div class="create-return__field">
                  <label class="dropin-field__label">Additional Comments</label>
                  <textarea class="dropin-field__textarea" placeholder="Optional comments about your return"></textarea>
                </div>
              </div>
            </div>
          </div>

          <div class="create-return__actions">
            <button class="dropin-button dropin-button--secondary">Cancel</button>
            <button class="dropin-button dropin-button--primary">Submit Return Request</button>
          </div>
        </div>
      </div>
    `;
    return element;
  },
};

// Return Summary
export const ReturnSummary = {
  name: 'Return Summary',
  render: () => {
    const element = document.createElement('div');
    element.className = 'commerce-create-return';
    element.innerHTML = `
      <div class="dropin-design">
        <div class="create-return create-return--summary">
          <h2 class="create-return__title">Return Summary</h2>
          <p class="create-return__description">Review your return request before submitting.</p>

          <div class="create-return__summary">
            <div class="create-return__summary-item">
              <img src="${mockProduct.images[0].url}" alt="${mockProduct.name}" class="create-return__summary-image" />
              <div class="create-return__summary-details">
                <p class="create-return__summary-name">${mockProduct.name}</p>
                <p class="create-return__summary-qty">Qty: 1</p>
                <p class="create-return__summary-reason">Reason: Item didn't fit</p>
              </div>
              <div class="create-return__summary-refund">
                <span class="create-return__summary-label">Refund Amount</span>
                <span class="create-return__summary-value">${formatPrice(mockProduct.price)}</span>
              </div>
            </div>
          </div>

          <div class="create-return__total">
            <span class="create-return__total-label">Total Refund</span>
            <span class="create-return__total-value">${formatPrice(mockProduct.price)}</span>
          </div>

          <div class="create-return__actions">
            <button class="dropin-button dropin-button--secondary">Back</button>
            <button class="dropin-button dropin-button--primary">Confirm Return</button>
          </div>
        </div>
      </div>
    `;
    return element;
  },
};

// Return Success
export const ReturnSuccess = {
  name: 'Return Success',
  render: () => {
    const element = document.createElement('div');
    element.className = 'commerce-create-return';
    element.innerHTML = `
      <div class="dropin-design">
        <div class="create-return create-return--success">
          <div class="create-return__success-icon">
            <svg width="48" height="48" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
              <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"></path>
              <polyline points="22 4 12 14.01 9 11.01"></polyline>
            </svg>
          </div>
          <h2 class="create-return__success-title">Return Request Submitted</h2>
          <p class="create-return__success-message">Your return request #R000001234 has been submitted successfully.</p>
          <p class="create-return__success-info">You will receive an email with return shipping instructions shortly.</p>
          <div class="create-return__actions">
            <a href="#" class="dropin-button dropin-button--primary">View Return Details</a>
            <a href="#" class="dropin-button dropin-button--secondary">Back to Order</a>
          </div>
        </div>
      </div>
    `;
    return element;
  },
};
