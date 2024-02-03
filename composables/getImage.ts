export default function getImage(url: string) {
    const newURL = new URL(`../assets/${url}`, import.meta.url).href;
    return newURL;
  }