import createNextIntlPlugin from "next-intl/plugin";
import withBundleAnalyzer from "@next/bundle-analyzer";

// Create the NextIntl plugin
const withNextIntl = createNextIntlPlugin();

// Configure the bundle analyzer plugin
const bundleAnalyzer = withBundleAnalyzer({
  enabled: process.env.ANALYZE === "false",
  openAnalyzer: false,
});

/** @type {import('next').NextConfig} */
const nextConfig = {};

// Combine both plugins
export default withNextIntl(bundleAnalyzer(nextConfig));
