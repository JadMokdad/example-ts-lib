# Example TypeScript Library

This example project is set up with a build system that:

- exports many useful formats, such as ESM, CJS, UMD.
- uses Rollup, and not Webpack, ensuring that the output is as small as possible
- enables the usage of TypeScript

### Motivation

Every now and again, I make JavaScript libraries. I believe that Redux's build system is
quite nice. Were I to use something similar, the only addition that I would like is to
have the ability to use TypeScript.

That's what this project demonstrates. It's the Redux build system as of
[this commit](https://github.com/reduxjs/redux/tree/afd762f182f609789659dc44764d4e64792bf9a5),
updated to support TypeScript.

### JSX

Refer to [this branch](https://github.com/jamesplease/example-ts-lib/tree/jsx) to see a version of this build
system that supports libraries that utilize JSX (i.e.; React component libraries).

### What's missing?

This doesn't show how to set up unit testing. That will likely come in a future update.

### Caveats

The `.mjs` build is, according to the Redux code comments, for browsers. It's a nice idea, but the import paths
of any third-party dependencies that you don't want to bundle, such as React in the JSX branch,
aren't updated to reference a path that a browser can resolve.

For that reason, you may want to remove that build output for certain projects.
