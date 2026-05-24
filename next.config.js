/** @type {import('next').NextConfig} */
const nextConfig = {
  async headers() {
    return [
      {
        source: "/.well-known/stellar.toml",
        headers: [
          { key: "Content-Type", value: "text/plain" },
          { key: "Access-Control-Allow-Origin", value: "*" },
        ],
      },
    ];
  },
};

module.exports = nextConfig;
