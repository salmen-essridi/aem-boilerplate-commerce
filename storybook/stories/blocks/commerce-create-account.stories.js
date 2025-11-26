// Commerce Create Account Block Stories
// CSS loaded from: /blocks/commerce-create-account/commerce-create-account.css

export default {
  title: 'Blocks/Commerce Create Account',
  tags: ['autodocs'],
  parameters: {
    docs: {
      description: {
        component: `
Commerce Create Account block - Registration form for new customers.

**CSS Location:** \`/blocks/commerce-create-account/commerce-create-account.css\`

**Drop-in:** \`@dropins/storefront-auth\` - SignUp component

Agency can edit the CSS file directly in the main project.
        `,
      },
    },
  },
};

// Create Account Form
export const CreateAccountForm = {
  name: 'Create Account Form',
  render: () => {
    const element = document.createElement('div');
    element.className = 'commerce-create-account';
    element.innerHTML = `
      <div class="dropin-design">
        <div class="auth-signup">
          <h2 class="auth-signup__title">Create Account</h2>
          <form class="auth-signup__form">
            <div class="auth-signup__row">
              <div class="auth-signup__field">
                <label class="dropin-field__label">First Name *</label>
                <input type="text" class="dropin-field__input" placeholder="John" />
              </div>
              <div class="auth-signup__field">
                <label class="dropin-field__label">Last Name *</label>
                <input type="text" class="dropin-field__input" placeholder="Doe" />
              </div>
            </div>
            <div class="auth-signup__field">
              <label class="dropin-field__label">Email Address *</label>
              <input type="email" class="dropin-field__input" placeholder="email@example.com" />
            </div>
            <div class="auth-signup__field">
              <label class="dropin-field__label">Password *</label>
              <input type="password" class="dropin-field__input" placeholder="••••••••" />
            </div>
            <div class="auth-signup__field">
              <label class="dropin-field__label">Confirm Password *</label>
              <input type="password" class="dropin-field__input" placeholder="••••••••" />
            </div>
            <div class="auth-signup__checkbox">
              <input type="checkbox" id="newsletter" />
              <label for="newsletter">Subscribe to newsletter</label>
            </div>
            <div class="auth-signup__actions">
              <button type="submit" class="dropin-button dropin-button--primary">Create Account</button>
            </div>
          </form>
          <div class="auth-signup__footer">
            <p>Already have an account? <a href="#" class="dropin-link">Sign In</a></p>
          </div>
        </div>
      </div>
    `;
    return element;
  },
};
