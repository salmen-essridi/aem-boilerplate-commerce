// Auth Dropin Stories
// These containers display form-based UI elements using static HTML

export default {
  title: 'Dropins/Auth',
  tags: ['autodocs'],
  parameters: {
    docs: {
      description: {
        component: 'Adobe Commerce Auth Dropin containers for user authentication flows.',
      },
    },
  },
};

// Helper to create static display
const createStaticDisplay = (content) => {
  const element = document.createElement('div');
  element.className = 'dropin-container auth-static';
  element.innerHTML = `
    <div style="padding: 16px; border: 1px solid #e0e0e0; border-radius: 8px; background: #fff;">
      ${content}
    </div>
  `;
  return element;
};

// SignIn Container
export const SignInForm = {
  name: 'Sign In',
  render: () => {
    return createStaticDisplay(`
      <h2 style="margin: 0 0 24px; font-size: 24px; font-weight: 600;">Sign In</h2>
      <form style="display: flex; flex-direction: column; gap: 16px; max-width: 400px;">
        <div>
          <label style="display: block; margin-bottom: 4px; font-size: 14px; color: #666;">Email</label>
          <input type="email" placeholder="email@example.com" style="width: 100%; padding: 12px; border: 1px solid #e0e0e0; border-radius: 4px; box-sizing: border-box; font-size: 16px;" />
        </div>
        <div>
          <label style="display: block; margin-bottom: 4px; font-size: 14px; color: #666;">Password</label>
          <input type="password" placeholder="Enter password" style="width: 100%; padding: 12px; border: 1px solid #e0e0e0; border-radius: 4px; box-sizing: border-box; font-size: 16px;" />
        </div>
        <button type="button" style="padding: 14px; background: #333; color: #fff; border: none; border-radius: 4px; cursor: pointer; font-size: 16px; font-weight: 500;">Sign In</button>
        <div style="display: flex; justify-content: space-between; font-size: 14px;">
          <a href="#" style="color: #333;">Forgot Password?</a>
          <a href="#" style="color: #333;">Create Account</a>
        </div>
      </form>
    `);
  },
  parameters: {
    docs: {
      description: {
        story: 'Sign in form for user authentication. Includes email/password fields and links to registration and password recovery.',
      },
    },
  },
};

// SignUp Container
export const SignUpForm = {
  name: 'Sign Up',
  render: () => {
    return createStaticDisplay(`
      <h2 style="margin: 0 0 24px; font-size: 24px; font-weight: 600;">Create Account</h2>
      <form style="display: flex; flex-direction: column; gap: 16px; max-width: 400px;">
        <div style="display: grid; grid-template-columns: 1fr 1fr; gap: 16px;">
          <div>
            <label style="display: block; margin-bottom: 4px; font-size: 14px; color: #666;">First Name</label>
            <input type="text" placeholder="John" style="width: 100%; padding: 12px; border: 1px solid #e0e0e0; border-radius: 4px; box-sizing: border-box; font-size: 16px;" />
          </div>
          <div>
            <label style="display: block; margin-bottom: 4px; font-size: 14px; color: #666;">Last Name</label>
            <input type="text" placeholder="Doe" style="width: 100%; padding: 12px; border: 1px solid #e0e0e0; border-radius: 4px; box-sizing: border-box; font-size: 16px;" />
          </div>
        </div>
        <div>
          <label style="display: block; margin-bottom: 4px; font-size: 14px; color: #666;">Email</label>
          <input type="email" placeholder="email@example.com" style="width: 100%; padding: 12px; border: 1px solid #e0e0e0; border-radius: 4px; box-sizing: border-box; font-size: 16px;" />
        </div>
        <div>
          <label style="display: block; margin-bottom: 4px; font-size: 14px; color: #666;">Password</label>
          <input type="password" placeholder="Create password" style="width: 100%; padding: 12px; border: 1px solid #e0e0e0; border-radius: 4px; box-sizing: border-box; font-size: 16px;" />
        </div>
        <div>
          <label style="display: block; margin-bottom: 4px; font-size: 14px; color: #666;">Confirm Password</label>
          <input type="password" placeholder="Confirm password" style="width: 100%; padding: 12px; border: 1px solid #e0e0e0; border-radius: 4px; box-sizing: border-box; font-size: 16px;" />
        </div>
        <button type="button" style="padding: 14px; background: #333; color: #fff; border: none; border-radius: 4px; cursor: pointer; font-size: 16px; font-weight: 500;">Create Account</button>
        <p style="text-align: center; margin: 0; font-size: 14px; color: #666;">
          Already have an account? <a href="#" style="color: #333;">Sign In</a>
        </p>
      </form>
    `);
  },
  parameters: {
    docs: {
      description: {
        story: 'Registration form for new users. Collects email, password, and user details.',
      },
    },
  },
};

// ResetPassword Container
export const ResetPasswordForm = {
  name: 'Reset Password',
  render: () => {
    return createStaticDisplay(`
      <h2 style="margin: 0 0 16px; font-size: 24px; font-weight: 600;">Reset Password</h2>
      <p style="margin: 0 0 24px; color: #666;">Enter your email address to receive a password reset link.</p>
      <form style="display: flex; flex-direction: column; gap: 16px; max-width: 400px;">
        <div>
          <label style="display: block; margin-bottom: 4px; font-size: 14px; color: #666;">Email</label>
          <input type="email" placeholder="email@example.com" style="width: 100%; padding: 12px; border: 1px solid #e0e0e0; border-radius: 4px; box-sizing: border-box; font-size: 16px;" />
        </div>
        <button type="button" style="padding: 14px; background: #333; color: #fff; border: none; border-radius: 4px; cursor: pointer; font-size: 16px; font-weight: 500;">Send Reset Link</button>
        <p style="text-align: center; margin: 0; font-size: 14px;">
          <a href="#" style="color: #333;">Back to Sign In</a>
        </p>
      </form>
    `);
  },
  parameters: {
    docs: {
      description: {
        story: 'Password reset request form. Users enter their email to receive reset instructions.',
      },
    },
  },
};

// UpdatePassword Container
export const UpdatePasswordForm = {
  name: 'Update Password',
  render: () => {
    return createStaticDisplay(`
      <h2 style="margin: 0 0 16px; font-size: 24px; font-weight: 600;">Set New Password</h2>
      <p style="margin: 0 0 24px; color: #666;">Create a new password for your account.</p>
      <form style="display: flex; flex-direction: column; gap: 16px; max-width: 400px;">
        <div>
          <label style="display: block; margin-bottom: 4px; font-size: 14px; color: #666;">New Password</label>
          <input type="password" placeholder="Enter new password" style="width: 100%; padding: 12px; border: 1px solid #e0e0e0; border-radius: 4px; box-sizing: border-box; font-size: 16px;" />
        </div>
        <div>
          <label style="display: block; margin-bottom: 4px; font-size: 14px; color: #666;">Confirm New Password</label>
          <input type="password" placeholder="Confirm new password" style="width: 100%; padding: 12px; border: 1px solid #e0e0e0; border-radius: 4px; box-sizing: border-box; font-size: 16px;" />
        </div>
        <button type="button" style="padding: 14px; background: #333; color: #fff; border: none; border-radius: 4px; cursor: pointer; font-size: 16px; font-weight: 500;">Update Password</button>
      </form>
    `);
  },
  parameters: {
    docs: {
      description: {
        story: 'New password entry form. Used when user clicks the password reset link from email.',
      },
    },
  },
};

// AuthCombine Container
export const AuthCombined = {
  name: 'Auth Combined',
  render: () => {
    return createStaticDisplay(`
      <div style="max-width: 400px;">
        <div style="display: flex; border-bottom: 2px solid #e0e0e0; margin-bottom: 24px;">
          <button style="flex: 1; padding: 12px; border: none; background: none; font-size: 16px; font-weight: 600; color: #333; border-bottom: 2px solid #333; margin-bottom: -2px; cursor: pointer;">Sign In</button>
          <button style="flex: 1; padding: 12px; border: none; background: none; font-size: 16px; font-weight: 500; color: #666; cursor: pointer;">Create Account</button>
        </div>
        <form style="display: flex; flex-direction: column; gap: 16px;">
          <div>
            <label style="display: block; margin-bottom: 4px; font-size: 14px; color: #666;">Email</label>
            <input type="email" placeholder="email@example.com" style="width: 100%; padding: 12px; border: 1px solid #e0e0e0; border-radius: 4px; box-sizing: border-box; font-size: 16px;" />
          </div>
          <div>
            <label style="display: block; margin-bottom: 4px; font-size: 14px; color: #666;">Password</label>
            <input type="password" placeholder="Enter password" style="width: 100%; padding: 12px; border: 1px solid #e0e0e0; border-radius: 4px; box-sizing: border-box; font-size: 16px;" />
          </div>
          <button type="button" style="padding: 14px; background: #333; color: #fff; border: none; border-radius: 4px; cursor: pointer; font-size: 16px; font-weight: 500;">Sign In</button>
          <a href="#" style="text-align: center; color: #333; font-size: 14px;">Forgot Password?</a>
        </form>
      </div>
    `);
  },
  parameters: {
    docs: {
      description: {
        story: 'Combined sign in and sign up form with tabs. Useful for modal or sidebar authentication.',
      },
    },
  },
};
