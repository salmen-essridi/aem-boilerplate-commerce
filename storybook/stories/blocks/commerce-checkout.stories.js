// Commerce Checkout Block Stories
// CSS loaded from main project: /blocks/commerce-checkout/commerce-checkout.css

import { mockAddresses, mockOrder } from '../dropins/mockData.js';

export default {
  title: 'Blocks/Commerce Checkout',
  tags: ['autodocs'],
  parameters: {
    docs: {
      description: {
        component: `
Commerce Checkout block - multi-step checkout process.

**CSS Location:** \`/blocks/commerce-checkout/commerce-checkout.css\`

Agency can edit the CSS file directly in the main project.
        `,
      },
    },
  },
};

const formatPrice = (value, currency = 'USD') => {
  return new Intl.NumberFormat('en-US', { style: 'currency', currency }).format(value);
};

// Full Checkout Page
export const FullCheckout = {
  name: 'Full Checkout',
  render: () => {
    const element = document.createElement('div');
    element.className = 'commerce-checkout';
    element.innerHTML = `
      <div style="display: grid; grid-template-columns: 1fr 400px; gap: 40px; max-width: 1200px;">
        <div class="checkout__main">
          <!-- Login Section -->
          <div class="checkout__section" style="margin-bottom: 32px;">
            <h2 style="margin: 0 0 16px; font-size: 20px; display: flex; align-items: center; gap: 8px;">
              <span style="width: 28px; height: 28px; background: #333; color: #fff; border-radius: 50%; display: flex; align-items: center; justify-content: center; font-size: 14px;">1</span>
              Contact Information
            </h2>
            <div style="padding: 20px; background: #f9f9f9; border-radius: 8px;">
              <p style="margin: 0 0 16px; color: #666;">Already have an account? <a href="#" style="color: #333;">Sign in</a></p>
              <div style="margin-bottom: 16px;">
                <label style="display: block; margin-bottom: 4px; font-size: 14px;">Email Address *</label>
                <input type="email" placeholder="email@example.com" style="width: 100%; padding: 12px; border: 1px solid #e0e0e0; border-radius: 4px; box-sizing: border-box;" />
              </div>
            </div>
          </div>

          <!-- Shipping Section -->
          <div class="checkout__section" style="margin-bottom: 32px;">
            <h2 style="margin: 0 0 16px; font-size: 20px; display: flex; align-items: center; gap: 8px;">
              <span style="width: 28px; height: 28px; background: #333; color: #fff; border-radius: 50%; display: flex; align-items: center; justify-content: center; font-size: 14px;">2</span>
              Shipping Address
            </h2>
            <div style="padding: 20px; background: #f9f9f9; border-radius: 8px;">
              <div style="display: grid; grid-template-columns: 1fr 1fr; gap: 16px; margin-bottom: 16px;">
                <div>
                  <label style="display: block; margin-bottom: 4px; font-size: 14px;">First Name *</label>
                  <input type="text" style="width: 100%; padding: 12px; border: 1px solid #e0e0e0; border-radius: 4px; box-sizing: border-box;" />
                </div>
                <div>
                  <label style="display: block; margin-bottom: 4px; font-size: 14px;">Last Name *</label>
                  <input type="text" style="width: 100%; padding: 12px; border: 1px solid #e0e0e0; border-radius: 4px; box-sizing: border-box;" />
                </div>
              </div>
              <div style="margin-bottom: 16px;">
                <label style="display: block; margin-bottom: 4px; font-size: 14px;">Street Address *</label>
                <input type="text" style="width: 100%; padding: 12px; border: 1px solid #e0e0e0; border-radius: 4px; box-sizing: border-box; margin-bottom: 8px;" />
                <input type="text" placeholder="Apt, Suite, etc." style="width: 100%; padding: 12px; border: 1px solid #e0e0e0; border-radius: 4px; box-sizing: border-box;" />
              </div>
              <div style="display: grid; grid-template-columns: 2fr 1fr 1fr; gap: 16px;">
                <div>
                  <label style="display: block; margin-bottom: 4px; font-size: 14px;">City *</label>
                  <input type="text" style="width: 100%; padding: 12px; border: 1px solid #e0e0e0; border-radius: 4px; box-sizing: border-box;" />
                </div>
                <div>
                  <label style="display: block; margin-bottom: 4px; font-size: 14px;">State *</label>
                  <select style="width: 100%; padding: 12px; border: 1px solid #e0e0e0; border-radius: 4px; box-sizing: border-box;">
                    <option>Select</option>
                  </select>
                </div>
                <div>
                  <label style="display: block; margin-bottom: 4px; font-size: 14px;">ZIP *</label>
                  <input type="text" style="width: 100%; padding: 12px; border: 1px solid #e0e0e0; border-radius: 4px; box-sizing: border-box;" />
                </div>
              </div>
            </div>
          </div>

          <!-- Shipping Method -->
          <div class="checkout__section" style="margin-bottom: 32px;">
            <h2 style="margin: 0 0 16px; font-size: 20px; display: flex; align-items: center; gap: 8px;">
              <span style="width: 28px; height: 28px; background: #333; color: #fff; border-radius: 50%; display: flex; align-items: center; justify-content: center; font-size: 14px;">3</span>
              Shipping Method
            </h2>
            <div style="padding: 20px; background: #f9f9f9; border-radius: 8px;">
              <label style="display: flex; align-items: center; gap: 12px; padding: 12px; border: 2px solid #333; border-radius: 4px; cursor: pointer; margin-bottom: 8px;">
                <input type="radio" name="shipping" checked />
                <div style="flex: 1;">
                  <div style="font-weight: 500;">Standard Shipping</div>
                  <div style="color: #666; font-size: 14px;">5-7 business days</div>
                </div>
                <div style="font-weight: 500;">$5.99</div>
              </label>
              <label style="display: flex; align-items: center; gap: 12px; padding: 12px; border: 1px solid #e0e0e0; border-radius: 4px; cursor: pointer;">
                <input type="radio" name="shipping" />
                <div style="flex: 1;">
                  <div style="font-weight: 500;">Express Shipping</div>
                  <div style="color: #666; font-size: 14px;">2-3 business days</div>
                </div>
                <div style="font-weight: 500;">$14.99</div>
              </label>
            </div>
          </div>

          <!-- Payment -->
          <div class="checkout__section">
            <h2 style="margin: 0 0 16px; font-size: 20px; display: flex; align-items: center; gap: 8px;">
              <span style="width: 28px; height: 28px; background: #333; color: #fff; border-radius: 50%; display: flex; align-items: center; justify-content: center; font-size: 14px;">4</span>
              Payment Method
            </h2>
            <div style="padding: 20px; background: #f9f9f9; border-radius: 8px;">
              <label style="display: flex; align-items: center; gap: 12px; padding: 12px; border: 2px solid #333; border-radius: 4px; cursor: pointer; margin-bottom: 8px;">
                <input type="radio" name="payment" checked />
                <span style="font-weight: 500;">Credit Card</span>
              </label>
              <div style="padding: 16px; border: 1px solid #e0e0e0; border-radius: 4px; margin-top: 12px;">
                <div style="margin-bottom: 16px;">
                  <label style="display: block; margin-bottom: 4px; font-size: 14px;">Card Number *</label>
                  <input type="text" placeholder="1234 5678 9012 3456" style="width: 100%; padding: 12px; border: 1px solid #e0e0e0; border-radius: 4px; box-sizing: border-box;" />
                </div>
                <div style="display: grid; grid-template-columns: 1fr 1fr; gap: 16px;">
                  <div>
                    <label style="display: block; margin-bottom: 4px; font-size: 14px;">Expiry Date *</label>
                    <input type="text" placeholder="MM/YY" style="width: 100%; padding: 12px; border: 1px solid #e0e0e0; border-radius: 4px; box-sizing: border-box;" />
                  </div>
                  <div>
                    <label style="display: block; margin-bottom: 4px; font-size: 14px;">CVV *</label>
                    <input type="text" placeholder="123" style="width: 100%; padding: 12px; border: 1px solid #e0e0e0; border-radius: 4px; box-sizing: border-box;" />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <!-- Order Summary -->
        <div class="checkout__summary" style="position: sticky; top: 20px; height: fit-content;">
          <div style="padding: 24px; background: #f9f9f9; border-radius: 8px;">
            <h3 style="margin: 0 0 20px; font-size: 18px;">Order Summary</h3>
            <div style="display: flex; gap: 12px; margin-bottom: 16px; padding-bottom: 16px; border-bottom: 1px solid #e0e0e0;">
              <img src="https://via.placeholder.com/80" style="width: 60px; height: 60px; object-fit: cover; border-radius: 4px;" />
              <div style="flex: 1;">
                <div style="font-weight: 500;">Product Name</div>
                <div style="color: #666; font-size: 14px;">Qty: 1</div>
              </div>
              <div style="font-weight: 500;">$59.99</div>
            </div>
            <div style="display: flex; justify-content: space-between; margin-bottom: 8px;">
              <span>Subtotal</span>
              <span>$59.99</span>
            </div>
            <div style="display: flex; justify-content: space-between; margin-bottom: 8px; color: #666;">
              <span>Shipping</span>
              <span>$5.99</span>
            </div>
            <div style="display: flex; justify-content: space-between; margin-bottom: 8px; color: #666;">
              <span>Tax</span>
              <span>$5.40</span>
            </div>
            <div style="display: flex; justify-content: space-between; padding-top: 16px; border-top: 1px solid #e0e0e0; font-weight: 600; font-size: 18px;">
              <span>Total</span>
              <span>$71.38</span>
            </div>
            <button style="width: 100%; margin-top: 20px; padding: 16px; background: #333; color: #fff; border: none; border-radius: 4px; font-size: 16px; cursor: pointer;">
              Place Order
            </button>
          </div>
        </div>
      </div>
    `;
    return element;
  },
};

// Checkout Steps
export const CheckoutSteps = {
  name: 'Checkout Steps',
  render: () => {
    const element = document.createElement('div');
    element.className = 'commerce-checkout';
    element.innerHTML = `
      <div style="display: flex; justify-content: center; gap: 40px; padding: 20px;">
        ${[
          { num: 1, label: 'Contact', status: 'completed' },
          { num: 2, label: 'Shipping', status: 'active' },
          { num: 3, label: 'Payment', status: 'pending' },
          { num: 4, label: 'Review', status: 'pending' },
        ].map(step => `
          <div style="display: flex; flex-direction: column; align-items: center; gap: 8px;">
            <div style="width: 40px; height: 40px; border-radius: 50%; display: flex; align-items: center; justify-content: center; font-weight: 600;
              ${step.status === 'completed' ? 'background: #4CAF50; color: #fff;' : ''}
              ${step.status === 'active' ? 'background: #333; color: #fff;' : ''}
              ${step.status === 'pending' ? 'background: #e0e0e0; color: #666;' : ''}
            ">
              ${step.status === 'completed' ? '<svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><polyline points="20 6 9 17 4 12"></polyline></svg>' : step.num}
            </div>
            <span style="font-size: 14px; ${step.status === 'active' ? 'font-weight: 600;' : 'color: #666;'}">${step.label}</span>
          </div>
        `).join('')}
      </div>
    `;
    return element;
  },
};
