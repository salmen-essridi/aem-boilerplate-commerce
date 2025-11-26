// Commerce Gift Options Block Stories
// CSS loaded from: /blocks/commerce-gift-options/commerce-gift-options.css

const formatPrice = (amount, currency = 'USD') => {
  return new Intl.NumberFormat('en-US', { style: 'currency', currency }).format(amount);
};

export default {
  title: 'Blocks/Commerce Gift Options',
  tags: ['autodocs'],
  parameters: {
    docs: {
      description: {
        component: `
Commerce Gift Options block - Gift wrapping and messages for orders.

**CSS Location:** \`/blocks/commerce-gift-options/commerce-gift-options.css\`

**Drop-in:** \`@dropins/storefront-cart\` - GiftOptions component

Agency can edit the CSS file directly in the main project.
        `,
      },
    },
  },
};

// Gift Options Display
export const GiftOptionsDisplay = {
  name: 'Gift Options Display',
  render: () => {
    const element = document.createElement('div');
    element.className = 'commerce-gift-options';
    element.innerHTML = `
      <div class="dropin-design">
        <div class="gift-options">
          <div class="gift-options__header">
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
              <polyline points="20 12 20 22 4 22 4 12"></polyline>
              <rect x="2" y="7" width="20" height="5"></rect>
              <line x1="12" y1="22" x2="12" y2="7"></line>
              <path d="M12 7H7.5a2.5 2.5 0 0 1 0-5C11 2 12 7 12 7z"></path>
              <path d="M12 7h4.5a2.5 2.5 0 0 0 0-5C13 2 12 7 12 7z"></path>
            </svg>
            <h3 class="gift-options__title">Gift Options</h3>
          </div>
          <div class="gift-options__content">
            <div class="gift-options__section">
              <h4 class="gift-options__section-title">Gift Wrapping</h4>
              <div class="gift-options__wrap-info">
                <span class="gift-options__wrap-name">Premium Gift Wrap</span>
                <span class="gift-options__wrap-price">${formatPrice(5.99)}</span>
              </div>
            </div>
            <div class="gift-options__section">
              <h4 class="gift-options__section-title">Gift Message</h4>
              <p class="gift-options__message">"Happy Birthday! Hope you love this gift. - John"</p>
            </div>
            <div class="gift-options__section">
              <h4 class="gift-options__section-title">Recipient</h4>
              <p class="gift-options__recipient">To: Jane Smith</p>
            </div>
          </div>
        </div>
      </div>
    `;
    return element;
  },
};

// Gift Options Form
export const GiftOptionsForm = {
  name: 'Gift Options Form',
  render: () => {
    const element = document.createElement('div');
    element.className = 'commerce-gift-options';
    element.innerHTML = `
      <div class="dropin-design">
        <div class="gift-options gift-options--editable">
          <div class="gift-options__header">
            <div class="gift-options__checkbox">
              <input type="checkbox" id="gift-option" checked />
              <label for="gift-option">This is a gift</label>
            </div>
          </div>
          <div class="gift-options__content">
            <div class="gift-options__section">
              <h4 class="gift-options__section-title">Select Gift Wrapping</h4>
              <div class="gift-options__wrap-options">
                <label class="gift-options__wrap-option">
                  <input type="radio" name="wrap" />
                  <span class="gift-options__wrap-preview gift-options__wrap-preview--none"></span>
                  <span class="gift-options__wrap-label">No wrapping</span>
                  <span class="gift-options__wrap-price">Free</span>
                </label>
                <label class="gift-options__wrap-option gift-options__wrap-option--selected">
                  <input type="radio" name="wrap" checked />
                  <span class="gift-options__wrap-preview gift-options__wrap-preview--standard"></span>
                  <span class="gift-options__wrap-label">Standard Wrap</span>
                  <span class="gift-options__wrap-price">${formatPrice(3.99)}</span>
                </label>
                <label class="gift-options__wrap-option">
                  <input type="radio" name="wrap" />
                  <span class="gift-options__wrap-preview gift-options__wrap-preview--premium"></span>
                  <span class="gift-options__wrap-label">Premium Wrap</span>
                  <span class="gift-options__wrap-price">${formatPrice(5.99)}</span>
                </label>
              </div>
            </div>
            <div class="gift-options__section">
              <h4 class="gift-options__section-title">Gift Message</h4>
              <div class="gift-options__field">
                <label class="dropin-field__label">To</label>
                <input type="text" class="dropin-field__input" placeholder="Recipient name" />
              </div>
              <div class="gift-options__field">
                <label class="dropin-field__label">From</label>
                <input type="text" class="dropin-field__input" placeholder="Your name" />
              </div>
              <div class="gift-options__field">
                <label class="dropin-field__label">Message</label>
                <textarea class="dropin-field__textarea" placeholder="Write your gift message here..." maxlength="200"></textarea>
                <span class="gift-options__char-count">0/200 characters</span>
              </div>
            </div>
            <div class="gift-options__actions">
              <button class="dropin-button dropin-button--primary">Save Gift Options</button>
            </div>
          </div>
        </div>
      </div>
    `;
    return element;
  },
};

// No Gift Options
export const NoGiftOptions = {
  name: 'No Gift Options',
  render: () => {
    const element = document.createElement('div');
    element.className = 'commerce-gift-options';
    element.innerHTML = `
      <div class="dropin-design">
        <div class="gift-options gift-options--collapsed">
          <div class="gift-options__header">
            <div class="gift-options__checkbox">
              <input type="checkbox" id="gift-option-none" />
              <label for="gift-option-none">This is a gift</label>
            </div>
          </div>
        </div>
      </div>
    `;
    return element;
  },
};
