/**
 * Converts a text string into an SEO & URL-friendly slug.
 *
 * Examples:
 * - "Brad Nails (F Series)" -> "brad-nails-f-series"
 * - "Steel Nails (ST Series) 50mm" -> "steel-nails-st-series-50mm"
 * - "Sultan Wood Glue 3.70Kg" -> "sultan-wood-glue-3-70kg"
 */
export function slugify(text: string): string {
  if (!text) return "";
  return text
    .toString()
    .toLowerCase()
    .trim()
    .normalize("NFD")
    .replace(/[\u0300-\u036f]/g, "") // remove accent diacritics
    .replace(/[\(\)\[\]\{\}\'\"`]/g, "") // remove parentheses and quotes
    .replace(/[^a-z0-9]+/g, "-") // replace non-alphanumeric chars with hyphens
    .replace(/^-+|-+$/g, ""); // strip leading and trailing hyphens
}
