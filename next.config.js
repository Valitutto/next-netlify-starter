function getRedirectList() {
    return [
      {
        source: `/test/test/test/categoria/:category*`,
        destination: `/test/test/test/categories/:category*`,
        //permanent: false,
      },
      {
        source: `/test/test/test/prodotti/:product`,
        destination: `/test/test/test/products/:product`,
        //permanent: false,
      },
    ];
}
///test/test/test/prodotti/prodotto
///test/test/test/products/prodotto

const rewritesList = getRedirectList();
// @ts-check
 
/** @type {import('next').NextConfig} */
const nextConfig = {
  optimizeFonts: false,
  reactStrictMode: true,
  async rewrites() {
    return {beforeFiles: rewritesList,afterFiles: rewritesList,fallback: rewritesList};
  },
}
 
module.exports = nextConfig