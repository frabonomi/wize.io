import type { NextConfig } from 'next';

import createMDX from '@next/mdx';

const withMDX = createMDX({});

const nextConfig: NextConfig = {
  pageExtensions: ['js', 'jsx', 'mdx', 'ts', 'tsx'],
  poweredByHeader: false,
  turbopack: {
    root: process.cwd(),
  },
};

export default withMDX(nextConfig);
