/** @type {import('next').NextConfig} */
const withPWA = require('next-pwa')({
  dest: 'public',
  disableDevLogs: true
});

module.exports = withPWA({
  reactStrictMode: true,
  images: {
    domains: ['img.pokemondb.net'],
    unoptimized: true,
    loader: 'custom',
    loaderFile: './image-loader.js'
  }
});
