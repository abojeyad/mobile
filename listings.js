/* ============================================================
   listings.js — Store × Product × Size price entries
   One entry per (storeId, productId) combination.
   lowestPrice / highestPrice / savings are NEVER stored here —
   they are calculated at runtime from this array.
   ============================================================ */
var LISTINGS = [

  /* ── Dior Sauvage Elixir 60ml (id: 'dior-sauvage-elixir-60') ── */
  { productId: 'dior-sauvage-elixir-60',   storeId: 'asheq-al-otor',      price: 415, discountPercent: 0,  freeDelivery: true,  deliveryDaysMin: 1, deliveryDaysMax: 2, inStock: true,  link: '' },
  { productId: 'dior-sauvage-elixir-60',   storeId: 'abaq',               price: 440, discountPercent: 5,  freeDelivery: true,  deliveryDaysMin: 2, deliveryDaysMax: 3, inStock: true,  link: '' },
  { productId: 'dior-sauvage-elixir-60',   storeId: 'faces',              price: 465, discountPercent: 0,  freeDelivery: true,  deliveryDaysMin: 1, deliveryDaysMax: 2, inStock: true,  link: '' },
  { productId: 'dior-sauvage-elixir-60',   storeId: 'candy-niche',        price: 480, discountPercent: 0,  freeDelivery: false, deliveryDaysMin: 3, deliveryDaysMax: 5, inStock: true,  link: '' },
  { productId: 'dior-sauvage-elixir-60',   storeId: 'najd-al-otheyah',    price: 495, discountPercent: 0,  freeDelivery: false, deliveryDaysMin: 4, deliveryDaysMax: 6, inStock: false, link: '' },

  /* ── Dior Sauvage Elixir 100ml (id: 'dior-sauvage-elixir-100') ── */
  { productId: 'dior-sauvage-elixir-100',  storeId: 'abaq',               price: 580, discountPercent: 9,  freeDelivery: true,  deliveryDaysMin: 2, deliveryDaysMax: 3, inStock: true,  link: '' },
  { productId: 'dior-sauvage-elixir-100',  storeId: 'faces',              price: 610, discountPercent: 0,  freeDelivery: true,  deliveryDaysMin: 1, deliveryDaysMax: 2, inStock: true,  link: '' },
  { productId: 'dior-sauvage-elixir-100',  storeId: 'asheq-al-otor',     price: 640, discountPercent: 0,  freeDelivery: false, deliveryDaysMin: 3, deliveryDaysMax: 5, inStock: true,  link: '' },
  { productId: 'dior-sauvage-elixir-100',  storeId: 'baqshan-perfumes',   price: 660, discountPercent: 0,  freeDelivery: true,  deliveryDaysMin: 2, deliveryDaysMax: 4, inStock: true,  link: '' },
  { productId: 'dior-sauvage-elixir-100',  storeId: 'candy-niche',        price: 695, discountPercent: 0,  freeDelivery: false, deliveryDaysMin: 4, deliveryDaysMax: 6, inStock: false, link: '' },

  /* ── Dior Sauvage Elixir 200ml (id: 'dior-sauvage-elixir-200') ── */
  { productId: 'dior-sauvage-elixir-200',  storeId: 'asheq-al-otor',     price: 850, discountPercent: 0,  freeDelivery: true,  deliveryDaysMin: 1, deliveryDaysMax: 2, inStock: true,  link: '' },
  { productId: 'dior-sauvage-elixir-200',  storeId: 'abaq',               price: 890, discountPercent: 0,  freeDelivery: true,  deliveryDaysMin: 2, deliveryDaysMax: 3, inStock: true,  link: '' },
  { productId: 'dior-sauvage-elixir-200',  storeId: 'baqshan-perfumes',   price: 920, discountPercent: 0,  freeDelivery: false, deliveryDaysMin: 3, deliveryDaysMax: 5, inStock: true,  link: '' },

  /* ── Chanel Bleu de Chanel EDP 50ml (id: 'chanel-bleu-edp-50') ── */
  { productId: 'chanel-bleu-edp-50',       storeId: 'faces',              price: 370, discountPercent: 0,  freeDelivery: true,  deliveryDaysMin: 1, deliveryDaysMax: 2, inStock: true,  link: '' },
  { productId: 'chanel-bleu-edp-50',       storeId: 'abaq',               price: 385, discountPercent: 5,  freeDelivery: true,  deliveryDaysMin: 2, deliveryDaysMax: 3, inStock: true,  link: '' },
  { productId: 'chanel-bleu-edp-50',       storeId: 'asheq-al-otor',     price: 400, discountPercent: 0,  freeDelivery: false, deliveryDaysMin: 3, deliveryDaysMax: 5, inStock: true,  link: '' },

  /* ── Chanel Bleu de Chanel EDP 100ml (id: 'chanel-bleu-edp-100') ── */
  { productId: 'chanel-bleu-edp-100',      storeId: 'faces',              price: 485, discountPercent: 20, freeDelivery: true,  deliveryDaysMin: 1, deliveryDaysMax: 2, inStock: true,  link: '' },
  { productId: 'chanel-bleu-edp-100',      storeId: 'be-on-one',          price: 510, discountPercent: 0,  freeDelivery: true,  deliveryDaysMin: 2, deliveryDaysMax: 3, inStock: true,  link: '' },
  { productId: 'chanel-bleu-edp-100',      storeId: 'asheq-al-otor',     price: 545, discountPercent: 0,  freeDelivery: false, deliveryDaysMin: 3, deliveryDaysMax: 5, inStock: true,  link: '' },
  { productId: 'chanel-bleu-edp-100',      storeId: 'baqshan-perfumes',   price: 555, discountPercent: 0,  freeDelivery: true,  deliveryDaysMin: 2, deliveryDaysMax: 4, inStock: true,  link: '' },
  { productId: 'chanel-bleu-edp-100',      storeId: 'najd-al-otheyah',   price: 570, discountPercent: 0,  freeDelivery: false, deliveryDaysMin: 4, deliveryDaysMax: 6, inStock: false, link: '' },

  /* ── Chanel Bleu de Chanel EDP 150ml (id: 'chanel-bleu-edp-150') ── */
  { productId: 'chanel-bleu-edp-150',      storeId: 'faces',              price: 660, discountPercent: 0,  freeDelivery: true,  deliveryDaysMin: 1, deliveryDaysMax: 2, inStock: true,  link: '' },
  { productId: 'chanel-bleu-edp-150',      storeId: 'abaq',               price: 695, discountPercent: 0,  freeDelivery: true,  deliveryDaysMin: 2, deliveryDaysMax: 3, inStock: true,  link: '' },
  { productId: 'chanel-bleu-edp-150',      storeId: 'baqshan-perfumes',   price: 720, discountPercent: 0,  freeDelivery: false, deliveryDaysMin: 3, deliveryDaysMax: 5, inStock: true,  link: '' },

  /* ── Tom Ford Black Orchid 30ml (id: 'tomford-black-orchid-30') ── */
  { productId: 'tomford-black-orchid-30',  storeId: 'candy-niche',        price: 320, discountPercent: 0,  freeDelivery: true,  deliveryDaysMin: 2, deliveryDaysMax: 3, inStock: true,  link: '' },
  { productId: 'tomford-black-orchid-30',  storeId: 'abaq',               price: 340, discountPercent: 0,  freeDelivery: true,  deliveryDaysMin: 1, deliveryDaysMax: 2, inStock: true,  link: '' },

  /* ── Tom Ford Black Orchid 50ml (id: 'tomford-black-orchid-50') ── */
  { productId: 'tomford-black-orchid-50',  storeId: 'faces',              price: 420, discountPercent: 17, freeDelivery: true,  deliveryDaysMin: 2, deliveryDaysMax: 3, inStock: true,  link: '' },
  { productId: 'tomford-black-orchid-50',  storeId: 'abaq',               price: 455, discountPercent: 0,  freeDelivery: true,  deliveryDaysMin: 1, deliveryDaysMax: 2, inStock: true,  link: '' },
  { productId: 'tomford-black-orchid-50',  storeId: 'baqshan-perfumes',   price: 490, discountPercent: 0,  freeDelivery: false, deliveryDaysMin: 3, deliveryDaysMax: 5, inStock: true,  link: '' },

  /* ── Tom Ford Black Orchid 100ml (id: 'tomford-black-orchid-100') ── */
  { productId: 'tomford-black-orchid-100', storeId: 'candy-niche',        price: 520, discountPercent: 0,  freeDelivery: false, deliveryDaysMin: 2, deliveryDaysMax: 4, inStock: true,  link: '' },
  { productId: 'tomford-black-orchid-100', storeId: 'asheq-al-otor',     price: 550, discountPercent: 0,  freeDelivery: false, deliveryDaysMin: 4, deliveryDaysMax: 6, inStock: true,  link: '' },
  { productId: 'tomford-black-orchid-100', storeId: 'faces',              price: 580, discountPercent: 0,  freeDelivery: true,  deliveryDaysMin: 1, deliveryDaysMax: 2, inStock: false, link: '' },

  /* ── YSL Libre Intense 30ml (id: 'ysl-libre-intense-30') ── */
  { productId: 'ysl-libre-intense-30',     storeId: 'faces',              price: 380, discountPercent: 0,  freeDelivery: true,  deliveryDaysMin: 2, deliveryDaysMax: 3, inStock: true,  link: '' },
  { productId: 'ysl-libre-intense-30',     storeId: 'be-on-one',          price: 395, discountPercent: 0,  freeDelivery: true,  deliveryDaysMin: 2, deliveryDaysMax: 4, inStock: true,  link: '' },

  /* ── YSL Libre Intense 50ml (id: 'ysl-libre-intense-50') ── */
  { productId: 'ysl-libre-intense-50',     storeId: 'asheq-al-otor',     price: 460, discountPercent: 0,  freeDelivery: true,  deliveryDaysMin: 2, deliveryDaysMax: 3, inStock: true,  link: '' },
  { productId: 'ysl-libre-intense-50',     storeId: 'abaq',               price: 490, discountPercent: 10, freeDelivery: true,  deliveryDaysMin: 1, deliveryDaysMax: 2, inStock: true,  link: '' },
  { productId: 'ysl-libre-intense-50',     storeId: 'candy-niche',        price: 510, discountPercent: 0,  freeDelivery: false, deliveryDaysMin: 3, deliveryDaysMax: 5, inStock: true,  link: '' },

  /* ── YSL Libre Intense 90ml (id: 'ysl-libre-intense-90') ── */
  { productId: 'ysl-libre-intense-90',     storeId: 'faces',              price: 520, discountPercent: 15, freeDelivery: true,  deliveryDaysMin: 1, deliveryDaysMax: 2, inStock: true,  link: '' },
  { productId: 'ysl-libre-intense-90',     storeId: 'be-on-one',          price: 545, discountPercent: 0,  freeDelivery: true,  deliveryDaysMin: 2, deliveryDaysMax: 4, inStock: true,  link: '' },
  { productId: 'ysl-libre-intense-90',     storeId: 'baqshan-perfumes',   price: 580, discountPercent: 0,  freeDelivery: false, deliveryDaysMin: 4, deliveryDaysMax: 6, inStock: false, link: '' },

  /* ── YSL Libre Intense 150ml (id: 'ysl-libre-intense-150') ── */
  { productId: 'ysl-libre-intense-150',    storeId: 'abaq',               price: 750, discountPercent: 0,  freeDelivery: true,  deliveryDaysMin: 1, deliveryDaysMax: 2, inStock: true,  link: '' },
  { productId: 'ysl-libre-intense-150',    storeId: 'faces',              price: 780, discountPercent: 0,  freeDelivery: true,  deliveryDaysMin: 2, deliveryDaysMax: 3, inStock: true,  link: '' },

  /* ── MFK Baccarat Rouge 540 EDP 35ml (id: 'mfk-baccarat-rouge-540-35') ── */
  { productId: 'mfk-baccarat-rouge-540-35',  storeId: 'candy-niche',     price: 950,  discountPercent: 0,  freeDelivery: true,  deliveryDaysMin: 2, deliveryDaysMax: 3, inStock: true,  link: '' },
  { productId: 'mfk-baccarat-rouge-540-35',  storeId: 'asheq-al-otor',  price: 980,  discountPercent: 0,  freeDelivery: false, deliveryDaysMin: 3, deliveryDaysMax: 5, inStock: true,  link: '' },

  /* ── MFK Baccarat Rouge 540 EDP 70ml (id: 'mfk-baccarat-rouge-540-70') ── */
  { productId: 'mfk-baccarat-rouge-540-70',  storeId: 'asheq-al-otor',  price: 1250, discountPercent: 0,  freeDelivery: true,  deliveryDaysMin: 2, deliveryDaysMax: 3, inStock: true,  link: '' },
  { productId: 'mfk-baccarat-rouge-540-70',  storeId: 'abaq',            price: 1320, discountPercent: 8,  freeDelivery: true,  deliveryDaysMin: 1, deliveryDaysMax: 2, inStock: true,  link: '' },
  { productId: 'mfk-baccarat-rouge-540-70',  storeId: 'candy-niche',     price: 1380, discountPercent: 0,  freeDelivery: false, deliveryDaysMin: 3, deliveryDaysMax: 5, inStock: true,  link: '' },
  { productId: 'mfk-baccarat-rouge-540-70',  storeId: 'faces',           price: 1420, discountPercent: 0,  freeDelivery: true,  deliveryDaysMin: 1, deliveryDaysMax: 2, inStock: true,  link: '' },

  /* ── MFK Baccarat Rouge 540 EDP 200ml (id: 'mfk-baccarat-rouge-540-200') ── */
  { productId: 'mfk-baccarat-rouge-540-200', storeId: 'faces',           price: 1450, discountPercent: 0,  freeDelivery: true,  deliveryDaysMin: 1, deliveryDaysMax: 2, inStock: true,  link: '' },
  { productId: 'mfk-baccarat-rouge-540-200', storeId: 'najd-al-otheyah', price: 1500, discountPercent: 0,  freeDelivery: false, deliveryDaysMin: 4, deliveryDaysMax: 6, inStock: true,  link: '' },
  { productId: 'mfk-baccarat-rouge-540-200', storeId: 'baqshan-perfumes', price:1550, discountPercent: 0,  freeDelivery: false, deliveryDaysMin: 3, deliveryDaysMax: 5, inStock: false, link: '' },

  /* ── Creed Aventus 50ml (id: 'creed-aventus-50') ── */
  { productId: 'creed-aventus-50',         storeId: 'candy-niche',        price: 820,  discountPercent: 0,  freeDelivery: true,  deliveryDaysMin: 2, deliveryDaysMax: 3, inStock: true,  link: '' },
  { productId: 'creed-aventus-50',         storeId: 'abaq',               price: 860,  discountPercent: 5,  freeDelivery: true,  deliveryDaysMin: 1, deliveryDaysMax: 2, inStock: true,  link: '' },
  { productId: 'creed-aventus-50',         storeId: 'asheq-al-otor',     price: 890,  discountPercent: 0,  freeDelivery: false, deliveryDaysMin: 3, deliveryDaysMax: 5, inStock: true,  link: '' },

  /* ── Creed Aventus 100ml (id: 'creed-aventus-100') ── */
  { productId: 'creed-aventus-100',        storeId: 'abaq',               price: 1100, discountPercent: 0,  freeDelivery: true,  deliveryDaysMin: 1, deliveryDaysMax: 2, inStock: true,  link: '' },
  { productId: 'creed-aventus-100',        storeId: 'faces',              price: 1150, discountPercent: 0,  freeDelivery: true,  deliveryDaysMin: 2, deliveryDaysMax: 3, inStock: true,  link: '' },
  { productId: 'creed-aventus-100',        storeId: 'candy-niche',        price: 1190, discountPercent: 0,  freeDelivery: false, deliveryDaysMin: 3, deliveryDaysMax: 5, inStock: true,  link: '' },
  { productId: 'creed-aventus-100',        storeId: 'baqshan-perfumes',   price: 1220, discountPercent: 0,  freeDelivery: true,  deliveryDaysMin: 2, deliveryDaysMax: 4, inStock: false, link: '' }

];

/* ============================================================
   Runtime helpers — call these instead of reading product fields
   ============================================================ */

/* All listings for a given productId */
function getListings(productId) {
  return LISTINGS.filter(function(l) { return l.productId === productId; });
}

/* Lowest price across all stores for this product */
function getLowestPrice(productId) {
  var ls = getListings(productId).filter(function(l) { return l.inStock; });
  if (!ls.length) return null;
  return Math.min.apply(null, ls.map(function(l) { return l.price; }));
}

/* Highest price across all stores for this product */
function getHighestPrice(productId) {
  var ls = getListings(productId);
  if (!ls.length) return null;
  return Math.max.apply(null, ls.map(function(l) { return l.price; }));
}

/* Savings = difference between highest and lowest in-stock price */
function getSavings(productId) {
  var lo = getLowestPrice(productId);
  var hi = getHighestPrice(productId);
  if (lo === null || hi === null) return 0;
  return hi - lo;
}

/* Number of stores that carry this product (any stock status) */
function getStoresCount(productId) {
  return getListings(productId).length;
}

/* Best listing = in-stock listing with the lowest price */
function getBestListing(productId) {
  var ls = getListings(productId).filter(function(l) { return l.inStock; });
  if (!ls.length) return null;
  return ls.reduce(function(best, l) { return l.price < best.price ? l : best; }, ls[0]);
}
