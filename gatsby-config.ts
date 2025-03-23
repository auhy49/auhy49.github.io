import type { GatsbyConfig } from "gatsby";

const config: GatsbyConfig = {
  siteMetadata: {
    title: `Flow State by Jinsoo`,
    siteUrl: `https://auhy49.github.io`
  },
  graphqlTypegen: true,
  plugins: ["gatsby-plugin-emotion"]
};

export default config;
