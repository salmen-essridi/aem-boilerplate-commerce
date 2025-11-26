// Form Control Primitives
import {
  Checkbox,
  RadioButton,
  Picker,
  Incrementer,
  ToggleButton,
  Field,
  Input,
  provider as UI,
} from '@dropins/tools/components.js';

export default {
  title: 'Primitives/Form Controls',
  tags: ['autodocs'],
  parameters: {
    layout: 'padded',
  },
};

export const CheckboxControl = {
  name: 'Checkbox',
  render: () => {
    const container = document.createElement('div');
    container.style.display = 'flex';
    container.style.flexDirection = 'column';
    container.style.gap = '12px';

    // Unchecked
    const unchecked = document.createElement('label');
    unchecked.style.display = 'flex';
    unchecked.style.alignItems = 'center';
    unchecked.style.gap = '8px';
    unchecked.style.cursor = 'pointer';
    unchecked.innerHTML = `
      <input type="checkbox" class="dropin-checkbox__input" />
      <span>Unchecked option</span>
    `;

    // Checked
    const checked = document.createElement('label');
    checked.style.display = 'flex';
    checked.style.alignItems = 'center';
    checked.style.gap = '8px';
    checked.style.cursor = 'pointer';
    checked.innerHTML = `
      <input type="checkbox" class="dropin-checkbox__input" checked />
      <span>Checked option</span>
    `;

    // Disabled
    const disabled = document.createElement('label');
    disabled.style.display = 'flex';
    disabled.style.alignItems = 'center';
    disabled.style.gap = '8px';
    disabled.style.opacity = '0.5';
    disabled.innerHTML = `
      <input type="checkbox" class="dropin-checkbox__input" disabled />
      <span>Disabled option</span>
    `;

    container.appendChild(unchecked);
    container.appendChild(checked);
    container.appendChild(disabled);

    return container;
  },
};

export const RadioButtonControl = {
  name: 'Radio Button',
  render: () => {
    const container = document.createElement('div');
    container.style.display = 'flex';
    container.style.flexDirection = 'column';
    container.style.gap = '12px';

    const options = ['Option A', 'Option B', 'Option C'];
    options.forEach((option, index) => {
      const label = document.createElement('label');
      label.style.display = 'flex';
      label.style.alignItems = 'center';
      label.style.gap = '8px';
      label.style.cursor = 'pointer';
      label.innerHTML = `
        <input type="radio" name="radio-group" class="dropin-radio__input" ${index === 0 ? 'checked' : ''} />
        <span>${option}</span>
      `;
      container.appendChild(label);
    });

    return container;
  },
};

export const PickerControl = {
  name: 'Picker (Dropdown)',
  render: () => {
    const container = document.createElement('div');
    container.style.maxWidth = '300px';

    const select = document.createElement('select');
    select.className = 'dropin-picker__button';
    select.style.width = '100%';
    select.style.padding = '12px';
    select.style.border = '1px solid var(--color-neutral-400)';
    select.style.borderRadius = 'var(--shape-border-radius-1)';
    select.style.font = 'var(--type-body-1-default-font)';
    select.style.backgroundColor = 'var(--color-neutral-50)';

    const options = ['Select an option', 'Small', 'Medium', 'Large', 'X-Large'];
    options.forEach((opt, index) => {
      const option = document.createElement('option');
      option.value = index === 0 ? '' : opt.toLowerCase();
      option.textContent = opt;
      if (index === 0) option.disabled = true;
      if (index === 0) option.selected = true;
      select.appendChild(option);
    });

    container.appendChild(select);
    return container;
  },
};

export const IncrementerControl = {
  name: 'Incrementer',
  render: () => {
    const container = document.createElement('div');
    container.className = 'dropin-incrementer';
    container.style.display = 'inline-flex';
    container.style.alignItems = 'center';
    container.style.border = '1px solid var(--color-neutral-400)';
    container.style.borderRadius = 'var(--shape-border-radius-1)';

    container.innerHTML = `
      <button class="dropin-incrementer__button dropin-incrementer__button--decrement" style="width: 40px; height: 40px; border: none; background: transparent; cursor: pointer; font-size: 18px;">-</button>
      <input type="text" class="dropin-incrementer__input" value="1" readonly style="width: 50px; text-align: center; border: none; border-left: 1px solid var(--color-neutral-300); border-right: 1px solid var(--color-neutral-300); font: var(--type-body-1-default-font);" />
      <button class="dropin-incrementer__button dropin-incrementer__button--increment" style="width: 40px; height: 40px; border: none; background: transparent; cursor: pointer; font-size: 18px;">+</button>
    `;

    // Add functionality
    const input = container.querySelector('input');
    const decBtn = container.querySelector('.dropin-incrementer__button--decrement');
    const incBtn = container.querySelector('.dropin-incrementer__button--increment');

    decBtn.addEventListener('click', () => {
      const val = parseInt(input.value);
      if (val > 1) input.value = val - 1;
    });

    incBtn.addEventListener('click', () => {
      input.value = parseInt(input.value) + 1;
    });

    return container;
  },
};

export const ToggleButtonControl = {
  name: 'Toggle Button',
  render: () => {
    const container = document.createElement('div');
    container.style.display = 'flex';
    container.style.flexDirection = 'column';
    container.style.gap = '16px';

    // Off state
    const offToggle = document.createElement('div');
    offToggle.style.display = 'flex';
    offToggle.style.alignItems = 'center';
    offToggle.style.gap = '12px';
    offToggle.innerHTML = `
      <button class="dropin-toggle-button" style="width: 48px; height: 24px; border-radius: 12px; border: none; background: var(--color-neutral-400); position: relative; cursor: pointer;">
        <span style="position: absolute; left: 2px; top: 2px; width: 20px; height: 20px; background: white; border-radius: 50%; transition: transform 0.2s;"></span>
      </button>
      <span>Off</span>
    `;

    // On state
    const onToggle = document.createElement('div');
    onToggle.style.display = 'flex';
    onToggle.style.alignItems = 'center';
    onToggle.style.gap = '12px';
    onToggle.innerHTML = `
      <button class="dropin-toggle-button dropin-toggle-button--active" style="width: 48px; height: 24px; border-radius: 12px; border: none; background: var(--color-brand-500); position: relative; cursor: pointer;">
        <span style="position: absolute; left: 26px; top: 2px; width: 20px; height: 20px; background: white; border-radius: 50%; transition: transform 0.2s;"></span>
      </button>
      <span>On</span>
    `;

    container.appendChild(offToggle);
    container.appendChild(onToggle);

    return container;
  },
};

export const FieldControl = {
  name: 'Field (Form Group)',
  render: () => {
    const container = document.createElement('div');
    container.style.maxWidth = '300px';
    container.style.display = 'flex';
    container.style.flexDirection = 'column';
    container.style.gap = '24px';

    // Field with label
    const field1 = document.createElement('div');
    field1.className = 'dropin-field';
    field1.innerHTML = `
      <label class="dropin-field__label" style="font: var(--type-body-2-strong-font); margin-bottom: 4px; display: block;">
        Email Address <span class="dropin-field__required" style="color: var(--color-alert-500);">*</span>
      </label>
      <input type="email" placeholder="Enter email" style="width: 100%; padding: 12px; border: 1px solid var(--color-neutral-400); border-radius: var(--shape-border-radius-1); font: var(--type-body-1-default-font); box-sizing: border-box;" />
    `;

    // Field with error
    const field2 = document.createElement('div');
    field2.className = 'dropin-field dropin-field--error';
    field2.innerHTML = `
      <label class="dropin-field__label" style="font: var(--type-body-2-strong-font); margin-bottom: 4px; display: block;">
        Password <span class="dropin-field__required" style="color: var(--color-alert-500);">*</span>
      </label>
      <input type="password" value="abc" style="width: 100%; padding: 12px; border: 1px solid var(--color-alert-500); border-radius: var(--shape-border-radius-1); font: var(--type-body-1-default-font); box-sizing: border-box;" />
      <span class="dropin-field__error" style="color: var(--color-alert-800); font: var(--type-details-caption-2-font); margin-top: 4px; display: block;">Password must be at least 8 characters</span>
    `;

    // Field with hint
    const field3 = document.createElement('div');
    field3.className = 'dropin-field';
    field3.innerHTML = `
      <label class="dropin-field__label" style="font: var(--type-body-2-strong-font); margin-bottom: 4px; display: block;">
        Phone Number
      </label>
      <input type="tel" placeholder="(555) 123-4567" style="width: 100%; padding: 12px; border: 1px solid var(--color-neutral-400); border-radius: var(--shape-border-radius-1); font: var(--type-body-1-default-font); box-sizing: border-box;" />
      <span class="dropin-field__hint" style="color: var(--color-neutral-600); font: var(--type-details-caption-2-font); margin-top: 4px; display: block;">Optional - for order updates</span>
    `;

    container.appendChild(field1);
    container.appendChild(field2);
    container.appendChild(field3);

    return container;
  },
};
