export function smoothJumpTo(id: string) {
  const el = document.getElementById(id);
  if (!el) return;
  const top = el.getBoundingClientRect().top + window.scrollY - 56;
  window.scrollTo({ top, behavior: "smooth" });
}
