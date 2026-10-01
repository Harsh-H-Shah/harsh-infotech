/** Prefix a /public path with the deploy base path (GitHub Pages serves the site from /<repo>). */
export const asset = (path: string) => `${process.env.NEXT_PUBLIC_BASE_PATH ?? ""}${path}`;
