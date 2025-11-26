// Navigation Primitives
import {
  Breadcrumbs,
  Pagination,
  provider as UI,
} from '@dropins/tools/components.js';

export default {
  title: 'Primitives/Navigation',
  tags: ['autodocs'],
  parameters: {
    layout: 'padded',
  },
};

export const BreadcrumbsNav = {
  name: 'Breadcrumbs',
  render: () => {
    const container = document.createElement('nav');
    container.className = 'dropin-breadcrumbs';
    container.setAttribute('aria-label', 'Breadcrumb');

    container.innerHTML = `
      <ol class="dropin-breadcrumbs__list" style="display: flex; align-items: center; gap: 8px; list-style: none; margin: 0; padding: 0;">
        <li class="dropin-breadcrumbs__item">
          <a href="#" class="dropin-breadcrumbs__link" style="color: var(--color-brand-500); text-decoration: none; font: var(--type-body-2-default-font);">Home</a>
        </li>
        <li class="dropin-breadcrumbs__separator" style="color: var(--color-neutral-600);">/</li>
        <li class="dropin-breadcrumbs__item">
          <a href="#" class="dropin-breadcrumbs__link" style="color: var(--color-brand-500); text-decoration: none; font: var(--type-body-2-default-font);">Women</a>
        </li>
        <li class="dropin-breadcrumbs__separator" style="color: var(--color-neutral-600);">/</li>
        <li class="dropin-breadcrumbs__item">
          <a href="#" class="dropin-breadcrumbs__link" style="color: var(--color-brand-500); text-decoration: none; font: var(--type-body-2-default-font);">Tops</a>
        </li>
        <li class="dropin-breadcrumbs__separator" style="color: var(--color-neutral-600);">/</li>
        <li class="dropin-breadcrumbs__item">
          <span class="dropin-breadcrumbs__current" style="color: var(--color-neutral-800); font: var(--type-body-2-strong-font);">T-Shirts</span>
        </li>
      </ol>
    `;

    return container;
  },
};

export const BreadcrumbsWithIcons = {
  name: 'Breadcrumbs with Icons',
  render: () => {
    const container = document.createElement('nav');
    container.className = 'dropin-breadcrumbs';
    container.setAttribute('aria-label', 'Breadcrumb');

    const chevron = `<svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><polyline points="9 18 15 12 9 6"></polyline></svg>`;

    container.innerHTML = `
      <ol class="dropin-breadcrumbs__list" style="display: flex; align-items: center; gap: 4px; list-style: none; margin: 0; padding: 0;">
        <li class="dropin-breadcrumbs__item">
          <a href="#" class="dropin-breadcrumbs__link" style="color: var(--color-brand-500); text-decoration: none; font: var(--type-body-2-default-font);">Home</a>
        </li>
        <li class="dropin-breadcrumbs__separator" style="color: var(--color-neutral-500); display: flex;">${chevron}</li>
        <li class="dropin-breadcrumbs__item">
          <a href="#" class="dropin-breadcrumbs__link" style="color: var(--color-brand-500); text-decoration: none; font: var(--type-body-2-default-font);">Category</a>
        </li>
        <li class="dropin-breadcrumbs__separator" style="color: var(--color-neutral-500); display: flex;">${chevron}</li>
        <li class="dropin-breadcrumbs__item">
          <span class="dropin-breadcrumbs__current" style="color: var(--color-neutral-800); font: var(--type-body-2-strong-font);">Product Name</span>
        </li>
      </ol>
    `;

    return container;
  },
};

export const PaginationNav = {
  name: 'Pagination',
  render: () => {
    const container = document.createElement('nav');
    container.className = 'dropin-pagination';
    container.style.display = 'flex';
    container.style.alignItems = 'center';
    container.style.justifyContent = 'center';
    container.style.gap = '4px';
    container.setAttribute('aria-label', 'Pagination');

    const buttonStyle = `
      display: flex;
      align-items: center;
      justify-content: center;
      min-width: 40px;
      height: 40px;
      padding: 8px;
      border: 1px solid var(--color-neutral-400);
      border-radius: var(--shape-border-radius-1);
      background: var(--color-neutral-50);
      color: var(--color-neutral-800);
      font: var(--type-body-2-default-font);
      cursor: pointer;
    `;

    const activeStyle = `
      ${buttonStyle}
      background: var(--color-brand-500);
      border-color: var(--color-brand-500);
      color: var(--color-neutral-50);
    `;

    const disabledStyle = `
      ${buttonStyle}
      opacity: 0.4;
      cursor: not-allowed;
    `;

    container.innerHTML = `
      <button class="dropin-pagination__button dropin-pagination__prev dropin-pagination__button--disabled" style="${disabledStyle}" disabled>
        <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><polyline points="15 18 9 12 15 6"></polyline></svg>
      </button>
      <button class="dropin-pagination__button dropin-pagination__button--active" style="${activeStyle}">1</button>
      <button class="dropin-pagination__button" style="${buttonStyle}">2</button>
      <button class="dropin-pagination__button" style="${buttonStyle}">3</button>
      <span class="dropin-pagination__ellipsis" style="padding: 0 8px; color: var(--color-neutral-600);">...</span>
      <button class="dropin-pagination__button" style="${buttonStyle}">10</button>
      <button class="dropin-pagination__button dropin-pagination__next" style="${buttonStyle}">
        <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><polyline points="9 18 15 12 9 6"></polyline></svg>
      </button>
    `;

    return container;
  },
};

export const PaginationCompact = {
  name: 'Pagination Compact',
  render: () => {
    const container = document.createElement('nav');
    container.className = 'dropin-pagination dropin-pagination--compact';
    container.style.display = 'flex';
    container.style.alignItems = 'center';
    container.style.justifyContent = 'center';
    container.style.gap = '16px';
    container.setAttribute('aria-label', 'Pagination');

    container.innerHTML = `
      <button style="display: flex; align-items: center; gap: 4px; background: none; border: none; color: var(--color-brand-500); font: var(--type-body-2-default-font); cursor: pointer;">
        <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><polyline points="15 18 9 12 15 6"></polyline></svg>
        Previous
      </button>
      <span style="font: var(--type-body-2-default-font); color: var(--color-neutral-800);">Page 3 of 10</span>
      <button style="display: flex; align-items: center; gap: 4px; background: none; border: none; color: var(--color-brand-500); font: var(--type-body-2-default-font); cursor: pointer;">
        Next
        <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><polyline points="9 18 15 12 9 6"></polyline></svg>
      </button>
    `;

    return container;
  },
};

export const PaginationWithSelect = {
  name: 'Pagination with Page Select',
  render: () => {
    const container = document.createElement('div');
    container.style.display = 'flex';
    container.style.alignItems = 'center';
    container.style.justifyContent = 'space-between';
    container.style.gap = '24px';
    container.style.padding = '16px';
    container.style.borderTop = '1px solid var(--color-neutral-300)';

    container.innerHTML = `
      <span style="font: var(--type-body-2-default-font); color: var(--color-neutral-600);">Showing 1-24 of 156 products</span>
      <div style="display: flex; align-items: center; gap: 8px;">
        <span style="font: var(--type-body-2-default-font); color: var(--color-neutral-800);">Page</span>
        <select style="padding: 8px 12px; border: 1px solid var(--color-neutral-400); border-radius: var(--shape-border-radius-1); font: var(--type-body-2-default-font); background: var(--color-neutral-50);">
          <option>1</option>
          <option>2</option>
          <option>3</option>
          <option>4</option>
          <option>5</option>
        </select>
        <span style="font: var(--type-body-2-default-font); color: var(--color-neutral-800);">of 7</span>
      </div>
    `;

    return container;
  },
};
