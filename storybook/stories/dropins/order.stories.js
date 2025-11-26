// Order Dropin Stories
// Most containers need order data to render

import { mockOrder } from './mockData.js';

export default {
  title: 'Dropins/Order',
  tags: ['autodocs'],
  parameters: {
    docs: {
      description: {
        component: 'Adobe Commerce Order Dropin containers for order confirmation and history.',
      },
    },
  },
};

// Helper to create static display
const createStaticDisplay = (content) => {
  const element = document.createElement('div');
  element.className = 'dropin-container order-static';
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
    month: 'long',
    day: 'numeric',
  });
};

// OrderSearch Container (form-based)
export const OrderSearchForm = {
  name: 'Order Search',
  render: () => {
    return createStaticDisplay(`
      <h3 style="margin: 0 0 16px; font-size: 18px; font-weight: 600;">Look Up Your Order</h3>
      <form style="display: flex; flex-direction: column; gap: 16px; max-width: 400px;">
        <div>
          <label style="display: block; margin-bottom: 4px; font-size: 14px; color: #666;">Order Number</label>
          <input type="text" placeholder="e.g. 000000023" style="width: 100%; padding: 12px; border: 1px solid #e0e0e0; border-radius: 4px; box-sizing: border-box; font-size: 16px;" />
        </div>
        <div>
          <label style="display: block; margin-bottom: 4px; font-size: 14px; color: #666;">Email Address</label>
          <input type="email" placeholder="email@example.com" style="width: 100%; padding: 12px; border: 1px solid #e0e0e0; border-radius: 4px; box-sizing: border-box; font-size: 16px;" />
        </div>
        <button type="button" style="padding: 14px; background: #333; color: #fff; border: none; border-radius: 4px; cursor: pointer; font-size: 16px; font-weight: 500;">Find Order</button>
      </form>
    `);
  },
  parameters: {
    docs: {
      description: {
        story: 'Order lookup form for guests. Search by order number and email.',
      },
    },
  },
};

// Order Header
export const OrderHeaderDisplay = {
  name: 'Order Header',
  render: () => {
    return createStaticDisplay(`
      <div style="text-align: center; padding: 24px 0;">
        <div style="display: inline-flex; align-items: center; justify-content: center; width: 64px; height: 64px; background: #4CAF50; border-radius: 50%; margin-bottom: 16px;">
          <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="#fff" stroke-width="2">
            <polyline points="20 6 9 17 4 12"></polyline>
          </svg>
        </div>
        <h1 style="margin: 0 0 8px; font-size: 28px; font-weight: 600;">Thank You for Your Order!</h1>
        <p style="margin: 0; color: #666; font-size: 16px;">Order #${mockOrder.orderNumber}</p>
        <p style="margin: 8px 0 0; color: #666; font-size: 14px;">A confirmation email has been sent to ${mockOrder.email}</p>
      </div>
    `);
  },
  parameters: {
    docs: {
      description: {
        story: 'Order confirmation header with success message and order number.',
      },
    },
  },
};

// Order Status
export const OrderStatusDisplay = {
  name: 'Order Status',
  render: () => {
    return createStaticDisplay(`
      <div style="display: flex; align-items: center; gap: 16px;">
        <div>
          <h3 style="margin: 0 0 4px; font-size: 16px;">Order Status</h3>
          <span style="display: inline-block; padding: 4px 12px; background: #E8F5E9; color: #4CAF50; border-radius: 16px; font-size: 14px; font-weight: 500;">
            ${mockOrder.status}
          </span>
        </div>
        <div style="margin-left: auto; text-align: right;">
          <div style="color: #666; font-size: 14px;">Order Date</div>
          <div style="font-weight: 500;">${formatDate(mockOrder.orderDate)}</div>
        </div>
      </div>
    `);
  },
  parameters: {
    docs: {
      description: {
        story: 'Shows current order status with visual indicator.',
      },
    },
  },
};

// Order Product List
export const OrderProductListDisplay = {
  name: 'Order Product List',
  render: () => {
    return createStaticDisplay(`
      <h3 style="margin: 0 0 16px; font-size: 18px; font-weight: 600;">Items Ordered</h3>
      <div style="display: flex; flex-direction: column; gap: 16px;">
        ${mockOrder.items.map(item => `
          <div style="display: flex; gap: 16px; padding-bottom: 16px; border-bottom: 1px solid #e0e0e0;">
            <img src="${item.product.image.url}" alt="${item.product.name}"
                 style="width: 80px; height: 80px; object-fit: cover; border-radius: 4px;" />
            <div style="flex: 1;">
              <h4 style="margin: 0 0 4px; font-size: 16px;">${item.product.name}</h4>
              <p style="margin: 0; color: #666; font-size: 14px;">SKU: ${item.product.sku}</p>
              <p style="margin: 4px 0 0; color: #666; font-size: 14px;">
                ${item.configurableOptions.map(opt => `${opt.optionLabel}: ${opt.valueLabel}`).join(' | ')}
              </p>
              <div style="margin-top: 8px; display: flex; justify-content: space-between; align-items: center;">
                <span style="color: #666;">Qty: ${item.quantity}</span>
                <span style="font-weight: 600;">${formatPrice(item.prices.rowTotal.value)}</span>
              </div>
            </div>
          </div>
        `).join('')}
      </div>
    `);
  },
  parameters: {
    docs: {
      description: {
        story: 'List of items in the order with images, options, and pricing.',
      },
    },
  },
};

// Order Cost Summary
export const OrderCostSummaryDisplay = {
  name: 'Order Cost Summary',
  render: () => {
    return createStaticDisplay(`
      <h3 style="margin: 0 0 16px; font-size: 18px; font-weight: 600;">Order Summary</h3>
      <div style="display: flex; flex-direction: column; gap: 8px;">
        <div style="display: flex; justify-content: space-between;">
          <span>Subtotal</span>
          <span>${formatPrice(mockOrder.totals.subtotal.value)}</span>
        </div>
        <div style="display: flex; justify-content: space-between; color: #666;">
          <span>Shipping</span>
          <span>${formatPrice(mockOrder.totals.shipping.value)}</span>
        </div>
        <div style="display: flex; justify-content: space-between; color: #666;">
          <span>Tax</span>
          <span>${formatPrice(mockOrder.totals.tax.value)}</span>
        </div>
        <div style="display: flex; justify-content: space-between; padding-top: 12px; border-top: 1px solid #e0e0e0; margin-top: 8px; font-weight: 600; font-size: 18px;">
          <span>Grand Total</span>
          <span>${formatPrice(mockOrder.totals.grandTotal.value)}</span>
        </div>
      </div>
    `);
  },
  parameters: {
    docs: {
      description: {
        story: 'Order totals breakdown including subtotal, shipping, tax, and total.',
      },
    },
  },
};

// Customer Details
export const CustomerDetailsDisplay = {
  name: 'Customer Details',
  render: () => {
    const addr = mockOrder.shippingAddress;
    return createStaticDisplay(`
      <div style="display: grid; grid-template-columns: 1fr 1fr; gap: 24px;">
        <div>
          <h3 style="margin: 0 0 12px; font-size: 16px; font-weight: 600;">Shipping Address</h3>
          <p style="margin: 0; line-height: 1.6;">
            ${addr.firstName} ${addr.lastName}<br/>
            ${addr.street.join('<br/>')}<br/>
            ${addr.city}, ${addr.region} ${addr.postcode}<br/>
            ${addr.country}<br/>
            <span style="color: #666;">Tel: ${addr.telephone}</span>
          </p>
        </div>
        <div>
          <h3 style="margin: 0 0 12px; font-size: 16px; font-weight: 600;">Billing Address</h3>
          <p style="margin: 0; line-height: 1.6;">
            ${mockOrder.billingAddress.firstName} ${mockOrder.billingAddress.lastName}<br/>
            ${mockOrder.billingAddress.street.join('<br/>')}<br/>
            ${mockOrder.billingAddress.city}, ${mockOrder.billingAddress.region} ${mockOrder.billingAddress.postcode}<br/>
            ${mockOrder.billingAddress.country}
          </p>
        </div>
      </div>
    `);
  },
  parameters: {
    docs: {
      description: {
        story: 'Customer shipping and billing address details.',
      },
    },
  },
};

// Shipping Status
export const ShippingStatusDisplay = {
  name: 'Shipping Status',
  render: () => {
    const shipment = mockOrder.shipments[0];
    return createStaticDisplay(`
      <h3 style="margin: 0 0 16px; font-size: 18px; font-weight: 600;">Shipment Tracking</h3>
      <div style="padding: 16px; background: #f5f5f5; border-radius: 8px;">
        <div style="display: flex; justify-content: space-between; align-items: center;">
          <div>
            <div style="font-weight: 500;">${shipment.carrier}</div>
            <div style="color: #666; font-size: 14px; margin-top: 4px;">Tracking #: ${shipment.trackingNumber}</div>
          </div>
          <a href="${shipment.trackingUrl}" target="_blank" style="padding: 8px 16px; background: #333; color: #fff; text-decoration: none; border-radius: 4px; font-size: 14px;">
            Track Package
          </a>
        </div>
      </div>
    `);
  },
  parameters: {
    docs: {
      description: {
        story: 'Shipment tracking information with carrier and tracking link.',
      },
    },
  },
};

// Payment Information
export const PaymentInformationDisplay = {
  name: 'Payment Information',
  render: () => {
    return createStaticDisplay(`
      <h3 style="margin: 0 0 12px; font-size: 16px; font-weight: 600;">Payment Method</h3>
      <p style="margin: 0; color: #666;">${mockOrder.paymentMethod.name}</p>
    `);
  },
  parameters: {
    docs: {
      description: {
        story: 'Payment method used for the order.',
      },
    },
  },
};

// Shipping Method
export const ShippingMethodDisplay = {
  name: 'Shipping Method',
  render: () => {
    return createStaticDisplay(`
      <h3 style="margin: 0 0 12px; font-size: 16px; font-weight: 600;">Shipping Method</h3>
      <p style="margin: 0; color: #666;">${mockOrder.shippingMethod}</p>
    `);
  },
  parameters: {
    docs: {
      description: {
        story: 'Shipping method selected for the order.',
      },
    },
  },
};
