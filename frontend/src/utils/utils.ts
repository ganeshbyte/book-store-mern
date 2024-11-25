export function getImageUrl(name: string): URL {
  return new URL(`../assets/books/${name}`, import.meta.url);
}

export function getBaseUrl() {
  return "https://book-store-backend-orcin.vercel.app/api/v1";
}
