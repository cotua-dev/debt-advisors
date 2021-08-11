const withPWA = require('next-pwa');
const runtimeCaching = require('next-pwa/cache');

module.exports = withPWA({
    reactStrictMode: true,
    pwa: {
        dest: 'public',
        runtimeCaching,
    },
    async redirects() {
        return [
            {
                source: '/stepper',
                destination: '/stepper/what-are-you-looking-to-do',
                permanent: true,
            },
        ];
    },
});
