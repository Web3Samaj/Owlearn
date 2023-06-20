/** @type {import('next').NextConfig} */
const nextConfig = {
    webpack(config) {
        config?.resolve?.extenstions?.push('.ts', '.tsx')
        return config
    },
    reactStrictMode: true,
}

module.exports = nextConfig
