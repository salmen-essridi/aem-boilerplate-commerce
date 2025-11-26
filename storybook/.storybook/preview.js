/** @type { import('@storybook/html').Preview } */

// Import dropin CSS (for primitives styling)
import '@dropins/tools/initializer.js';

// Commerce blocks CSS list - loaded from main project /blocks folder
const commerceBlocks = [
  'commerce-cart',
  'commerce-mini-cart',
  'commerce-checkout',
  'commerce-login',
  'commerce-create-account',
  'commerce-forgot-password',
  'commerce-create-password',
  'commerce-confirm-account',
  'commerce-addresses',
  'commerce-customer-details',
  'commerce-customer-information',
  'commerce-account-header',
  'commerce-account-sidebar',
  'commerce-orders-list',
  'commerce-order-header',
  'commerce-order-status',
  'commerce-order-product-list',
  'commerce-order-cost-summary',
  'commerce-shipping-status',
  'commerce-search-order',
  'commerce-order-returns',
  'commerce-returns-list',
  'commerce-return-header',
  'commerce-create-return',
  'commerce-wishlist',
  'commerce-gift-options',
  'product-details',
  'product-list-page',
  'product-recommendations',
];

// Load CSS dynamically from static dirs (served from main project)
function loadBlockCSS() {
  // Load main styles from MAIN PROJECT
  const mainStyles = ['/styles/styles.css', '/styles/fonts.css'];
  mainStyles.forEach(href => {
    if (!document.querySelector(`link[href="${href}"]`)) {
      const link = document.createElement('link');
      link.rel = 'stylesheet';
      link.href = href;
      document.head.appendChild(link);
    }
  });

  // Load local storybook styles (dropin-base for primitives, page-layouts for pages)
  const localStyles = ['/local-styles/dropin-base.css', '/local-styles/page-layouts.css'];
  localStyles.forEach(href => {
    if (!document.querySelector(`link[href="${href}"]`)) {
      const link = document.createElement('link');
      link.rel = 'stylesheet';
      link.href = href;
      document.head.appendChild(link);
    }
  });

  // Load commerce block CSS from MAIN PROJECT (served at /blocks/)
  commerceBlocks.forEach(block => {
    const href = `/blocks/${block}/${block}.css`;
    if (!document.querySelector(`link[href="${href}"]`)) {
      const link = document.createElement('link');
      link.rel = 'stylesheet';
      link.href = href;
      document.head.appendChild(link);
    }
  });
}

// Add dropin-design class to body and set appear for visibility
if (typeof document !== 'undefined') {
  document.body.classList.add('dropin-design', 'appear');
  document.documentElement.style.fontSize = '62.5%';
  loadBlockCSS();
}

const preview = {
  parameters: {
    controls: {
      matchers: {
        color: /(background|color)$/i,
        date: /Date$/i,
      },
    },
    docs: {
      toc: true,
    },
    backgrounds: {
      default: 'light',
      values: [
        { name: 'light', value: '#ffffff' },
        { name: 'dark', value: '#292929' },
        { name: 'gray', value: '#f5f5f5' },
      ],
    },
  },
  decorators: [
    (Story) => {
      const container = document.createElement('div');
      container.className = 'dropin-design';
      container.style.padding = '20px';

      const storyContent = Story();
      if (typeof storyContent === 'string') {
        container.innerHTML = storyContent;
      } else if (storyContent instanceof HTMLElement) {
        container.appendChild(storyContent);
      } else {
        container.appendChild(storyContent);
      }

      return container;
    },
  ],
};

export default preview;
