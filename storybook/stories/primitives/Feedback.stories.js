// Feedback Primitives
import {
  InLineAlert,
  AlertBanner,
  ProgressSpinner,
  Skeleton,
  SkeletonRow,
  provider as UI,
} from '@dropins/tools/components.js';

export default {
  title: 'Primitives/Feedback',
  tags: ['autodocs'],
  parameters: {
    layout: 'padded',
  },
};

export const AlertInfo = {
  name: 'Alert - Info',
  render: () => {
    const container = document.createElement('div');
    container.style.maxWidth = '500px';
    UI.render(InLineAlert, {
      heading: 'Information',
      description: 'Your order has been placed and is being processed.',
      type: 'info',
    })(container);
    return container;
  },
};

export const AlertSuccess = {
  name: 'Alert - Success',
  render: () => {
    const container = document.createElement('div');
    container.style.maxWidth = '500px';
    UI.render(InLineAlert, {
      heading: 'Success',
      description: 'Your changes have been saved successfully.',
      type: 'success',
    })(container);
    return container;
  },
};

export const AlertWarning = {
  name: 'Alert - Warning',
  render: () => {
    const container = document.createElement('div');
    container.style.maxWidth = '500px';
    UI.render(InLineAlert, {
      heading: 'Warning',
      description: 'Your session will expire in 5 minutes.',
      type: 'warning',
    })(container);
    return container;
  },
};

export const AlertError = {
  name: 'Alert - Error',
  render: () => {
    const container = document.createElement('div');
    container.style.maxWidth = '500px';
    UI.render(InLineAlert, {
      heading: 'Error',
      description: 'Unable to process your payment. Please try again.',
      type: 'error',
    })(container);
    return container;
  },
};

export const AllAlerts = {
  name: 'All Alert Types',
  render: () => {
    const container = document.createElement('div');
    container.style.display = 'flex';
    container.style.flexDirection = 'column';
    container.style.gap = '16px';
    container.style.maxWidth = '500px';

    const types = [
      { type: 'info', heading: 'Information', description: 'This is an informational alert.' },
      { type: 'success', heading: 'Success', description: 'Operation completed successfully.' },
      { type: 'warning', heading: 'Warning', description: 'Please review before proceeding.' },
      { type: 'error', heading: 'Error', description: 'Something went wrong.' },
    ];

    types.forEach(({ type, heading, description }) => {
      const alert = document.createElement('div');
      UI.render(InLineAlert, { heading, description, type })(alert);
      container.appendChild(alert);
    });

    return container;
  },
};

export const AlertBannerFeedback = {
  name: 'Alert Banner',
  render: () => {
    const container = document.createElement('div');
    container.style.display = 'flex';
    container.style.flexDirection = 'column';
    container.style.gap = '8px';

    const types = ['info', 'success', 'warning', 'error'];
    const messages = {
      info: 'Free shipping on orders over $50',
      success: 'Your coupon has been applied',
      warning: 'Limited stock available',
      error: 'Some items are out of stock',
    };

    types.forEach(type => {
      const banner = document.createElement('div');
      banner.className = `dropin-alert-banner dropin-alert-banner--${type}`;
      banner.style.padding = '12px 16px';
      banner.style.display = 'flex';
      banner.style.alignItems = 'center';
      banner.style.justifyContent = 'space-between';
      banner.style.borderRadius = 'var(--shape-border-radius-1)';

      const bgColors = {
        info: 'var(--color-informational-200)',
        success: 'var(--color-positive-200)',
        warning: 'var(--color-warning-200)',
        error: 'var(--color-alert-200)',
      };

      banner.style.background = bgColors[type];

      banner.innerHTML = `
        <span>${messages[type]}</span>
        <button style="background: none; border: none; cursor: pointer; opacity: 0.7;">×</button>
      `;

      container.appendChild(banner);
    });

    return container;
  },
};

export const SpinnerFeedback = {
  name: 'Progress Spinner',
  render: () => {
    const container = document.createElement('div');
    container.style.display = 'flex';
    container.style.gap = '32px';
    container.style.alignItems = 'center';

    // Small
    const small = document.createElement('div');
    small.innerHTML = `
      <div class="dropin-progress-spinner dropin-progress-spinner--small" style="width: 20px; height: 20px; border: 2px solid var(--color-neutral-300); border-top-color: var(--color-brand-500); border-radius: 50%; animation: spin 1s linear infinite;"></div>
      <p style="font: var(--type-details-caption-2-font); margin-top: 8px; text-align: center;">Small</p>
    `;

    // Medium
    const medium = document.createElement('div');
    medium.innerHTML = `
      <div class="dropin-progress-spinner" style="width: 40px; height: 40px; border: 3px solid var(--color-neutral-300); border-top-color: var(--color-brand-500); border-radius: 50%; animation: spin 1s linear infinite;"></div>
      <p style="font: var(--type-details-caption-2-font); margin-top: 8px; text-align: center;">Medium</p>
    `;

    // Large
    const large = document.createElement('div');
    large.innerHTML = `
      <div class="dropin-progress-spinner dropin-progress-spinner--large" style="width: 60px; height: 60px; border: 4px solid var(--color-neutral-300); border-top-color: var(--color-brand-500); border-radius: 50%; animation: spin 1s linear infinite;"></div>
      <p style="font: var(--type-details-caption-2-font); margin-top: 8px; text-align: center;">Large</p>
    `;

    // Add keyframes
    const style = document.createElement('style');
    style.textContent = `
      @keyframes spin {
        to { transform: rotate(360deg); }
      }
    `;
    container.appendChild(style);

    container.appendChild(small);
    container.appendChild(medium);
    container.appendChild(large);

    return container;
  },
};

export const SkeletonFeedback = {
  name: 'Skeleton Loading',
  render: () => {
    const container = document.createElement('div');
    container.style.maxWidth = '400px';

    // Add shimmer animation
    const style = document.createElement('style');
    style.textContent = `
      @keyframes shimmer {
        0% { background-position: 200% 0; }
        100% { background-position: -200% 0; }
      }
      .skeleton-item {
        background: linear-gradient(90deg, var(--color-neutral-200) 25%, var(--color-neutral-100) 50%, var(--color-neutral-200) 75%);
        background-size: 200% 100%;
        animation: shimmer 1.5s infinite;
        border-radius: var(--shape-border-radius-1);
      }
    `;
    container.appendChild(style);

    // Card skeleton
    const card = document.createElement('div');
    card.style.padding = '16px';
    card.style.border = '1px solid var(--color-neutral-300)';
    card.style.borderRadius = 'var(--shape-border-radius-2)';

    card.innerHTML = `
      <div class="skeleton-item" style="width: 100%; height: 200px; margin-bottom: 16px;"></div>
      <div class="skeleton-item" style="width: 70%; height: 24px; margin-bottom: 8px;"></div>
      <div class="skeleton-item" style="width: 40%; height: 16px; margin-bottom: 16px;"></div>
      <div class="skeleton-item" style="width: 100%; height: 16px; margin-bottom: 8px;"></div>
      <div class="skeleton-item" style="width: 90%; height: 16px; margin-bottom: 8px;"></div>
      <div class="skeleton-item" style="width: 60%; height: 16px;"></div>
    `;

    container.appendChild(card);

    return container;
  },
};

export const SkeletonRows = {
  name: 'Skeleton Rows',
  render: () => {
    const container = document.createElement('div');
    container.style.maxWidth = '600px';
    container.style.display = 'flex';
    container.style.flexDirection = 'column';
    container.style.gap = '12px';

    // Add shimmer animation
    const style = document.createElement('style');
    style.textContent = `
      @keyframes shimmer {
        0% { background-position: 200% 0; }
        100% { background-position: -200% 0; }
      }
      .skeleton-row {
        background: linear-gradient(90deg, var(--color-neutral-200) 25%, var(--color-neutral-100) 50%, var(--color-neutral-200) 75%);
        background-size: 200% 100%;
        animation: shimmer 1.5s infinite;
        border-radius: var(--shape-border-radius-1);
        height: 16px;
      }
    `;
    container.appendChild(style);

    const widths = ['100%', '95%', '80%', '90%', '70%'];
    widths.forEach(width => {
      const row = document.createElement('div');
      row.className = 'skeleton-row';
      row.style.width = width;
      container.appendChild(row);
    });

    return container;
  },
};
