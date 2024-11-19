export function getImageUrl(name: string): URL {
  return new URL(`../assets/books/${name}`, import.meta.url);
}
export function getBaseUrl() {
  return "http://localhost:3000/api/v1";
}
