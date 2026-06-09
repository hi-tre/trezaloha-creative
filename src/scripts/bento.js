// Shared bento/masonry layout for the Projects + Blog grids.
//
// Partitions the VISIBLE cards into full-width BANDS that each sum to 6
// columns, so the grid always tiles completely — no trailing empty space —
// for ANY card count (8, 10, or a filtered subset). Bands are either a
// full-width single (`[6]`) or a 2-up pair (3+3 / 4+2 / 2+4). NO 3-up bands
// (they look squished). Since every count decomposes into singles + pairs,
// tiling stays flush: take pairs, and if one card is left over it becomes a
// full-width card. Each band has a single row-span (cards equal height); the
// row-span varies band-to-band for the staggered, masonry feel.
//
// Grid contract (set in CSS): a 6-column grid with a fixed `grid-auto-rows`
// unit. Cards fill their cell; raise the auto-rows unit to enlarge cards.

const HERO = [6];                       // full-width band (lead + odd leftover)
const PAIRS = [[3, 3], [4, 2], [2, 4]]; // 2-up bands, rotated for variety

// Band heights (row spans), cycled band-to-band. Bump these to enlarge cards.
const BAND_ROWS = [3, 4, 3, 4, 3, 4];

function isVisible(el) {
  return el.style.display !== 'none' && !el.classList.contains('is-hidden');
}

export function layoutBento(grid) {
  if (!grid) return;
  const single = window.matchMedia('(max-width: 720px)').matches;
  const cards = Array.from(grid.children).filter(
    (el) => el.matches('[data-card]') && isVisible(el)
  );

  if (single) {
    cards.forEach((card) => {
      card.style.gridColumn = '';
      card.style.gridRow = '';
    });
    return;
  }

  let i = 0;        // card cursor
  let band = 0;     // band counter (drives row-span / height)
  let pairIndex = 0; // rotates the 2-up shape (3+3 / 4+2 / 2+4)
  while (i < cards.length) {
    const remaining = cards.length - i;
    // Pick the next full-width band; the tail cases keep the partition
    // landing exactly on zero so no stranded columns are ever left over.
    let cols;
    if (i === 0 || remaining === 1) {
      cols = HERO;                          // hero leads; a lone leftover → full width
    } else {
      cols = PAIRS[pairIndex++ % PAIRS.length]; // otherwise a 2-up pair
    }
    const rowSpan = BAND_ROWS[band % BAND_ROWS.length];
    cols.forEach((c) => {
      const card = cards[i++];
      card.style.gridColumn = `span ${c}`;
      card.style.gridRow = `span ${rowSpan}`;
    });
    band++;
  }
}

// Wire a grid up: lay out on load + whenever crossing the mobile breakpoint.
export function initBento(grid) {
  if (!grid) return;
  layoutBento(grid);
  let wasSingle = window.matchMedia('(max-width: 720px)').matches;
  window.addEventListener('resize', () => {
    const single = window.matchMedia('(max-width: 720px)').matches;
    if (single !== wasSingle) {
      wasSingle = single;
      layoutBento(grid);
    }
  });
}
