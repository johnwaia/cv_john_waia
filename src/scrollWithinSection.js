/**
 * Scrolls an element into view within its nearest `.cv-section` ancestor only.
 * Unlike `Element.scrollIntoView`, this never touches `window.scrollY` — the CV
 * sections are stacked with `position: sticky` and near-zero slack, so any leak
 * into the window scroll makes the next section visibly slide up and cover the
 * current one.
 */
export default function scrollWithinSection(el) {
  if (!el) return;
  const section = el.closest('.cv-section');
  if (!section) {
    el.scrollIntoView({ behavior: 'smooth', block: 'start' });
    return;
  }

  const targetTop =
    el.getBoundingClientRect().top - section.getBoundingClientRect().top + section.scrollTop;
  const maxScrollTop = section.scrollHeight - section.clientHeight;

  section.scrollTo({
    top: Math.max(0, Math.min(targetTop, maxScrollTop)),
    behavior: 'smooth',
  });
}
