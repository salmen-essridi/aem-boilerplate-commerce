// Layout Primitives
import {
  Card,
  Accordion,
  AccordionSection,
  Divider,
  Image,
  Modal,
  provider as UI,
} from '@dropins/tools/components.js';

export default {
  title: 'Primitives/Layout',
  tags: ['autodocs'],
  parameters: {
    layout: 'padded',
  },
};

export const CardLayout = {
  name: 'Card',
  render: () => {
    const container = document.createElement('div');
    container.style.maxWidth = '400px';

    container.innerHTML = `
      <div class="dropin-card dropin-card--elevated" style="background: var(--color-neutral-50); border-radius: var(--shape-border-radius-2); box-shadow: var(--shape-shadow-2); overflow: hidden;">
        <div class="dropin-card__header" style="padding: 16px 24px; border-bottom: 1px solid var(--color-neutral-300);">
          <h3 style="margin: 0; font: var(--type-headline-2-strong-font);">Card Title</h3>
        </div>
        <div class="dropin-card__body" style="padding: 24px;">
          <p style="margin: 0; font: var(--type-body-1-default-font); color: var(--color-neutral-700);">This is the card body content. You can put any content here including text, images, or other components.</p>
        </div>
        <div class="dropin-card__footer" style="padding: 16px 24px; border-top: 1px solid var(--color-neutral-300); background: var(--color-neutral-100);">
          <button style="padding: 8px 16px; background: var(--color-brand-500); color: var(--color-neutral-50); border: none; border-radius: var(--shape-border-radius-3); cursor: pointer;">Action</button>
        </div>
      </div>
    `;

    return container;
  },
};

export const CardVariants = {
  name: 'Card Variants',
  render: () => {
    const container = document.createElement('div');
    container.style.display = 'grid';
    container.style.gridTemplateColumns = 'repeat(auto-fit, minmax(280px, 1fr))';
    container.style.gap = '24px';

    // Elevated Card
    const elevated = document.createElement('div');
    elevated.innerHTML = `
      <div class="dropin-card dropin-card--elevated" style="background: var(--color-neutral-50); border-radius: var(--shape-border-radius-2); box-shadow: var(--shape-shadow-2); padding: 24px;">
        <h4 style="margin: 0 0 8px; font: var(--type-headline-2-strong-font);">Elevated Card</h4>
        <p style="margin: 0; font: var(--type-body-2-default-font); color: var(--color-neutral-700);">Uses box-shadow for depth</p>
      </div>
    `;

    // Bordered Card
    const bordered = document.createElement('div');
    bordered.innerHTML = `
      <div class="dropin-card dropin-card--bordered" style="background: var(--color-neutral-50); border-radius: var(--shape-border-radius-2); border: 1px solid var(--color-neutral-300); padding: 24px;">
        <h4 style="margin: 0 0 8px; font: var(--type-headline-2-strong-font);">Bordered Card</h4>
        <p style="margin: 0; font: var(--type-body-2-default-font); color: var(--color-neutral-700);">Uses border for definition</p>
      </div>
    `;

    // Flat Card
    const flat = document.createElement('div');
    flat.innerHTML = `
      <div class="dropin-card" style="background: var(--color-neutral-100); border-radius: var(--shape-border-radius-2); padding: 24px;">
        <h4 style="margin: 0 0 8px; font: var(--type-headline-2-strong-font);">Flat Card</h4>
        <p style="margin: 0; font: var(--type-body-2-default-font); color: var(--color-neutral-700);">Uses background color</p>
      </div>
    `;

    container.appendChild(elevated);
    container.appendChild(bordered);
    container.appendChild(flat);

    return container;
  },
};

export const AccordionLayout = {
  name: 'Accordion',
  render: () => {
    const container = document.createElement('div');
    container.style.maxWidth = '500px';
    container.className = 'dropin-accordion';
    container.style.border = '1px solid var(--color-neutral-300)';
    container.style.borderRadius = 'var(--shape-border-radius-1)';
    container.style.overflow = 'hidden';

    const sections = [
      { title: 'Shipping Information', content: 'Free standard shipping on all orders over $50. Express shipping available for an additional fee. International shipping available to select countries.', open: true },
      { title: 'Return Policy', content: 'We accept returns within 30 days of purchase. Items must be unworn with original tags attached. Free return shipping for store credit.' },
      { title: 'Size Guide', content: 'Our sizes run true to standard US sizing. Please refer to the size chart for detailed measurements. Contact us if you need sizing assistance.' },
    ];

    sections.forEach(({ title, content, open }) => {
      const section = document.createElement('div');
      section.className = `dropin-accordion-section${open ? ' dropin-accordion-section--open' : ''}`;
      section.style.borderBottom = '1px solid var(--color-neutral-300)';

      section.innerHTML = `
        <button class="dropin-accordion-section__header" style="width: 100%; display: flex; align-items: center; justify-content: space-between; padding: 16px 24px; background: var(--color-neutral-50); border: none; cursor: pointer; text-align: left;">
          <span class="dropin-accordion-section__title" style="font: var(--type-body-1-strong-font); color: var(--color-neutral-800);">${title}</span>
          <svg class="dropin-accordion-section__icon" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" style="transition: transform 0.2s; ${open ? 'transform: rotate(180deg);' : ''}">
            <polyline points="6 9 12 15 18 9"></polyline>
          </svg>
        </button>
        <div class="dropin-accordion-section__content" style="padding: ${open ? '0 24px 24px' : '0 24px'}; max-height: ${open ? '200px' : '0'}; overflow: hidden; transition: all 0.3s ease;">
          <p style="margin: 0; font: var(--type-body-2-default-font); color: var(--color-neutral-700);">${content}</p>
        </div>
      `;

      // Toggle functionality
      section.querySelector('.dropin-accordion-section__header').addEventListener('click', () => {
        const isOpen = section.classList.contains('dropin-accordion-section--open');
        section.classList.toggle('dropin-accordion-section--open');
        const contentEl = section.querySelector('.dropin-accordion-section__content');
        const iconEl = section.querySelector('.dropin-accordion-section__icon');
        contentEl.style.maxHeight = isOpen ? '0' : '200px';
        contentEl.style.padding = isOpen ? '0 24px' : '0 24px 24px';
        iconEl.style.transform = isOpen ? '' : 'rotate(180deg)';
      });

      container.appendChild(section);
    });

    // Remove last border
    container.lastChild.style.borderBottom = 'none';

    return container;
  },
};

export const DividerLayout = {
  name: 'Divider',
  render: () => {
    const container = document.createElement('div');
    container.style.display = 'flex';
    container.style.flexDirection = 'column';
    container.style.gap = '32px';
    container.style.maxWidth = '400px';

    // Horizontal Divider
    const horizontal = document.createElement('div');
    horizontal.innerHTML = `
      <p style="font: var(--type-body-2-default-font); color: var(--color-neutral-600); margin-bottom: 8px;">Horizontal Divider</p>
      <p style="margin: 0; font: var(--type-body-1-default-font);">Content above</p>
      <hr class="dropin-divider dropin-divider--horizontal" style="border: none; height: 1px; background: var(--color-neutral-300); margin: 16px 0;" />
      <p style="margin: 0; font: var(--type-body-1-default-font);">Content below</p>
    `;

    // Divider with text
    const withText = document.createElement('div');
    withText.innerHTML = `
      <p style="font: var(--type-body-2-default-font); color: var(--color-neutral-600); margin-bottom: 8px;">Divider with Text</p>
      <div style="display: flex; align-items: center; gap: 16px;">
        <div style="flex: 1; height: 1px; background: var(--color-neutral-300);"></div>
        <span style="font: var(--type-body-2-default-font); color: var(--color-neutral-600);">OR</span>
        <div style="flex: 1; height: 1px; background: var(--color-neutral-300);"></div>
      </div>
    `;

    // Vertical Divider
    const vertical = document.createElement('div');
    vertical.innerHTML = `
      <p style="font: var(--type-body-2-default-font); color: var(--color-neutral-600); margin-bottom: 8px;">Vertical Divider</p>
      <div style="display: flex; align-items: center; gap: 16px; height: 40px;">
        <span style="font: var(--type-body-1-default-font);">Left</span>
        <div class="dropin-divider dropin-divider--vertical" style="width: 1px; height: 100%; background: var(--color-neutral-300);"></div>
        <span style="font: var(--type-body-1-default-font);">Right</span>
      </div>
    `;

    container.appendChild(horizontal);
    container.appendChild(withText);
    container.appendChild(vertical);

    return container;
  },
};

export const ImageLayout = {
  name: 'Image',
  render: () => {
    const container = document.createElement('div');
    container.style.display = 'grid';
    container.style.gridTemplateColumns = 'repeat(auto-fit, minmax(200px, 1fr))';
    container.style.gap = '24px';

    // Regular image
    const regular = document.createElement('div');
    regular.innerHTML = `
      <p style="font: var(--type-body-2-default-font); color: var(--color-neutral-600); margin-bottom: 8px;">Regular Image</p>
      <div class="dropin-image" style="border-radius: var(--shape-border-radius-2); overflow: hidden;">
        <img src="https://picsum.photos/400/300" alt="Sample" style="width: 100%; height: auto; display: block;" />
      </div>
    `;

    // Aspect ratio image
    const aspectRatio = document.createElement('div');
    aspectRatio.innerHTML = `
      <p style="font: var(--type-body-2-default-font); color: var(--color-neutral-600); margin-bottom: 8px;">1:1 Aspect Ratio</p>
      <div class="dropin-image" style="border-radius: var(--shape-border-radius-2); overflow: hidden; aspect-ratio: 1; background: var(--color-neutral-200);">
        <img src="https://picsum.photos/400/400" alt="Sample" style="width: 100%; height: 100%; object-fit: cover; display: block;" />
      </div>
    `;

    container.appendChild(regular);
    container.appendChild(aspectRatio);

    return container;
  },
};

export const ModalLayout = {
  name: 'Modal (Preview)',
  render: () => {
    const container = document.createElement('div');
    container.style.position = 'relative';
    container.style.height = '400px';
    container.style.background = 'var(--color-neutral-100)';
    container.style.borderRadius = 'var(--shape-border-radius-2)';
    container.style.overflow = 'hidden';

    container.innerHTML = `
      <!-- Simulated modal overlay -->
      <div class="dropin-modal__overlay" style="position: absolute; inset: 0; background: rgba(0, 0, 0, 0.5); display: flex; align-items: center; justify-content: center;">
        <div class="dropin-modal__container" style="background: var(--color-neutral-50); border-radius: var(--shape-border-radius-2); box-shadow: var(--shape-shadow-1); width: 90%; max-width: 450px;">
          <div class="dropin-modal__header" style="display: flex; align-items: center; justify-content: space-between; padding: 16px 24px; border-bottom: 1px solid var(--color-neutral-300);">
            <h3 class="dropin-modal__title" style="margin: 0; font: var(--type-headline-1-font);">Modal Title</h3>
            <button class="dropin-modal__close" style="background: none; border: none; cursor: pointer; padding: 8px;">
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                <line x1="18" y1="6" x2="6" y2="18"></line>
                <line x1="6" y1="6" x2="18" y2="18"></line>
              </svg>
            </button>
          </div>
          <div class="dropin-modal__body" style="padding: 24px;">
            <p style="margin: 0; font: var(--type-body-1-default-font); color: var(--color-neutral-700);">This is the modal body content. You can put forms, information, or any other content here.</p>
          </div>
          <div class="dropin-modal__footer" style="display: flex; gap: 12px; justify-content: flex-end; padding: 16px 24px; border-top: 1px solid var(--color-neutral-300);">
            <button style="padding: 10px 20px; background: transparent; border: 2px solid var(--color-brand-500); color: var(--color-brand-500); border-radius: var(--shape-border-radius-3); cursor: pointer; font: var(--type-button-2-font);">Cancel</button>
            <button style="padding: 10px 20px; background: var(--color-brand-500); border: none; color: var(--color-neutral-50); border-radius: var(--shape-border-radius-3); cursor: pointer; font: var(--type-button-2-font);">Confirm</button>
          </div>
        </div>
      </div>
    `;

    return container;
  },
};
