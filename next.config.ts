import type { NextConfig } from "next";

const isGithubActions = process.env.GITHUB_ACTIONS === "true";
const repoName = process.env.GITHUB_REPOSITORY?.split("/")[1] ?? "";

const nextConfig: NextConfig = {
  output: "export",
  trailingSlash: true,
  images: {
    unoptimized: true,
  },
  basePath: isGithubActions && repoName ? `/${repoName}` : undefined,
  assetPrefix: isGithubActions && repoName ? `/${repoName}/` : undefined,
};

export default nextConfig;
