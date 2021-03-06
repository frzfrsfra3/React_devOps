module.exports = {
  locales: ['en', 'ar'],
  defaultLocale: 'ar',
  pages: {
    '*': ['common', 'footer', 'errors', 'navbar'],
    '/': ['home'],
    '/404': ['not-found'],
    '/application': ['application'],
    '/jobs/apply/[id]': ['jobs'],
    '/personal-collection': ['personal-collection', 'cart'],
    '/contact-us': ['contact-us'],
    '/login': ['login'],
    '/products/[id]': ['single-product'],
    '/products': ['single-product'],
    '/cart': ['cart'],
    '/order-collection': ['order-collection'],
    '/check-order': ['check-order'],
    '/reset-password': ['reset-password'],
    '/verfiy-email': ['verfiy-email'],
    '/terms-conditions': ['terms-conditions'],
    '/privacy-policy': ['privacy-policy'],
    '/contact': ['login'],
  },
  interpolation: {
    prefix: '${',
    suffix: '}',
  },
  loadLocaleFrom: (locale, namespace) =>
    import(`./src/translations/${namespace}/${locale}`).then((m) => m.default),
};
