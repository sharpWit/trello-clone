import type { NextConfig } from "next";
import path from "path";

const nextConfig: NextConfig = {
  sassOptions: {
<<<<<<< HEAD
    includePaths: ["./src/styles"],
    prependData: `
      @import "abstracts/variables";
      @import "abstracts/mixins";
      @import "abstracts/functions";
=======
    includePaths: [path.join(__dirname, "src/styles")],
    additionalData: `
      @use "abstracts/variables" as *;
      @use "abstracts/mixins" as *;
      @use "abstracts/functions" as *;
>>>>>>> 0ae7cfd (fix: update some type bugs)
    `,
  },
  /* config options here */
};

export default nextConfig;
