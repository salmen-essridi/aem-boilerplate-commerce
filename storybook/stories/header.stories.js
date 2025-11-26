// Stories for Header blocks
// These HTML blocks can be edited - block comment markers are preserved for reverse-apply
// CSS styling is loaded from the embedded preview.js styles

export default {
  title: 'Blocks/Header',
  tags: ['autodocs'],
  parameters: {
    layout: 'padded',
  },
};


/**
 * Block ID: header-0
 * Source: blocks/header/renderAuthDropdown.js
 *
 * Edit the HTML below. The <!-- @block:ID --> comment markers MUST stay intact!
 * These markers are used by reverse-apply to sync changes back to source JS files.
 */
export const header_0 = {
  render: () => `
    <div class="block header dropin-design">
      <!-- @block:header-0 -->
 <div class="dropdown-wrapper nav-tools-wrapper">
    <button type="button" class="nav-dropdown-button" aria-haspopup="dialog" aria-expanded="false" aria-controls="login-modal"></button>
    <div class="nav-auth-menu-panel nav-tools-panel">
      <div id="auth-dropin-container"></div>
      <ul class="authenticated-user-menu">
         <li><a href="\${rootLink('/customer/account')}">My Account</a></li>
          <li><button>Logout</button></li>
      </ul>
    </div>
 </div><!-- @block:header-0:end -->
    </div>
  `,
  parameters: {
    docs: {
      description: {
        story: `
**Block ID:** \`header-0\`
**Source:** \`blocks/header/renderAuthDropdown.js\`

The \`<!-- @block:header-0 -->\` comment markers are required for the reverse-apply workflow.
        `,
      },
    },
  },
};

/**
 * Block ID: header-1
 * Source: blocks/header/header.js
 *
 * Edit the HTML below. The <!-- @block:ID --> comment markers MUST stay intact!
 * These markers are used by reverse-apply to sync changes back to source JS files.
 */
export const header_1 = {
  render: () => `
    <div class="block header dropin-design">
      <!-- @block:header-1 -->
     <div class="minicart-wrapper nav-tools-wrapper">
       <button type="button" class="nav-cart-button" aria-label="Cart"></button>
       <div class="minicart-panel nav-tools-panel"></div>
     </div>
   <!-- @block:header-1:end -->
    </div>
  `,
  parameters: {
    docs: {
      description: {
        story: `
**Block ID:** \`header-1\`
**Source:** \`blocks/header/header.js\`

The \`<!-- @block:header-1 -->\` comment markers are required for the reverse-apply workflow.
        `,
      },
    },
  },
};

/**
 * Block ID: header-2
 * Source: blocks/header/header.js
 *
 * Edit the HTML below. The <!-- @block:ID --> comment markers MUST stay intact!
 * These markers are used by reverse-apply to sync changes back to source JS files.
 */
export const header_2 = {
  render: () => `
    <div class="block header dropin-design">
      <!-- @block:header-2 -->
  <div class="search-wrapper nav-tools-wrapper">
    <button type="button" class="nav-search-button">Search</button>
    <div class="nav-search-input nav-search-panel nav-tools-panel">
      <form id="search-bar-form"></form>
      <div class="search-bar-result" style="display: none;"></div>
    </div>
  </div>
  <!-- @block:header-2:end -->
    </div>
  `,
  parameters: {
    docs: {
      description: {
        story: `
**Block ID:** \`header-2\`
**Source:** \`blocks/header/header.js\`

The \`<!-- @block:header-2 -->\` comment markers are required for the reverse-apply workflow.
        `,
      },
    },
  },
};

/**
 * Block ID: header-innerHTML-3
 * Source: blocks/header/header.js
 *
 * Edit the HTML below. The <!-- @block:ID --> comment markers MUST stay intact!
 * These markers are used by reverse-apply to sync changes back to source JS files.
 */
export const header_innerHTML_3 = {
  render: () => `
    <div class="block header dropin-design">
      <!-- @block:header-innerHTML-3 --><button type="button" aria-controls="nav" aria-label="Open navigation">
      <span class="nav-hamburger-icon"></span>
    </button><!-- @block:header-innerHTML-3:end -->
    </div>
  `,
  parameters: {
    docs: {
      description: {
        story: `
**Block ID:** \`header-innerHTML-3\`
**Source:** \`blocks/header/header.js\`

The \`<!-- @block:header-innerHTML-3 -->\` comment markers are required for the reverse-apply workflow.
        `,
      },
    },
  },
};

/**
 * Block ID: header-innerHTML-0
 * Source: blocks/header/renderAuthCombine.js
 *
 * Edit the HTML below. The <!-- @block:ID --> comment markers MUST stay intact!
 * These markers are used by reverse-apply to sync changes back to source JS files.
 */
export const header_innerHTML_0 = {
  render: () => `
    <div class="block header dropin-design">
      <!-- @block:header-innerHTML-0 --><a href="#">\${text}</a><!-- @block:header-innerHTML-0:end -->
    </div>
  `,
  parameters: {
    docs: {
      description: {
        story: `
**Block ID:** \`header-innerHTML-0\`
**Source:** \`blocks/header/renderAuthCombine.js\`

The \`<!-- @block:header-innerHTML-0 -->\` comment markers are required for the reverse-apply workflow.
        `,
      },
    },
  },
};

/**
 * Block ID: header-innerHTML-1
 * Source: blocks/header/renderAuthDropdown.js
 *
 * Edit the HTML below. The <!-- @block:ID --> comment markers MUST stay intact!
 * These markers are used by reverse-apply to sync changes back to source JS files.
 */
export const header_innerHTML_1 = {
  render: () => `
    <div class="block header dropin-design">
      <!-- @block:header-innerHTML-1 -->
      <svg
          width="25"
          height="25"
          viewBox="0 0 24 24"
          aria-label="My Account"
          >
          <g fill="none" stroke="#000000" stroke-width="1.5">
          <circle cx="12" cy="6" r="4"></circle>
          <path d="M20 17.5c0 2.485 0 4.5-8 4.5s-8-2.015-8-4.5S7.582 13 12 13s8 2.015 8 4.5Z"></path></g></svg>
        <!-- @block:header-innerHTML-1:end -->
    </div>
  `,
  parameters: {
    docs: {
      description: {
        story: `
**Block ID:** \`header-innerHTML-1\`
**Source:** \`blocks/header/renderAuthDropdown.js\`

The \`<!-- @block:header-innerHTML-1 -->\` comment markers are required for the reverse-apply workflow.
        `,
      },
    },
  },
};
