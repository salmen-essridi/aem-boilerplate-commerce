// Commerce Order Header Block Stories
// CSS loaded from: /blocks/commerce-order-header/commerce-order-header.css

export default {
  title: 'Blocks/Commerce Order Header',
  tags: ['autodocs'],
  parameters: {
    docs: {
      description: {
        component: `
Commerce Order Header block - Header for order detail pages.

**CSS Location:** \`/blocks/commerce-order-header/commerce-order-header.css\`

**Drop-in:** \`@dropins/tools/components\` - Header component

Agency can edit the CSS file directly in the main project.
        `,
      },
    },
  },
};

// Order Header
export const OrderHeader = {
  name: 'Order Header',
  render: () => {
    const element = document.createElement('div');
    element.className = 'commerce-order-header';
    element.innerHTML = `
      <div class="dropin-design">
        <a href="#" class="orders-list-link">← Back to all orders</a>
        <div class="order-header">
          <h1 class="order-header__title">Order #000012345</h1>
        </div>
      </div>
    `;
    return element;
  },
};

// Order List Header
export const OrderListHeader = {
  name: 'Orders List Header',
  render: () => {
    const element = document.createElement('div');
    element.className = 'commerce-order-header';
    element.innerHTML = `
      <div class="dropin-design">
        <div class="order-header">
          <h1 class="order-header__title">Orders</h1>
        </div>
      </div>
    `;
    return element;
  },
};
