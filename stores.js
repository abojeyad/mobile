/* ============================================================
   stores.js — Store catalogue
   Store-level attributes are fixed policies that apply to
   every product the store carries. Per-product pricing and
   delivery details live in listings.js instead.
   ============================================================ */
var STORES = [

  {
    id:             'asheq-al-otor',
    nameEn:         'Asheq Al-Otor',
    nameAr:         'عاشق العطور',
    initials:       'AO',
    bg:             'var(--b-sage)',
    url:            'asheqalotor.com',
    rating:         4.7,
    reviewCount:    1240,
    verified:       true,
    /* Store-level service flags */
    loyaltyPoints:  true,
    returnPolicy:   true,
    installments:   true,
    cashback:       false,
    expressDelivery: true
  },

  {
    id:             'najd-al-otheyah',
    nameEn:         'Najd Al-Otheyah',
    nameAr:         'نجد العذية',
    initials:       'NO',
    bg:             'var(--b-purple)',
    url:            'najdalotheya.com',
    rating:         4.5,
    reviewCount:    620,
    verified:       true,
    loyaltyPoints:  false,
    returnPolicy:   true,
    installments:   false,
    cashback:       false,
    expressDelivery: false
  },

  {
    id:             'be-on-one',
    nameEn:         'Be On One',
    nameAr:         'بي أون ون',
    initials:       'B1',
    bg:             'var(--b-blue)',
    url:            'beonone.com',
    rating:         4.6,
    reviewCount:    890,
    verified:       true,
    loyaltyPoints:  true,
    returnPolicy:   true,
    installments:   true,
    cashback:       true,
    expressDelivery: true
  },

  {
    id:             'abaq',
    nameEn:         'Abaq',
    nameAr:         'عبق',
    initials:       'AB',
    bg:             'var(--b-amber)',
    url:            'abaq.sa',
    rating:         4.8,
    reviewCount:    1500,
    verified:       true,
    loyaltyPoints:  true,
    returnPolicy:   true,
    installments:   true,
    cashback:       true,
    expressDelivery: true
  },

  {
    id:             'candy-niche',
    nameEn:         'Candy Niche',
    nameAr:         'كاندي نيش',
    initials:       'CN',
    bg:             'var(--b-rose)',
    url:            'candyniche.com',
    rating:         4.6,
    reviewCount:    2100,
    verified:       true,
    loyaltyPoints:  true,
    returnPolicy:   true,
    installments:   true,
    cashback:       false,
    expressDelivery: true
  },

  {
    id:             'faces',
    nameEn:         'Faces',
    nameAr:         'وجوه',
    initials:       'FC',
    bg:             'var(--b-indigo)',
    url:            'faces.com',
    rating:         4.7,
    reviewCount:    5400,
    verified:       true,
    loyaltyPoints:  true,
    returnPolicy:   true,
    installments:   true,
    cashback:       true,
    expressDelivery: true
  },

  {
    id:             'baqshan-perfumes',
    nameEn:         'Baqshan Perfumes',
    nameAr:         'عطور بقشان',
    initials:       'BQ',
    bg:             'var(--b-slate)',
    url:            'baqshan.com.sa',
    rating:         4.6,
    reviewCount:    2800,
    verified:       true,
    loyaltyPoints:  true,
    returnPolicy:   true,
    installments:   true,
    cashback:       false,
    expressDelivery: true
  }

];
