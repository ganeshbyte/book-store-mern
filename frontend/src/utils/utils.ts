export function getImageUrl(name: string): URL {
  return new URL(`../assets/books/${name}`, import.meta.url);
}
