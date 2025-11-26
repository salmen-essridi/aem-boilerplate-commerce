// Commerce Login Block Stories
// CSS loaded from: /blocks/commerce-login/commerce-login.css

export default {
  title: 'Blocks/Commerce Login',
  tags: ['autodocs'],
  parameters: {
    docs: {
      description: {
        component: `
Commerce Login block - Sign in form for customer authentication.

**CSS Location:** \`/blocks/commerce-login/commerce-login.css\`

**Drop-in:** \`@dropins/storefront-auth\` - SignIn component

Agency can edit the CSS file directly in the main project.
        `,
      },
    },
  },
};

// Sign In Form
export const SignInForm = {
  name: 'Sign In Form',
  render: () => {
    const element = document.createElement('div');
    element.className = 'commerce-login';
    element.innerHTML = `
      <div class="dropin-design">
        <div class="auth-signin">
          <h2 class="auth-signin__title">Sign In</h2>
          <form class="auth-signin__form">
            <div class="auth-signin__field">
              <label class="dropin-field__label">Email Address *</label>
              <input type="email" class="dropin-field__input" placeholder="email@example.com" />
            </div>
            <div class="auth-signin__field">
              <label class="dropin-field__label">Password *</label>
              <input type="password" class="dropin-field__input" placeholder="••••••••" />
            </div>
            <div class="auth-signin__actions">
              <button type="submit" class="dropin-button dropin-button--primary">Sign In</button>
            </div>
            <div class="auth-signin__links">
              <a href="#" class="dropin-link">Forgot Password?</a>
            </div>
          </form>
          <div class="auth-signin__footer">
            <p>Don't have an account? <a href="#" class="dropin-link">Create Account</a></p>
          </div>
        </div>
      </div>
    `;
    return element;
  },
};
