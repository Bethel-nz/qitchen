const maki: FOOD_DATA[] = [
  {
    title: 'spicy tuna maki',
    description:
      'A tantalizing blend of spicy tuna, cucumber, and avocado, harmoniously rolled in nori and seasoned rice.',
    price: 9.99,
    special: true,
    image: '/spicy-tuna-maki.png',
  },
  {
    title: 'mango maki',
    description:
      'Tempura-fried shrimp, cucumber, and cream cheese embrace a center of fresh avocado, delivering a satisfying contrast of textures.',
    price: 4.99,
    image: '/mango-maki.png',
  },
  {
    title: 'salmon maki',
    description:
      'Shiitake mushrooms, avocado, and pickled daikon radish nestle within a roll of seasoned rice, coated with nutty sesame seeds.',
    price: 6.99,
    image: '/salmon-maki.png',
  },
  {
    title: 'tuna maki',
    description:
      'A vibrant assortment of julienned carrots, bell peppers, and cucumber, tightly encased in a nori-wrapped rice roll.',
    price: 5.99,
    image: '/tuna-maki.png',
  },
];

const uramaki: FOOD_DATA[] = [
  {
    title: 'Volcano Delight',
    description:
      'Creamy crab salad, avocado, and cucumber rolled inside, topped with spicy tuna and drizzled with fiery sriracha sauce.',
    price: 11.99,
    special: true,
    image: '/volcano-delight.png',
  },
  {
    title: 'Rainbow Fusion',
    description:
      'A colorful blend of fresh tuna, salmon, yellowtail, and avocado, enveloping a core of cucumber and crab stick.',
    price: 9.99,
    image: '/rainbow-fusion.png',
  },
  {
    title: 'Dragon Elegance',
    description:
      'Grilled eel and avocado nestled within the roll, draped with slices of ripe avocado resembling dragon scales.',
    price: 12.99,
    image: '/dragon-elegance.png',
  },
  {
    title: 'Sunset Serenity',
    description:
      'Tempura shrimp, cucumber, and spicy mayo embraced by a roll of soy paper, crowned with slices of creamy mango.',
    price: 12.99,
    image: '/sunset-serenity.png',
  },
  {
    title: 'Mystic Garden',
    description:
      'Shiitake mushrooms, asparagus, and cucumber intermingle with crispy tempura bits, blanketed by a layer of sesame seeds.',
    price: 12.99,
    image: '/mystic-garden.png',
  },
  {
    title: 'Ocean Breeze',
    description:
      'A medley of fresh shrimp, crab stick, and avocado, laced with a gentle touch of zesty yuzu-infused tobiko.',
    price: 11.99,
    image: '/ocean-breeze.png',
  },
  {
    title: 'Tokyo Blossom',
    description:
      'Delicate pink soy paper envelopes a blend of tuna, crab stick, and cucumber, embellished with edible flower petals.',
    price: 11.99,
    image: '/tokyo-blossom.png',
  },
];

const special_rolls: FOOD_DATA[] = [
  {
    title: 'Sunrise Bliss',
    description:
      'A delicate combination of fresh salmon, cream cheese, and asparagus, rolled in orange-hued tobiko for a burst of sunrise-inspired flavors.',
    price: 19.99,
    special: true,
    image: '/sunrise-bliss.png',
  },
  {
    title: 'Mango Tango Fusion',
    description:
      'Tempura shrimp, cucumber, and avocado dance alongside sweet mango slices, drizzled with a tangy mango sauce.',
    price: 19.99,
    special: true,
    image: '/mango-tango-fusion.png',
  },
  {
    title: 'Truffle Indulgence',
    description:
      'Decadent slices of black truffle grace a roll of succulent wagyu beef, cucumber, and microgreens, culminating in an exquisite umami symphony.',
    price: 19.99,
    special: true,
    image: '/truffle-indulgence.png',
  },
  {
    title: 'Pacific Firecracker',
    description:
      'Spicy crab salad, tempura shrimp, and jalapeño peppers combine in a fiery ensemble, accented with a chili-infused aioli.',
    price: 19.99,
    special: true,
    image: '/pacific-firecracker.png',
  },
  {
    title: 'Eternal Eel Enchantment',
    description:
      'An enchanting blend of eel tempura, foie gras, and cucumber, elegantly layered with truffle oil and gold leaf for a touch of opulence.',
    price: 19.99,
    special: true,
    image: '/eternal-eel-enchantment.png',
  },
];

const data = { maki, uramaki, special_rolls };
export default data;

export type FOOD_DATA = {
  title: string;
  description: string;
  price: number;
  special?: boolean;
  image: string;
};
