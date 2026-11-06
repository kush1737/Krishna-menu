export const site = {
  name: "Krishna Garden",
  tagline: "Pure Jain & Vegetarian Indian Restaurant",
  taglineVi: "Nhà hàng Ấn Độ chay và Jain",
  place: "Da Nang, Vietnam · Đà Nẵng, Việt Nam",
  // TODO: put the restaurant's real WhatsApp number here (country code, digits only)
  whatsapp: "84000000000",
  whatsappMessage: "Hello Krishna Garden, I would like to know more.",
  vat: "All prices are exclusive of 8% VAT",
  vatVi: "Giá chưa bao gồm VAT 8%",

  // TODO: replace with the exact address once confirmed. Until then the map and the
  // "Open in Google Maps" button search for "Krishna Garden Da Nang".
  addressLine: "Da Nang, VietnamKrishna Garden Danang Pure Jain & Vegetarian Indian restaurant, 29 Lê Lộ, Ngũ Hành Sơn, Đà Nẵng 550000, Vietnam",
  mapsQuery: "Krishna Garden Da Nang",

  // TODO: replace with the real profile links (these open the platform home page for now).
  socials: [
    { id: "instagram", label: "Instagram", url: "https://www.instagram.com/" },
    { id: "facebook", label: "Facebook", url: "https://www.facebook.com/" },
    { id: "tiktok", label: "TikTok", url: "https://www.tiktok.com/" },
  ],

  about: {
    title: "A pure Jain & vegetarian Indian kitchen in Da Nang.",
    paragraphs: [
      "Krishna Garden serves pure Jain and vegetarian Indian food in Da Nang, from flatbreads baked in a hot clay tandoor to slow-cooked dals, South Indian dosas and Indo-Chinese favourites.",
      "Our menu is written in English and Vietnamese, so every guest can browse and order with confidence.",
    ],
    points: [
      ["Pure Jain & Vegetarian", "Every dish on the menu is vegetarian."],
      ["Fresh from the Tandoor", "Naan, rotis and starters from the clay tandoor."],
      ["Bilingual menu", "English and Vietnamese, side by side."],
    ],
  },
};

export const imgPos = {
  flatbreads: "50% 100%",
  "street-food": "50% 45%",
  "paneer-kofta": "60% 55%",
  "indo-chinese": "50% 60%",
  curries: "50% 50%",
  "dal-kadhi": "50% 45%",
  "south-indian": "50% 55%",
  "salad-raita": "50% 55%",
  "stuffed-parathas": "50% 45%",
  "tandoor-starters": "50% 55%",
  kebabs: "50% 50%",
  soups: "50% 50%",
  rice: "50% 45%",
  desserts: "50% 55%",
};

export const waLink = () =>
  `https://wa.me/${site.whatsapp}?text=${encodeURIComponent(site.whatsappMessage)}`;
export const mapsLink = () =>
  `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(site.mapsQuery)}`;

// [English, Vietnamese, price in thousands VND, optional description]
export const categories = [
  {
    id: "flatbreads", img: "/img/flatbreads.jpg", en: "Artisan Flatbreads", vi: "Bánh mì dẹt truyền thống",
    tag: "Bread House — Traditional Flatbreads",
    items: [
      ["Tawa Roti", "Bánh roti áp chảo", 59, "Soft, traditional whole-wheat flatbread cooked on a hot griddle."],
      ["Tawa Roti Ghee", "Roti áp chảo với bơ ghee", 69, "Soft whole-wheat griddle flatbread brushed generously with rich clarified butter."],
      ["Tandoori Roti Plain", "Roti tandoori không bơ", 69, "Rustic whole-wheat flatbread baked in our hot clay tandoor oven."],
      ["Plain Naan", "Naan truyền thống", 79, "Classic, soft, and chewy leavened white-flour flatbread baked in the tandoor."],
      ["Butter Naan", "Naan bơ", 79, "Layered, soft, chewy, and completely smothered in pure melted butter."],
      ["Tandoori Roti Butter", "Roti tandoori bơ", 79, "Hot, clay-oven baked whole-wheat flatbread brushed smoothly with melted butter."],
      ["Missi Roti", "Roti bột đậu và lúa mì", 79, "Savory flatbread made from gram and wheat flour, spiced with ajwain and onions."],
      ["Tawa Paratha", "Paratha áp chảo", 79, "Layered, shallow-fried whole-wheat flatbread cooked to a golden crisp."],
      ["Garlic Naan", "Naan tỏi", 89, "Our soft leavened flatbread topped with pungent minced garlic and fresh coriander."],
      ["Tandoori Laccha Paratha", "Paratha nhiều lớp tandoori", 89, "An ultra-flaky, multi-layered tandoor-baked whole-wheat bread with butter."],
      ["Cheese Naan", "Naan phô mai", 109, "An indulgent leavened flatbread stuffed with a gooey, melted cheese center."],
    ],
  },
  {
    id: "street-food", img: "/img/street-food.jpg", en: "Street Food Specialties", vi: "Món ăn đường phố",
    items: [
      ["Pani Puri (6 pcs)", "Pani puri (6 miếng)", 99],
      ["Sweet Corn Chaat", "Bắp ngọt trộn gia vị", 99],
      ["French Fries / Banana Fries", "Khoai tây chiên / chuối chiên", 99],
      ["Dahi Puri (6 pcs)", "Dahi puri (6 miếng)", 119],
      ["Aloo Tikki Chaat", "Chaat bánh khoai tây", 139],
      ["Banana Tikki Chaat", "Chaat bánh chuối", 139],
      ["Katka Pav", "Bánh pav nhân masala", 149],
      ["Papadi Chaat", "Papadi chaat", 169],
      ["Pav Bhaji (2 pcs pav)", "Pav bhaji (2 bánh pav)", 189],
    ],
  },
  {
    id: "paneer-kofta", img: "/img/paneer-kofta.jpg", en: "Gourmet Mains – Paneer & Kofta", vi: "Món chính paneer và kofta",
    items: [
      ["Kadai Paneer", "Paneer kiểu kadai", 169],
      ["Paneer Tikka Masala", "Paneer tikka masala", 179],
      ["Shahi Paneer", "Paneer sốt shahi", 179],
      ["Matar Paneer", "Paneer với đậu Hà Lan", 179],
      ["Palak Paneer", "Paneer sốt rau bina", 189],
      ["Paneer Angara", "Paneer angara cay hun khói", 189],
      ["Veg Kofta", "Kofta rau củ", 179],
      ["Malai Kofta", "Kofta sốt kem", 189],
    ],
  },
  {
    id: "indo-chinese", img: "/img/indo-chinese.jpg", en: "Indo-Chinese Fusion", vi: "Món kết hợp Ấn–Hoa",
    items: [
      ["Veg Manchurian Dry", "Manchurian rau củ khô", 149],
      ["Honey Chilly Potato", "Khoai tây mật ong ớt", 159],
      ["Banana Chilli", "Chuối xào ớt", 159],
      ["Chilly Paneer", "Paneer xào ớt", 169],
      ["Paneer 65", "Paneer 65", 169],
      ["Gobi Manchurian", "Súp lơ Manchurian", 169],
      ["Veg 65", "Rau củ chiên gia vị 65", 169],
      ["Chinese Sizzler", "Đĩa sizzling kiểu Hoa", 249],
      ["Tandoori Sizzler", "Đĩa sizzling tandoori", 249],
    ],
  },
  {
    id: "curries", img: "/img/curries.jpg", en: "Homestyle Western Curries", vi: "Cà ri kiểu gia đình",
    items: [
      ["Aloo Pyaz", "Khoai tây và hành", 149],
      ["Rasa Wala Aloo", "Cà ri khoai tây sốt loãng", 149],
      ["Pattagobi Matar", "Bắp cải và đậu Hà Lan", 159],
      ["Sev Tomato", "Cà ri cà chua phủ sev", 169],
      ["Moong Masala", "Đậu moong masala", 169],
      ["Chana Masala", "Đậu gà chana masala", 169],
      ["Bhindi Masala", "Đậu bắp masala", 169],
      ["Kaiju Ganthiya", "Cà ri hạt điều và sev", 179],
      ["Baigan Masala", "Cà tím masala", 189],
      ["Dahi Tikhari", "Cà ri sữa chua dahi tikhari", 199],
    ],
  },
  {
    id: "dal-kadhi", img: "/img/dal-kadhi.jpg", en: "Slow-Cooked Lentils & Kadhi", vi: "Đậu lăng hầm và kadhi",
    items: [
      ["Dal Tadka", "Đậu lăng dal tadka", 149],
      ["Gujarati Dal", "Dal kiểu Gujarat", 159],
      ["Dal Fry", "Dal chiên xào", 169],
      ["Marvadi Dal", "Dal kiểu Marwadi", 169],
      ["Amritsari Dal", "Dal kiểu Amritsar", 179],
      ["Dal Makhani", "Dal makhani", 189],
      ["Gujarati Kadhi", "Kadhi kiểu Gujarat", 149],
      ["Punjabi Kadhi", "Kadhi kiểu Punjab", 149],
      ["Kadhi Pakora", "Kadhi với pakora", 159],
      ["Marvadi Kadhi", "Kadhi kiểu Marwadi", 169],
    ],
  },
  {
    id: "south-indian", img: "/img/south-indian.jpg", en: "Southern Flavors", vi: "Hương vị miền Nam Ấn Độ",
    items: [
      ["Idli", "Idli", 139],
      ["Masala Idli", "Idli masala", 149],
      ["Fried Idli", "Idli chiên", 149],
      ["Podi Idli", "Idli trộn gia vị podi", 149],
      ["Plain Dosa", "Dosa truyền thống", 159],
      ["Masala Dosa", "Dosa masala", 169],
      ["Onion Uttapam", "Uttapam hành", 169],
      ["Tomato Uttapam", "Uttapam cà chua", 179],
      ["Ghee Roast Dosa", "Dosa nướng bơ ghee", 199],
      ["Mysore Masala Dosa", "Dosa Mysore masala", 189],
    ],
  },
  {
    id: "salad-raita", img: "/img/salad-raita.jpg", en: "Salad, Papad & Raita", vi: "Salad, papad và raita",
    items: [
      ["Green Salad", "Salad rau xanh", 79],
      ["Onion Salad", "Salad hành tây", 59],
      ["Boondi Raita", "Raita boondi", 119],
      ["Cucumber Raita", "Raita dưa leo", 99],
      ["Mix Veg Raita", "Raita rau củ trộn", 99],
      ["Tadka Raita", "Raita tadka", 99],
      ["Plain Papad", "Papad thường", 59],
      ["Fried Papad", "Papad chiên", 69],
      ["Masala Papad", "Papad masala", 79],
    ],
  },
  {
    id: "stuffed-parathas", img: "/img/stuffed-parathas.jpg", en: "Stuffed Parathas", vi: "Paratha nhân",
    items: [
      ["Aloo Paratha", "Paratha nhân khoai tây", 89],
      ["Gobi Paratha", "Paratha nhân súp lơ", 89],
      ["Mix Veg Paratha", "Paratha nhân rau củ trộn", 119],
      ["Paneer Paratha", "Paratha nhân paneer", 129],
      ["Cheese Paratha", "Paratha phô mai", 139],
    ],
  },
  {
    id: "tandoor-starters", img: "/img/tandoor-starters.jpg", en: "Appetizers – Tandoor Starters", vi: "Khai vị tandoor",
    items: [
      ["Paneer Tikka", "Paneer tikka", 179],
      ["Pahadi Paneer Tikka", "Paneer tikka pahadi", 189],
      ["Achari Paneer Tikka", "Paneer tikka achari", 199],
      ["Malai Paneer Tikka", "Paneer tikka malai", 219],
    ],
  },
  {
    id: "kebabs", img: "/img/kebabs.jpg", en: "Traditional Indian Kebabs", vi: "Kebab Ấn Độ truyền thống",
    items: [
      ["Veg Seekh Kebab", "Kebab rau củ seekh", 169],
      ["Corn Kebab", "Kebab bắp", 169],
      ["Hara Bhara Kebab", "Kebab rau bina và đậu Hà Lan", 179],
      ["Dahi Kebab", "Kebab sữa chua", 199],
    ],
  },
  {
    id: "soups", img: "/img/soups.jpg", en: "Soups", vi: "Súp",
    items: [
      ["Tomato Soup", "Súp cà chua", 119],
      ["Manchow Soup", "Súp Manchow", 129],
      ["Hot & Sour Soup", "Súp chua cay", 129],
      ["Sweet Corn Soup", "Súp bắp ngọt", 129],
      ["Vegetable Clear Soup", "Súp rau củ trong", 129],
    ],
  },
  {
    id: "rice", img: "/img/rice.jpg", en: "Aromatic Rice Selections", vi: "Các món cơm thơm",
    items: [
      ["Jeera Rice", "Cơm cumin", 99],
      ["Steam Rice", "Cơm basmati hấp", 109],
      ["Lemon Rice", "Cơm chanh", 119],
      ["Khichadi Plain", "Khichadi truyền thống", 139],
      ["Khichadi Masala", "Khichadi masala", 149],
      ["Tawa Pulao", "Tawa pulao", 169],
      ["Veg Biryani", "Biryani rau củ", 179],
      ["Paneer Biryani", "Biryani paneer", 189],
    ],
  },
  {
    id: "desserts", img: "/img/desserts.jpg", en: "Indian Sweets & Desserts", vi: "Món ngọt và tráng miệng",
    items: [
      ["Gulab Jamun", "Gulab jamun", 85],
      ["Moong Dal Halwa", "Halwa đậu moong", 70],
      ["Ice Cream", "Kem", 59],
    ],
  },
];
