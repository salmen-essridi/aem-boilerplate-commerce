// Commerce Account Header Block Stories
// CSS loaded from: /blocks/commerce-account-header/commerce-account-header.css

export default {
  title: 'Blocks/Commerce Account Header',
  tags: ['autodocs'],
  parameters: {
    docs: {
      description: {
        component: `
Commerce Account Header block - Page header for account section.

**CSS Location:** \`/blocks/commerce-account-header/commerce-account-header.css\`

**Drop-in:** \`@dropins/tools/components\` - Header component

Agency can edit the CSS file directly in the main project.
        `,
      },
    },
  },
};

// Account Header
export const AccountHeader = {
  name: 'Account Header',
  render: () => {
    const element = document.createElement('div');
    element.className = 'commerce-account-header';
    element.innerHTML = `
      <div class="dropin-design">
        <div class="account-header">
          <h1 class="account-header__title">My account</h1>
        </div>
      </div>
    `;
    return element;
  },
};

// Custom Title
export const CustomTitle = {
  name: 'Custom Title',
  render: () => {
    const element = document.createElement('div');
    element.className = 'commerce-account-header';
    element.innerHTML = `
      <div class="dropin-design">
        <div class="account-header">
          <h1 class="account-header__title">My Dashboard</h1>
        </div>
      </div>
    `;
    return element;
  },
};
