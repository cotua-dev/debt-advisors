const runtimeCaching = require('next-pwa/cache');
const production = process.env.NODE_ENV === 'production';

const withPWA = require('next-pwa')({
    dest: 'public',
    runtimeCaching,
});

module.exports = production ? withPWA() : {
    reactStrictMode: true,
};

// const withPWA = require('next-pwa');
// const runtimeCaching = require('next-pwa/cache');
// const production = process.env.NODE_ENV === 'production';

// const settings = {
//     reactStrictMode: true,
//     swcMinify: true,
// };

// module.exports = production ? withPWA({ ...settings, pwa: { dest: 'public', runtimeCaching } }) : settings;
