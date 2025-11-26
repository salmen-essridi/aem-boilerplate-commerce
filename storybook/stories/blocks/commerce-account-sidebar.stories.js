// Commerce Account Sidebar Block Stories
// CSS loaded from: /blocks/commerce-account-sidebar/commerce-account-sidebar.css

export default {
  title: 'Blocks/Commerce Account Sidebar',
  tags: ['autodocs'],
  parameters: {
    docs: {
      description: {
        component: `
Commerce Account Sidebar block - Navigation menu for account section.

**CSS Location:** \`/blocks/commerce-account-sidebar/commerce-account-sidebar.css\`

**Drop-in:** \`@dropins/storefront-account\` - Custom sidebar with Icon component

Agency can edit the CSS file directly in the main project.
        `,
      },
    },
  },
};

// Account Sidebar
export const AccountSidebar = {
  name: 'Account Sidebar',
  render: () => {
    const element = document.createElement('div');
    element.className = 'commerce-account-sidebar';
    element.innerHTML = `
      <div class="dropin-design">
        <nav class="account-sidebar">
          <a href="#" class="commerce-account-sidebar-item commerce-account-sidebar-item-active">
            <div class="commerce-account-sidebar-item-icon">
              <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                <path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2"></path>
                <circle cx="12" cy="7" r="4"></circle>
              </svg>
            </div>
            <div class="commerce-account-sidebar-item-content">
              <p class="commerce-account-sidebar-item-title">Account Information</p>
              <p class="commerce-account-sidebar-item-subtitle">Manage your profile</p>
            </div>
            <div class="commerce-account-sidebar-item-arrow">
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                <polyline points="9 18 15 12 9 6"></polyline>
              </svg>
            </div>
          </a>
          <a href="#" class="commerce-account-sidebar-item">
            <div class="commerce-account-sidebar-item-icon">
              <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                <path d="M6 2L3 6v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2V6l-3-4z"></path>
                <line x1="3" y1="6" x2="21" y2="6"></line>
                <path d="M16 10a4 4 0 0 1-8 0"></path>
              </svg>
            </div>
            <div class="commerce-account-sidebar-item-content">
              <p class="commerce-account-sidebar-item-title">Orders</p>
              <p class="commerce-account-sidebar-item-subtitle">View your order history</p>
            </div>
            <div class="commerce-account-sidebar-item-arrow">
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                <polyline points="9 18 15 12 9 6"></polyline>
              </svg>
            </div>
          </a>
          <a href="#" class="commerce-account-sidebar-item">
            <div class="commerce-account-sidebar-item-icon">
              <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"></path>
                <circle cx="12" cy="10" r="3"></circle>
              </svg>
            </div>
            <div class="commerce-account-sidebar-item-content">
              <p class="commerce-account-sidebar-item-title">Addresses</p>
              <p class="commerce-account-sidebar-item-subtitle">Manage addresses</p>
            </div>
            <div class="commerce-account-sidebar-item-arrow">
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                <polyline points="9 18 15 12 9 6"></polyline>
              </svg>
            </div>
          </a>
          <a href="#" class="commerce-account-sidebar-item">
            <div class="commerce-account-sidebar-item-icon">
              <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                <path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z"></path>
              </svg>
            </div>
            <div class="commerce-account-sidebar-item-content">
              <p class="commerce-account-sidebar-item-title">Wishlist</p>
              <p class="commerce-account-sidebar-item-subtitle">Your saved items</p>
            </div>
            <div class="commerce-account-sidebar-item-arrow">
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                <polyline points="9 18 15 12 9 6"></polyline>
              </svg>
            </div>
          </a>
          <a href="#" class="commerce-account-sidebar-item">
            <div class="commerce-account-sidebar-item-icon">
              <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                <polyline points="16 3 21 3 21 8"></polyline>
                <line x1="4" y1="20" x2="21" y2="3"></line>
                <polyline points="21 16 21 21 16 21"></polyline>
                <line x1="15" y1="15" x2="21" y2="21"></line>
                <line x1="4" y1="4" x2="9" y2="9"></line>
              </svg>
            </div>
            <div class="commerce-account-sidebar-item-content">
              <p class="commerce-account-sidebar-item-title">Returns</p>
              <p class="commerce-account-sidebar-item-subtitle">Manage your returns</p>
            </div>
            <div class="commerce-account-sidebar-item-arrow">
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                <polyline points="9 18 15 12 9 6"></polyline>
              </svg>
            </div>
          </a>
        </nav>
      </div>
    `;
    return element;
  },
};
