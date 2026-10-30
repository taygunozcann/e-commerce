// Gravatar uses a SHA-256 hash of the trimmed, lower-cased email.
// Web Crypto needs https or localhost (fine for Vite dev server and production).
export async function gravatarUrl(email, size = 80) {
  const normalized = String(email || "").trim().toLowerCase();
  const bytes = new TextEncoder().encode(normalized);
  const digest = await crypto.subtle.digest("SHA-256", bytes);
  const hash = Array.from(new Uint8Array(digest))
    .map((b) => b.toString(16).padStart(2, "0"))
    .join("");
  return `https://www.gravatar.com/avatar/${hash}?s=${size}&d=identicon`;
}
 