/** @type {import('next').NextConfig} */
const nextConfig = {
    reactStrictMode: true,
    images: {
        domains: [
            'links.papareact.com',
            'cdn.dribbble.com',
            'i.ytimg.com',
            'ak.jogurucdn.com',
            'greenway.com.vn',
            'i.pinimg.com',
            'www.vcbay.news',
            'images.unsplash.com',
        ],
    },
};

module.exports = nextConfig;
