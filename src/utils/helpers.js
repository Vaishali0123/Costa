export default function stripImages(html) {
  if (!html) return "";
  return html.replace(/<img[^>]*>/g, ""); // Remove all <img ...> tags
}
