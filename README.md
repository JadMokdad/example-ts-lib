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

### What's missing?

This doesn't show how to:

- set up unit testing
- use JSX

For now, that is an exercise left up to the reader.
