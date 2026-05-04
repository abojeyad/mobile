/* ============================================================
   stores.js — Store catalogue
   ─────────────────────────────────────────────────────────
   RULES FOR DEVELOPERS:
   • Store-level attributes are fixed policies that apply to
     every product the store carries.
   • Per-product pricing and per-listing delivery details
     (freeDelivery, deliveryDaysMin/Max, inStock) live in
     listings.js, NOT here.
   • Service feature flags (loyaltyPoints, returnPolicy, etc.)
     belong here because they are store-wide policies. The UI
     reads them from this file — they must NOT be hardcoded
     anywhere in index.html or other JS files.
   • bg tokens must match CSS variables defined in index.html:
     --b-purple, --b-blue, --b-amber, --b-pink, --b-sage,
     --b-indigo, --b-slate.
   ============================================================ */
var STORES = [

  {
    id:              'asheq-al-otor',
    nameEn:          'Asheq Al-Otor',
    nameAr:          'عاشق العطور',
    initials:        'AO',
    bg:              'var(--b-sage)',
    url:             'asheqalotor.com',
    rating:          4.7,
    reviewCount:     1240,
    verified:        true,
    /* ── Store-wide service feature flags ── */
    /* These flags are read by the UI to render feature chips  */
    /* on the product detail page and compare page. Add/remove */
    /* flags here to control what is shown per store.          */
    freeDelivery:    false,   /* store-level default; per-listing override in listings.js */
    loyaltyPoints:   true,
    returnPolicy:    true,
    installments:    true,
    cashback:        false,
    expressDelivery: true
  },

  {
    id:              'najd-al-otheyah',
    nameEn:          'Najd Al-Otheyah',
    nameAr:          'نجد العذية',
    initials:        'NO',
    bg:              'var(--b-purple)',
    url:             'najdalotheya.com',
    rating:          4.5,
    reviewCount:     620,
    verified:        true,
    freeDelivery:    false,
    loyaltyPoints:   false,
    returnPolicy:    true,
    installments:    false,
    cashback:        false,
    expressDelivery: false
  },

  {
    id:              'be-on-one',
    nameEn:          'Be On One',
    nameAr:          'بي أون ون',
    initials:        'B1',
    bg:              'var(--b-blue)',
    url:             'beonone.com',
    rating:          4.6,
    reviewCount:     890,
    verified:        true,
    freeDelivery:    true,
    loyaltyPoints:   true,
    returnPolicy:    true,
    installments:    true,
    cashback:        true,
    expressDelivery: true
  },

  {
    id:              'abaq',
    nameEn:          'Abaq',
    nameAr:          'عبق',
    initials:        'AB',
    bg:              'var(--b-amber)',
    url:             'abaq.sa',
    rating:          4.8,
    reviewCount:     1500,
    verified:        true,
    freeDelivery:    true,
    loyaltyPoints:   true,
    returnPolicy:    true,
    installments:    true,
    cashback:        true,
    expressDelivery: true
  },

  {
    id:              'candy-niche',
    nameEn:          'Candy Niche',
    nameAr:          'كاندي نيش',
    initials:        'CN',
    bg:              'var(--b-pink)',
    url:             'candyniche.com',
    rating:          4.6,
    reviewCount:     2100,
    verified:        true,
    freeDelivery:    false,
    loyaltyPoints:   true,
    returnPolicy:    true,
    installments:    true,
    cashback:        false,
    expressDelivery: true
  },

  {
    id:              'faces',
    nameEn:          'Faces',
    nameAr:          'وجوه',
    initials:        'FC',
    bg:              'var(--b-indigo)',
    url:             'faces.com',
    rating:          4.7,
    reviewCount:     5400,
    verified:        true,
    freeDelivery:    true,
    loyaltyPoints:   true,
    returnPolicy:    true,
    installments:    true,
    cashback:        true,
    expressDelivery: true
  },

  {
    id:              'baqshan-perfumes',
    nameEn:          'Baqshan Perfumes',
    nameAr:          'عطور بقشان',
    initials:        'BQ',
    bg:              'var(--b-slate)',
    url:             'baqshan.com.sa',
    rating:          4.6,
    reviewCount:     2800,
    verified:        true,
    freeDelivery:    false,
    loyaltyPoints:   true,
    returnPolicy:    true,
    installments:    true,
    cashback:        false,
    expressDelivery: true
  }

];
