/** @type {import('next').NextConfig} */
// Mock catalogue media is remote and may be viewed without Next's server-side optimizer.
// This keeps local previews reliable when the optimizer cannot fetch Unsplash assets.
const nextConfig = { images: { unoptimized: true, remotePatterns: [{ protocol: "https", hostname: "images.unsplash.com" }] } };
export default nextConfig;
