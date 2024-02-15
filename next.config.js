function getRedirectList() {
    return [
      {
        source: `/test/test/test/categoria/:category*`,
        destination: `/test/test/test/categories/:category*`,
      },
      {
        source: `/test/test/test/prodotti/:product`,
        destination: `/test/test/test/products/:product`,
      },
    ];
}
///test/test/test/prodotti/prodotto
///test/test/test/products/prodotto

const rewritesList = getRedirectList();

module.exports = {
  optimizeFonts: false,
  reactStrictMode: true,
  async rewrites() {
    return {fallback: [...rewritesList]};
  },
  // async redirects() {
  //   return [...rewritesList];
  // },
  generateBuildId: () => 'build',
};
