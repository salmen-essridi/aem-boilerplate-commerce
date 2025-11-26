// Mock data for dropin containers in Storybook
// This allows dropins to render without a backend API connection

export const mockProduct = {
  sku: 'WH01-XS-Green',
  name: 'Mona Pullover Hoodie',
  urlKey: 'mona-pullover-hoodie',
  shortDescription: 'The Mona Pullover Hoodie is a customer favorite. Soft, comfortable, and perfect for layering.',
  description: '<p>The Mona Pullover Hoodie features a relaxed fit with a kangaroo pocket, ribbed cuffs, and a drawstring hood. Made from a cotton-blend fleece for ultimate comfort.</p><ul><li>Cotton-blend fleece</li><li>Kangaroo pocket</li><li>Drawstring hood</li><li>Ribbed cuffs and hem</li></ul>',
  images: [
    {
      url: 'https://placehold.co/600x800/f5f5f5/333333?text=Product+Image',
      label: 'Mona Pullover Hoodie - Green',
      roles: ['image', 'thumbnail', 'small_image'],
    },
    {
      url: 'https://placehold.co/600x800/e0e0e0/333333?text=Side+View',
      label: 'Mona Pullover Hoodie - Side',
      roles: ['image'],
    },
    {
      url: 'https://placehold.co/600x800/d0d0d0/333333?text=Back+View',
      label: 'Mona Pullover Hoodie - Back',
      roles: ['image'],
    },
  ],
  prices: {
    regular: { amount: 57.00, currency: 'USD' },
    final: { amount: 57.00, currency: 'USD' },
  },
  priceRange: {
    minimum: { regular: { amount: 57.00, currency: 'USD' }, final: { amount: 57.00, currency: 'USD' } },
    maximum: { regular: { amount: 57.00, currency: 'USD' }, final: { amount: 57.00, currency: 'USD' } },
  },
  inStock: true,
  stockLevel: 'IN_STOCK',
  attributes: [
    { name: 'Material', value: 'Cotton Blend' },
    { name: 'Pattern', value: 'Solid' },
    { name: 'Style', value: 'Hoodie' },
    { name: 'Climate', value: 'Indoor, Spring, Fall' },
  ],
  options: [
    {
      id: 'size',
      label: 'Size',
      required: true,
      type: 'swatch',
      items: [
        { id: 'XS', label: 'XS', value: 'XS', inStock: true, selected: true },
        { id: 'S', label: 'S', value: 'S', inStock: true },
        { id: 'M', label: 'M', value: 'M', inStock: true },
        { id: 'L', label: 'L', value: 'L', inStock: true },
        { id: 'XL', label: 'XL', value: 'XL', inStock: false },
      ],
    },
    {
      id: 'color',
      label: 'Color',
      required: true,
      type: 'swatch',
      items: [
        { id: 'green', label: 'Green', value: '#4CAF50', inStock: true, selected: true },
        { id: 'blue', label: 'Blue', value: '#2196F3', inStock: true },
        { id: 'gray', label: 'Gray', value: '#9E9E9E', inStock: true },
      ],
    },
  ],
};

export const mockCartItem = {
  uid: 'cart-item-1',
  product: {
    sku: 'WH01-XS-Green',
    name: 'Mona Pullover Hoodie',
    image: {
      url: 'https://placehold.co/100x100/f5f5f5/333333?text=Hoodie',
      label: 'Mona Pullover Hoodie',
    },
  },
  quantity: 2,
  prices: {
    price: { value: 57.00, currency: 'USD' },
    rowTotal: { value: 114.00, currency: 'USD' },
  },
  configurableOptions: [
    { optionLabel: 'Size', valueLabel: 'XS' },
    { optionLabel: 'Color', valueLabel: 'Green' },
  ],
};

export const mockCart = {
  id: 'mock-cart-id',
  totalQuantity: 3,
  items: [
    mockCartItem,
    {
      uid: 'cart-item-2',
      product: {
        sku: 'MJ01-M-Blue',
        name: 'Circe Hooded Jacket',
        image: {
          url: 'https://placehold.co/100x100/e0e0e0/333333?text=Jacket',
          label: 'Circe Hooded Jacket',
        },
      },
      quantity: 1,
      prices: {
        price: { value: 68.00, currency: 'USD' },
        rowTotal: { value: 68.00, currency: 'USD' },
      },
      configurableOptions: [
        { optionLabel: 'Size', valueLabel: 'M' },
        { optionLabel: 'Color', valueLabel: 'Blue' },
      ],
    },
  ],
  prices: {
    subtotalExcludingTax: { value: 182.00, currency: 'USD' },
    subtotalIncludingTax: { value: 182.00, currency: 'USD' },
    grandTotal: { value: 197.82, currency: 'USD' },
    discounts: [],
    appliedTaxes: [
      { label: 'Tax', amount: { value: 15.82, currency: 'USD' } },
    ],
  },
};

export const mockOrder = {
  orderNumber: '000000023',
  orderDate: '2024-01-15T10:30:00Z',
  status: 'Complete',
  email: 'customer@example.com',
  shippingAddress: {
    firstName: 'John',
    lastName: 'Doe',
    street: ['123 Main Street', 'Apt 4B'],
    city: 'Austin',
    region: 'TX',
    postcode: '78701',
    country: 'United States',
    telephone: '555-123-4567',
  },
  billingAddress: {
    firstName: 'John',
    lastName: 'Doe',
    street: ['123 Main Street', 'Apt 4B'],
    city: 'Austin',
    region: 'TX',
    postcode: '78701',
    country: 'United States',
    telephone: '555-123-4567',
  },
  paymentMethod: {
    name: 'Credit Card',
    type: 'checkmo',
  },
  shippingMethod: 'Ground Shipping - $5.00',
  items: [mockCartItem],
  totals: {
    subtotal: { value: 114.00, currency: 'USD' },
    shipping: { value: 5.00, currency: 'USD' },
    tax: { value: 10.36, currency: 'USD' },
    grandTotal: { value: 129.36, currency: 'USD' },
  },
  shipments: [
    {
      trackingNumber: '1Z999AA10123456784',
      carrier: 'UPS',
      trackingUrl: 'https://www.ups.com/track?loc=en_US&tracknum=1Z999AA10123456784',
    },
  ],
};

export const mockCustomer = {
  email: 'customer@example.com',
  firstName: 'John',
  lastName: 'Doe',
  isLoggedIn: false,
};

export const mockAddresses = [
  {
    id: 1,
    firstName: 'John',
    lastName: 'Doe',
    street: ['123 Main Street', 'Apt 4B'],
    city: 'Austin',
    region: { code: 'TX', name: 'Texas' },
    postcode: '78701',
    country: { code: 'US', name: 'United States' },
    telephone: '555-123-4567',
    defaultShipping: true,
    defaultBilling: true,
  },
  {
    id: 2,
    firstName: 'John',
    lastName: 'Doe',
    street: ['456 Work Boulevard'],
    city: 'Austin',
    region: { code: 'TX', name: 'Texas' },
    postcode: '78702',
    country: { code: 'US', name: 'United States' },
    telephone: '555-987-6543',
    defaultShipping: false,
    defaultBilling: false,
  },
];

export const mockShippingMethods = [
  { carrierCode: 'flatrate', methodCode: 'flatrate', carrierTitle: 'Flat Rate', methodTitle: 'Fixed', amount: { value: 5.00, currency: 'USD' } },
  { carrierCode: 'tablerate', methodCode: 'bestway', carrierTitle: 'Best Way', methodTitle: 'Table Rate', amount: { value: 10.00, currency: 'USD' } },
  { carrierCode: 'freeshipping', methodCode: 'freeshipping', carrierTitle: 'Free Shipping', methodTitle: 'Free', amount: { value: 0, currency: 'USD' } },
];

export const mockPaymentMethods = [
  { code: 'checkmo', title: 'Check / Money order' },
  { code: 'banktransfer', title: 'Bank Transfer Payment' },
  { code: 'cashondelivery', title: 'Cash On Delivery' },
];
