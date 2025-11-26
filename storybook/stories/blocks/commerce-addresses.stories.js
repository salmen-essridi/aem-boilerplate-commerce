// Commerce Addresses Block Stories
// CSS loaded from: /blocks/commerce-addresses/commerce-addresses.css

export default {
  title: 'Blocks/Commerce Addresses',
  tags: ['autodocs'],
  parameters: {
    docs: {
      description: {
        component: `
Commerce Addresses block - Customer address management.

**CSS Location:** \`/blocks/commerce-addresses/commerce-addresses.css\`

**Drop-in:** \`@dropins/storefront-account\` - Addresses component

Agency can edit the CSS file directly in the main project.
        `,
      },
    },
  },
};

// Address List
export const AddressList = {
  name: 'Address List',
  render: () => {
    const element = document.createElement('div');
    element.className = 'commerce-addresses';
    element.innerHTML = `
      <div class="dropin-design">
        <div class="account-addresses">
          <div class="account-addresses__header">
            <h2 class="account-addresses__title">My Addresses</h2>
            <button class="dropin-button dropin-button--secondary">Add New Address</button>
          </div>
          <div class="account-addresses__list">
            <div class="account-addresses__card account-addresses__card--default">
              <div class="account-addresses__badge">Default</div>
              <div class="account-addresses__content">
                <p class="account-addresses__name">John Doe</p>
                <p class="account-addresses__line">123 Main Street</p>
                <p class="account-addresses__line">Apt 4B</p>
                <p class="account-addresses__line">New York, NY 10001</p>
                <p class="account-addresses__line">United States</p>
                <p class="account-addresses__phone">+1 (555) 123-4567</p>
              </div>
              <div class="account-addresses__actions">
                <button class="dropin-button dropin-button--tertiary">Edit</button>
                <button class="dropin-button dropin-button--tertiary">Delete</button>
              </div>
            </div>
            <div class="account-addresses__card">
              <div class="account-addresses__content">
                <p class="account-addresses__name">John Doe</p>
                <p class="account-addresses__line">456 Office Park</p>
                <p class="account-addresses__line">Suite 100</p>
                <p class="account-addresses__line">Los Angeles, CA 90001</p>
                <p class="account-addresses__line">United States</p>
                <p class="account-addresses__phone">+1 (555) 987-6543</p>
              </div>
              <div class="account-addresses__actions">
                <button class="dropin-button dropin-button--tertiary">Edit</button>
                <button class="dropin-button dropin-button--tertiary">Delete</button>
                <button class="dropin-button dropin-button--tertiary">Set as Default</button>
              </div>
            </div>
          </div>
        </div>
      </div>
    `;
    return element;
  },
};

// Empty State
export const EmptyState = {
  name: 'Empty State',
  render: () => {
    const element = document.createElement('div');
    element.className = 'commerce-addresses';
    element.innerHTML = `
      <div class="dropin-design">
        <div class="account-addresses account-addresses--empty">
          <div class="account-addresses__empty">
            <svg width="48" height="48" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1">
              <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"></path>
              <circle cx="12" cy="10" r="3"></circle>
            </svg>
            <p>You have no saved addresses yet.</p>
            <button class="dropin-button dropin-button--primary">Add New Address</button>
          </div>
        </div>
      </div>
    `;
    return element;
  },
};
