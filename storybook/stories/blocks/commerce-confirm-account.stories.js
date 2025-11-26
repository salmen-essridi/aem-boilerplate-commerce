// Commerce Confirm Account Block Stories
// CSS loaded from: /blocks/commerce-confirm-account/commerce-confirm-account.css

export default {
  title: 'Blocks/Commerce Confirm Account',
  tags: ['autodocs'],
  parameters: {
    docs: {
      description: {
        component: `
Commerce Confirm Account block - Email confirmation after sign in.

**CSS Location:** \`/blocks/commerce-confirm-account/commerce-confirm-account.css\`

**Drop-in:** \`@dropins/storefront-auth\` - SignIn with email confirmation

Agency can edit the CSS file directly in the main project.
        `,
      },
    },
  },
};

// Confirm Account
export const ConfirmAccount = {
  name: 'Confirm Account',
  render: () => {
    const element = document.createElement('div');
    element.className = 'commerce-confirm-account';
    element.innerHTML = `
      <div class="dropin-design">
        <div class="auth-confirm-account">
          <div class="auth-confirm-account__icon">
            <svg width="48" height="48" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
              <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"></path>
              <polyline points="22,6 12,13 2,6"></polyline>
            </svg>
          </div>
          <h2 class="auth-confirm-account__title">Confirm Your Email</h2>
          <p class="auth-confirm-account__description">We've sent a confirmation link to your email address. Please check your inbox and click the link to verify your account.</p>
          <div class="auth-confirm-account__footer">
            <p>Didn't receive the email? <a href="#" class="dropin-link">Resend confirmation</a></p>
          </div>
        </div>
      </div>
    `;
    return element;
  },
};

// Success State
export const ConfirmSuccess = {
  name: 'Confirmation Success',
  render: () => {
    const element = document.createElement('div');
    element.className = 'commerce-confirm-account';
    element.innerHTML = `
      <div class="dropin-design">
        <div class="auth-success-notification">
          <div class="auth-success-notification__icon">
            <svg width="48" height="48" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
              <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"></path>
              <polyline points="22 4 12 14.01 9 11.01"></polyline>
            </svg>
          </div>
          <h2 class="auth-success-notification__heading">Email Confirmed!</h2>
          <p class="auth-success-notification__message">Your account has been verified. You can now sign in.</p>
          <div class="auth-success-notification__actions">
            <button class="dropin-button dropin-button--primary">Sign In</button>
          </div>
        </div>
      </div>
    `;
    return element;
  },
};
