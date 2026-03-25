/** @type {import('next').NextConfig} */
const nextConfig = {
  // Next 14 removed `next export`; this makes `next build` generate static HTML into `out/`.
  output: "export",
}

module.exports = nextConfig
