// Stories for Commerce Cart blocks
// These HTML blocks can be edited - block comment markers are preserved for reverse-apply
// CSS styling is loaded from the embedded preview.js styles

export default {
  title: 'Blocks/Commerce Cart',
  tags: ['autodocs'],
  parameters: {
    layout: 'padded',
  },
};


/**
 * Block ID: commerce-cart-0
 * Source: blocks/commerce-cart/commerce-cart.js
 *
 * Edit the HTML below. The <!-- @block:ID --> comment markers MUST stay intact!
 * These markers are used by reverse-apply to sync changes back to source JS files.
 */
export const commerce_cart_0 = {
  render: () => `
    <div class="block commerce-cart dropin-design">
      <!-- @block:commerce-cart-0 -->
    <div class="cart__notification"></div>
    <div class="cart__wrapper">
      <div class="cart__left-column">
        <div class="cart__list"></div>
      </div>
      <div class="cart__right-column">
        <div class="cart__order-summary"></div>
        <div class="cart__gift-options"></div>
      </div>
    </div>

    <div class="cart__empty-cart"></div>
  <!-- @block:commerce-cart-0:end -->
    </div>
  `,
  parameters: {
    docs: {
      description: {
        story: `
**Block ID:** \`commerce-cart-0\`
**Source:** \`blocks/commerce-cart/commerce-cart.js\`

The \`<!-- @block:commerce-cart-0 -->\` comment markers are required for the reverse-apply workflow.
        `,
      },
    },
  },
};
