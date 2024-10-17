import createNextIntlPlugin from "next-intl/plugin";
import withBundleAnalyzer from "@next/bundle-analyzer";

const withNextIntl = createNextIntlPlugin();

const bundleAnalyzer = withBundleAnalyzer({
  enabled: process.env.ANALYZE === "false",
  openAnalyzer: false,
});

/** @type {import('next').NextConfig} */
const nextConfig = {};

export default withNextIntl(bundleAnalyzer(nextConfig));
