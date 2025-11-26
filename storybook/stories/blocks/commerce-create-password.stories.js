// Commerce Create Password Block Stories
// CSS loaded from: /blocks/commerce-create-password/commerce-create-password.css

export default {
  title: 'Blocks/Commerce Create Password',
  tags: ['autodocs'],
  parameters: {
    docs: {
      description: {
        component: `
Commerce Create Password block - Password update form after reset link.

**CSS Location:** \`/blocks/commerce-create-password/commerce-create-password.css\`

**Drop-in:** \`@dropins/storefront-auth\` - UpdatePassword component

Agency can edit the CSS file directly in the main project.
        `,
      },
    },
  },
};

// Create Password Form
export const CreatePasswordForm = {
  name: 'Create Password Form',
  render: () => {
    const element = document.createElement('div');
    element.className = 'commerce-create-password';
    element.innerHTML = `
      <div class="dropin-design">
        <div class="auth-update-password">
          <h2 class="auth-update-password__title">Create New Password</h2>
          <p class="auth-update-password__description">Enter your new password below.</p>
          <form class="auth-update-password__form">
            <div class="auth-update-password__field">
              <label class="dropin-field__label">New Password *</label>
              <input type="password" class="dropin-field__input" placeholder="••••••••" />
            </div>
            <div class="auth-update-password__field">
              <label class="dropin-field__label">Confirm Password *</label>
              <input type="password" class="dropin-field__input" placeholder="••••••••" />
            </div>
            <div class="auth-update-password__actions">
              <button type="submit" class="dropin-button dropin-button--primary">Update Password</button>
            </div>
          </form>
        </div>
      </div>
    `;
    return element;
  },
};

// Success State
export const SuccessState = {
  name: 'Success State',
  render: () => {
    const element = document.createElement('div');
    element.className = 'commerce-create-password';
    element.innerHTML = `
      <div class="dropin-design">
        <div class="auth-success-notification">
          <div class="auth-success-notification__icon">
            <svg width="48" height="48" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
              <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"></path>
              <polyline points="22 4 12 14.01 9 11.01"></polyline>
            </svg>
          </div>
          <h2 class="auth-success-notification__heading">Welcome John!</h2>
          <p class="auth-success-notification__message">Your password has been successfully updated.</p>
          <div class="auth-success-notification__actions">
            <button class="dropin-button dropin-button--primary">My Account</button>
            <button class="dropin-button dropin-button--tertiary">Logout</button>
          </div>
        </div>
      </div>
    `;
    return element;
  },
};
