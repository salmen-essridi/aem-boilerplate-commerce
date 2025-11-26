// Checkout Dropin Stories
// Most containers are form-based and work without data

import { mockShippingMethods, mockPaymentMethods } from './mockData.js';

export default {
  title: 'Dropins/Checkout',
  tags: ['autodocs'],
  parameters: {
    docs: {
      description: {
        component: 'Adobe Commerce Checkout Dropin containers for the checkout flow.',
      },
    },
  },
};

// Helper to create static display
const createStaticDisplay = (content) => {
  const element = document.createElement('div');
  element.className = 'dropin-container checkout-static';
  element.innerHTML = `
    <div style="padding: 16px; border: 1px solid #e0e0e0; border-radius: 8px; background: #fff;">
      ${content}
    </div>
  `;
  return element;
};

const formatPrice = (value, currency = 'USD') => {
  return new Intl.NumberFormat('en-US', { style: 'currency', currency }).format(value);
};

// LoginForm Container (form-based)
export const LoginFormDisplay = {
  name: 'Login Form',
  render: () => {
    return createStaticDisplay(`
      <div style="padding: 20px; background: #f9f9f9; border-radius: 8px; max-width: 500px;">
        <h3 style="margin: 0 0 16px; font-size: 18px; font-weight: 600;">Sign in for faster checkout</h3>
        <div style="display: flex; gap: 12px; align-items: center;">
          <input type="email" placeholder="Email address" style="flex: 1; padding: 12px; border: 1px solid #e0e0e0; border-radius: 4px; font-size: 14px;" />
          <button style="padding: 12px 20px; background: #333; color: #fff; border: none; border-radius: 4px; cursor: pointer; font-size: 14px;">Sign In</button>
        </div>
        <p style="margin: 12px 0 0; font-size: 14px; color: #666;">Or continue as <a href="#" style="color: #333;">guest</a></p>
      </div>
    `);
  },
  parameters: {
    docs: {
      description: {
        story: 'Guest checkout login prompt. Shows email field and option to sign in or continue as guest.',
      },
    },
  },
};

// PlaceOrder Container (form-based)
export const PlaceOrderButton = {
  name: 'Place Order',
  render: () => {
    return createStaticDisplay(`
      <div style="max-width: 400px;">
        <button style="width: 100%; padding: 16px; background: #333; color: #fff; border: none; border-radius: 4px; cursor: pointer; font-size: 18px; font-weight: 600;">
          Place Order
        </button>
        <p style="margin: 12px 0 0; font-size: 12px; color: #666; text-align: center;">
          By placing your order, you agree to our <a href="#" style="color: #333;">Terms of Service</a> and <a href="#" style="color: #333;">Privacy Policy</a>
        </p>
      </div>
    `);
  },
  parameters: {
    docs: {
      description: {
        story: 'Place order button and terms acceptance. Final step to complete the purchase.',
      },
    },
  },
};

// ServerError Container
export const ServerErrorDisplay = {
  name: 'Server Error',
  render: () => {
    return createStaticDisplay(`
      <div style="padding: 16px; background: #FFEBEE; border: 1px solid #FFCDD2; border-radius: 4px;">
        <div style="display: flex; align-items: center; gap: 12px;">
          <svg width="24" height="24" viewBox="0 0 24 24" fill="#f44336">
            <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm1 15h-2v-2h2v2zm0-4h-2V7h2v6z"/>
          </svg>
          <div>
            <p style="margin: 0; font-weight: 500; color: #C62828;">Something went wrong</p>
            <p style="margin: 4px 0 0; font-size: 14px; color: #C62828;">Please try again or contact support if the problem persists.</p>
          </div>
        </div>
      </div>
    `);
  },
  parameters: {
    docs: {
      description: {
        story: 'Error display for server-side issues during checkout.',
      },
    },
  },
};

// OutOfStock Container
export const OutOfStockDisplay = {
  name: 'Out of Stock',
  render: () => {
    return createStaticDisplay(`
      <div style="padding: 16px; background: #FFF3E0; border: 1px solid #FFE0B2; border-radius: 4px;">
        <div style="display: flex; align-items: center; gap: 12px;">
          <svg width="24" height="24" viewBox="0 0 24 24" fill="#FF9800">
            <path d="M1 21h22L12 2 1 21zm12-3h-2v-2h2v2zm0-4h-2v-4h2v4z"/>
          </svg>
          <div>
            <p style="margin: 0; font-weight: 500; color: #E65100;">Some items are out of stock</p>
            <p style="margin: 4px 0 0; font-size: 14px; color: #E65100;">Please update your cart to continue.</p>
          </div>
        </div>
      </div>
    `);
  },
  parameters: {
    docs: {
      description: {
        story: 'Message displayed when cart items become unavailable during checkout.',
      },
    },
  },
};

// Shipping Methods (with mock data)
export const ShippingMethodsDisplay = {
  name: 'Shipping Methods',
  render: () => {
    return createStaticDisplay(`
      <h3 style="margin: 0 0 16px; font-size: 18px; font-weight: 600;">Shipping Method</h3>
      <div style="display: flex; flex-direction: column; gap: 12px;">
        ${mockShippingMethods.map((method, index) => `
          <label style="display: flex; align-items: center; gap: 12px; padding: 12px; border: 1px solid ${index === 0 ? '#333' : '#e0e0e0'}; border-radius: 4px; cursor: pointer;">
            <input type="radio" name="shipping" ${index === 0 ? 'checked' : ''} style="margin: 0;" />
            <div style="flex: 1;">
              <div style="font-weight: 500;">${method.carrierTitle}</div>
              <div style="color: #666; font-size: 14px;">${method.methodTitle}</div>
            </div>
            <div style="font-weight: 600;">${method.amount.value === 0 ? 'Free' : formatPrice(method.amount.value)}</div>
          </label>
        `).join('')}
      </div>
    `);
  },
  parameters: {
    docs: {
      description: {
        story: 'Available shipping methods selection. Shows carrier, method, and pricing.',
      },
    },
  },
};

// Payment Methods (with mock data)
export const PaymentMethodsDisplay = {
  name: 'Payment Methods',
  render: () => {
    return createStaticDisplay(`
      <h3 style="margin: 0 0 16px; font-size: 18px; font-weight: 600;">Payment Method</h3>
      <div style="display: flex; flex-direction: column; gap: 12px;">
        ${mockPaymentMethods.map((method, index) => `
          <label style="display: flex; align-items: center; gap: 12px; padding: 12px; border: 1px solid ${index === 0 ? '#333' : '#e0e0e0'}; border-radius: 4px; cursor: pointer;">
            <input type="radio" name="payment" ${index === 0 ? 'checked' : ''} style="margin: 0;" />
            <div style="flex: 1;">
              <div style="font-weight: 500;">${method.title}</div>
            </div>
          </label>
        `).join('')}
      </div>
    `);
  },
  parameters: {
    docs: {
      description: {
        story: 'Payment method selection. Supports various payment types.',
      },
    },
  },
};

// Shipping Address Form
export const ShippingAddressForm = {
  name: 'Shipping Address Form',
  render: () => {
    return createStaticDisplay(`
      <h3 style="margin: 0 0 16px; font-size: 18px; font-weight: 600;">Shipping Address</h3>
      <form style="display: grid; gap: 16px;">
        <div style="display: grid; grid-template-columns: 1fr 1fr; gap: 16px;">
          <div>
            <label style="display: block; margin-bottom: 4px; font-size: 14px; color: #666;">First Name</label>
            <input type="text" placeholder="John" style="width: 100%; padding: 10px; border: 1px solid #e0e0e0; border-radius: 4px; box-sizing: border-box;" />
          </div>
          <div>
            <label style="display: block; margin-bottom: 4px; font-size: 14px; color: #666;">Last Name</label>
            <input type="text" placeholder="Doe" style="width: 100%; padding: 10px; border: 1px solid #e0e0e0; border-radius: 4px; box-sizing: border-box;" />
          </div>
        </div>
        <div>
          <label style="display: block; margin-bottom: 4px; font-size: 14px; color: #666;">Street Address</label>
          <input type="text" placeholder="123 Main St" style="width: 100%; padding: 10px; border: 1px solid #e0e0e0; border-radius: 4px; box-sizing: border-box;" />
        </div>
        <div style="display: grid; grid-template-columns: 2fr 1fr 1fr; gap: 16px;">
          <div>
            <label style="display: block; margin-bottom: 4px; font-size: 14px; color: #666;">City</label>
            <input type="text" placeholder="Austin" style="width: 100%; padding: 10px; border: 1px solid #e0e0e0; border-radius: 4px; box-sizing: border-box;" />
          </div>
          <div>
            <label style="display: block; margin-bottom: 4px; font-size: 14px; color: #666;">State</label>
            <select style="width: 100%; padding: 10px; border: 1px solid #e0e0e0; border-radius: 4px; box-sizing: border-box;">
              <option>TX</option>
            </select>
          </div>
          <div>
            <label style="display: block; margin-bottom: 4px; font-size: 14px; color: #666;">Zip Code</label>
            <input type="text" placeholder="78701" style="width: 100%; padding: 10px; border: 1px solid #e0e0e0; border-radius: 4px; box-sizing: border-box;" />
          </div>
        </div>
        <div>
          <label style="display: block; margin-bottom: 4px; font-size: 14px; color: #666;">Phone</label>
          <input type="tel" placeholder="555-123-4567" style="width: 100%; padding: 10px; border: 1px solid #e0e0e0; border-radius: 4px; box-sizing: border-box;" />
        </div>
      </form>
    `);
  },
  parameters: {
    docs: {
      description: {
        story: 'Address entry form for shipping details. Includes validation and address lookup.',
      },
    },
  },
};

// Terms and Conditions
export const TermsAndConditionsDisplay = {
  name: 'Terms and Conditions',
  render: () => {
    return createStaticDisplay(`
      <div style="display: flex; align-items: flex-start; gap: 12px;">
        <input type="checkbox" id="terms" style="margin-top: 4px;" />
        <label for="terms" style="font-size: 14px; color: #666; line-height: 1.5;">
          I agree to the <a href="#" style="color: #333;">Terms and Conditions</a> and <a href="#" style="color: #333;">Privacy Policy</a>
        </label>
      </div>
    `);
  },
  parameters: {
    docs: {
      description: {
        story: 'Terms acceptance checkbox required before placing order.',
      },
    },
  },
};
