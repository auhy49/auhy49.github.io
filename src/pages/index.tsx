import * as React from "react";
import type { HeadFC, PageProps } from "gatsby";

const pageStyles = {};

const IndexPage: React.FC<PageProps> = () => {
  return (
    <main style={pageStyles}>

    </main>
  );
};

export default IndexPage;

export const Head: HeadFC = () => <title>Flow State by Jinsoo</title>;
