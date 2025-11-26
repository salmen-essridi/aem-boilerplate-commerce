// Account Dropin Stories
// Mix of form-based and data-dependent containers

import { mockCustomer, mockAddresses, mockOrder } from './mockData.js';

export default {
  title: 'Dropins/Account',
  tags: ['autodocs'],
  parameters: {
    docs: {
      description: {
        component: 'Adobe Commerce Account Dropin containers for customer account management.',
      },
    },
  },
};

// Helper to create static display
const createStaticDisplay = (content) => {
  const element = document.createElement('div');
  element.className = 'dropin-container account-static';
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

const formatDate = (dateString) => {
  return new Date(dateString).toLocaleDateString('en-US', {
    year: 'numeric',
    month: 'short',
    day: 'numeric',
  });
};

// AddressForm Container (form-based)
export const AddressFormDisplay = {
  name: 'Address Form',
  render: () => {
    return createStaticDisplay(`
      <h3 style="margin: 0 0 16px; font-size: 18px; font-weight: 600;">Add New Address</h3>
      <form style="display: grid; gap: 16px; max-width: 500px;">
        <div style="display: grid; grid-template-columns: 1fr 1fr; gap: 16px;">
          <div>
            <label style="display: block; margin-bottom: 4px; font-size: 14px; color: #666;">First Name *</label>
            <input type="text" style="width: 100%; padding: 10px; border: 1px solid #e0e0e0; border-radius: 4px; box-sizing: border-box;" />
          </div>
          <div>
            <label style="display: block; margin-bottom: 4px; font-size: 14px; color: #666;">Last Name *</label>
            <input type="text" style="width: 100%; padding: 10px; border: 1px solid #e0e0e0; border-radius: 4px; box-sizing: border-box;" />
          </div>
        </div>
        <div>
          <label style="display: block; margin-bottom: 4px; font-size: 14px; color: #666;">Street Address *</label>
          <input type="text" style="width: 100%; padding: 10px; border: 1px solid #e0e0e0; border-radius: 4px; box-sizing: border-box; margin-bottom: 8px;" />
          <input type="text" placeholder="Apt, Suite, etc. (optional)" style="width: 100%; padding: 10px; border: 1px solid #e0e0e0; border-radius: 4px; box-sizing: border-box;" />
        </div>
        <div style="display: grid; grid-template-columns: 2fr 1fr 1fr; gap: 16px;">
          <div>
            <label style="display: block; margin-bottom: 4px; font-size: 14px; color: #666;">City *</label>
            <input type="text" style="width: 100%; padding: 10px; border: 1px solid #e0e0e0; border-radius: 4px; box-sizing: border-box;" />
          </div>
          <div>
            <label style="display: block; margin-bottom: 4px; font-size: 14px; color: #666;">State *</label>
            <select style="width: 100%; padding: 10px; border: 1px solid #e0e0e0; border-radius: 4px; box-sizing: border-box;">
              <option>Select</option>
            </select>
          </div>
          <div>
            <label style="display: block; margin-bottom: 4px; font-size: 14px; color: #666;">ZIP *</label>
            <input type="text" style="width: 100%; padding: 10px; border: 1px solid #e0e0e0; border-radius: 4px; box-sizing: border-box;" />
          </div>
        </div>
        <div>
          <label style="display: block; margin-bottom: 4px; font-size: 14px; color: #666;">Phone *</label>
          <input type="tel" style="width: 100%; padding: 10px; border: 1px solid #e0e0e0; border-radius: 4px; box-sizing: border-box;" />
        </div>
        <div style="display: flex; gap: 8px;">
          <input type="checkbox" id="defaultAddr" />
          <label for="defaultAddr" style="font-size: 14px;">Set as default address</label>
        </div>
        <div style="display: flex; gap: 12px;">
          <button type="button" style="padding: 12px 24px; background: #333; color: #fff; border: none; border-radius: 4px; cursor: pointer;">Save Address</button>
          <button type="button" style="padding: 12px 24px; background: #fff; color: #333; border: 1px solid #e0e0e0; border-radius: 4px; cursor: pointer;">Cancel</button>
        </div>
      </form>
    `);
  },
  parameters: {
    docs: {
      description: {
        story: 'Form for adding or editing a customer address.',
      },
    },
  },
};

// Customer Information
export const CustomerInformationDisplay = {
  name: 'Customer Information',
  render: () => {
    return createStaticDisplay(`
      <h3 style="margin: 0 0 16px; font-size: 18px; font-weight: 600;">Account Information</h3>
      <div style="display: grid; grid-template-columns: 1fr 1fr; gap: 24px;">
        <div>
          <h4 style="margin: 0 0 8px; font-size: 14px; color: #666; font-weight: normal;">Contact Information</h4>
          <p style="margin: 0 0 4px; font-weight: 500;">${mockCustomer.firstName} ${mockCustomer.lastName}</p>
          <p style="margin: 0; color: #666;">${mockCustomer.email}</p>
          <a href="#" style="display: inline-block; margin-top: 12px; color: #333; font-size: 14px;">Edit</a>
        </div>
        <div>
          <h4 style="margin: 0 0 8px; font-size: 14px; color: #666; font-weight: normal;">Newsletters</h4>
          <p style="margin: 0; color: #666;">You are not subscribed to our newsletter.</p>
          <a href="#" style="display: inline-block; margin-top: 12px; color: #333; font-size: 14px;">Edit</a>
        </div>
      </div>
    `);
  },
  parameters: {
    docs: {
      description: {
        story: 'Customer profile information including name, email, and newsletter preferences.',
      },
    },
  },
};

// Addresses List
export const AddressesListDisplay = {
  name: 'Addresses',
  render: () => {
    return createStaticDisplay(`
      <div style="display: flex; justify-content: space-between; align-items: center; margin-bottom: 16px;">
        <h3 style="margin: 0; font-size: 18px; font-weight: 600;">Address Book</h3>
        <button style="padding: 8px 16px; background: #333; color: #fff; border: none; border-radius: 4px; cursor: pointer; font-size: 14px;">
          Add New Address
        </button>
      </div>
      <div style="display: grid; grid-template-columns: 1fr 1fr; gap: 16px;">
        ${mockAddresses.map(addr => `
          <div style="padding: 16px; border: 1px solid #e0e0e0; border-radius: 8px; position: relative;">
            ${addr.defaultShipping ? `<span style="position: absolute; top: 12px; right: 12px; padding: 2px 8px; background: #E3F2FD; color: #1976D2; border-radius: 4px; font-size: 12px;">Default</span>` : ''}
            <p style="margin: 0 0 8px; font-weight: 500;">${addr.firstName} ${addr.lastName}</p>
            <p style="margin: 0; color: #666; line-height: 1.5; font-size: 14px;">
              ${addr.street.join('<br/>')}<br/>
              ${addr.city}, ${addr.region.code} ${addr.postcode}<br/>
              ${addr.country.name}<br/>
              Tel: ${addr.telephone}
            </p>
            <div style="margin-top: 12px; display: flex; gap: 12px;">
              <a href="#" style="color: #333; font-size: 14px;">Edit</a>
              <a href="#" style="color: #f44336; font-size: 14px;">Delete</a>
            </div>
          </div>
        `).join('')}
      </div>
    `);
  },
  parameters: {
    docs: {
      description: {
        story: 'List of saved customer addresses with edit and delete options.',
      },
    },
  },
};

// Orders List
export const OrdersListDisplay = {
  name: 'Orders List',
  render: () => {
    const orders = [mockOrder, { ...mockOrder, orderNumber: '000000022', status: 'Processing', orderDate: '2024-01-10T10:30:00Z' }];
    return createStaticDisplay(`
      <h3 style="margin: 0 0 16px; font-size: 18px; font-weight: 600;">My Orders</h3>
      <table style="width: 100%; border-collapse: collapse;">
        <thead>
          <tr style="border-bottom: 2px solid #e0e0e0;">
            <th style="padding: 12px 8px; text-align: left; font-weight: 600;">Order #</th>
            <th style="padding: 12px 8px; text-align: left; font-weight: 600;">Date</th>
            <th style="padding: 12px 8px; text-align: left; font-weight: 600;">Ship To</th>
            <th style="padding: 12px 8px; text-align: right; font-weight: 600;">Total</th>
            <th style="padding: 12px 8px; text-align: center; font-weight: 600;">Status</th>
            <th style="padding: 12px 8px; text-align: center; font-weight: 600;">Action</th>
          </tr>
        </thead>
        <tbody>
          ${orders.map(order => `
            <tr style="border-bottom: 1px solid #e0e0e0;">
              <td style="padding: 12px 8px; color: #333;">${order.orderNumber}</td>
              <td style="padding: 12px 8px; color: #666;">${formatDate(order.orderDate)}</td>
              <td style="padding: 12px 8px; color: #666;">${order.shippingAddress.firstName} ${order.shippingAddress.lastName}</td>
              <td style="padding: 12px 8px; text-align: right; font-weight: 500;">${formatPrice(order.totals.grandTotal.value)}</td>
              <td style="padding: 12px 8px; text-align: center;">
                <span style="display: inline-block; padding: 4px 12px; background: ${order.status === 'Complete' ? '#E8F5E9' : '#FFF3E0'}; color: ${order.status === 'Complete' ? '#4CAF50' : '#FF9800'}; border-radius: 16px; font-size: 12px;">
                  ${order.status}
                </span>
              </td>
              <td style="padding: 12px 8px; text-align: center;">
                <a href="#" style="color: #333; font-size: 14px;">View Order</a>
              </td>
            </tr>
          `).join('')}
        </tbody>
      </table>
    `);
  },
  parameters: {
    docs: {
      description: {
        story: 'Table of customer order history with status and view details.',
      },
    },
  },
};

// Account Dashboard
export const AccountDashboardDisplay = {
  name: 'Account Dashboard',
  render: () => {
    const defaultAddr = mockAddresses.find(a => a.defaultShipping);
    return createStaticDisplay(`
      <h2 style="margin: 0 0 24px; font-size: 24px; font-weight: 600;">My Account</h2>
      <div style="display: grid; grid-template-columns: 1fr 1fr; gap: 24px;">
        <div style="padding: 20px; background: #f9f9f9; border-radius: 8px;">
          <h3 style="margin: 0 0 12px; font-size: 16px; font-weight: 600;">Account Information</h3>
          <p style="margin: 0 0 4px;">${mockCustomer.firstName} ${mockCustomer.lastName}</p>
          <p style="margin: 0; color: #666; font-size: 14px;">${mockCustomer.email}</p>
          <a href="#" style="display: inline-block; margin-top: 12px; color: #333; font-size: 14px;">Edit</a>
        </div>
        <div style="padding: 20px; background: #f9f9f9; border-radius: 8px;">
          <h3 style="margin: 0 0 12px; font-size: 16px; font-weight: 600;">Default Shipping Address</h3>
          ${defaultAddr ? `
            <p style="margin: 0; color: #666; font-size: 14px; line-height: 1.5;">
              ${defaultAddr.firstName} ${defaultAddr.lastName}<br/>
              ${defaultAddr.street.join(', ')}<br/>
              ${defaultAddr.city}, ${defaultAddr.region.code} ${defaultAddr.postcode}
            </p>
          ` : '<p style="margin: 0; color: #666;">No default address set</p>'}
          <a href="#" style="display: inline-block; margin-top: 12px; color: #333; font-size: 14px;">Manage Addresses</a>
        </div>
        <div style="padding: 20px; background: #f9f9f9; border-radius: 8px; grid-column: span 2;">
          <h3 style="margin: 0 0 12px; font-size: 16px; font-weight: 600;">Recent Orders</h3>
          <p style="margin: 0; color: #666;">Order #${mockOrder.orderNumber} - ${formatDate(mockOrder.orderDate)} - ${formatPrice(mockOrder.totals.grandTotal.value)}</p>
          <a href="#" style="display: inline-block; margin-top: 12px; color: #333; font-size: 14px;">View All Orders</a>
        </div>
      </div>
    `);
  },
  parameters: {
    docs: {
      description: {
        story: 'Account overview dashboard with quick links to profile sections.',
      },
    },
  },
};
