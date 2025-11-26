// Commerce Return Header Block Stories
// CSS loaded from: /blocks/commerce-return-header/commerce-return-header.css

export default {
  title: 'Blocks/Commerce Return Header',
  tags: ['autodocs'],
  parameters: {
    docs: {
      description: {
        component: `
Commerce Return Header block - Header for return detail pages.

**CSS Location:** \`/blocks/commerce-return-header/commerce-return-header.css\`

**Drop-in:** \`@dropins/tools/components\` - Header component

Agency can edit the CSS file directly in the main project.
        `,
      },
    },
  },
};

// Return Header
export const ReturnHeader = {
  name: 'Return Header',
  render: () => {
    const element = document.createElement('div');
    element.className = 'commerce-return-header';
    element.innerHTML = `
      <div class="dropin-design">
        <a href="#" class="returns-list-header">← Back to all returns</a>
        <div class="return-header">
          <h1 class="return-header__title">Return #R000001234</h1>
        </div>
      </div>
    `;
    return element;
  },
};

// Returns List Header
export const ReturnsListHeader = {
  name: 'Returns List Header',
  render: () => {
    const element = document.createElement('div');
    element.className = 'commerce-return-header';
    element.innerHTML = `
      <div class="dropin-design">
        <div class="return-header">
          <h1 class="return-header__title">Returns</h1>
        </div>
      </div>
    `;
    return element;
  },
};
