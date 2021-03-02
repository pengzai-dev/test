import commonjs from "@rollup/plugin-commonjs";
import { nodeResolve } from "@rollup/plugin-node-resolve";
export default {
  input: "./lib/main.js",
  output: {
    file: "./lib/bundle.js",
    format: "iife",
  },
  plugins: [nodeResolve(),commonjs()],
};
