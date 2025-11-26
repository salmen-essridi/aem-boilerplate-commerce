// Stories for Product Recommendations blocks
// These HTML blocks can be edited - block comment markers are preserved for reverse-apply
// CSS styling is loaded from the embedded preview.js styles

export default {
  title: 'Blocks/Product Recommendations',
  tags: ['autodocs'],
  parameters: {
    layout: 'padded',
  },
};


/**
 * Block ID: product-recommendations-0
 * Source: blocks/product-recommendations/product-recommendations.js
 *
 * Edit the HTML below. The <!-- @block:ID --> comment markers MUST stay intact!
 * These markers are used by reverse-apply to sync changes back to source JS files.
 */
export const product_recommendations_0 = {
  render: () => `
    <div class="block product-recommendations dropin-design">
      <!-- @block:product-recommendations-0 -->
    <div class="recommendations__wrapper">
      <div class="recommendations__list"></div>
    </div>
  <!-- @block:product-recommendations-0:end -->
    </div>
  `,
  parameters: {
    docs: {
      description: {
        story: `
**Block ID:** \`product-recommendations-0\`
**Source:** \`blocks/product-recommendations/product-recommendations.js\`

The \`<!-- @block:product-recommendations-0 -->\` comment markers are required for the reverse-apply workflow.
        `,
      },
    },
  },
};
