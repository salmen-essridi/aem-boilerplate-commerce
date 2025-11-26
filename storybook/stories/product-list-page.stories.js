// Stories for Product List Page blocks
// These HTML blocks can be edited - block comment markers are preserved for reverse-apply
// CSS styling is loaded from the embedded preview.js styles

export default {
  title: 'Blocks/Product List Page',
  tags: ['autodocs'],
  parameters: {
    layout: 'padded',
  },
};


/**
 * Block ID: product-list-page-0
 * Source: blocks/product-list-page/product-list-page.js
 *
 * Edit the HTML below. The <!-- @block:ID --> comment markers MUST stay intact!
 * These markers are used by reverse-apply to sync changes back to source JS files.
 */
export const product_list_page_0 = {
  render: () => `
    <div class="block product-list-page dropin-design">
      <!-- @block:product-list-page-0 -->
    <div class="search__wrapper">
      <div class="search__result-info"></div>
      <div class="search__view-facets"></div>
      <div class="search__facets"></div>
      <div class="search__product-sort"></div>
      <div class="search__product-list"></div>
      <div class="search__pagination"></div>
    </div>
  <!-- @block:product-list-page-0:end -->
    </div>
  `,
  parameters: {
    docs: {
      description: {
        story: `
**Block ID:** \`product-list-page-0\`
**Source:** \`blocks/product-list-page/product-list-page.js\`

The \`<!-- @block:product-list-page-0 -->\` comment markers are required for the reverse-apply workflow.
        `,
      },
    },
  },
};
