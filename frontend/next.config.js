const nextConfig = {
    experimental: {
        appDir: true,
        outputStandalone: true,
    },
    env: {
        API_URL: 'http://localhost:5000',
        NEXT_SHARP_PATH: '/tmp/node_modules/sharp',
    },
    images: {
        remotePatterns: [
            {
                protocol: 'https',
                hostname: 'raw.githubusercontent.com',
                port: '',
                pathname: '/PokeAPI/**',
            },
        ],
    },
};

module.exports = nextConfig;
