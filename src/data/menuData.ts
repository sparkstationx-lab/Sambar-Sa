export interface MenuItem {
  id: string;
  name: string;
  price: number;
  description?: string;
}

export interface MenuCategory {
  id: string;
  name: string;
  items: MenuItem[];
}

export const MENU_CATEGORIES: MenuCategory[] = [
  {
    id: 'meals-for-one',
    name: 'Meals For One',
    items: [
      { id: 'mfo-mix-veg-uttapam', name: 'Mix Veg Uttapam', price: 158 },
      { id: 'mfo-pav-bhaji', name: 'Pav Bhaji (MO)', price: 158 },
      { id: 'mfo-sada-dosa', name: 'Sada Dosa', price: 158 },
    ],
  },
  {
    id: 'fusion-dosas',
    name: 'Fusion Dosas',
    items: [
      { id: 'fd-jinni-dosa', name: 'Jinni Dosa', price: 360 },
      { id: 'fd-pav-bhaji-dosa', name: 'Pav Bhaji Dosa', price: 320 },
      { id: 'fd-peri-peri-cheese-dosa', name: 'Peri Peri Cheese Dosa', price: 350 },
      { id: 'fd-peri-peri-paneer-dosa', name: 'Peri Peri Paneer Dosa', price: 350 },
    ],
  },
  {
    id: 'sambharsa-special',
    name: 'SambharSa Special',
    items: [
      { id: 'ss-dahi-wada', name: 'Dahi Wada', price: 210 },
      { id: 'ss-malabari-parantha-kurma', name: 'Malabari Parantha With Kurma', price: 280 },
      { id: 'ss-bisi-bele-bath', name: 'Bisi Bele Bath', price: 320 },
    ],
  },
  {
    id: 'combos',
    name: 'Combos',
    items: [
      { id: 'cb-dosa-meal-1', name: 'Dosa Meal 1 (One)', price: 400 },
      { id: 'cb-dosa-meal-2', name: 'Dosa Meal 2 (Two)', price: 430 },
      { id: 'cb-family-meal', name: 'Family Meal', price: 750 },
      { id: 'cb-idli-meal', name: 'Idli Meal', price: 310 },
      { id: 'cb-uttapam-meal-1', name: 'Uttapam Meal 1 (One)', price: 370 },
      { id: 'cb-uttapam-meal-2', name: 'Uttapam Meal 2 (Two)', price: 420 },
      { id: 'cb-vada-meal', name: 'Vada Meal', price: 310 },
    ],
  },
  {
    id: 'upma',
    name: 'Upma',
    items: [
      { id: 'up-rawa-vegetable-upma', name: 'Rawa Vegetable Upma', price: 180 },
      { id: 'up-rawa-podi-upma', name: 'Rawa Podi Upma', price: 180 },
    ],
  },
  {
    id: 'snacks',
    name: 'Snacks',
    items: [
      { id: 'sn-rasam-pappadam', name: 'Rasam Pappadam', price: 70 },
    ],
  },
  {
    id: 'south-indian-wadai',
    name: 'South Indian Wadai',
    items: [
      { id: 'siw-idli-wadai-mix', name: 'Idli Wadai Mix', price: 170 },
      { id: 'siw-rasam-medu-wada', name: 'Rasam Medu Wada', price: 180 },
      { id: 'siw-sambhar-medu-wada', name: 'Sambhar Medu Wada', price: 180 },
    ],
  },
  {
    id: 'dosai-classic',
    name: 'Dosai Classic',
    items: [
      { id: 'dc-sada-dosa', name: 'Sada Dosa', price: 210 },
      { id: 'dc-masala-dosa', name: 'Masala Dosa', price: 270 },
      { id: 'dc-mysore-sada-dosa', name: 'Mysore Sada Dosa', price: 250 },
      { id: 'dc-rawa-sada-dosa', name: 'Rawa Sada Dosa', price: 250 },
      { id: 'dc-butter-masala-dosa', name: 'Butter Masala Dosa', price: 280 },
      { id: 'dc-onion-masala-dosa', name: 'Onion Masala Dosa', price: 270 },
      { id: 'dc-ghee-roast-sada-dosa', name: 'Ghee Roast Sada Dosa', price: 280 },
      { id: 'dc-mysore-masala-dosa', name: 'Mysore Masala Dosa', price: 270 },
      { id: 'dc-rawa-masala-dosa', name: 'Rawa Masala Dosa', price: 280 },
      { id: 'dc-rawa-mysore-sada-dosa', name: 'Rawa Mysore Sada Dosa', price: 270 },
      { id: 'dc-ghee-roast-masala-dosa', name: 'Ghee Roast Masala Dosa', price: 290 },
      { id: 'dc-mysore-onion-masala-dosa', name: 'Mysore Onion Masala Dosa', price: 290 },
      { id: 'dc-onion-butter-masala-dosa', name: 'Onion Butter Masala Dosa', price: 290 },
      { id: 'dc-rawa-ghee-roast-sada-dosa', name: 'Rawa Ghee Roast Sada Dosa', price: 290 },
      { id: 'dc-rawa-mysore-masala-dosa', name: 'Rawa Mysore Masala Dosa', price: 290 },
      { id: 'dc-cheese-masala-dosa', name: 'Cheese Masala Dosa', price: 320 },
      { id: 'dc-paneer-masala-dosa', name: 'Paneer Masala Dosa', price: 320 },
      { id: 'dc-rawa-ghee-roast-masala-dosa', name: 'Rawa Ghee Roast Masala Dosa', price: 310 },
      { id: 'dc-rawa-onion-masala-dosa', name: 'Rawa Onion Masala Dosa', price: 280 },
      { id: 'dc-rawa-cheese-masala-dosa', name: 'Rawa Cheese Masala Dosa', price: 320 },
      { id: 'dc-rawa-mysore-onion-masala-dosa', name: 'Rawa Mysore Onion Masala Dosa', price: 290 },
      { id: 'dc-rawa-paneer-masala-dosa', name: 'Rawa Paneer Masala Dosa', price: 320 },
    ],
  },
  {
    id: 'special-dosai',
    name: 'Special Dosai',
    items: [
      { id: 'sd-benne-masala-dosa', name: 'Benne Masala Dosa', price: 250 },
      { id: 'sd-benne-podi-dosa', name: 'Benne Podi Dosa', price: 260 },
      { id: 'sd-mla-pesarattu-dosa', name: 'MLA Pesarattu Dosa', price: 320 },
      { id: 'sd-ghee-roast-podi-dosa', name: 'Ghee Roast Podi Dosa', price: 310 },
      { id: 'sd-ghee-roast-pepper-garlic-dosa', name: 'Ghee Roast Pepper Garlic Dosa', price: 320 },
    ],
  },
  {
    id: 'uttapam',
    name: 'Uttapam',
    items: [
      { id: 'ut-classic-plain-uttapam', name: 'Classic Plain Uttapam', price: 200 },
      { id: 'ut-coconut-uttapam', name: 'Coconut Uttapam', price: 240 },
      { id: 'ut-onion-tomato-uttapam', name: 'Onion Tomato Uttapam', price: 220 },
      { id: 'ut-podi-onion-tomato-uttapam', name: 'Podi Onion Tomato Uttapam', price: 230 },
      { id: 'ut-onion-uttapam', name: 'Onion Uttapam', price: 220 },
      { id: 'ut-podi-onion-uttapam', name: 'Podi Onion Uttapam', price: 270 },
      { id: 'ut-mixed-veg-chilli-uttapam', name: 'Mixed Vegetable With Chilli Uttapam', price: 290 },
    ],
  },
  {
    id: 'rice',
    name: 'Rice',
    items: [
      { id: 'rc-lemon-rice', name: 'Lemon Rice', price: 260 },
      { id: 'rc-rasam-rice', name: 'Rasam Rice', price: 180 },
      { id: 'rc-sambhar-rice', name: 'Sambhar Rice', price: 180 },
      { id: 'rc-tomato-rice', name: 'Tomato Rice', price: 240 },
      { id: 'rc-curd-rice', name: 'Curd Rice', price: 240 },
    ],
  },
  {
    id: 'drinks-beverages',
    name: 'Drinks & Beverages',
    items: [
      { id: 'db-aam-panna', name: 'Aam Panna', price: 110 },
      { id: 'db-imli-ka-amlana', name: 'Imli Ka Amlana', price: 110 },
      { id: 'db-kokum-sherbet', name: 'Kokum Sherbet', price: 110 },
      { id: 'db-tadka-pudina-chaas', name: 'Tadka Pudina Chaas', price: 70 },
    ],
  },
  {
    id: 'extras',
    name: 'Extras',
    items: [
      { id: 'ex-sambhar-250ml', name: 'Sambhar (250 ml)', price: 50 },
    ],
  },
  {
    id: 'kulfi-ice-cream',
    name: 'Kulfi & Ice Cream',
    items: [
      { id: 'ki-chocobar-kulfi', name: 'Chocobar Kulfi (Pack of 2)', price: 170 },
      { id: 'ki-guava-kulfi', name: 'Guava Kulfi (Pack of 2)', price: 170 },
      { id: 'ki-gulab-kulfi', name: 'Gulab Kulfi (Pack of 2)', price: 170 },
      { id: 'ki-jamun-kulfi', name: 'Jamun Kulfi (Pack of 2)', price: 170 },
      { id: 'ki-kesar-pista-kulfi', name: 'Kesar Pista Kulfi (Pack of 2)', price: 170 },
      { id: 'ki-maharaja-kulfi', name: 'Maharaja Kulfi (Pack of 2)', price: 210 },
      { id: 'ki-malai-kulfi', name: 'Malai Kulfi (Pack of 2)', price: 170 },
      { id: 'ki-mango-kulfi', name: 'Mango Kulfi (Pack of 2)', price: 170 },
      { id: 'ki-pan-kulfi', name: 'Pan Kulfi (Pack of 2)', price: 170 },
      { id: 'ki-sitaphal-kulfi', name: 'Sitaphal Kulfi (Pack of 2)', price: 170 },
    ],
  },
];
