import { fileURLToPath } from "node:url";
import { dirname, join } from "node:path";

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

/** @type {import('next').NextConfig} */
const nextConfig = {
  // Turbopack is used for `next dev` only. Production builds on Hostinger
  // use webpack (`next build --webpack`) because Turbopack's PostCSS
  // worker (`@tailwindcss/postcss`) panics there with:
  // "node process exited before we could connect to it".
  turbopack: {
    resolveAlias: {
      "@": join(__dirname, "src"),
    },
  },
  webpack: (config) => {
    config.resolve.alias = {
      ...(config.resolve.alias ?? {}),
      "@": join(__dirname, "src"),
    };
    return config;
  },
};

export default nextConfig;