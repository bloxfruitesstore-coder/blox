
import { Product, SiteSettings } from './types';

export const INITIAL_SETTINGS: SiteSettings = {
  binanceWallet: '',
  binanceQR: '',
  robloxGamePassUrl: 'https://www.roblox.com/game-pass/configure',
  importantNote: 'يرجى التأكد من ادخال اسم المستخدم الصحيح.',
  welcomeMessage: 'مرحباً بكم في متجر Blox Store',
  serverStatus: 'ONLINE',
  emailjsServiceId: '',
  emailjsTemplateId: '',
  emailjsPublicKey: ''
};

export const INITIAL_PRODUCTS: Product[] = [
  // --- ACCOUNTS ---
  {
    id: 'acc-custom',
    name: 'طلب حساب خاص (Custom Order)',
    description: 'صمم حسابك بنفسك! اطلب ليفل معين (مثلاً 2550)، فواكه محددة (Kitsune)، أو سيوف نادرة. اكتب تفاصيل طلبك في خانة "الملاحظات" عند الدفع وسيتم تحديد السعر.',
    image: 'https://api.a0.dev/assets/image?text=mystery%20box%20glowing%20with%20question%20mark%20blox%20fruits%20style%20dark%20background%20treasure',
    price: 0, // 0 indicates custom pricing
    type: 'ACCOUNT',
    paymentMethods: ['ROBLOX'],
    inStock: true,
    stockQuantity: 999
  },
  {
    id: 'acc-1',
    name: 'حساب ليفل ماكس - كيتسوني (Kitsune)',
    description: 'حساب أسطوري ليفل 2550 (Max) يحتوي على فاكهة الكيتسوني مجهزة بالكامل، مع جميع أساليب القتال والهاكي.',
    image: 'https://api.a0.dev/assets/image?text=blox%20fruits%20roblox%20character%20with%20blue%20kitsune%20tails%20and%20aura%20epic%203d%20render',
    price: 8000,
    type: 'ACCOUNT',
    level: 2550,
    fruits: ['Kitsune', 'Dough', 'Buddha'],
    rareItems: ['Cursed Dual Katana', 'Soul Guitar', 'V4 Race'],
    paymentMethods: ['ROBLOX'],
    inStock: true,
    stockQuantity: 0
  },
  {
    id: 'acc-2',
    name: 'حساب باونتي 30 مليون',
    description: 'حساب PVP جاهز، باونتي عالي جداً، فواكه دائمة (Perm) وسيوف مطورة.',
    image: 'https://api.a0.dev/assets/image?text=blox%20fruits%20bounty%20hunter%20character%20dark%20red%20aura%20holding%20cursed%20dual%20katana',
    price: 7500,
    type: 'ACCOUNT',
    level: 2550,
    fruits: ['Leopard (Perm)', 'Portal (Perm)'],
    rareItems: ['Dark Coat', 'V4 Full Gear'],
    paymentMethods: ['ROBLOX'],
    inStock: true,
    stockQuantity: 0
  },

  // ================= MYTHICAL FRUITS =================
  {
    id: 'fruit-kitsune',
    name: 'فاكهة كيتسوني (Kitsune)',
    description: 'الفاكهة الأقوى والأغلى. سرعة وتحول للثعلب بـ 3 ذيول.',
    image: 'https://assetsdelivery.eldorado.gg/v7/_offers-v2_/cde80c70-59f0-49ac-aa4c-ffd79e055a35_Offer_20241003180420_4165978Large.png?w=255',
    price: 2000,
    type: 'FRUIT',
    paymentMethods: ['ROBLOX'],
    inStock: true,
    stockQuantity: 0
  },
    {
    id: 'fruit-kitsune-perm',
    name: 'فاكهة كيتسوني (Kitsune)-perm',
    description: 'الفاكهة الأقوى والأغلى. سرعة وتحول للثعلب بـ 3 ذيول.',
    image: 'https://assetsdelivery.eldorado.gg/v7/_offers-v2_/cde80c70-59f0-49ac-aa4c-ffd79e055a35_Offer_20241003180420_4165978Large.png?w=255',
    price: 4500,
    type: 'FRUIT',
    paymentMethods: ['ROBLOX'],
    inStock: true,
    stockQuantity: 0
  },
  {
    id: 'fruit-dragon',
    name: 'فاكهة التنين (Dragon)',
    description: 'ملك الوحوش. تحول لتنين ضخم ومدمر (Re-work coming soon).',
    image: 'https://assetsdelivery.eldorado.gg/v7/_offers-v2_/google_117035868048525318573_Offer_20250610134021_1093879Large.png?w=255',
    price:  2500,
    type: 'FRUIT',
    paymentMethods: ['ROBLOX'],
    inStock: true,
    stockQuantity: 0
  },
  {
    id: 'fruit-dragon-perm',
    name: 'فاكهة التنين (Dragon)-perm',
    description: 'ملك الوحوش. تحول لتنين ضخم ومدمر (Re-work coming soon).',
    image: 'https://assetsdelivery.eldorado.gg/v7/_offers-v2_/google_117035868048525318573_Offer_20250610134021_1093879Large.png?w=255',
    price:  5000,
    type: 'FRUIT',
    paymentMethods: ['ROBLOX'],
    inStock: true,
    stockQuantity: 0
  },
  {
    id: 'fruit-leopard',
    name: 'فاكهة النمر (Tiger)',
    description: 'سرعة وهجوم فتاك. مثالية لصائدي الباونتي.',
    image: 'https://assetsdelivery.eldorado.gg/v7/_offers-v2_/google-oauth2%7C103544003387963267732_Offer_20251031181935_8960147Large.png?w=255',
    price: 500,
    type: 'FRUIT',
    paymentMethods: ['ROBLOX'],
    inStock: true,
    stockQuantity: 2
  },
  {
    id: 'fruit-leopard-perm',
    name: 'فاكهة النمر (Tiger)-perm',
    description: 'سرعة وهجوم فتاك. مثالية لصائدي الباونتي.',
    image: 'https://assetsdelivery.eldorado.gg/v7/_offers-v2_/google-oauth2%7C103544003387963267732_Offer_20251031181935_8960147Large.png?w=255',
    price: 3500,
    type: 'FRUIT',
    paymentMethods: ['ROBLOX'],
    inStock: true,
    stockQuantity: 0
  },
  {
    id: 'fruit-dough',
    name: 'فاكهة العجين (Dough)',
    description: 'ملك الكومبو والإيقاظ (Awakening). لا تقهر في الـ PvP.',
    image: 'https://assetsdelivery.eldorado.gg/v7/_offers-v2_/auth0%7C5cf77b5d4c8fa00c793ed573_Offer_20250421061531_5617111Large.png?w=255',
    price: 300,
    type: 'FRUIT',
    paymentMethods: ['ROBLOX'],
    inStock: true,
    stockQuantity: 2
  },
    {
    id: 'fruit-dough-perm',
    name: 'فاكهة العجين (Dough)-perm',
    description: 'ملك الكومبو والإيقاظ (Awakening). لا تقهر في الـ PvP.',
    image: 'https://assetsdelivery.eldorado.gg/v7/_offers-v2_/auth0%7C5cf77b5d4c8fa00c793ed573_Offer_20250421061531_5617111Large.png?w=255',
    price: 1500,
    type: 'FRUIT',
    paymentMethods: ['ROBLOX'],
    inStock: true,
    stockQuantity: 0
  },
  {
    id: 'fruit-trex',
    name: 'فاكهة تي ريكس (T-Rex)',
    description: 'قوة الديناصور الجبار. ضرر مستمر وهجوم كاسح.',
    image: 'https://assetsdelivery.eldorado.gg/v7/_offers-v2_/bcb1c30a-d887-42ae-9231-98e2229fe703_Offer_20260119004848_4883409Large.png?w=255',
    price: 200,
    type: 'FRUIT',
    paymentMethods: ['ROBLOX'],
    inStock: true,
    stockQuantity: 0
  },
  {
    id: 'fruit-trex-perm',
    name: 'فاكهة تي ريكس (T-Rex)-perm',
    description: 'قوة الديناصور الجبار. ضرر مستمر وهجوم كاسح.',
    image: 'https://assetsdelivery.eldorado.gg/v7/_offers-v2_/bcb1c30a-d887-42ae-9231-98e2229fe703_Offer_20260119004848_4883409Large.png?w=255',
    price: 2350,
    type: 'FRUIT',
    paymentMethods: ['ROBLOX'],
    inStock: true,
    stockQuantity: 0
  },
  {
    id: 'fruit-mammoth',
    name: 'فاكهة الماموث (Mammoth)',
    description: 'تحول لفيل عملاق. دفاع قوي وهجوم كاسح.',
    image: 'https://assetsdelivery.eldorado.gg/v7/_offers-v2_/6f743588-4440-420a-8536-22442c556730_Offer_20231229191054_8422452Large.png?w=255',
    price: 150,
    type: 'FRUIT',
    paymentMethods: ['ROBLOX'],
    inStock: true,
    stockQuantity: 5
  },
  {
    id: 'fruit-mammoth-perm',
    name: 'فاكهة الماموث (Mammoth)-perm',
    description: 'تحول لفيل عملاق. دفاع قوي وهجوم كاسح.',
    image: 'https://assetsdelivery.eldorado.gg/v7/_offers-v2_/6f743588-4440-420a-8536-22442c556730_Offer_20231229191054_8422452Large.png?w=255',
    price: 1850,
    type: 'FRUIT',
    paymentMethods: ['ROBLOX'],
    inStock: true,
    stockQuantity: 0
  },

  {
    id: 'fruit-venom-perm',
    name: 'فاكهة السم (Venom)-perm',
    description: 'برك سمية وضرر مستمر يفتك بالخصوم.',
    image: 'https://assetsdelivery.eldorado.gg/v7/_offers-v2_/91cb4930-ddf1-4b99-9b21-9d737106555d_Offer_20251010053728_6383431Large.png?w=255',
    price: 1500,
    type: 'FRUIT',
    paymentMethods: ['ROBLOX'],
    inStock: true,
    stockQuantity: 0
  },
  {
    id: 'fruit-venom',
    name: 'فاكهة السم (Venom)',
    description: 'برك سمية وضرر مستمر يفتك بالخصوم.',
    image: 'https://assetsdelivery.eldorado.gg/v7/_offers-v2_/91cb4930-ddf1-4b99-9b21-9d737106555d_Offer_20251010053728_6383431Large.png?w=255',
    price: 200,
    type: 'FRUIT',
    paymentMethods: ['ROBLOX'],
    inStock: true,
    stockQuantity: 2
  },
  {
    id: 'fruit-control',
    name: 'فاكهة التحكم (Control)',
    description: 'اصنع غرفتك وتحكم بكل شيء بداخلها.',
    image: 'https://assetsdelivery.eldorado.gg/v7/_offers-v2_/facebook_5887159018058077_Offer_20251223224956_3491207Large.jpg?w=255',
    price: 1550,
    type: 'FRUIT',
    paymentMethods: ['ROBLOX'],
    inStock: true,
    stockQuantity: 0
  },
  {
    id: 'fruit-control-perm',
    name: 'فاكهة التحكم (Control)-perm',
    description: 'اصنع غرفتك وتحكم بكل شيء بداخلها.',
    image: 'https://assetsdelivery.eldorado.gg/v7/_offers-v2_/facebook_5887159018058077_Offer_20251223224956_3491207Large.jpg?w=255',
    price: 4500,
    type: 'FRUIT',
    paymentMethods: ['ROBLOX'],
    inStock: true,
    stockQuantity: 0
  },
  
  // ================= LEGENDARY FRUITS =================
  {
    id: 'fruit-buddha-perm',
    name: 'فاكهة بوذا (Buddha)-perm',
    description: 'الأفضل للتطوير (Grinding). مدى ضرب هائل.',
    image: 'https://assetsdelivery.eldorado.gg/v7/_offers-v2_/google_114101648051317158605_Offer_20250513171240_3247598Large.jpg?w=255',
    price: 1200,
    type: 'FRUIT',
    paymentMethods: ['ROBLOX'],
    inStock: true,
    stockQuantity: 0
  },
  {
    id: 'fruit-buddha',
    name: 'فاكهة بوذا (Buddha)',
    description: 'الأفضل للتطوير (Grinding). مدى ضرب هائل.',
    image: 'https://assetsdelivery.eldorado.gg/v7/_offers-v2_/google_114101648051317158605_Offer_20250513171240_3247598Large.jpg?w=255',
    price: 100,
    type: 'FRUIT',
    paymentMethods: ['ROBLOX'],
    inStock: true,
    stockQuantity: 0
  },
  {
    id: 'fruit-portal-perm',
    name: 'فاكهة البوابة (Portal)-perm',
    description: 'تنقل فوري عبر الخريطة. الأفضل للحركة.',
    image: 'https://assetsdelivery.eldorado.gg/v7/_offers-v2_/google_114101648051317158605_Offer_20250513165358_7625928Large.jpg?w=255',
    price: 2000,
    type: 'FRUIT',
    paymentMethods: ['ROBLOX'],
    inStock: true,
    stockQuantity: 0
  },
    {
    id: 'fruit-portal',
    name: 'فاكهة البوابة (Portal)',
    description: 'تنقل فوري عبر الخريطة. الأفضل للحركة.',
    image: 'https://assetsdelivery.eldorado.gg/v7/_offers-v2_/google_114101648051317158605_Offer_20250513165358_7625928Large.jpg?w=255',
    price: 200,
    type: 'FRUIT',
    paymentMethods: ['ROBLOX'],
    inStock: true,
    stockQuantity: 1
  },

  {
    id: 'fruit-rumble',
    name: 'فاكهة البرق (Rumble)',
    description: 'صواعق كهربائية ونقل آني سريع.',
    image: 'https://assetsdelivery.eldorado.gg/v7/_offers-v2_/facebook_5887159018058077_Offer_20251016083437_6638601Large.jpg?w=255',
    price: 150,
    type: 'FRUIT',
    paymentMethods: ['ROBLOX'],
    inStock: true,
    stockQuantity: 0
  },
  {
    id: 'fruit-rumble-perm',
    name: 'فاكهة البرق (Rumble)-perm',
    description: 'صواعق كهربائية ونقل آني سريع.',
    image: 'https://assetsdelivery.eldorado.gg/v7/_offers-v2_/facebook_5887159018058077_Offer_20251016083437_6638601Large.jpg?w=255',
    price: 1500,
    type: 'FRUIT',
    paymentMethods: ['ROBLOX'],
    inStock: true,
    stockQuantity: 0
  },


  // ================= RARE FRUITS =================
  {
    id: 'fruit-magma-perm',
    name: 'فاكهة الحمم (Magma)-perm',
    description: 'أعلى ضرر في اللعبة! مثالية لصيد وحوش البحر.',
    image: 'https://assetsdelivery.eldorado.gg/v7/_offers-v2_/google_114101648051317158605_Offer_20250513174313_1025942Large.jpg?w=255',
    price: 800,
    type: 'FRUIT',
    paymentMethods: ['ROBLOX'],
    inStock: true,
    stockQuantity: 0
  },
  {
    id: 'fruit-magma',
    name: 'فاكهة الحمم (Magma)',
    description: 'أعلى ضرر في اللعبة! مثالية لصيد وحوش البحر.',
    image: 'https://assetsdelivery.eldorado.gg/v7/_offers-v2_/google_114101648051317158605_Offer_20250513174313_1025942Large.jpg?w=255',
    price: 80,
    type: 'FRUIT',
    paymentMethods: ['ROBLOX'],
    inStock: true,
    stockQuantity: 1
  },
  {
    id: 'fruit-light',
    name: 'فاكهة الضوء (Light)',
    description: 'الأسرع في العالم الأول. سيف ضوئي مدمج.',
    image: 'https://assetsdelivery.eldorado.gg/v7/_offers-v2_/350d62e9-b7b0-4f71-8374-2e0daf98a8e6_Offer_20260130155726_7235893Large.png?w=255',
    price: 80,
    type: 'FRUIT',
    paymentMethods: ['ROBLOX'],
    inStock: true,
    stockQuantity: 3
  },
  {
    id: 'fruit-light-perm',
    name: 'فاكهة الضوء (Light)-perm',
    description: 'الأسرع في العالم الأول. سيف ضوئي مدمج.',
    image: 'https://assetsdelivery.eldorado.gg/v7/_offers-v2_/350d62e9-b7b0-4f71-8374-2e0daf98a8e6_Offer_20260130155726_7235893Large.png?w=255',
    price: 800,
    type: 'FRUIT',
    paymentMethods: ['ROBLOX'],
    inStock: true,
    stockQuantity: 0
  },
  {
    id: 'fruit-ice-perm',
    name: 'فاكهة الجليد (Ice)-perm',
    description: 'المشي على الماء وتجميد الخصوم.',
    image: 'https://assetsdelivery.eldorado.gg/v7/_offers-v2_/google_114101648051317158605_Offer_20250514085042_6321519Large.jpg?w=255',
    price: 500,
    type: 'FRUIT',
    paymentMethods: ['ROBLOX'],
    inStock: true,
    stockQuantity: 0
  },
  {
    id: 'fruit-ice',
    name: 'فاكهة الجليد (Ice)',
    description: 'المشي على الماء وتجميد الخصوم.',
    image: 'https://assetsdelivery.eldorado.gg/v7/_offers-v2_/google_114101648051317158605_Offer_20250514085042_6321519Large.jpg?w=255',
    price: 50,
    type: 'FRUIT',
    paymentMethods: ['ROBLOX'],
    inStock: true,
    stockQuantity: 2
  }
];
