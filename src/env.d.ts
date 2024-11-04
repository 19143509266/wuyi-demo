/// <reference types="@rsbuild/core/types" />
declare module '*.less' {
  const classes: { readonly [key: string]: string };
  export default classes;
}
