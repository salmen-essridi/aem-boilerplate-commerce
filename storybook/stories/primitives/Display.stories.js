// Display Primitives
import {
  Price,
  PriceRange,
  Tag,
  ColorSwatch,
  TextSwatch,
  Icon,
  provider as UI,
} from '@dropins/tools/components.js';

export default {
  title: 'Primitives/Display',
  tags: ['autodocs'],
  parameters: {
    layout: 'padded',
  },
};

export const PriceDisplay = {
  name: 'Price',
  render: () => {
    const container = document.createElement('div');
    container.style.display = 'flex';
    container.style.flexDirection = 'column';
    container.style.gap = '16px';

    // Regular price
    const regular = document.createElement('div');
    regular.innerHTML = `
      <p style="font: var(--type-details-caption-2-font); color: var(--color-neutral-600); margin-bottom: 4px;">Regular Price</p>
      <span class="dropin-price" style="font: var(--type-body-1-strong-font); color: var(--color-neutral-800);">$49.99</span>
    `;

    // Sale price
    const sale = document.createElement('div');
    sale.innerHTML = `
      <p style="font: var(--type-details-caption-2-font); color: var(--color-neutral-600); margin-bottom: 4px;">Sale Price</p>
      <span class="dropin-price--old" style="font: var(--type-body-2-default-font); color: var(--color-neutral-600); text-decoration: line-through; margin-right: 8px;">$79.99</span>
      <span class="dropin-price--special" style="font: var(--type-body-1-strong-font); color: var(--color-alert-500);">$59.99</span>
    `;

    // Large price
    const large = document.createElement('div');
    large.innerHTML = `
      <p style="font: var(--type-details-caption-2-font); color: var(--color-neutral-600); margin-bottom: 4px;">Large Price (PDP)</p>
      <span class="dropin-price" style="font: var(--type-headline-1-font); color: var(--color-neutral-800);">$149.00</span>
    `;

    container.appendChild(regular);
    container.appendChild(sale);
    container.appendChild(large);

    return container;
  },
};

export const PriceRangeDisplay = {
  name: 'Price Range',
  render: () => {
    const container = document.createElement('div');
    container.innerHTML = `
      <span class="dropin-price-range" style="font: var(--type-body-1-strong-font); color: var(--color-neutral-800);">
        <span class="dropin-price-range__from">$29.99</span>
        <span class="dropin-price-range__separator" style="color: var(--color-neutral-600);"> - </span>
        <span class="dropin-price-range__to">$89.99</span>
      </span>
    `;
    return container;
  },
};

export const TagDisplay = {
  name: 'Tags',
  render: () => {
    const container = document.createElement('div');
    container.style.display = 'flex';
    container.style.gap = '8px';
    container.style.flexWrap = 'wrap';

    const tags = [
      { label: 'New', type: 'new', bg: 'var(--color-positive-200)', color: 'var(--color-positive-800)' },
      { label: 'Sale', type: 'sale', bg: 'var(--color-alert-200)', color: 'var(--color-alert-800)' },
      { label: 'Limited', type: 'limited', bg: 'var(--color-warning-200)', color: 'var(--color-warning-800)' },
      { label: 'Best Seller', type: 'default', bg: 'var(--color-neutral-200)', color: 'var(--color-neutral-800)' },
      { label: '-30%', type: 'discount', bg: 'var(--color-alert-500)', color: 'var(--color-neutral-50)' },
    ];

    tags.forEach(({ label, bg, color }) => {
      const tag = document.createElement('span');
      tag.className = 'dropin-tag';
      tag.style.display = 'inline-block';
      tag.style.padding = '4px 8px';
      tag.style.fontSize = '12px';
      tag.style.fontWeight = '600';
      tag.style.textTransform = 'uppercase';
      tag.style.borderRadius = 'var(--shape-border-radius-1)';
      tag.style.background = bg;
      tag.style.color = color;
      tag.textContent = label;
      container.appendChild(tag);
    });

    return container;
  },
};

export const ColorSwatchDisplay = {
  name: 'Color Swatches',
  render: () => {
    const container = document.createElement('div');
    container.style.display = 'flex';
    container.style.gap = '8px';
    container.style.alignItems = 'center';

    const colors = [
      { name: 'Black', color: '#000000', selected: true },
      { name: 'Navy', color: '#1a237e' },
      { name: 'Red', color: '#c62828' },
      { name: 'Forest', color: '#2e7d32' },
      { name: 'Gray', color: '#9e9e9e', disabled: true },
    ];

    colors.forEach(({ name, color, selected, disabled }) => {
      const swatch = document.createElement('button');
      swatch.className = `dropin-color-swatch${selected ? ' dropin-color-swatch--selected' : ''}${disabled ? ' dropin-color-swatch--disabled' : ''}`;
      swatch.title = name;
      swatch.style.width = '36px';
      swatch.style.height = '36px';
      swatch.style.borderRadius = '50%';
      swatch.style.border = selected ? '2px solid var(--color-brand-500)' : '2px solid transparent';
      swatch.style.padding = '2px';
      swatch.style.cursor = disabled ? 'not-allowed' : 'pointer';
      swatch.style.opacity = disabled ? '0.4' : '1';
      swatch.style.background = 'transparent';

      if (selected) {
        swatch.style.boxShadow = '0 0 0 2px var(--color-neutral-50), 0 0 0 4px var(--color-brand-500)';
      }

      swatch.innerHTML = `<span style="display: block; width: 100%; height: 100%; border-radius: 50%; background: ${color};"></span>`;

      container.appendChild(swatch);
    });

    return container;
  },
};

export const TextSwatchDisplay = {
  name: 'Text Swatches (Sizes)',
  render: () => {
    const container = document.createElement('div');
    container.style.display = 'flex';
    container.style.gap = '8px';

    const sizes = [
      { label: 'XS', disabled: true },
      { label: 'S' },
      { label: 'M', selected: true },
      { label: 'L' },
      { label: 'XL' },
    ];

    sizes.forEach(({ label, selected, disabled }) => {
      const swatch = document.createElement('button');
      swatch.className = `dropin-text-swatch${selected ? ' dropin-text-swatch--selected' : ''}${disabled ? ' dropin-text-swatch--disabled' : ''}`;
      swatch.style.minWidth = '48px';
      swatch.style.padding = '8px 16px';
      swatch.style.font = 'var(--type-body-2-default-font)';
      swatch.style.borderRadius = 'var(--shape-border-radius-1)';
      swatch.style.cursor = disabled ? 'not-allowed' : 'pointer';

      if (selected) {
        swatch.style.background = 'var(--color-brand-500)';
        swatch.style.color = 'var(--color-neutral-50)';
        swatch.style.border = '1px solid var(--color-brand-500)';
      } else if (disabled) {
        swatch.style.background = 'transparent';
        swatch.style.border = '1px solid var(--color-neutral-400)';
        swatch.style.opacity = '0.4';
        swatch.style.textDecoration = 'line-through';
      } else {
        swatch.style.background = 'transparent';
        swatch.style.border = '1px solid var(--color-neutral-400)';
      }

      swatch.textContent = label;
      container.appendChild(swatch);
    });

    return container;
  },
};

export const IconDisplay = {
  name: 'Icons',
  render: () => {
    const container = document.createElement('div');
    container.style.display = 'flex';
    container.style.gap = '24px';
    container.style.alignItems = 'center';
    container.style.flexWrap = 'wrap';

    const icons = [
      { name: 'Cart', svg: '<circle cx="9" cy="21" r="1"></circle><circle cx="20" cy="21" r="1"></circle><path d="M1 1h4l2.68 13.39a2 2 0 0 0 2 1.61h9.72a2 2 0 0 0 2-1.61L23 6H6"></path>' },
      { name: 'Heart', svg: '<path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z"></path>' },
      { name: 'User', svg: '<path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2"></path><circle cx="12" cy="7" r="4"></circle>' },
      { name: 'Search', svg: '<circle cx="11" cy="11" r="8"></circle><line x1="21" y1="21" x2="16.65" y2="16.65"></line>' },
      { name: 'Menu', svg: '<line x1="3" y1="12" x2="21" y2="12"></line><line x1="3" y1="6" x2="21" y2="6"></line><line x1="3" y1="18" x2="21" y2="18"></line>' },
      { name: 'Close', svg: '<line x1="18" y1="6" x2="6" y2="18"></line><line x1="6" y1="6" x2="18" y2="18"></line>' },
      { name: 'Check', svg: '<polyline points="20 6 9 17 4 12"></polyline>' },
      { name: 'Arrow', svg: '<line x1="5" y1="12" x2="19" y2="12"></line><polyline points="12 5 19 12 12 19"></polyline>' },
    ];

    icons.forEach(({ name, svg }) => {
      const wrapper = document.createElement('div');
      wrapper.style.display = 'flex';
      wrapper.style.flexDirection = 'column';
      wrapper.style.alignItems = 'center';
      wrapper.style.gap = '8px';

      wrapper.innerHTML = `
        <div class="dropin-icon" style="width: 24px; height: 24px;">
          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
            ${svg}
          </svg>
        </div>
        <span style="font: var(--type-details-caption-2-font); color: var(--color-neutral-600);">${name}</span>
      `;

      container.appendChild(wrapper);
    });

    return container;
  },
};

export const IconSizes = {
  name: 'Icon Sizes',
  render: () => {
    const container = document.createElement('div');
    container.style.display = 'flex';
    container.style.gap = '32px';
    container.style.alignItems = 'flex-end';

    const sizes = [
      { name: 'Small', size: '16px' },
      { name: 'Medium', size: '24px' },
      { name: 'Large', size: '32px' },
      { name: 'XLarge', size: '48px' },
    ];

    sizes.forEach(({ name, size }) => {
      const wrapper = document.createElement('div');
      wrapper.style.display = 'flex';
      wrapper.style.flexDirection = 'column';
      wrapper.style.alignItems = 'center';
      wrapper.style.gap = '8px';

      wrapper.innerHTML = `
        <div class="dropin-icon" style="width: ${size}; height: ${size};">
          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
            <path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z"></path>
          </svg>
        </div>
        <span style="font: var(--type-details-caption-2-font); color: var(--color-neutral-600);">${name}</span>
      `;

      container.appendChild(wrapper);
    });

    return container;
  },
};
