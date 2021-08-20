const withPWA = require('next-pwa');
const runtimeCaching = require('next-pwa/cache');
const production = process.env.NODE_ENV === 'production';

const settings = { reactStrictMode: true };

module.exports = production ? withPWA({ ...settings, pwa: { dest: 'public', runtimeCaching } }) : settings;
