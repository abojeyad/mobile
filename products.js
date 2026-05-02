/* ============================================================
   products.js — Product catalogue
   One entry per size variant. Pricing lives in listings.js.
   lowestPrice / highestPrice / savings / storesCount are
   calculated at runtime using the helpers in listings.js.

   variantGroupId groups all sizes of the same fragrance so
   the product detail page can render a size selector.
   ============================================================ */
var PRODUCTS = [

  /* ──────────────────────────────────────────────────────────
     DIOR — SAUVAGE ELIXIR
     variantGroupId: 'dior-sauvage-elixir'
  ────────────────────────────────────────────────────────── */
  {
    id:              'dior-sauvage-elixir-60',
    variantGroupId:  'dior-sauvage-elixir',
    brandId:         'dior',
    img:             'jpeg1.jpg',
    bg:              '#E0F4ED',
    initials:        'DS',

    nameEn:          'Sauvage Elixir',
    nameAr:          'سوفاج إكسير',
    brandEn:         'Dior',
    brandAr:         'ديور',
    houseEn:         'Christian Dior',
    houseAr:         'كريستيان ديور',
    familyEn:        'Aromatic Fougere',
    familyAr:        'أروماتيك فوچير',
    genderEn:        'Masculine',
    genderAr:        'رجالي',
    countryEn:       'France',
    countryAr:       'فرنسا',
    perfumerEn:      'Francois Demachy',
    perfumerAr:      'فرانسوا ديماشي',
    year:            '2021',
    size:            '60ml',
    concentrationEn: 'Elixir',
    concentrationAr: 'إكسير',
    wearSeasonEn:    'Winter',
    wearSeasonAr:    'شتوي',
    wearTimeEn:      'Night',
    wearTimeAr:      'ليلي',
    rating:          '4.8',
    currencyEn:      'SAR',
    currencyAr:      'ريال',

    descEn: 'An extraordinary concentration of Sauvage. This fragrance pushes the limits of freshness and spice with a wild heart of lavender enhanced by rich woods.',
    descAr: 'تركيز استثنائي من سوفاج. يتجاوز هذا العطر حدود الانتعاش والتوابل. قلب بري من اللافندر تبرزه الأخشاب الغنية.',

	accords: [
		  { nameEn: 'Floral',  nameAr: 'زهري',  percent: 95 },
		  { nameEn: 'Amber',   nameAr: 'عنبر',  percent: 88 },
		  { nameEn: 'Musky',   nameAr: 'مسكي',  percent: 80 },
		  { nameEn: 'Fresh',   nameAr: 'منعش',  percent: 72 },
		  { nameEn: 'Fruity',  nameAr: 'فاكهي', percent: 65 },
		  { nameEn: 'Leather', nameAr: 'جلدي',  percent: 55 }
		],
    notes: {
      topEn:   ['Cinnamon', 'Cardamom', 'Nutmeg'],
      topAr:   ['القرفة', 'الهيل', 'جوزة الطيب'],
      heartEn: ['Lavender'],
      heartAr: ['اللافندر'],
      baseEn:  ['Licorice', 'Sandalwood', 'Amber', 'Patchouli', 'Haiti Vetiver'],
      baseAr:  ['العرقسوس', 'خشب الصندل', 'العنبر', 'الباتشولي', 'نجيل الهند']
    }
  },

  {
    id:              'dior-sauvage-elixir-100',
    variantGroupId:  'dior-sauvage-elixir',
    brandId:         'dior',
    img:             'jpeg1.jpg',
    bg:              '#E0F4ED',
    initials:        'DS',

    nameEn:          'Sauvage Elixir',
    nameAr:          'سوفاج إكسير',
    brandEn:         'Dior',
    brandAr:         'ديور',
    houseEn:         'Christian Dior',
    houseAr:         'كريستيان ديور',
    familyEn:        'Aromatic Fougere',
    familyAr:        'أروماتيك فوچير',
    genderEn:        'Masculine',
    genderAr:        'رجالي',
    countryEn:       'France',
    countryAr:       'فرنسا',
    perfumerEn:      'Francois Demachy',
    perfumerAr:      'فرانسوا ديماشي',
    year:            '2021',
    size:            '100ml',
    concentrationEn: 'Elixir',
    concentrationAr: 'إكسير',
    wearSeasonEn:    'Winter',
    wearSeasonAr:    'شتوي',
    wearTimeEn:      'Night',
    wearTimeAr:      'ليلي',
    rating:          '4.8',
    currencyEn:      'SAR',
    currencyAr:      'ريال',

    descEn: 'An extraordinary concentration of Sauvage. This fragrance pushes the limits of freshness and spice with a wild heart of lavender enhanced by rich woods.',
    descAr: 'تركيز استثنائي من سوفاج. يتجاوز هذا العطر حدود الانتعاش والتوابل. قلب بري من اللافندر تبرزه الأخشاب الغنية.',

	accords: [
		  { nameEn: 'Floral',  nameAr: 'زهري',  percent: 95 },
		  { nameEn: 'Amber',   nameAr: 'عنبر',  percent: 88 },
		  { nameEn: 'Musky',   nameAr: 'مسكي',  percent: 80 },
		  { nameEn: 'Fresh',   nameAr: 'منعش',  percent: 72 },
		  { nameEn: 'Fruity',  nameAr: 'فاكهي', percent: 65 },
		  { nameEn: 'Leather', nameAr: 'جلدي',  percent: 55 }
		],

    notes: {
      topEn:   ['Cinnamon', 'Cardamom', 'Nutmeg'],
      topAr:   ['القرفة', 'الهيل', 'جوزة الطيب'],
      heartEn: ['Lavender'],
      heartAr: ['اللافندر'],
      baseEn:  ['Licorice', 'Sandalwood', 'Amber', 'Patchouli', 'Haiti Vetiver'],
      baseAr:  ['العرقسوس', 'خشب الصندل', 'العنبر', 'الباتشولي', 'نجيل الهند']
    }
  },

  {
    id:              'dior-sauvage-elixir-200',
    variantGroupId:  'dior-sauvage-elixir',
    brandId:         'dior',
    img:             'jpeg1.jpg',
    bg:              '#E0F4ED',
    initials:        'DS',

    nameEn:          'Sauvage Elixir',
    nameAr:          'سوفاج إكسير',
    brandEn:         'Dior',
    brandAr:         'ديور',
    houseEn:         'Christian Dior',
    houseAr:         'كريستيان ديور',
    familyEn:        'Aromatic Fougere',
    familyAr:        'أروماتيك فوچير',
    genderEn:        'Masculine',
    genderAr:        'رجالي',
    countryEn:       'France',
    countryAr:       'فرنسا',
    perfumerEn:      'Francois Demachy',
    perfumerAr:      'فرانسوا ديماشي',
    year:            '2021',
    size:            '200ml',
    concentrationEn: 'Elixir',
    concentrationAr: 'إكسير',
    wearSeasonEn:    'Winter',
    wearSeasonAr:    'شتوي',
    wearTimeEn:      'Night',
    wearTimeAr:      'ليلي',
    rating:          '4.8',
    currencyEn:      'SAR',
    currencyAr:      'ريال',

    descEn: 'An extraordinary concentration of Sauvage. This fragrance pushes the limits of freshness and spice with a wild heart of lavender enhanced by rich woods.',
    descAr: 'تركيز استثنائي من سوفاج. يتجاوز هذا العطر حدود الانتعاش والتوابل. قلب بري من اللافندر تبرزه الأخشاب الغنية.',

	accords: [
		  { nameEn: 'Floral',  nameAr: 'زهري',  percent: 95 },
		  { nameEn: 'Amber',   nameAr: 'عنبر',  percent: 88 },
		  { nameEn: 'Musky',   nameAr: 'مسكي',  percent: 80 },
		  { nameEn: 'Fresh',   nameAr: 'منعش',  percent: 72 },
		  { nameEn: 'Fruity',  nameAr: 'فاكهي', percent: 65 },
		  { nameEn: 'Leather', nameAr: 'جلدي',  percent: 55 }
		],

    notes: {
      topEn:   ['Cinnamon', 'Cardamom', 'Nutmeg'],
      topAr:   ['القرفة', 'الهيل', 'جوزة الطيب'],
      heartEn: ['Lavender'],
      heartAr: ['اللافندر'],
      baseEn:  ['Licorice', 'Sandalwood', 'Amber', 'Patchouli', 'Haiti Vetiver'],
      baseAr:  ['العرقسوس', 'خشب الصندل', 'العنبر', 'الباتشولي', 'نجيل الهند']
    }
  },

  /* ──────────────────────────────────────────────────────────
     CHANEL — BLEU DE CHANEL EDP
     variantGroupId: 'chanel-bleu-edp'
  ────────────────────────────────────────────────────────── */
  {
    id:              'chanel-bleu-edp-50',
    variantGroupId:  'chanel-bleu-edp',
    brandId:         'chanel',
    img:             'jpeg2.jpg',
    bg:              '#EAE9FB',
    initials:        'Cd',

    nameEn:          'Bleu de Chanel EDP',
    nameAr:          'بلو دو شانيل (أو دو بارفيوم)',
    brandEn:         'Chanel',
    brandAr:         'شانيل',
    houseEn:         'Chanel',
    houseAr:         'شانيل',
    familyEn:        'Woody Aromatic',
    familyAr:        'أروماتيك خشبي',
    genderEn:        'Masculine',
    genderAr:        'رجالي',
    countryEn:       'France',
    countryAr:       'فرنسا',
    perfumerEn:      'Jacques Polge',
    perfumerAr:      'جاك بولج',
    year:            '2014',
    size:            '50ml',
    concentrationEn: 'Eau de Parfum',
    concentrationAr: 'أو دو بارفيوم',
    wearSeasonEn:    'All Seasons',
    wearSeasonAr:    'كل الفصول',
    wearTimeEn:      'Day & Night',
    wearTimeAr:      'نهاري وليلي',
    rating:          '4.6',
    currencyEn:      'SAR',
    currencyAr:      'ريال',

    descEn: 'A modern masculine icon. Citrus and bergamot open brightly before settling into a deep woody heart of vetiver and cedarwood.',
    descAr: 'أيقونة ذكورية عصرية. تفتتح الرائحة بانتعاش الحمضيات والبرغموت قبل أن تستقر في قلب خشبي عميق من نجيل الهند وخشب الأرز.',

	accords: [
		  { nameEn: 'Floral',  nameAr: 'زهري',  percent: 95 },
		  { nameEn: 'Amber',   nameAr: 'عنبر',  percent: 88 },
		  { nameEn: 'Musky',   nameAr: 'مسكي',  percent: 80 },
		  { nameEn: 'Fresh',   nameAr: 'منعش',  percent: 72 },
		  { nameEn: 'Fruity',  nameAr: 'فاكهي', percent: 65 },
		  { nameEn: 'Leather', nameAr: 'جلدي',  percent: 55 }
		],

    notes: {
      topEn:   ['Citrus', 'Bergamot', 'Pink Pepper', 'Coriander'],
      topAr:   ['الحمضيات', 'البرغموت', 'الفلفل الوردي', 'الكزبرة'],
      heartEn: ['Vetiver', 'Cedarwood', 'Melon'],
      heartAr: ['نجيل الهند', 'خشب الأرز', 'البطيخ'],
      baseEn:  ['Patchouli', 'Labdanum', 'Sandalwood', 'Amberwood'],
      baseAr:  ['الباتشولي', 'اللابدانوم', 'خشب الصندل', 'خشب العنبر']
    }
  },

  {
    id:              'chanel-bleu-edp-100',
    variantGroupId:  'chanel-bleu-edp',
    brandId:         'chanel',
    img:             'jpeg2.jpg',
    bg:              '#EAE9FB',
    initials:        'Cd',

    nameEn:          'Bleu de Chanel EDP',
    nameAr:          'بلو دو شانيل (أو دو بارفيوم)',
    brandEn:         'Chanel',
    brandAr:         'شانيل',
    houseEn:         'Chanel',
    houseAr:         'شانيل',
    familyEn:        'Woody Aromatic',
    familyAr:        'أروماتيك خشبي',
    genderEn:        'Masculine',
    genderAr:        'رجالي',
    countryEn:       'France',
    countryAr:       'فرنسا',
    perfumerEn:      'Jacques Polge',
    perfumerAr:      'جاك بولج',
    year:            '2014',
    size:            '100ml',
    concentrationEn: 'Eau de Parfum',
    concentrationAr: 'أو دو بارفيوم',
    wearSeasonEn:    'All Seasons',
    wearSeasonAr:    'كل الفصول',
    wearTimeEn:      'Day & Night',
    wearTimeAr:      'نهاري وليلي',
    rating:          '4.6',
    currencyEn:      'SAR',
    currencyAr:      'ريال',

    descEn: 'A modern masculine icon. Citrus and bergamot open brightly before settling into a deep woody heart of vetiver and cedarwood.',
    descAr: 'أيقونة ذكورية عصرية. تفتتح الرائحة بانتعاش الحمضيات والبرغموت قبل أن تستقر في قلب خشبي عميق من نجيل الهند وخشب الأرز.',

	accords: [
		  { nameEn: 'Floral',  nameAr: 'زهري',  percent: 95 },
		  { nameEn: 'Amber',   nameAr: 'عنبر',  percent: 88 },
		  { nameEn: 'Musky',   nameAr: 'مسكي',  percent: 80 },
		  { nameEn: 'Fresh',   nameAr: 'منعش',  percent: 72 },
		  { nameEn: 'Fruity',  nameAr: 'فاكهي', percent: 65 },
		  { nameEn: 'Leather', nameAr: 'جلدي',  percent: 55 }
		],

    notes: {
      topEn:   ['Citrus', 'Bergamot', 'Pink Pepper', 'Coriander'],
      topAr:   ['الحمضيات', 'البرغموت', 'الفلفل الوردي', 'الكزبرة'],
      heartEn: ['Vetiver', 'Cedarwood', 'Melon'],
      heartAr: ['نجيل الهند', 'خشب الأرز', 'البطيخ'],
      baseEn:  ['Patchouli', 'Labdanum', 'Sandalwood', 'Amberwood'],
      baseAr:  ['الباتشولي', 'اللابدانوم', 'خشب الصندل', 'خشب العنبر']
    }
  },

  {
    id:              'chanel-bleu-edp-150',
    variantGroupId:  'chanel-bleu-edp',
    brandId:         'chanel',
    img:             'jpeg2.jpg',
    bg:              '#EAE9FB',
    initials:        'Cd',

    nameEn:          'Bleu de Chanel EDP',
    nameAr:          'بلو دو شانيل (أو دو بارفيوم)',
    brandEn:         'Chanel',
    brandAr:         'شانيل',
    houseEn:         'Chanel',
    houseAr:         'شانيل',
    familyEn:        'Woody Aromatic',
    familyAr:        'أروماتيك خشبي',
    genderEn:        'Masculine',
    genderAr:        'رجالي',
    countryEn:       'France',
    countryAr:       'فرنسا',
    perfumerEn:      'Jacques Polge',
    perfumerAr:      'جاك بولج',
    year:            '2014',
    size:            '150ml',
    concentrationEn: 'Eau de Parfum',
    concentrationAr: 'أو دو بارفيوم',
    wearSeasonEn:    'All Seasons',
    wearSeasonAr:    'كل الفصول',
    wearTimeEn:      'Day & Night',
    wearTimeAr:      'نهاري وليلي',
    rating:          '4.6',
    currencyEn:      'SAR',
    currencyAr:      'ريال',

    descEn: 'A modern masculine icon. Citrus and bergamot open brightly before settling into a deep woody heart of vetiver and cedarwood.',
    descAr: 'أيقونة ذكورية عصرية. تفتتح الرائحة بانتعاش الحمضيات والبرغموت قبل أن تستقر في قلب خشبي عميق من نجيل الهند وخشب الأرز.',

	accords: [
		  { nameEn: 'Floral',  nameAr: 'زهري',  percent: 95 },
		  { nameEn: 'Amber',   nameAr: 'عنبر',  percent: 88 },
		  { nameEn: 'Musky',   nameAr: 'مسكي',  percent: 80 },
		  { nameEn: 'Fresh',   nameAr: 'منعش',  percent: 72 },
		  { nameEn: 'Fruity',  nameAr: 'فاكهي', percent: 65 },
		  { nameEn: 'Leather', nameAr: 'جلدي',  percent: 55 }
		],
    notes: {
      topEn:   ['Citrus', 'Bergamot', 'Pink Pepper', 'Coriander'],
      topAr:   ['الحمضيات', 'البرغموت', 'الفلفل الوردي', 'الكزبرة'],
      heartEn: ['Vetiver', 'Cedarwood', 'Melon'],
      heartAr: ['نجيل الهند', 'خشب الأرز', 'البطيخ'],
      baseEn:  ['Patchouli', 'Labdanum', 'Sandalwood', 'Amberwood'],
      baseAr:  ['الباتشولي', 'اللابدانوم', 'خشب الصندل', 'خشب العنبر']
    }
  },

  /* ──────────────────────────────────────────────────────────
     TOM FORD — BLACK ORCHID
     variantGroupId: 'tomford-black-orchid'
  ────────────────────────────────────────────────────────── */
  {
    id:              'tomford-black-orchid-30',
    variantGroupId:  'tomford-black-orchid',
    brandId:         'tom-ford',
    img:             'jpeg3.jpg',
    bg:              '#FBF1E0',
    initials:        'Tf',

    nameEn:          'Black Orchid',
    nameAr:          'بلاك أوركيد',
    brandEn:         'Tom Ford',
    brandAr:         'توم فورد',
    houseEn:         'Tom Ford Beauty',
    houseAr:         'توم فورد بيوتي',
    familyEn:        'Oriental Floral',
    familyAr:        'شرقي زهري',
    genderEn:        'Unisex',
    genderAr:        'للجنسين',
    countryEn:       'USA',
    countryAr:       'الولايات المتحدة',
    perfumerEn:      'Givaudan',
    perfumerAr:      'جيفودان',
    year:            '2006',
    size:            '30ml',
    concentrationEn: 'Eau de Parfum',
    concentrationAr: 'أو دو بارفيوم',
    wearSeasonEn:    'Autumn',
    wearSeasonAr:    'خريفي',
    wearTimeEn:      'Night',
    wearTimeAr:      'ليلي',
    rating:          '4.4',
    currencyEn:      'SAR',
    currencyAr:      'ريال',

    descEn: 'A luxurious and sensual fragrance of rich, dark accords and an alluring potion of black orchids and spice.',
    descAr: 'عطر فاخر وحسي يتكون من نفحات داكنة وغنية ومزيج ساحر من الأوركيد الأسود والتوابل.',

	accords: [
		  { nameEn: 'Floral',  nameAr: 'زهري',  percent: 95 },
		  { nameEn: 'Amber',   nameAr: 'عنبر',  percent: 88 },
		  { nameEn: 'Musky',   nameAr: 'مسكي',  percent: 80 },
		  { nameEn: 'Fresh',   nameAr: 'منعش',  percent: 72 },
		  { nameEn: 'Fruity',  nameAr: 'فاكهي', percent: 65 },
		  { nameEn: 'Leather', nameAr: 'جلدي',  percent: 55 }
		],
    notes: {
      topEn:   ['Truffle', 'Bergamot', 'Black Currant', 'Ylang-Ylang'],
      topAr:   ['الكمأة', 'البرغموت', 'الكشمش الأسود', 'إيلانج إيلانج'],
      heartEn: ['Black Orchid', 'Spices', 'Jasmine', 'Gardenia'],
      heartAr: ['الأوركيد الأسود', 'التوابل', 'الياسمين', 'الغاردينيا'],
      baseEn:  ['Patchouli', 'Vanilla', 'Sandalwood', 'Dark Chocolate'],
      baseAr:  ['الباتشولي', 'الفانيليا', 'خشب الصندل', 'الشوكولاتة الداكنة']
    }
  },

  {
    id:              'tomford-black-orchid-50',
    variantGroupId:  'tomford-black-orchid',
    brandId:         'tom-ford',
    img:             'jpeg3.jpg',
    bg:              '#FBF1E0',
    initials:        'Tf',

    nameEn:          'Black Orchid',
    nameAr:          'بلاك أوركيد',
    brandEn:         'Tom Ford',
    brandAr:         'توم فورد',
    houseEn:         'Tom Ford Beauty',
    houseAr:         'توم فورد بيوتي',
    familyEn:        'Oriental Floral',
    familyAr:        'شرقي زهري',
    genderEn:        'Unisex',
    genderAr:        'للجنسين',
    countryEn:       'USA',
    countryAr:       'الولايات المتحدة',
    perfumerEn:      'Givaudan',
    perfumerAr:      'جيفودان',
    year:            '2006',
    size:            '50ml',
    concentrationEn: 'Eau de Parfum',
    concentrationAr: 'أو دو بارفيوم',
    wearSeasonEn:    'Autumn',
    wearSeasonAr:    'خريفي',
    wearTimeEn:      'Night',
    wearTimeAr:      'ليلي',
    rating:          '4.4',
    currencyEn:      'SAR',
    currencyAr:      'ريال',

    descEn: 'A luxurious and sensual fragrance of rich, dark accords and an alluring potion of black orchids and spice.',
    descAr: 'عطر فاخر وحسي يتكون من نفحات داكنة وغنية ومزيج ساحر من الأوركيد الأسود والتوابل.',

	accords: [
		  { nameEn: 'Floral',  nameAr: 'زهري',  percent: 95 },
		  { nameEn: 'Amber',   nameAr: 'عنبر',  percent: 88 },
		  { nameEn: 'Musky',   nameAr: 'مسكي',  percent: 80 },
		  { nameEn: 'Fresh',   nameAr: 'منعش',  percent: 72 },
		  { nameEn: 'Fruity',  nameAr: 'فاكهي', percent: 65 },
		  { nameEn: 'Leather', nameAr: 'جلدي',  percent: 55 }
		],
    notes: {
      topEn:   ['Truffle', 'Bergamot', 'Black Currant', 'Ylang-Ylang'],
      topAr:   ['الكمأة', 'البرغموت', 'الكشمش الأسود', 'إيلانج إيلانج'],
      heartEn: ['Black Orchid', 'Spices', 'Jasmine', 'Gardenia'],
      heartAr: ['الأوركيد الأسود', 'التوابل', 'الياسمين', 'الغاردينيا'],
      baseEn:  ['Patchouli', 'Vanilla', 'Sandalwood', 'Dark Chocolate'],
      baseAr:  ['الباتشولي', 'الفانيليا', 'خشب الصندل', 'الشوكولاتة الداكنة']
    }
  },

  {
    id:              'tomford-black-orchid-100',
    variantGroupId:  'tomford-black-orchid',
    brandId:         'tom-ford',
    img:             'jpeg3.jpg',
    bg:              '#FBF1E0',
    initials:        'Tf',

    nameEn:          'Black Orchid',
    nameAr:          'بلاك أوركيد',
    brandEn:         'Tom Ford',
    brandAr:         'توم فورد',
    houseEn:         'Tom Ford Beauty',
    houseAr:         'توم فورد بيوتي',
    familyEn:        'Oriental Floral',
    familyAr:        'شرقي زهري',
    genderEn:        'Unisex',
    genderAr:        'للجنسين',
    countryEn:       'USA',
    countryAr:       'الولايات المتحدة',
    perfumerEn:      'Givaudan',
    perfumerAr:      'جيفودان',
    year:            '2006',
    size:            '100ml',
    concentrationEn: 'Eau de Parfum',
    concentrationAr: 'أو دو بارفيوم',
    wearSeasonEn:    'Autumn',
    wearSeasonAr:    'خريفي',
    wearTimeEn:      'Night',
    wearTimeAr:      'ليلي',
    rating:          '4.4',
    currencyEn:      'SAR',
    currencyAr:      'ريال',

    descEn: 'A luxurious and sensual fragrance of rich, dark accords and an alluring potion of black orchids and spice.',
    descAr: 'عطر فاخر وحسي يتكون من نفحات داكنة وغنية ومزيج ساحر من الأوركيد الأسود والتوابل.',

	accords: [
		  { nameEn: 'Floral',  nameAr: 'زهري',  percent: 95 },
		  { nameEn: 'Amber',   nameAr: 'عنبر',  percent: 88 },
		  { nameEn: 'Musky',   nameAr: 'مسكي',  percent: 80 },
		  { nameEn: 'Fresh',   nameAr: 'منعش',  percent: 72 },
		  { nameEn: 'Fruity',  nameAr: 'فاكهي', percent: 65 },
		  { nameEn: 'Leather', nameAr: 'جلدي',  percent: 55 }
		],
    notes: {
      topEn:   ['Truffle', 'Bergamot', 'Black Currant', 'Ylang-Ylang'],
      topAr:   ['الكمأة', 'البرغموت', 'الكشمش الأسود', 'إيلانج إيلانج'],
      heartEn: ['Black Orchid', 'Spices', 'Jasmine', 'Gardenia'],
      heartAr: ['الأوركيد الأسود', 'التوابل', 'الياسمين', 'الغاردينيا'],
      baseEn:  ['Patchouli', 'Vanilla', 'Sandalwood', 'Dark Chocolate'],
      baseAr:  ['الباتشولي', 'الفانيليا', 'خشب الصندل', 'الشوكولاتة الداكنة']
    }
  },

  /* ──────────────────────────────────────────────────────────
     YSL — LIBRE INTENSE
     variantGroupId: 'ysl-libre-intense'
  ────────────────────────────────────────────────────────── */
  {
    id:              'ysl-libre-intense-30',
    variantGroupId:  'ysl-libre-intense',
    brandId:         'ysl',
    img:             'jpeg4.jpg',
    bg:              '#FDEEF0',
    initials:        'YL',

    nameEn:          'Libre Intense',
    nameAr:          'ليبري إنتنس',
    brandEn:         'Laurent',
    brandAr:         'لوران',
    houseEn:         'Laurent',
    houseAr:         'لوران',
    familyEn:        'Floral Oriental',
    familyAr:        'زهري شرقي',
    genderEn:        'Feminine',
    genderAr:        'نسائي',
    countryEn:       'France',
    countryAr:       'فرنسا',
    perfumerEn:      'Dominique Ropion',
    perfumerAr:      'دومينيك روبيون',
    year:            '2021',
    size:            '30ml',
    concentrationEn: 'Eau de Parfum Intense',
    concentrationAr: 'أو دو بارفيوم إنتنس',
    wearSeasonEn:    'Winter',
    wearSeasonAr:    'شتوي',
    wearTimeEn:      'Night',
    wearTimeAr:      'ليلي',
    rating:          '4.5',
    currencyEn:      'SAR',
    currencyAr:      'ريال',

    descEn: 'The intense version of Libre. A bold floral oriental built around lavender absolute and orange blossom with a warm musky base.',
    descAr: 'النسخة المكثفة من ليبري. عطر زهري شرقي جريء مبني حول اللافندر المطلق وزهر البرتقال مع قاعدة دافئة من المسك.',

	accords: [
		  { nameEn: 'Floral',  nameAr: 'زهري',  percent: 95 },
		  { nameEn: 'Amber',   nameAr: 'عنبر',  percent: 88 },
		  { nameEn: 'Musky',   nameAr: 'مسكي',  percent: 80 },
		  { nameEn: 'Fresh',   nameAr: 'منعش',  percent: 72 },
		  { nameEn: 'Fruity',  nameAr: 'فاكهي', percent: 65 },
		  { nameEn: 'Leather', nameAr: 'جلدي',  percent: 55 }
		],
    notes: {
      topEn:   ['Mandarin', 'Lavender Absolute'],
      topAr:   ['الماندرين', 'اللافندر المطلق'],
      heartEn: ['Orange Blossom', 'Jasmine', 'Lavender'],
      heartAr: ['زهر البرتقال', 'الياسمين', 'اللافندر'],
      baseEn:  ['Musk', 'Vanilla', 'Amber', 'Oakmoss'],
      baseAr:  ['المسك', 'الفانيليا', 'العنبر', 'طحلب البلوط']
    }
  },

  {
    id:              'ysl-libre-intense-50',
    variantGroupId:  'ysl-libre-intense',
    brandId:         'ysl',
    img:             'jpeg4.jpg',
    bg:              '#FDEEF0',
    initials:        'YL',

    nameEn:          'Libre Intense',
    nameAr:          'ليبري إنتنس',
    brandEn:         'Laurent',
    brandAr:         'لوران',
    houseEn:         'Laurent',
    houseAr:         'لوران',
    familyEn:        'Floral Oriental',
    familyAr:        'زهري شرقي',
    genderEn:        'Feminine',
    genderAr:        'نسائي',
    countryEn:       'France',
    countryAr:       'فرنسا',
    perfumerEn:      'Dominique Ropion',
    perfumerAr:      'دومينيك روبيون',
    year:            '2021',
    size:            '50ml',
    concentrationEn: 'Eau de Parfum Intense',
    concentrationAr: 'أو دو بارفيوم إنتنس',
    wearSeasonEn:    'Winter',
    wearSeasonAr:    'شتوي',
    wearTimeEn:      'Night',
    wearTimeAr:      'ليلي',
    rating:          '4.5',
    currencyEn:      'SAR',
    currencyAr:      'ريال',

    descEn: 'The intense version of Libre. A bold floral oriental built around lavender absolute and orange blossom with a warm musky base.',
    descAr: 'النسخة المكثفة من ليبري. عطر زهري شرقي جريء مبني حول اللافندر المطلق وزهر البرتقال مع قاعدة دافئة من المسك.',

	accords: [
		  { nameEn: 'Floral',  nameAr: 'زهري',  percent: 95 },
		  { nameEn: 'Amber',   nameAr: 'عنبر',  percent: 88 },
		  { nameEn: 'Musky',   nameAr: 'مسكي',  percent: 80 },
		  { nameEn: 'Fresh',   nameAr: 'منعش',  percent: 72 },
		  { nameEn: 'Fruity',  nameAr: 'فاكهي', percent: 65 },
		  { nameEn: 'Leather', nameAr: 'جلدي',  percent: 55 }
		],
    notes: {
      topEn:   ['Mandarin', 'Lavender Absolute'],
      topAr:   ['الماندرين', 'اللافندر المطلق'],
      heartEn: ['Orange Blossom', 'Jasmine', 'Lavender'],
      heartAr: ['زهر البرتقال', 'الياسمين', 'اللافندر'],
      baseEn:  ['Musk', 'Vanilla', 'Amber', 'Oakmoss'],
      baseAr:  ['المسك', 'الفانيليا', 'العنبر', 'طحلب البلوط']
    }
  },

  {
    id:              'ysl-libre-intense-90',
    variantGroupId:  'ysl-libre-intense',
    brandId:         'ysl',
    img:             'jpeg4.jpg',
    bg:              '#FDEEF0',
    initials:        'YL',

    nameEn:          'Libre Intense',
    nameAr:          'ليبري إنتنس',
    brandEn:         'Laurent',
    brandAr:         'لوران',
    houseEn:         'Laurent',
    houseAr:         'لوران',
    familyEn:        'Floral Oriental',
    familyAr:        'زهري شرقي',
    genderEn:        'Feminine',
    genderAr:        'نسائي',
    countryEn:       'France',
    countryAr:       'فرنسا',
    perfumerEn:      'Dominique Ropion',
    perfumerAr:      'دومينيك روبيون',
    year:            '2021',
    size:            '90ml',
    concentrationEn: 'Eau de Parfum Intense',
    concentrationAr: 'أو دو بارفيوم إنتنس',
    wearSeasonEn:    'Winter',
    wearSeasonAr:    'شتوي',
    wearTimeEn:      'Night',
    wearTimeAr:      'ليلي',
    rating:          '4.5',
    currencyEn:      'SAR',
    currencyAr:      'ريال',

    descEn: 'The intense version of Libre. A bold floral oriental built around lavender absolute and orange blossom with a warm musky base.',
    descAr: 'النسخة المكثفة من ليبري. عطر زهري شرقي جريء مبني حول اللافندر المطلق وزهر البرتقال مع قاعدة دافئة من المسك.',

	accords: [
		  { nameEn: 'Floral',  nameAr: 'زهري',  percent: 95 },
		  { nameEn: 'Amber',   nameAr: 'عنبر',  percent: 88 },
		  { nameEn: 'Musky',   nameAr: 'مسكي',  percent: 80 },
		  { nameEn: 'Fresh',   nameAr: 'منعش',  percent: 72 },
		  { nameEn: 'Fruity',  nameAr: 'فاكهي', percent: 65 },
		  { nameEn: 'Leather', nameAr: 'جلدي',  percent: 55 }
		],
    notes: {
      topEn:   ['Mandarin', 'Lavender Absolute'],
      topAr:   ['الماندرين', 'اللافندر المطلق'],
      heartEn: ['Orange Blossom', 'Jasmine', 'Lavender'],
      heartAr: ['زهر البرتقال', 'الياسمين', 'اللافندر'],
      baseEn:  ['Musk', 'Vanilla', 'Amber', 'Oakmoss'],
      baseAr:  ['المسك', 'الفانيليا', 'العنبر', 'طحلب البلوط']
    }
  },

  {
    id:              'ysl-libre-intense-150',
    variantGroupId:  'ysl-libre-intense',
    brandId:         'ysl',
    img:             'jpeg4.jpg',
    bg:              '#FDEEF0',
    initials:        'YL',

    nameEn:          'Libre Intense',
    nameAr:          'ليبري إنتنس',
    brandEn:         'Laurent',
    brandAr:         'لوران',
    houseEn:         'Laurent',
    houseAr:         'لوران',
    familyEn:        'Floral Oriental',
    familyAr:        'زهري شرقي',
    genderEn:        'Feminine',
    genderAr:        'نسائي',
    countryEn:       'France',
    countryAr:       'فرنسا',
    perfumerEn:      'Dominique Ropion',
    perfumerAr:      'دومينيك روبيون',
    year:            '2021',
    size:            '150ml',
    concentrationEn: 'Eau de Parfum Intense',
    concentrationAr: 'أو دو بارفيوم إنتنس',
    wearSeasonEn:    'Winter',
    wearSeasonAr:    'شتوي',
    wearTimeEn:      'Night',
    wearTimeAr:      'ليلي',
    rating:          '4.5',
    currencyEn:      'SAR',
    currencyAr:      'ريال',

    descEn: 'The intense version of Libre. A bold floral oriental built around lavender absolute and orange blossom with a warm musky base.',
    descAr: 'النسخة المكثفة من ليبري. عطر زهري شرقي جريء مبني حول اللافندر المطلق وزهر البرتقال مع قاعدة دافئة من المسك.',

	accords: [
		  { nameEn: 'Floral',  nameAr: 'زهري',  percent: 95 },
		  { nameEn: 'Amber',   nameAr: 'عنبر',  percent: 88 },
		  { nameEn: 'Musky',   nameAr: 'مسكي',  percent: 80 },
		  { nameEn: 'Fresh',   nameAr: 'منعش',  percent: 72 },
		  { nameEn: 'Fruity',  nameAr: 'فاكهي', percent: 65 },
		  { nameEn: 'Leather', nameAr: 'جلدي',  percent: 55 }
		],
    notes: {
      topEn:   ['Mandarin', 'Lavender Absolute'],
      topAr:   ['الماندرين', 'اللافندر المطلق'],
      heartEn: ['Orange Blossom', 'Jasmine', 'Lavender'],
      heartAr: ['زهر البرتقال', 'الياسمين', 'اللافندر'],
      baseEn:  ['Musk', 'Vanilla', 'Amber', 'Oakmoss'],
      baseAr:  ['المسك', 'الفانيليا', 'العنبر', 'طحلب البلوط']
    }
  },

  /* ──────────────────────────────────────────────────────────
     MAISON FRANCIS KURKDJIAN — BACCARAT ROUGE 540 EDP
     variantGroupId: 'mfk-baccarat-rouge-540'
  ────────────────────────────────────────────────────────── */
  {
    id:              'mfk-baccarat-rouge-540-35',
    variantGroupId:  'mfk-baccarat-rouge-540',
    brandId:         'Pure',
    img:             'jpeg5.jpg',
    bg:              '#FFF5EA',
    initials:        'BR',

    nameEn:          'Baccarat Rouge 540',
    nameAr:          'باكارات روج 540',
    brandEn:         'Pure',
    brandAr:         'بيور',
    houseEn:         'Pure',
    houseAr:         'بيور',
    familyEn:        'Amber Floral',
    familyAr:        'عنبري زهري',
    genderEn:        'Unisex',
    genderAr:        'للجنسين',
    countryEn:       'France',
    countryAr:       'فرنسا',
    perfumerEn:      'Francis Kurkdjian',
    perfumerAr:      'فرانسيس كوركجان',
    year:            '2015',
    size:            '35ml',
    concentrationEn: 'Eau de Parfum',
    concentrationAr: 'أو دو بارفيوم',
    wearSeasonEn:    'All Seasons',
    wearSeasonAr:    'كل الفصول',
    wearTimeEn:      'Day & Night',
    wearTimeAr:      'نهاري وليلي',
    rating:          '4.9',
    currencyEn:      'SAR',
    currencyAr:      'ريال',

    descEn: 'An iconic fragrance that blends luminous jasmine and saffron over a warm bed of amberwood and fir resin, creating a radiant and unforgettable signature.',
    descAr: 'عطر أيقوني يمزج الياسمين المضيء والزعفران فوق قاعدة دافئة من خشب العنبر وراتنج الشجر، مما يخلق بصمة متألقة لا تُنسى.',

	accords: [
		  { nameEn: 'Floral',  nameAr: 'زهري',  percent: 95 },
		  { nameEn: 'Amber',   nameAr: 'عنبر',  percent: 88 },
		  { nameEn: 'Musky',   nameAr: 'مسكي',  percent: 80 },
		  { nameEn: 'Fresh',   nameAr: 'منعش',  percent: 72 },
		  { nameEn: 'Fruity',  nameAr: 'فاكهي', percent: 65 },
		  { nameEn: 'Leather', nameAr: 'جلدي',  percent: 55 }
		],
    notes: {
      topEn:   ['Saffron', 'Jasmine'],
      topAr:   ['الزعفران', 'الياسمين'],
      heartEn: ['Amberwood', 'Ambergris'],
      heartAr: ['خشب العنبر', 'العنبر الرمادي'],
      baseEn:  ['Fir Resin', 'Cedar'],
      baseAr:  ['راتنج الشجر', 'الأرز']
    }
  },

  {
    id:              'mfk-baccarat-rouge-540-70',
    variantGroupId:  'mfk-baccarat-rouge-540',
    brandId:         'Pure',
    img:             'jpeg5.jpg',
    bg:              '#FFF5EA',
    initials:        'BR',

    nameEn:          'Baccarat Rouge 540',
    nameAr:          'باكارات روج 540',
    brandEn:         'Pure',
    brandAr:         'بيور',
    houseEn:         'Pure',
    houseAr:         'بيور',
    familyEn:        'Amber Floral',
    familyAr:        'عنبري زهري',
    genderEn:        'Unisex',
    genderAr:        'للجنسين',
    countryEn:       'France',
    countryAr:       'فرنسا',
    perfumerEn:      'Francis Kurkdjian',
    perfumerAr:      'فرانسيس كوركجان',
    year:            '2015',
    size:            '70ml',
    concentrationEn: 'Eau de Parfum',
    concentrationAr: 'أو دو بارفيوم',
    wearSeasonEn:    'All Seasons',
    wearSeasonAr:    'كل الفصول',
    wearTimeEn:      'Day & Night',
    wearTimeAr:      'نهاري وليلي',
    rating:          '4.9',
    currencyEn:      'SAR',
    currencyAr:      'ريال',

    descEn: 'An iconic fragrance that blends luminous jasmine and saffron over a warm bed of amberwood and fir resin, creating a radiant and unforgettable signature.',
    descAr: 'عطر أيقوني يمزج الياسمين المضيء والزعفران فوق قاعدة دافئة من خشب العنبر وراتنج الشجر، مما يخلق بصمة متألقة لا تُنسى.',

	accords: [
		  { nameEn: 'Floral',  nameAr: 'زهري',  percent: 95 },
		  { nameEn: 'Amber',   nameAr: 'عنبر',  percent: 88 },
		  { nameEn: 'Musky',   nameAr: 'مسكي',  percent: 80 },
		  { nameEn: 'Fresh',   nameAr: 'منعش',  percent: 72 },
		  { nameEn: 'Fruity',  nameAr: 'فاكهي', percent: 65 },
		  { nameEn: 'Leather', nameAr: 'جلدي',  percent: 55 }
		],
    notes: {
      topEn:   ['Saffron', 'Jasmine'],
      topAr:   ['الزعفران', 'الياسمين'],
      heartEn: ['Amberwood', 'Ambergris'],
      heartAr: ['خشب العنبر', 'العنبر الرمادي'],
      baseEn:  ['Fir Resin', 'Cedar'],
      baseAr:  ['راتنج الشجر', 'الأرز']
    }
  },

  {
    id:              'mfk-baccarat-rouge-540-200',
    variantGroupId:  'mfk-baccarat-rouge-540',
    brandId:         'Pure',
    img:             'jpeg5.jpg',
    bg:              '#FFF5EA',
    initials:        'BR',

    nameEn:          'Baccarat Rouge 540',
    nameAr:          'باكارات روج 540',
    brandEn:         'Pure',
    brandAr:         'بيور',
    houseEn:         'Pure',
    houseAr:         'بيور',
    familyEn:        'Amber Floral',
    familyAr:        'عنبري زهري',
    genderEn:        'Unisex',
    genderAr:        'للجنسين',
    countryEn:       'France',
    countryAr:       'فرنسا',
    perfumerEn:      'Francis Kurkdjian',
    perfumerAr:      'فرانسيس كوركجان',
    year:            '2015',
    size:            '200ml',
    concentrationEn: 'Eau de Parfum',
    concentrationAr: 'أو دو بارفيوم',
    wearSeasonEn:    'All Seasons',
    wearSeasonAr:    'كل الفصول',
    wearTimeEn:      'Day & Night',
    wearTimeAr:      'نهاري وليلي',
    rating:          '4.9',
    currencyEn:      'SAR',
    currencyAr:      'ريال',

    descEn: 'An iconic fragrance that blends luminous jasmine and saffron over a warm bed of amberwood and fir resin, creating a radiant and unforgettable signature.',
    descAr: 'عطر أيقوني يمزج الياسمين المضيء والزعفران فوق قاعدة دافئة من خشب العنبر وراتنج الشجر، مما يخلق بصمة متألقة لا تُنسى.',

	accords: [
		  { nameEn: 'Floral',  nameAr: 'زهري',  percent: 95 },
		  { nameEn: 'Amber',   nameAr: 'عنبر',  percent: 88 },
		  { nameEn: 'Musky',   nameAr: 'مسكي',  percent: 80 },
		  { nameEn: 'Fresh',   nameAr: 'منعش',  percent: 72 },
		  { nameEn: 'Fruity',  nameAr: 'فاكهي', percent: 65 },
		  { nameEn: 'Leather', nameAr: 'جلدي',  percent: 55 }
		],
    notes: {
      topEn:   ['Saffron', 'Jasmine'],
      topAr:   ['الزعفران', 'الياسمين'],
      heartEn: ['Amberwood', 'Ambergris'],
      heartAr: ['خشب العنبر', 'العنبر الرمادي'],
      baseEn:  ['Fir Resin', 'Cedar'],
      baseAr:  ['راتنج الشجر', 'الأرز']
    }
  },

  /* ──────────────────────────────────────────────────────────
     CREED — AVENTUS
     variantGroupId: 'creed-aventus'
  ────────────────────────────────────────────────────────── */
  {
    id:              'creed-aventus-50',
    variantGroupId:  'creed-aventus',
    brandId:         'creed',
    img:             'jpeg6.jpg',
    bg:              '#E8F4F8',
    initials:        'CA',

    nameEn:          'Aventus',
    nameAr:          'أفينتوس',
    brandEn:         'Creed',
    brandAr:         'كريد',
    houseEn:         'House of Creed',
    houseAr:         'هاوس أوف كريد',
    familyEn:        'Fruity Chypre',
    familyAr:        'فاكهي شيبر',
    genderEn:        'Masculine',
    genderAr:        'رجالي',
    countryEn:       'UK',
    countryAr:       'المملكة المتحدة',
    perfumerEn:      'Olivier Creed',
    perfumerAr:      'أوليفييه كريد',
    year:            '2010',
    size:            '50ml',
    concentrationEn: 'Eau de Parfum',
    concentrationAr: 'أو دو بارفيوم',
    wearSeasonEn:    'Spring / Autumn',
    wearSeasonAr:    'ربيعي / خريفي',
    wearTimeEn:      'Day',
    wearTimeAr:      'نهاري',
    rating:          '4.7',
    currencyEn:      'SAR',
    currencyAr:      'ريال',

    descEn: 'A legendary masculine fragrance inspired by Napoleon Bonaparte. Smoky birch and fresh pineapple over a mossy, musky base of ambergris and oakmoss.',
    descAr: 'عطر ذكوري أسطوري مستوحى من نابليون بونابرت. خشب البتولا المدخن والأناناس الطازج فوق قاعدة طحلبية مسكية من العنبر الرمادي وطحلب البلوط.',

	accords: [
		  { nameEn: 'Floral',  nameAr: 'زهري',  percent: 95 },
		  { nameEn: 'Amber',   nameAr: 'عنبر',  percent: 88 },
		  { nameEn: 'Musky',   nameAr: 'مسكي',  percent: 80 },
		  { nameEn: 'Fresh',   nameAr: 'منعش',  percent: 72 },
		  { nameEn: 'Fruity',  nameAr: 'فاكهي', percent: 65 },
		  { nameEn: 'Leather', nameAr: 'جلدي',  percent: 55 }
		],
    notes: {
      topEn:   ['Pineapple', 'Bergamot', 'Black Currant', 'Apple'],
      topAr:   ['الأناناس', 'البرغموت', 'الكشمش الأسود', 'التفاح'],
      heartEn: ['Birch', 'Patchouli', 'Rose', 'Jasmine'],
      heartAr: ['البتولا', 'الباتشولي', 'الورد', 'الياسمين'],
      baseEn:  ['Ambergris', 'Oakmoss', 'Musk', 'Vanilla'],
      baseAr:  ['العنبر الرمادي', 'طحلب البلوط', 'المسك', 'الفانيليا']
    }
  },

  {
    id:              'creed-aventus-100',
    variantGroupId:  'creed-aventus',
    brandId:         'creed',
    img:             'jpeg6.jpg',
    bg:              '#E8F4F8',
    initials:        'CA',

    nameEn:          'Aventus',
    nameAr:          'أفينتوس',
    brandEn:         'Creed',
    brandAr:         'كريد',
    houseEn:         'House of Creed',
    houseAr:         'هاوس أوف كريد',
    familyEn:        'Fruity Chypre',
    familyAr:        'فاكهي شيبر',
    genderEn:        'Masculine',
    genderAr:        'رجالي',
    countryEn:       'UK',
    countryAr:       'المملكة المتحدة',
    perfumerEn:      'Olivier Creed',
    perfumerAr:      'أوليفييه كريد',
    year:            '2010',
    size:            '100ml',
    concentrationEn: 'Eau de Parfum',
    concentrationAr: 'أو دو بارفيوم',
    wearSeasonEn:    'Spring / Autumn',
    wearSeasonAr:    'ربيعي / خريفي',
    wearTimeEn:      'Day',
    wearTimeAr:      'نهاري',
    rating:          '4.7',
    currencyEn:      'SAR',
    currencyAr:      'ريال',

    descEn: 'A legendary masculine fragrance inspired by Napoleon Bonaparte. Smoky birch and fresh pineapple over a mossy, musky base of ambergris and oakmoss.',
    descAr: 'عطر ذكوري أسطوري مستوحى من نابليون بونابرت. خشب البتولا المدخن والأناناس الطازج فوق قاعدة طحلبية مسكية من العنبر الرمادي وطحلب البلوط.',

	accords: [
		  { nameEn: 'Floral',  nameAr: 'زهري',  percent: 95 },
		  { nameEn: 'Amber',   nameAr: 'عنبر',  percent: 88 },
		  { nameEn: 'Musky',   nameAr: 'مسكي',  percent: 80 },
		  { nameEn: 'Fresh',   nameAr: 'منعش',  percent: 72 },
		  { nameEn: 'Fruity',  nameAr: 'فاكهي', percent: 65 },
		  { nameEn: 'Leather', nameAr: 'جلدي',  percent: 55 }
		],
    notes: {
      topEn:   ['Pineapple', 'Bergamot', 'Black Currant', 'Apple'],
      topAr:   ['الأناناس', 'البرغموت', 'الكشمش الأسود', 'التفاح'],
      heartEn: ['Birch', 'Patchouli', 'Rose', 'Jasmine'],
      heartAr: ['البتولا', 'الباتشولي', 'الورد', 'الياسمين'],
      baseEn:  ['Ambergris', 'Oakmoss', 'Musk', 'Vanilla'],
      baseAr:  ['العنبر الرمادي', 'طحلب البلوط', 'المسك', 'الفانيليا']
    }
  }

];
