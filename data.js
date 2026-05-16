const products = [
  {
    id: 1,
    name: "AirGlide Pro",
    type: "sneakers",
    price: 1000,
    rating: 4.5,
    discountText: "20% OFF",
    hasDiscount: true,
    category: "men",
    size: [39,40,41,42,43,44],
    description: "Ultra-lightweight sneakers with maximum cushioning for all-day comfort. Perfect for running and casual wear with breathable mesh upper.",
    images: [
      "https://www.bata.com.pk/cdn/shop/files/820-6145-_1_545x545.webp?v=1762323668",
      "https://www.bata.com.pk/cdn/shop/files/820-6145-_2_545x545.webp?v=1762323685",
      "https://www.bata.com.pk/cdn/shop/files/820-6145-_4_545x545.webp?v=1757099284",
      "https://www.bata.com.pk/cdn/shop/files/820-6145-_3_545x545.webp?v=1757099284"
    ]
  },
  {
    id: 2,
    name: "Urban Runner",
    type: "sneakers",
    price: 1990,
    rating: 5.0,
    discountText: "15% OFF",
    hasDiscount: true,
    category: "men",
    size: [39,40,41,42,43,44],
    description: "Stylish urban sneakers designed for city walking and street style. Durable sole with anti-skid technology for safe grip.",
    images: [
      "https://www.bata.com.pk/cdn/shop/files/851-1182_1_1_545x545.webp?v=1762321504",
      "https://www.bata.com.pk/cdn/shop/files/851-1182_1_2_545x545.webp?v=1762321534",
      "https://www.bata.com.pk/cdn/shop/files/851-1182_1_4_545x545.webp?v=1757098724",
      "https://www.bata.com.pk/cdn/shop/files/851-1182_1_3_545x545.webp?v=1757098724"
    ]
  },
  {
    id: 3,
    name: "Blaze Sport",
    type: "sneakers",
    price: 3000,
    rating: 4.7,
    discountText: "",
    hasDiscount: false,
    category: "men",
    size: [39,40,41,42,43,44],
    description: "High-performance sports shoes with advanced shock absorption technology. Ideal for intense workouts and outdoor activities.",
    images: [
      "https://www.bata.com.pk/cdn/shop/files/828-6857_1_545x545.webp?v=1768382669",
      "https://www.bata.com.pk/cdn/shop/files/828-6857_2_545x545.webp?v=1768382669",
      "https://www.bata.com.pk/cdn/shop/files/828-6857_4_545x545.webp?v=1768382669",
      "https://www.bata.com.pk/cdn/shop/files/828-6857_3_545x545.webp?v=1768382669"
    ]
  },
  {
    id: 4,
    name: "Speed X",
    type: "sneakers",
    price: 2200,
    rating: 4.6,
    discountText: "10% OFF",
    hasDiscount: false,
    category: "men",
    size: [39,40,41,42,43,44],
    description: "Lightweight running shoes designed for speed and agility. Breathable fabric keeps feet cool during long runs.",
    images: [
      "https://www.bata.com.pk/cdn/shop/files/801-9196-_1_545x545.webp?v=1768907417",
      "https://www.bata.com.pk/cdn/shop/files/801-9196-_2_545x545.webp?v=1768907417",
      "https://www.bata.com.pk/cdn/shop/files/801-9196-_4_545x545.webp?v=1768907417",
      "https://www.bata.com.pk/cdn/shop/files/801-9196-_3_545x545.webp?v=1768907417"
    ]
  },
  {
    id: 5,
    name: "Classic Leather",
    type: "formal",
    price: 3500,
    rating: 4.7,
    discountText: "20% OFF",
    hasDiscount: true,
    category: "men",
    size: [39,40,41,42,43,44],
    description: "Premium leather formal shoes perfect for office and special occasions. Polished finish with comfortable lining inside.",
    images: [
      "https://www.bata.com.pk/cdn/shop/files/854-6569_1_1_545x545.webp?v=1762248990",
      "https://www.bata.com.pk/cdn/shop/files/854-6569_1_2_545x545.webp?v=1762249009",
      "https://www.bata.com.pk/cdn/shop/files/854-6569_1_4_545x545.webp?v=1761737833",
      "https://www.bata.com.pk/cdn/shop/files/854-6569_1_3_545x545.webp?v=1761737833"
    ]
  },
  {
    id: 6,
    name: "Royal Step",
    type: "formal",
    price: 4000,
    rating: 4.9,
    discountText: "",
    hasDiscount: false,
    category: "men",
    size: [39,40,41,42,43,44],
    description: "Elegant formal footwear with premium leather construction. Slip-resistant sole for confident walking on any surface.",
    images: [
      "https://www.bata.com.pk/cdn/shop/files/854-4581-_1_545x545.jpg?v=1762250533",
      "https://www.bata.com.pk/cdn/shop/files/854-4581-_2_545x545.jpg?v=1762250546",
      "https://www.bata.com.pk/cdn/shop/files/854-4581-_4_545x545.jpg?v=1757099940",
      "https://www.bata.com.pk/cdn/shop/files/854-4581-_3_545x545.jpg?v=1757099940"
    ]
  },
  {
    id: 7,
    name: "Office Prime",
    type: "formal",
    price: 3200,
    rating: 4.5,
    discountText: "10% OFF",
    hasDiscount: false,
    category: "men",
    size: [39,40,41,42,43,44],
    description: "Comfortable office shoes with cushioned insole for all-day wear. Classic design matches any formal outfit perfectly.",
    images: [
      "https://www.bata.com.pk/cdn/shop/files/824-3578-_1_545x545.webp?v=1773390920",
      "https://www.bata.com.pk/cdn/shop/files/824-3578-_2_545x545.webp?v=1773390920",
      "https://www.bata.com.pk/cdn/shop/files/824-3578-_4_545x545.webp?v=1773390920",
      "https://www.bata.com.pk/cdn/shop/files/824-3578-_3_545x545.webp?v=1773390920"
    ]
  },
  {
    id: 8,
    name: "Executive Fit",
    type: "formal",
    price: 4200,
    rating: 4.8,
    discountText: "15% OFF",
    hasDiscount: false,
    category: "men",
    size: [39,40,41,42,43,44],
    description: "Premium executive shoes with genuine leather upper. Memory foam insole provides superior comfort and support.",
    images: [
      "https://www.bata.com.pk/cdn/shop/files/851-6570_1_1_545x545.webp?v=1771226855",
      "https://www.bata.com.pk/cdn/shop/files/851-6570_1_2_545x545.webp?v=1771226889",
      "https://www.bata.com.pk/cdn/shop/files/851-6570_1_4_545x545.webp?v=1759150399",
      "https://www.bata.com.pk/cdn/shop/files/851-6570_1_3_545x545.webp?v=1759150399"
    ]
  },
  {
    id: 9,
    name: "Comfort Sandal",
    type: "sandal",
    price: 1500,
    rating: 4.4,
    discountText: "20% OFF",
    hasDiscount: true,
    category: "men",
    size: [39,40,41,42,43,44],
    description: "Soft cushioned sandals for everyday casual wear. Adjustable straps ensure perfect fit for all foot shapes.",
    images: [
      "https://www.bata.com.pk/cdn/shop/files/861-9701_1_1_545x545.webp?v=1768382798",
      "https://www.bata.com.pk/cdn/shop/files/861-9701_1_2_545x545.webp?v=1768382798",
      "https://www.bata.com.pk/cdn/shop/files/861-9701_1_4_545x545.webp?v=1768382798",
      "https://www.bata.com.pk/cdn/shop/files/861-9701_1_3_545x545.webp?v=1768382798"
    ]
  },
  {
    id: 10,
    name: "Easy Walk",
    type: "sandal",
    price: 1700,
    rating: 4.5,
    discountText: "",
    hasDiscount: false,
    category: "men",
    size: [39,40,41,42,43,44],
    description: "Lightweight walking sandals with ergonomic footbed. Perfect for vacations and daily casual outings.",
    images: [
      "https://www.bata.com.pk/cdn/shop/files/861-9707_1_1_545x545.webp?v=1772097138",
      "https://www.bata.com.pk/cdn/shop/files/861-9707_1_2_545x545.webp?v=1772097163",
      "https://www.bata.com.pk/cdn/shop/files/861-9707_1_4_545x545.webp?v=1772097163",
      "https://www.bata.com.pk/cdn/shop/files/861-9707_1_3_545x545.webp?v=1772097163"
    ]
  },
  {
    id: 11,
    name: "Soft Step",
    type: "sandal",
    price: 1900,
    rating: 4.7,
    discountText: "",
    hasDiscount: false,
    category: "men",
    size: [39,40,41,42,43,44],
    description: "Ultra-soft footbed sandals with durable rubber sole. Ideal for home and outdoor casual wear.",
    images: [
      "https://www.bata.com.pk/cdn/shop/files/861-3936_1_1_545x545.webp?v=1771245342",
      "https://www.bata.com.pk/cdn/shop/files/861-3936_1_4_545x545.webp?v=1771245342",
      "https://www.bata.com.pk/cdn/shop/files/861-3936_1_2_545x545.webp?v=1771245342",
      "https://www.bata.com.pk/cdn/shop/files/861-3936_1_3_545x545.webp?v=1771245342"
    ]
  },
  {
    id: 12,
    name: "Soft Grip",
    type: "chappal",
    price: 1200,
    rating: 4.5,
    discountText: "",
    hasDiscount: false,
    category: "men",
    size: [39,40,41,42,43,44],
    description: "Non-slip chappal with soft cushioning for home use. Lightweight design for maximum comfort.",
    images: [
      "https://www.bata.com.pk/cdn/shop/files/871-9806_1_1_545x545.webp?v=1767957826",
      "https://www.bata.com.pk/cdn/shop/files/871-9806_1_2_545x545.webp?v=1767957826",
      "https://www.bata.com.pk/cdn/shop/files/871-9806_1_4_545x545.webp?v=1767957826",
      "https://www.bata.com.pk/cdn/shop/files/871-9806_1_3_545x545.webp?v=1767957826"
    ]
  },
  {
    id: 13,
    name: "Flex Slide",
    type: "chappal",
    price: 1300,
    rating: 4.6,
    discountText: "20% OFF",
    hasDiscount: true,
    category: "men",
    size: [39,40,41,42,43,44],
    description: "Flexible slide chappal with arch support for all-day ease. Quick-dry material perfect for summer.",
    images: [
      "https://www.bata.com.pk/cdn/shop/files/871-2807_1_1_545x545.webp?v=1767702551",
      "https://www.bata.com.pk/cdn/shop/files/871-2807_1_2_545x545.webp?v=1767702570",
      "https://www.bata.com.pk/cdn/shop/files/871-2807_1_4_545x545.webp?v=1767702570",
      "https://www.bata.com.pk/cdn/shop/files/871-2807_1_3_545x545.webp?v=1767702570"
    ]
  },
  {
    id: 14,
    name: "Casual Wear",
    type: "chappal",
    price: 1000,
    rating: 4.3,
    discountText: "",
    hasDiscount: false,
    category: "men",
    size: [39,40,41,42,43,44],
    description: "Everyday casual chappal for home and street wear. Affordable comfort with durable construction.",
    images: [
      "https://www.bata.com.pk/cdn/shop/files/861-7810_1_1_545x545.webp?v=1768558404",
      "https://www.bata.com.pk/cdn/shop/files/861-7810_1_2_545x545.webp?v=1768558404",
      "https://www.bata.com.pk/cdn/shop/files/861-7810_1_4_545x545.webp?v=1768558404",
      "https://www.bata.com.pk/cdn/shop/files/861-7810_1_3_545x545.webp?v=1768558404"
    ]
  },
  {
    id: 15,
    name: "Cloud Runner",
    type: "sneakers",
    price: 2500,
    rating: 4.7,
    discountText: "20% OFF",
    hasDiscount: true,
    category: "women",
    size: [36,37,38,39,40,41],
    description: "Cloud-like cushioning sneakers for women's active lifestyle. Breathable and lightweight for daily walks.",
    images: [
      "https://www.bata.com.pk/cdn/shop/files/551-5617_1_1_545x545.webp?v=1765452571",
      "https://www.bata.com.pk/cdn/shop/files/551-5617_1_2_545x545.webp?v=1765452593",
      "https://www.bata.com.pk/cdn/shop/files/551-5617_1_4_545x545.webp?v=1761911457",
      "https://www.bata.com.pk/cdn/shop/files/551-5617_1_3_545x545.webp?v=1761911457"
    ]
  },
  {
    id: 16,
    name: "Pink Motion",
    type: "sneakers",
    price: 2800,
    rating: 4.8,
    discountText: "",
    hasDiscount: false,
    category: "women",
    size: [36,37,38,39,40,41],
    description: "Stylish pink sneakers with memory foam insole. Perfect for gym, walking, and casual outings.",
    images: [
      "https://www.bata.com.pk/cdn/shop/files/551-5090-_1_545x545.webp?v=1763532467",
      "https://www.bata.com.pk/cdn/shop/files/551-5090-_2_545x545.webp?v=1763532467",
      "https://www.bata.com.pk/cdn/shop/files/551-5090-_4_545x545.webp?v=1763532467",
      "https://www.bata.com.pk/cdn/shop/files/551-5090-_3_545x545.webp?v=1763532467"
    ]
  },
  {
    id: 17,
    name: "Urban Lady",
    type: "sneakers",
    price: 3100,
    rating: 4.9,
    discountText: "",
    hasDiscount: false,
    category: "women",
    size: [36,37,38,39,40,41],
    description: "Chic urban sneakers for fashion-forward women. Trendy design meets all-day comfort and support.",
    images: [
      "https://www.bata.com.pk/cdn/shop/files/551-6801_1_1_545x545.webp?v=1770033646",
      "https://www.bata.com.pk/cdn/shop/files/551-6801_1_2_545x545.webp?v=1770033646",
      "https://www.bata.com.pk/cdn/shop/files/551-6801_1_4_545x545.webp?v=1770033646",
      "https://www.bata.com.pk/cdn/shop/files/551-6801_1_3_545x545.webp?v=1770033646"
    ]
  },
  {
    id: 18,
    name: "Daily Fit",
    type: "sneakers",
    price: 2600,
    rating: 4.4,
    discountText: "10% OFF",
    hasDiscount: false,
    category: "women",
    size: [36,37,38,39,40,41],
    description: "Everyday fitness sneakers with supportive cushioning. Great for walking, jogging, and casual wear.",
    images: [
      "https://www.bata.com.pk/cdn/shop/files/601-1229_1_545x545.webp?v=1770633760",
      "https://www.bata.com.pk/cdn/shop/files/601-1229_2_545x545.webp?v=1770633760",
      "https://www.bata.com.pk/cdn/shop/files/601-1229_4_545x545.webp?v=1770633760",
      "https://www.bata.com.pk/cdn/shop/files/601-1229_3_545x545.webp?v=1770633760"
    ]
  },
  {
    id: 19,
    name: "Summer Glow",
    type: "sandal",
    price: 1800,
    rating: 4.5,
    discountText: "20% OFF",
    hasDiscount: true,
    category: "women",
    size: [36,37,38,39,40,41],
    description: "Beautiful summer sandals with glittery strap design. Perfect for parties, beach, and casual days.",
    images: [
      "https://www.bata.com.pk/cdn/shop/files/661-1462-_1_545x545.webp?v=1773390814",
      "https://www.bata.com.pk/cdn/shop/files/661-1462-_2_545x545.webp?v=1773390814",
      "https://www.bata.com.pk/cdn/shop/files/661-1462-_4_545x545.webp?v=1773390814",
      "https://www.bata.com.pk/cdn/shop/files/661-1462-_3_545x545.webp?v=1773390814"
    ]
  },
  {
    id: 20,
    name: "Elegant Step",
    type: "sandal",
    price: 2100,
    rating: 4.8,
    discountText: "",
    hasDiscount: false,
    category: "women",
    size: [36,37,38,39,40,41],
    description: "Elegant women's sandals with comfortable wedge heel. Dress up any outfit with these stylish steps.",
    images: [
      "https://www.bata.com.pk/cdn/shop/files/661-9465_2_545x545.webp?v=1773658110",
      "https://www.bata.com.pk/cdn/shop/files/661-9465_3_545x545.webp?v=1773658110",
      "https://www.bata.com.pk/cdn/shop/files/661-9465_1_545x545.webp?v=1773658110",
      "https://www.bata.com.pk/cdn/shop/files/661-9465_4_545x545.webp?v=1773658110"
    ]
  },
  {
    id: 21,
    name: "Golden Style",
    type: "sandal",
    price: 2500,
    rating: 4.9,
    discountText: "",
    hasDiscount: false,
    category: "women",
    size: [36,37,38,39,40,41],
    description: "Premium golden sandals for festive and party wear. Luxurious finish with comfortable footbed.",
    images: [
      "https://www.bata.com.pk/cdn/shop/files/661-5481_1_1_545x545.webp?v=1772096915",
      "https://www.bata.com.pk/cdn/shop/files/661-5481_1_2_545x545.webp?v=1772096915",
      "https://www.bata.com.pk/cdn/shop/files/661-5481_1_4_545x545.webp?v=1772096915",
      "https://www.bata.com.pk/cdn/shop/files/661-5481_1_3_545x545.webp?v=1772096915"
    ]
  },
  {
    id: 22,
    name: "Relax Walk",
    type: "chappal",
    price: 1500,
    rating: 4.6,
    discountText: "20% OFF",
    hasDiscount: true,
    category: "women",
    size: [36,37,38,39,40,41],
    description: "Comfortable women's chappal for home and casual wear. Soft footbed with stylish floral design.",
    images: [
      "https://www.bata.com.pk/cdn/shop/files/671-1454_1_1_545x545.webp?v=1777009343",
      "https://www.bata.com.pk/cdn/shop/files/671-1454_1_2_545x545.webp?v=1777009343",
      "https://www.bata.com.pk/cdn/shop/files/671-1454_1_3_545x545.webp?v=1777009343",
      "https://www.bata.com.pk/cdn/shop/files/671-1454_1_4_545x545.webp?v=1777009343"
    ]
  },
  {
    id: 23,
    name: "Style Slide",
    type: "chappal",
    price: 1700,
    rating: 4.7,
    discountText: "",
    hasDiscount: false,
    category: "women",
    size: [36,37,38,39,40,41],
    description: "Fashionable slide chappal with modern design. Quick-dry material perfect for pool or beach.",
    images: [
      "https://www.bata.com.pk/cdn/shop/files/671-0441_1_1_545x545.webp?v=1770791950",
      "https://www.bata.com.pk/cdn/shop/files/671-0441_1_2_545x545.webp?v=1770791950",
      "https://www.bata.com.pk/cdn/shop/files/671-0441_1_4_545x545.webp?v=1770791950",
      "https://www.bata.com.pk/cdn/shop/files/671-0441_1_3_545x545.webp?v=1770791950"
    ]
  },
  {
    id: 24,
    name: "Pretty Feet",
    type: "chappal",
    price: 1400,
    rating: 4.5,
    discountText: "20% OFF",
    hasDiscount: false,
    category: "women",
    size: [36,37,38,39,40,41],
    description: "Pretty and lightweight chappal for daily wear. Cushioned sole keeps feet happy all day.",
    images: [
      "https://www.bata.com.pk/cdn/shop/products/661-6116-a_545x545.jpg?v=1769772147",
      "https://www.bata.com.pk/cdn/shop/products/661-6116-b_545x545.jpg?v=1769772147",
      "https://www.bata.com.pk/cdn/shop/products/661-6116-c_545x545.jpg?v=1757100753",
      "https://www.bata.com.pk/cdn/shop/products/661-6116-d_545x545.jpg?v=1757100753"
    ]
  },
  {
    id: 25,
    name: "Tiny Runner",
    type: "sneakers",
    price: 1800,
    rating: 4.7,
    discountText: "20% OFF",
    hasDiscount: true,
    category: "kids",
    size: [30,31,32,33,34,35],
    description: "Cute and durable sneakers for active kids. Perfect for school sports and playground fun.",
    images: [
      "https://www.bata.com.pk/cdn/shop/files/151-5563_1_1_545x545.webp?v=1763984021",
      "https://www.bata.com.pk/cdn/shop/files/151-5563_1_2_545x545.webp?v=1763984021",
      "https://www.bata.com.pk/cdn/shop/files/151-5563_1_4_545x545.webp?v=1763984021",
      "https://www.bata.com.pk/cdn/shop/files/151-5563_1_3_545x545.webp?v=1763984021"
    ]
  },
  {
    id: 26,
    name: "Jump Star",
    type: "sneakers",
    price: 2100,
    rating: 4.8,
    discountText: "",
    hasDiscount: false,
    category: "kids",
    size: [30,31,32,33,34,35],
    description: "Lightweight sneakers with extra bounce for jumping kids. Great for active play and running.",
    images: [
      "https://www.bata.com.pk/cdn/shop/files/151-9563_1_1_545x545.webp?v=1763984147",
      "https://www.bata.com.pk/cdn/shop/files/151-9563_1_2_545x545.webp?v=1763984147",
      "https://www.bata.com.pk/cdn/shop/files/151-9563_1_4_545x545.webp?v=1763984147",
      "https://www.bata.com.pk/cdn/shop/files/151-9563_1_3_545x545.webp?v=1763984147"
    ]
  },
  {
    id: 27,
    name: "Speed Kid",
    type: "sneakers",
    price: 2300,
    rating: 4.9,
    discountText: "",
    hasDiscount: false,
    category: "kids",
    size: [30,31,32,33,34,35],
    description: "High-speed sneakers for sporty kids. Excellent grip for running and outdoor activities.",
    images: [
      "https://www.bata.com.pk/cdn/shop/files/151-2004_1_1_545x545.webp?v=1757098694",
      "https://www.bata.com.pk/cdn/shop/files/151-2004_1_2_545x545.webp?v=1757098694",
      "https://www.bata.com.pk/cdn/shop/files/151-2004_1_4_545x545.webp?v=1757098694",
      "https://www.bata.com.pk/cdn/shop/files/151-2004_1_3_545x545.webp?v=1757098694"
    ]
  },
  {
    id: 28,
    name: "Fun Runner",
    type: "sneakers",
    price: 2000,
    rating: 4.7,
    discountText: "10% OFF",
    hasDiscount: true,
    category: "kids",
    size: [30,31,32,33,34,35],
    description: "Colorful fun sneakers that kids will love wearing. Comfortable for all-day school wear.",
    images: [
      "https://www.bata.com.pk/cdn/shop/files/151-9000_1_1_545x545.webp?v=1758020188",
      "https://www.bata.com.pk/cdn/shop/files/151-9000_1_2_545x545.webp?v=1758020188",
      "https://www.bata.com.pk/cdn/shop/files/151-9000_1_4_545x545.webp?v=1758020187",
      "https://www.bata.com.pk/cdn/shop/files/151-9000_1_3_545x545.webp?v=1758020188"
    ]
  },
  {
    id: 29,
    name: "Sunny Steps",
    type: "sandal",
    price: 1400,
    rating: 4.4,
    discountText: "20% OFF",
    hasDiscount: true,
    category: "kids",
    size: [30,31,32,33,34,35],
    description: "Bright summer sandals for sunny day adventures. Adjustable straps for perfect growing feet.",
    images: [
      "https://www.bata.com.pk/cdn/shop/files/161-6019_1_1_545x545.webp?v=1767959966",
      "https://www.bata.com.pk/cdn/shop/files/161-6019_1_2_545x545.webp?v=1767959966",
      "https://www.bata.com.pk/cdn/shop/files/161-6019_1_4_545x545.webp?v=1767959966",
      "https://www.bata.com.pk/cdn/shop/files/161-6019_1_3_545x545.webp?v=1767959966"
    ]
  },
  {
    id: 30,
    name: "Soft Walk",
    type: "sandal",
    price: 1600,
    rating: 4.6,
    discountText: "",
    hasDiscount: false,
    category: "kids",
    size: [30,31,32,33,34,35],
    description: "Extra soft sandals for delicate little feet. Non-slip sole for safe walking indoors.",
    images: [
      "https://www.bata.com.pk/cdn/shop/files/161-8020-_1_545x545.webp?v=1774957696",
      "https://www.bata.com.pk/cdn/shop/files/161-8020-_2_545x545.webp?v=1774957696",
      "https://www.bata.com.pk/cdn/shop/files/161-8020-_4_545x545.webp?v=1774957696",
      "https://www.bata.com.pk/cdn/shop/files/161-8020-_3_545x545.webp?v=1774957696"
    ]
  },
  {
    id: 31,
    name: "Happy Feet",
    type: "sandal",
    price: 1800,
    rating: 4.8,
    discountText: "",
    hasDiscount: false,
    category: "kids",
    size: [30,31,32,33,34,35],
    description: "Happy colorful sandals that kids adore. Perfect for beach, park, and everyday wear.",
    images: [
      "https://www.bata.com.pk/cdn/shop/files/161-8021_1_1_545x545.webp?v=1767960062",
      "https://www.bata.com.pk/cdn/shop/files/161-8021_1_2_545x545.webp?v=1767960062",
      "https://www.bata.com.pk/cdn/shop/files/161-8021_1_4_545x545.webp?v=1767960062",
      "https://www.bata.com.pk/cdn/shop/files/161-8021_1_3_545x545.webp?v=1767960062"
    ]
  },
  {
    id: 32,
    name: "School Star",
    type: "school-shoes",
    price: 2200,
    rating: 4.8,
    discountText: "20% OFF",
    hasDiscount: true,
    category: "kids",
    size: [30,31,32,33,34,35],
    description: "Durable school shoes with premium leather finish. Comfortable for long school days and activities.",
    images: [
      "https://www.bata.com.pk/cdn/shop/files/421-6146-_1_545x545.webp?v=1776423659",
      "https://www.bata.com.pk/cdn/shop/files/421-6146-_2_545x545.webp?v=1776423659",
      "https://www.bata.com.pk/cdn/shop/files/421-6146-_4_545x545.webp?v=1776423659",
      "https://www.bata.com.pk/cdn/shop/files/421-6146-_3_545x545.webp?v=1776423659"
    ]
  },
  {
    id: 33,
    name: "Black Classic",
    type: "school-shoes",
    price: 2400,
    rating: 4.9,
    discountText: "",
    hasDiscount: false,
    category: "kids",
    size: [30,31,32,33,34,35],
    description: "Classic black school shoes with polished finish. Sturdy construction for active school kids.",
    images: [
      "https://www.bata.com.pk/cdn/shop/files/451-6128-_1_545x545.webp?v=1757100772",
      "https://www.bata.com.pk/cdn/shop/files/451-6128-_2_545x545.webp?v=1757100772",
      "https://www.bata.com.pk/cdn/shop/files/451-6128-_3_545x545.webp?v=1757100772",
      "https://www.bata.com.pk/cdn/shop/files/451-6128-_4_545x545.webp?v=1757100772"
    ]
  },
  {
    id: 34,
    name: "Smart Kid",
    type: "school-shoes",
    price: 2500,
    rating: 4.7,
    discountText: "10% OFF",
    hasDiscount: true,
    category: "kids",
    size: [30,31,32,33,34,35],
    description: "Smart formal school shoes with comfort technology. Perfect for uniform and special occasions.",
    images: [
      "https://www.bata.com.pk/cdn/shop/products/651-6108-_1_545x545.jpg?v=1757100735",
      "https://www.bata.com.pk/cdn/shop/products/651-6108-_2_545x545.jpg?v=1757100736",
      "https://www.bata.com.pk/cdn/shop/products/651-6108-_3_545x545.jpg?v=1757100736",
      "https://www.bata.com.pk/cdn/shop/products/651-6108-_4_545x545.jpg?v=1757100736"
    ]
  }
];