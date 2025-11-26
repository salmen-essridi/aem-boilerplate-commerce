// Commerce Customer Information Block Stories
// CSS loaded from: /blocks/commerce-customer-information/commerce-customer-information.css

export default {
  title: 'Blocks/Commerce Customer Information',
  tags: ['autodocs'],
  parameters: {
    docs: {
      description: {
        component: `
Commerce Customer Information block - Account profile management.

**CSS Location:** \`/blocks/commerce-customer-information/commerce-customer-information.css\`

**Drop-in:** \`@dropins/storefront-account\` - CustomerInformation component

Agency can edit the CSS file directly in the main project.
        `,
      },
    },
  },
};

// Customer Information View
export const CustomerInformationView = {
  name: 'Customer Information View',
  render: () => {
    const element = document.createElement('div');
    element.className = 'commerce-customer-information';
    element.innerHTML = `
      <div class="dropin-design">
        <div class="account-customer-info">
          <h2 class="account-customer-info__title">Account Information</h2>
          <div class="account-customer-info__section">
            <h3 class="account-customer-info__section-title">Contact Information</h3>
            <div class="account-customer-info__content">
              <p class="account-customer-info__name">John Doe</p>
              <p class="account-customer-info__email">john.doe@example.com</p>
            </div>
            <div class="account-customer-info__actions">
              <button class="dropin-button dropin-button--tertiary">Edit</button>
              <button class="dropin-button dropin-button--tertiary">Change Password</button>
            </div>
          </div>
          <div class="account-customer-info__section">
            <h3 class="account-customer-info__section-title">Newsletters</h3>
            <div class="account-customer-info__content">
              <p class="account-customer-info__subscription">Subscribed to newsletter</p>
            </div>
            <div class="account-customer-info__actions">
              <button class="dropin-button dropin-button--tertiary">Edit</button>
            </div>
          </div>
        </div>
      </div>
    `;
    return element;
  },
};

// Edit Mode
export const EditMode = {
  name: 'Edit Mode',
  render: () => {
    const element = document.createElement('div');
    element.className = 'commerce-customer-information';
    element.innerHTML = `
      <div class="dropin-design">
        <div class="account-customer-info account-customer-info--edit">
          <h2 class="account-customer-info__title">Edit Account Information</h2>
          <form class="account-customer-info__form">
            <div class="account-customer-info__field">
              <label class="dropin-field__label">First Name *</label>
              <input type="text" class="dropin-field__input" value="John" />
            </div>
            <div class="account-customer-info__field">
              <label class="dropin-field__label">Last Name *</label>
              <input type="text" class="dropin-field__input" value="Doe" />
            </div>
            <div class="account-customer-info__field">
              <label class="dropin-field__label">Email *</label>
              <input type="email" class="dropin-field__input" value="john.doe@example.com" />
            </div>
            <div class="account-customer-info__checkbox">
              <input type="checkbox" id="change-password" />
              <label for="change-password">Change Password</label>
            </div>
            <div class="account-customer-info__actions">
              <button type="button" class="dropin-button dropin-button--secondary">Cancel</button>
              <button type="submit" class="dropin-button dropin-button--primary">Save</button>
            </div>
          </form>
        </div>
      </div>
    `;
    return element;
  },
};
