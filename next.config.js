const path = require('path')

/** @type {import('next').NextConfig} */
module.exports = {
    sassOptions: {
        includePaths: [path.join(__dirname, 'styles')]
    },
    images: {
        remotePatterns: [
            {
                protocol: 'https',
                hostname: 'images.ctfassets.net'
            }
        ]
    },
    experimental: {
        scrollRestoration: true,
    }
};
