// Input Primitives
import {
  Input,
  TextArea,
  InputPassword,
  InputDate,
  provider as UI,
} from '@dropins/tools/components.js';

export default {
  title: 'Primitives/Inputs',
  tags: ['autodocs'],
  parameters: {
    layout: 'padded',
  },
};

export const Standard = {
  name: 'Standard Input',
  render: () => {
    const container = document.createElement('div');
    container.style.maxWidth = '300px';
    UI.render(Input, {
      placeholder: 'Enter your email',
      name: 'email',
    })(container);
    return container;
  },
};

export const FloatingLabel = {
  name: 'Input with Floating Label',
  render: () => {
    const container = document.createElement('div');
    container.style.maxWidth = '300px';
    UI.render(Input, {
      placeholder: 'Email address',
      name: 'email-floating',
      floatingLabel: 'Email',
    })(container);
    return container;
  },
};

export const WithError = {
  name: 'Input with Error',
  render: () => {
    const container = document.createElement('div');
    container.style.maxWidth = '300px';
    UI.render(Input, {
      placeholder: 'Email',
      name: 'email-error',
      error: true,
      value: 'invalid-email',
    })(container);
    return container;
  },
};

export const Disabled = {
  name: 'Disabled Input',
  render: () => {
    const container = document.createElement('div');
    container.style.maxWidth = '300px';
    UI.render(Input, {
      placeholder: 'Disabled input',
      name: 'disabled',
      disabled: true,
      value: 'Cannot edit',
    })(container);
    return container;
  },
};

export const TextAreaInput = {
  name: 'TextArea',
  render: () => {
    const container = document.createElement('div');
    container.style.maxWidth = '400px';
    const textarea = document.createElement('textarea');
    textarea.className = 'dropin-text-area__field';
    textarea.placeholder = 'Enter your message...';
    textarea.rows = 4;
    textarea.style.width = '100%';
    textarea.style.padding = '12px';
    textarea.style.border = '1px solid var(--color-neutral-400)';
    textarea.style.borderRadius = 'var(--shape-border-radius-1)';
    textarea.style.font = 'var(--type-body-1-default-font)';
    textarea.style.resize = 'vertical';
    container.appendChild(textarea);
    return container;
  },
};

export const Password = {
  name: 'Password Input',
  render: () => {
    const container = document.createElement('div');
    container.style.maxWidth = '300px';
    UI.render(InputPassword, {
      placeholder: 'Enter password',
      name: 'password',
    })(container);
    return container;
  },
};

export const DateInput = {
  name: 'Date Input',
  render: () => {
    const container = document.createElement('div');
    container.style.maxWidth = '300px';
    UI.render(InputDate, {
      placeholder: 'Select date',
      name: 'date',
    })(container);
    return container;
  },
};

export const AllInputTypes = {
  name: 'All Input Types',
  render: () => {
    const container = document.createElement('div');
    container.style.display = 'flex';
    container.style.flexDirection = 'column';
    container.style.gap = '24px';
    container.style.maxWidth = '300px';

    // Standard
    const standard = document.createElement('div');
    UI.render(Input, {
      placeholder: 'Standard input',
      name: 'standard',
    })(standard);

    // With floating label
    const floating = document.createElement('div');
    UI.render(Input, {
      placeholder: 'With label',
      name: 'floating',
      floatingLabel: 'Email Address',
    })(floating);

    // Error state
    const error = document.createElement('div');
    UI.render(Input, {
      placeholder: 'Error state',
      name: 'error',
      error: true,
      value: 'Invalid value',
    })(error);

    // Password
    const password = document.createElement('div');
    UI.render(InputPassword, {
      placeholder: 'Password',
      name: 'pass',
    })(password);

    container.appendChild(standard);
    container.appendChild(floating);
    container.appendChild(error);
    container.appendChild(password);

    return container;
  },
};
