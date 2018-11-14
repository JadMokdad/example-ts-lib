import nodeResolve from 'rollup-plugin-node-resolve';
import replace from 'rollup-plugin-replace';
import commonjs from 'rollup-plugin-commonjs';
import { terser } from 'rollup-plugin-terser';
import typescript from 'rollup-plugin-typescript2';

import pkg from './package.json';

export default [
  // CommonJS
  {
    input: 'src/index.tsx',
    output: { file: 'lib/please-lib.js', format: 'cjs', indent: false },
    external: [
      ...Object.keys(pkg.dependencies || {}),
      ...Object.keys(pkg.peerDependencies || {}),
    ],
    plugins: [typescript()],
  },

  // ES
  {
    input: 'src/index.tsx',
    output: { file: 'es/please-lib.js', format: 'es', indent: false },
    external: [
      ...Object.keys(pkg.dependencies || {}),
      ...Object.keys(pkg.peerDependencies || {}),
    ],
    plugins: [typescript()],
  },

  // ES for Browsers
  {
    input: 'src/index.tsx',
    output: {
      file: 'es/please-lib.mjs',
      format: 'es',
      indent: false,
      globals: {
        react: 'React',
      },
    },
    external: ['react'],
    plugins: [
      typescript(),
      nodeResolve({
        jsnext: true,
      }),
      commonjs({
        include: 'node_modules/**',
      }),
      replace({
        'process.env.NODE_ENV': JSON.stringify('production'),
      }),
      terser({
        compress: {
          pure_getters: true,
          unsafe: true,
          unsafe_comps: true,
          warnings: false,
        },
      }),
    ],
  },

  // UMD Development
  {
    input: 'src/index.tsx',
    output: {
      file: 'dist/please-lib.js',
      format: 'umd',
      name: 'PleaseLib',
      indent: false,
      globals: {
        react: 'React',
      },
    },
    external: ['react'],
    plugins: [
      typescript(),
      nodeResolve({
        jsnext: true,
      }),
      commonjs({
        include: 'node_modules/**',
      }),
      replace({
        'process.env.NODE_ENV': JSON.stringify('development'),
      }),
    ],
  },

  // UMD Production
  {
    input: 'src/index.tsx',
    output: {
      file: 'dist/please-lib.min.js',
      format: 'umd',
      name: 'PleaseLib',
      indent: false,
      globals: {
        react: 'React',
      },
    },
    external: ['react'],
    plugins: [
      typescript(),
      nodeResolve({
        jsnext: true,
      }),
      commonjs({
        include: 'node_modules/**',
      }),
      replace({
        'process.env.NODE_ENV': JSON.stringify('production'),
      }),
      terser({
        compress: {
          pure_getters: true,
          unsafe: true,
          unsafe_comps: true,
          warnings: false,
        },
      }),
    ],
  },
];
