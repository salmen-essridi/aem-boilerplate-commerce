/** @type { import('@storybook/html-vite').StorybookConfig } */
import { resolve } from 'path';
import { fileURLToPath } from 'url';
import { dirname } from 'path';

const currentFilePath = fileURLToPath(import.meta.url);
const currentDir = dirname(currentFilePath);

// Storybook local directories
const storybookRoot = resolve(currentDir, '..');

// Main AEM project root - parent of storybook folder
const projectRoot = resolve(storybookRoot, '..');

const config = {
  stories: ['../stories/**/*.mdx', '../stories/**/*.stories.@(js|jsx|mjs|ts|tsx)'],
  addons: ['@storybook/addon-essentials'],
  framework: {
    name: '@storybook/html-vite',
    options: {},
  },
  // Load CSS DIRECTLY from main project - no sync needed!
  staticDirs: [
    { from: resolve(storybookRoot, 'styles'), to: '/local-styles' },     // Local storybook styles (dropin-base, page-layouts)
    { from: resolve(projectRoot, 'blocks'), to: '/blocks' },             // Block CSS from main project
    { from: resolve(projectRoot, 'styles'), to: '/styles' },             // Main styles from main project
  ],
  async viteFinal(config) {
    config.resolve = config.resolve || {};
    config.resolve.alias = {
      ...config.resolve.alias,
      '@dropins/tools': resolve(projectRoot, 'node_modules/@dropins/tools'),
      '@blocks': resolve(projectRoot, 'blocks'),
      '@styles': resolve(projectRoot, 'styles'),
    };

    return config;
  },
};

export default config;
