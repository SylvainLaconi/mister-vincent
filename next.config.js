/** @type {import('next').NextConfig} */
const nextConfig = {
	distDir: 'build',
	async headers() {
		return [
			{
				source: '/:path*',
				headers: [
					{
						key: 'Strict-Transport-Security',
						value: 'max-age=63072000; includeSubDomains; preload',
					},
					{
						key: 'X-Frame-Options',
						value: 'DENY',
					},
					{
						key: 'Permissions-Policy',
						value: 'geolocation=(self)',
					},
					{
						key: 'X-Content-Type-Options',
						value: 'nosniff',
					},
					{
						key: 'Referrer-Policy',
						value: 'same-origin',
					},
				],
			},
		];
	},
};

module.exports = nextConfig
