/* ============================================================
   brands.js — Brand catalogue
   Each brand is referenced by products via brandId.
   IDs must match the pattern: brandEn.toLowerCase().replace(/\s+/g, '-')
   ============================================================ */
var BRANDS = [

  {
    id:        'chanel',
    nameEn:    'Chanel',
    nameAr:    'شانيل',
    houseEn:   'Chanel',
    houseAr:   'شانيل',
    countryEn: 'France',
    countryAr: 'فرنسا',
    founded:   1910,
    logo:      'brand-chanel.png',
    descEn:    'Chanel is a legendary French luxury house founded in 1910 by Coco Chanel. Renowned worldwide, it creates timeless, iconic fragrances that define the history of modern perfumery.',
    descAr:    'شانيل دار أزياء وعطور فرنسية عريقة تأسست عام 1910 على يد كوكو شانيل. تشتهر عالمياً بتقديم عطور أيقونية خالدة تركت بصمة فريدة في تاريخ العطور.'
  },

  {
    id:        'dior',
    nameEn:    'Dior',
    nameAr:    'ديور',
    houseEn:   'Christian Dior',
    houseAr:   'كريستيان ديور',
    countryEn: 'France',
    countryAr: 'فرنسا',
    founded:   1946,
    logo:      'brand-dior.png',
    descEn:    'Christian Dior is a Parisian luxury house founded in 1946. It is celebrated for its elegant, bold, and masterfully composed fragrances that embody French sophistication.',
    descAr:    'ديور دار فرنسية فاخرة تأسست في باريس عام 1946. وتشتهر بعطورها الأنيقة والجريئة التي تجمع بين الابتكار والتركيبات المتقنة.'
  },

  {
    id:        'tom-ford',
    nameEn:    'Tom Ford',
    nameAr:    'توم فورد',
    houseEn:   'Tom Ford Beauty',
    houseAr:   'توم فورد بيوتي',
    countryEn: 'USA',
    countryAr: 'الولايات المتحدة',
    founded:   2005,
    logo:      'brand-tomford.png',
    descEn:    'Tom Ford Beauty is an American luxury brand founded in 2005. It is highly regarded for its sensual, bold aesthetic and its exclusive Private Blend collection of niche perfumes.',
    descAr:    'توم فورد علامة أمريكية فاخرة تأسست عام 2005. وتشتهر بطابعها الجريء والفاخر، وبشكل خاص مجموعة "برايفت بلند" التي أثرت عالم عطور النيش.'
  },

  {
    id:        'laurent',
    nameEn:    'Laurent',
    nameAr:    'لوران',
    houseEn:   'Yves Saint Laurent',
    houseAr:   'إيف سان لوران',
    countryEn: 'France',
    countryAr: 'فرنسا',
    founded:   1961,
    logo:      'brand-ysl.png',
    descEn:    'Yves Saint Laurent is a French luxury house founded in 1961. It translates a daring and provocative spirit into iconic fragrances that celebrate freedom and modern elegance.',
    descAr:    'إيف سان لوران دار فرنسية فاخرة تأسست عام 1961. تعكس عطورها الروح الجريئة والمبتكرة للدار، وتجمع بين الأناقة والجاذبية العصرية.'
  },

  {
    id:        'pure',
    nameEn:    'Pure',
    nameAr:    'بيور',
    houseEn:   'Pure',
    houseAr:   'بيور',
    countryEn: 'France',
    countryAr: 'فرنسا',
    founded:   2009,
    logo:      'brand-mfk.png',
    descEn:    'Maison Francis Kurkdjian is a French niche house founded in 2009. It is celebrated for artistic perfumes that perfectly balance high-quality raw materials with poetic precision.',
    descAr:    'فرانسيس كوردجيان دار عطور نيشية فرنسية تأسست عام 2009. تشتهر بتقديم عطور فنية فاخرة تعتمد على أجود المواد الخام بتوازن ودقة متناهية.'
  },

  {
    id:        'creed',
    nameEn:    'Creed',
    nameAr:    'كريد',
    houseEn:   'House of Creed',
    houseAr:   'هاوس أوف كريد',
    countryEn: 'UK',
    countryAr: 'المملكة المتحدة',
    founded:   1760,
    logo:      'brand-creed.png',
    descEn:    'House of Creed is a prestigious British perfume house founded in 1760. It is known for its exceptional craftsmanship and its legendary Aventus, one of the world\'s most celebrated fragrances.',
    descAr:    'هاوس أوف كريد دار عطور بريطانية عريقة تأسست عام 1760. تشتهر بحرفيتها الاستثنائية وعطرها الأسطوري أفينتوس، أحد أشهر العطور في العالم.'
  }

];
