import type { NextConfig } from "next";
 
const isDev = process.env.NODE_ENV === 'development'

const nextConfig: NextConfig = {
  assetPrefix: isDev ?  '/proxy/3000' : undefined,
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