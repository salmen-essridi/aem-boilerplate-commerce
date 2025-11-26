// Stories for Carousel blocks
// These HTML blocks can be edited - block comment markers are preserved for reverse-apply
// CSS styling is loaded from the embedded preview.js styles

export default {
  title: 'Blocks/Carousel',
  tags: ['autodocs'],
  parameters: {
    layout: 'padded',
  },
};


/**
 * Block ID: carousel-innerHTML-0
 * Source: blocks/carousel/carousel.js
 *
 * Edit the HTML below. The <!-- @block:ID --> comment markers MUST stay intact!
 * These markers are used by reverse-apply to sync changes back to source JS files.
 */
export const carousel_innerHTML_0 = {
  render: () => `
    <div class="block carousel dropin-design">
      <!-- @block:carousel-innerHTML-0 --><button type="button" aria-label="\${
        placeholders.showSlide || 'Show Slide'
      } \${idx + 1} \${placeholders.of || 'of'} \${rows.length}"></button><!-- @block:carousel-innerHTML-0:end -->
    </div>
  `,
  parameters: {
    docs: {
      description: {
        story: `
**Block ID:** \`carousel-innerHTML-0\`
**Source:** \`blocks/carousel/carousel.js\`

The \`<!-- @block:carousel-innerHTML-0 -->\` comment markers are required for the reverse-apply workflow.
        `,
      },
    },
  },
};
