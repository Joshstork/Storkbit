import type { NextConfig } from "next";
 
const isDev = process.env.NODE_ENV === 'development'

const nextConfig: NextConfig = {
  assetPrefix: isDev ?  '/proxy/3000' : undefined,
  
  // Critical for Amplify deployment
  output: 'standalone',
  
  // Transpile packages that cause issues in Amplify deployment
  transpilePackages: [
    // Radix UI packages
    '@radix-ui/react-accordion',
    '@radix-ui/react-alert-dialog',
    '@radix-ui/react-avatar',
    '@radix-ui/react-checkbox',
    '@radix-ui/react-dialog',
    '@radix-ui/react-dropdown-menu',
    '@radix-ui/react-label',
    '@radix-ui/react-popover',
    '@radix-ui/react-select',
    '@radix-ui/react-tabs',
    // Add other UI libraries you're using
    'lucide-react',
    'cmdk',
    'class-variance-authority',
    'framer-motion',
    'recharts',
    // Add any RC packages
    'rc-pagination',
    'rc-util',
    // Add other problematic packages
  ],
  /* config options here */
};

export default nextConfig;
/** 
  //Consider using dev/prod config files

  import type { NextConfig } from 'next'
 
const isProd = process.env.NODE_ENV === 'production'
 
const nextConfig: NextConfig = {
  typescript: {
    tsconfigPath: isProd ? 'tsconfig.build.json' : 'tsconfig.json',
  },
}
 
export default nextConfig

*/