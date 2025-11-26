// Commerce Forgot Password Block Stories
// CSS loaded from: /blocks/commerce-forgot-password/commerce-forgot-password.css

export default {
  title: 'Blocks/Commerce Forgot Password',
  tags: ['autodocs'],
  parameters: {
    docs: {
      description: {
        component: `
Commerce Forgot Password block - Password reset request form.

**CSS Location:** \`/blocks/commerce-forgot-password/commerce-forgot-password.css\`

**Drop-in:** \`@dropins/storefront-auth\` - ResetPassword component

Agency can edit the CSS file directly in the main project.
        `,
      },
    },
  },
};

// Forgot Password Form
export const ForgotPasswordForm = {
  name: 'Forgot Password Form',
  render: () => {
    const element = document.createElement('div');
    element.className = 'commerce-forgot-password';
    element.innerHTML = `
      <div class="dropin-design">
        <div class="auth-reset-password">
          <h2 class="auth-reset-password__title">Forgot Password</h2>
          <p class="auth-reset-password__description">Enter your email address to receive a password reset link.</p>
          <form class="auth-reset-password__form">
            <div class="auth-reset-password__field">
              <label class="dropin-field__label">Email Address *</label>
              <input type="email" class="dropin-field__input" placeholder="email@example.com" />
            </div>
            <div class="auth-reset-password__actions">
              <button type="submit" class="dropin-button dropin-button--primary">Reset Password</button>
            </div>
          </form>
          <div class="auth-reset-password__footer">
            <a href="#" class="dropin-link">Back to Sign In</a>
          </div>
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
    element.className = 'commerce-forgot-password';
    element.innerHTML = `
      <div class="dropin-design">
        <div class="auth-reset-password auth-reset-password--success">
          <div class="auth-reset-password__icon">
            <svg width="48" height="48" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
              <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"></path>
              <polyline points="22 4 12 14.01 9 11.01"></polyline>
            </svg>
          </div>
          <h2 class="auth-reset-password__title">Check Your Email</h2>
          <p class="auth-reset-password__description">We've sent a password reset link to your email address.</p>
          <div class="auth-reset-password__footer">
            <a href="#" class="dropin-link">Back to Sign In</a>
          </div>
        </div>
      </div>
    `;
    return element;
  },
};
