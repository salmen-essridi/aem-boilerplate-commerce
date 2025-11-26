// Category/Product List Page Composition Story
// CSS is imported via preview.js from /styles/page-layouts.css and /styles/dropin-base.css
import { mockProduct } from '../dropins/mockData.js';

export default {
  title: 'Pages/Category Page',
  tags: ['autodocs'],
  parameters: {
    layout: 'fullscreen',
    docs: {
      description: {
        component: `
Full page composition showing the Category/Product List Page with filters and product grid.
All styles use design tokens from the theme - changes to main CSS will be reflected here.
        `,
      },
    },
  },
};

const formatPrice = (amount, currency = 'USD') => {
  return new Intl.NumberFormat('en-US', { style: 'currency', currency }).format(amount);
};

// Category Page
export const CategoryPage = {
  name: 'Category Page',
  render: () => {
    const element = document.createElement('div');
    element.className = 'page-layout';
    element.innerHTML = `
      <!-- Header -->
      <header class="page-header">
        <div class="page-header__inner">
          <a href="#" class="page-header__logo">ACME Store</a>
          <nav class="page-header__nav">
            <a href="#" class="page-header__nav-link--active">Women</a>
            <a href="#">Men</a>
            <a href="#">Accessories</a>
            <a href="#">Sale</a>
          </nav>
          <div class="page-header__actions">
            <svg class="page-header__icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
              <circle cx="11" cy="11" r="8"></circle>
              <line x1="21" y1="21" x2="16.65" y2="16.65"></line>
            </svg>
            <svg class="page-header__icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
              <path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2"></path>
              <circle cx="12" cy="7" r="4"></circle>
            </svg>
            <svg class="page-header__icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
              <circle cx="9" cy="21" r="1"></circle>
              <circle cx="20" cy="21" r="1"></circle>
              <path d="M1 1h4l2.68 13.39a2 2 0 0 0 2 1.61h9.72a2 2 0 0 0 2-1.61L23 6H6"></path>
            </svg>
          </div>
        </div>
      </header>

      <!-- Main Content -->
      <main class="page-main">
        <!-- Category Hero -->
        <section class="category-hero">
          <h1 class="category-hero__title">Women's Clothing</h1>
          <p class="category-hero__count">248 products</p>
        </section>

        <div class="category-container">
          <!-- Filters Sidebar -->
          <aside class="category-filters">
            <div class="filter-section">
              <h3 class="filter-section__title">Category <span>−</span></h3>
              <div class="filter-section__options">
                <label class="filter-option">
                  <input type="checkbox" checked /> Tops <span class="filter-option__count">(86)</span>
                </label>
                <label class="filter-option">
                  <input type="checkbox" /> Dresses <span class="filter-option__count">(52)</span>
                </label>
                <label class="filter-option">
                  <input type="checkbox" /> Pants <span class="filter-option__count">(41)</span>
                </label>
                <label class="filter-option">
                  <input type="checkbox" /> Jackets <span class="filter-option__count">(33)</span>
                </label>
                <label class="filter-option">
                  <input type="checkbox" /> Skirts <span class="filter-option__count">(36)</span>
                </label>
              </div>
            </div>

            <div class="filter-section">
              <h3 class="filter-section__title">Color <span>−</span></h3>
              <div class="filter-colors">
                <div class="filter-color filter-color--selected" style="background: #000"></div>
                <div class="filter-color" style="background: #fff; border: 1px solid #ccc"></div>
                <div class="filter-color" style="background: #1a365d"></div>
                <div class="filter-color" style="background: #742a2a"></div>
                <div class="filter-color" style="background: #22543d"></div>
                <div class="filter-color" style="background: #744210"></div>
              </div>
            </div>

            <div class="filter-section">
              <h3 class="filter-section__title">Size <span>−</span></h3>
              <div class="filter-sizes">
                <div class="filter-size">XS</div>
                <div class="filter-size">S</div>
                <div class="filter-size filter-size--selected">M</div>
                <div class="filter-size">L</div>
                <div class="filter-size">XL</div>
                <div class="filter-size">XXL</div>
              </div>
            </div>

            <div class="filter-section">
              <h3 class="filter-section__title">Price <span>−</span></h3>
              <div class="filter-price">
                <input type="text" class="filter-price__input" placeholder="$0" />
                <span>to</span>
                <input type="text" class="filter-price__input" placeholder="$500" />
              </div>
            </div>

            <button class="dropin-button dropin-button--secondary filter-clear-btn">Clear All</button>
          </aside>

          <!-- Products -->
          <div class="category-main">
            <div class="category-toolbar">
              <div class="category-active-filters">
                <div class="active-filter">
                  Tops <span class="active-filter__remove">✕</span>
                </div>
                <div class="active-filter">
                  Black <span class="active-filter__remove">✕</span>
                </div>
                <div class="active-filter">
                  Size: M <span class="active-filter__remove">✕</span>
                </div>
              </div>
              <div class="category-sort">
                <span class="category-sort__label">Sort by:</span>
                <select class="category-sort__select">
                  <option>Featured</option>
                  <option>Price: Low to High</option>
                  <option>Price: High to Low</option>
                  <option>Newest</option>
                  <option>Best Selling</option>
                </select>
              </div>
            </div>

            <div class="products-grid products-grid--3col">
              ${Array(9).fill(null).map((_, i) => `
                <div class="product-card">
                  <div class="product-card__image-container">
                    <img src="${mockProduct.images[0].url}" class="product-card__image" />
                    <button class="product-card__wishlist">
                      <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                        <path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z"></path>
                      </svg>
                    </button>
                    ${i === 2 ? '<span class="product-card__badge">Sale</span>' : ''}
                  </div>
                  <div class="product-card__content">
                    <p class="product-card__name">${['Classic Blouse', 'Silk Camisole', 'Cotton Tee', 'Linen Shirt', 'Knit Sweater', 'Wrap Top', 'Crop Top', 'Tunic', 'Tank Top'][i]}</p>
                    <div class="product-card__price">
                      <span class="product-card__price-current">${formatPrice([89.99, 129.99, 49.99, 79.99, 119.99, 69.99, 39.99, 99.99, 34.99][i])}</span>
                      ${i === 2 ? `<span class="product-card__price--original">${formatPrice(79.99)}</span>` : ''}
                    </div>
                    <div class="product-card__colors">
                      <div class="product-card__color" style="background: #000"></div>
                      <div class="product-card__color" style="background: #fff"></div>
                      <div class="product-card__color" style="background: #1a365d"></div>
                    </div>
                  </div>
                </div>
              `).join('')}
            </div>

            <div class="category-pagination">
              <button class="pagination-btn">←</button>
              <button class="pagination-btn pagination-btn--active">1</button>
              <button class="pagination-btn">2</button>
              <button class="pagination-btn">3</button>
              <button class="pagination-btn">...</button>
              <button class="pagination-btn">12</button>
              <button class="pagination-btn">→</button>
            </div>
          </div>
        </div>
      </main>

      <!-- Footer -->
      <footer class="page-footer">
        <div class="page-footer__inner">
          <div class="page-footer__column">
            <h4>Shop</h4>
            <ul>
              <li><a href="#">Women</a></li>
              <li><a href="#">Men</a></li>
              <li><a href="#">Accessories</a></li>
            </ul>
          </div>
          <div class="page-footer__column">
            <h4>Help</h4>
            <ul>
              <li><a href="#">Contact Us</a></li>
              <li><a href="#">Shipping</a></li>
              <li><a href="#">Returns</a></li>
            </ul>
          </div>
          <div class="page-footer__column">
            <h4>About</h4>
            <ul>
              <li><a href="#">Our Story</a></li>
              <li><a href="#">Careers</a></li>
            </ul>
          </div>
          <div class="page-footer__column">
            <h4>Connect</h4>
            <ul>
              <li><a href="#">Instagram</a></li>
              <li><a href="#">Facebook</a></li>
            </ul>
          </div>
        </div>
        <div class="page-footer__bottom">© 2024 ACME Store. All rights reserved.</div>
      </footer>
    `;
    return element;
  },
};
