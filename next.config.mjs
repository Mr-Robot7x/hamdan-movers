import createNextIntlPlugin from "next-intl/plugin";
import withBundleAnalyzer from "@next/bundle-analyzer";

const withNextIntl = createNextIntlPlugin();

const bundleAnalyzer = withBundleAnalyzer({
  enabled: process.env.ANALYZE === "true",
  openAnalyzer: false,
});

/** @type {import('next').NextConfig} */
const nextConfig = {
  // // images: {
  // //   remotePatterns: [
  // //     {
  // //       protocol: "https",
  // //       hostname: "res.cloudinary.com",
  // //       pathname: "/doxmrrizw/**",
  // //     },
  // //   ],
  // },
};

export default withNextIntl(bundleAnalyzer(nextConfig));
