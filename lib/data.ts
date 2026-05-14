export const SITE = {
  name: "GR FARM",
  tagline: "From Our Farm To Your Home",
  owner: "Ranjith",
  phone: "6385110943",
  phoneDisplay: "+91 63851 10943",
  whatsapp: "916385110943",
};

export const PRODUCTS = [
  {
    id: "alphonso",
    name: "Organic Alphonso Mango",
    variety: "Alphonso",
    price: 80,
    unit: "kg",
    description:
      "The king of mangoes — rich, creamy, and intensely aromatic. Handpicked at peak ripeness.",
    image: "/images/alphonso.jpg",
    badge: "Premium",
  },
  {
    id: "totapuri",
    name: "Organic Totapuri Mango",
    variety: "Totapuri",
    price: 40,
    unit: "kg",
    description:
      "Perfect for juices and pickles — tangy-sweet profile with a distinctive beak shape.",
    image: "/images/totapuri.jpg",
    badge: "Value",
  },
  {
    id: "sindhura",
    name: "Organic Sindhura Mango",
    variety: "Sindhura",
    price: 50,
    unit: "kg",
    description:
      "Vibrant red blush, sweet fiberless flesh — a beloved table mango for the whole family.",
    image: "/images/sindhura.jpg",
    badge: "Seasonal",
  },
] as const;

export const FEATURES = [
  { title: "100% Organic", icon: "leaf" as const },
  { title: "Naturally Grown", icon: "sprout" as const },
  { title: "Farm Fresh", icon: "truck" as const },
  { title: "Handpicked", icon: "hand" as const },
  { title: "Safe Delivery", icon: "shield" as const },
];


