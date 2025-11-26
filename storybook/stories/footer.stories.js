// Stories for Footer blocks
// These HTML blocks can be edited - block comment markers are preserved for reverse-apply
// CSS styling is loaded from the embedded preview.js styles

export default {
  title: 'Blocks/Footer',
  tags: ['autodocs'],
  parameters: {
    layout: 'padded',
  },
};


/**
 * Block ID: footer-innerHTML-0
 * Source: blocks/footer/footer.js
 *
 * Edit the HTML below. The <!-- @block:ID --> comment markers MUST stay intact!
 * These markers are used by reverse-apply to sync changes back to source JS files.
 */
export const footer_innerHTML_0 = {
  render: () => `
    <div class="block footer dropin-design">
      <!-- @block:footer-innerHTML-0 -->
      <div class="storeview-switcher-button"></div>
    <!-- @block:footer-innerHTML-0:end -->
    </div>
  `,
  parameters: {
    docs: {
      description: {
        story: `
**Block ID:** \`footer-innerHTML-0\`
**Source:** \`blocks/footer/footer.js\`

The \`<!-- @block:footer-innerHTML-0 -->\` comment markers are required for the reverse-apply workflow.
        `,
      },
    },
  },
};
