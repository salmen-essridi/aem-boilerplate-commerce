// Button Primitives
import {
  Button,
  ActionButton,
  ActionButtonGroup,
  provider as UI,
} from '@dropins/tools/components.js';

export default {
  title: 'Primitives/Buttons',
  tags: ['autodocs'],
  parameters: {
    layout: 'padded',
    docs: {
      description: {
        component: `
## Buttons

Button components for user interactions.

### CSS Classes
\`\`\`css
.dropin-button { }
.dropin-button--primary { }
.dropin-button--secondary { }
.dropin-button--tertiary { }
.dropin-button--disabled { }
\`\`\`

### Design Tokens
| Token | Default | Purpose |
|-------|---------|---------|
| \`--color-brand-500\` | #454545 | Primary background |
| \`--color-brand-600\` | #383838 | Hover state |
| \`--color-brand-700\` | #2b2b2b | Active state |
| \`--color-neutral-50\` | #fff | Text color |
| \`--shape-border-radius-3\` | 24px | Border radius |
        `,
      },
    },
  },
};

export const Primary = {
  name: 'Primary Button',
  render: () => {
    const container = document.createElement('div');
    UI.render(Button, {
      children: 'Primary Button',
      variant: 'primary',
    })(container);
    return container;
  },
  parameters: {
    docs: {
      description: {
        story: `
**CSS Override Example:**
\`\`\`css
.dropin-button--primary {
  background: linear-gradient(135deg, var(--color-brand-500), var(--color-brand-700));
  text-transform: uppercase;
  letter-spacing: 0.1em;
}
\`\`\`
        `,
      },
    },
  },
};

export const Secondary = {
  name: 'Secondary Button',
  render: () => {
    const container = document.createElement('div');
    UI.render(Button, {
      children: 'Secondary Button',
      variant: 'secondary',
    })(container);
    return container;
  },
  parameters: {
    docs: {
      description: {
        story: `
**CSS Override Example:**
\`\`\`css
.dropin-button--secondary {
  border: 2px solid var(--color-brand-500);
  color: var(--color-brand-500);
}
.dropin-button--secondary:hover {
  background: var(--color-brand-500);
  color: var(--color-neutral-50);
}
\`\`\`
        `,
      },
    },
  },
};

export const Tertiary = {
  name: 'Tertiary Button',
  render: () => {
    const container = document.createElement('div');
    UI.render(Button, {
      children: 'Tertiary Button',
      variant: 'tertiary',
    })(container);
    return container;
  },
  parameters: {
    docs: {
      description: {
        story: `
**CSS Override Example:**
\`\`\`css
.dropin-button--tertiary {
  color: var(--color-brand-500);
  text-decoration: underline;
}
\`\`\`
        `,
      },
    },
  },
};

export const Disabled = {
  name: 'Disabled Button',
  render: () => {
    const container = document.createElement('div');
    container.style.display = 'flex';
    container.style.gap = '16px';

    const primary = document.createElement('div');
    UI.render(Button, {
      children: 'Disabled Primary',
      variant: 'primary',
      disabled: true,
    })(primary);

    const secondary = document.createElement('div');
    UI.render(Button, {
      children: 'Disabled Secondary',
      variant: 'secondary',
      disabled: true,
    })(secondary);

    container.appendChild(primary);
    container.appendChild(secondary);
    return container;
  },
  parameters: {
    docs: {
      description: {
        story: `
**CSS Override Example:**
\`\`\`css
.dropin-button--disabled,
.dropin-button:disabled {
  background: var(--color-neutral-300);
  color: var(--color-neutral-600);
  cursor: not-allowed;
}
\`\`\`
        `,
      },
    },
  },
};

export const AllVariants = {
  name: 'All Variants',
  render: () => {
    const container = document.createElement('div');
    container.style.display = 'flex';
    container.style.gap = '16px';
    container.style.alignItems = 'center';

    const variants = ['primary', 'secondary', 'tertiary'];
    variants.forEach(variant => {
      const btn = document.createElement('div');
      UI.render(Button, {
        children: variant.charAt(0).toUpperCase() + variant.slice(1),
        variant,
      })(btn);
      container.appendChild(btn);
    });

    return container;
  },
};

export const ActionButtons = {
  name: 'Action Buttons',
  render: () => {
    const container = document.createElement('div');
    container.style.display = 'flex';
    container.style.gap = '16px';
    container.style.alignItems = 'center';

    // Heart icon
    const heartBtn = document.createElement('div');
    UI.render(ActionButton, {
      children: `<svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
        <path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z"></path>
      </svg>`,
    })(heartBtn);

    // Delete icon
    const deleteBtn = document.createElement('div');
    UI.render(ActionButton, {
      children: `<svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
        <polyline points="3 6 5 6 21 6"></polyline>
        <path d="M19 6v14a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2V6m3 0V4a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v2"></path>
      </svg>`,
    })(deleteBtn);

    // Edit icon
    const editBtn = document.createElement('div');
    UI.render(ActionButton, {
      children: `<svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
        <path d="M11 4H4a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2v-7"></path>
        <path d="M18.5 2.5a2.121 2.121 0 0 1 3 3L12 15l-4 1 1-4 9.5-9.5z"></path>
      </svg>`,
    })(editBtn);

    container.appendChild(heartBtn);
    container.appendChild(deleteBtn);
    container.appendChild(editBtn);

    return container;
  },
  parameters: {
    docs: {
      description: {
        story: `
Icon buttons for quick actions.

**CSS Classes:**
\`\`\`css
.dropin-action-button { }
.dropin-action-button--active { }
.dropin-action-button-group { }
\`\`\`

**CSS Override Example:**
\`\`\`css
.dropin-action-button {
  width: 40px;
  height: 40px;
  border-radius: 50%;
  background: var(--color-neutral-100);
}
.dropin-action-button:hover {
  background: var(--color-neutral-200);
  transform: scale(1.1);
}
\`\`\`
        `,
      },
    },
  },
};
