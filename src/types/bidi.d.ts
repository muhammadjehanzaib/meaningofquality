declare module "bidi-js" {
  const bidi: {
    from_string(text: string): {
      toString(): string;
    };
  };
  export default bidi;
}
