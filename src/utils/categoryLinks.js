// Builds /shop/:gender/:categoryName/:categoryId from a category object.
// Expected API fields: { id, code: "k:ayakkabi", title, img, rating, gender: "k" | "e" }
// Examples: shop/kadin/ayakkabi/2   shop/erkek/gomlek/11

const TR_MAP = { ç: "c", ğ: "g", ı: "i", İ: "i", ö: "o", ş: "s", ü: "u" };

export const slugify = (text = "") =>
  String(text)
    .replace(/[çğıİöşü]/g, (ch) => TR_MAP[ch])
    .toLowerCase()
    .replace(/[^a-z0-9]+/g, "-")
    .replace(/^-+|-+$/g, "");

export function getGender(category) {
  const g = String(category.gender || category.code?.split(":")[0] || "").toLowerCase();
  return g === "k" || g === "kadin" ? "kadin" : "erkek";
}

export function getCategoryPath(category) {
  const name = category.code?.includes(":")
    ? slugify(category.code.split(":")[1])
    : slugify(category.title);
  return `/shop/${getGender(category)}/${name}/${category.id}`;
}
