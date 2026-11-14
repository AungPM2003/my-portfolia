// lib/slugify.ts
export function slugify(text: string) {
  return text
    .toLowerCase()
    .trim()
    .replace(/[^\w\s-]/g, "") // drop punctuation
    .replace(/\s+/g, "-") // spaces to dashes
    .replace(/-+/g, "-");
}
