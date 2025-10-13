import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  sassOptions: {
    includePaths: ["./src/styles"],
    prependData: `
      @import "abstracts/variables";
      @import "abstracts/mixins";
      @import "abstracts/functions";
    `,
  },
  /* config options here */
};

export default nextConfig;
