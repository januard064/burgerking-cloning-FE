import product0 from "../assets/images/products/product0.jpg";

export const PRODUCTS_BKAPP = [
  {
    id: 0,
    name: "App Exc 1pc Ayam + Nasi",
    detail: "1pc Ayam + Nasi",
    newPrice: 15455,
    oldPrice: 28636,
    thumbnail: product0,
    menuId: "bk-app-exclusive",
  },
  {
    id: 14,
    name: "Paket Cheese Whopper® JR Regular",
    detail: "Cheese Whopper® JR + Fries Regular + Coke Regular",
    newPrice: 25000,
    oldPrice: 49545,
    thumbnail: product0,
    menuId: "bk-app-exclusive",
  },
];

export const PRODUCTS_PROMO = [
  {
    id: 1,
    name: "Blitz 2 Ayam Crispy",
    detail: "2pc Ayam Crispy",
    newPrice: 21818,
    oldPrice: 40000,
    thumbnail: product0,
    menuId: "promo-hari-ini-6",
  },
];

export const PRODUCTS_CHEESE = [
  {
    id: 2,
    name: "Kejutan Meriah Paket Rame-Rame",
    detail:
      "Whopper® Jr Cheese Dunk + 1Pc Crispy Chicken Cheese Dunk + 1Pc Spicy Chicken + 2 Rice + Fries Regular + 2 Coke Regular + Coke Float Regular",
    newPrice: 109091,
    oldPrice: null,
    thumbnail: product0,
    menuId: "new-cheese-dunk-limited-time-offer",
  },
];

export const PRODUCTS_KING = [
  {
    id: 3,
    name: "King Fusion Nutella®",
    detail:
      "Ice krim vanilla yang manis berpadu dengan saus coklat Nutella dan bertambur caramel crumble.",
    newPrice: 16818,
    oldPrice: null,
    thumbnail: product0,
    menuId: "new-king-fusion-nutella-limited-time-offer",
  },
];

export const PRODUCTS_HEINZ = [
  {
    id: 4,
    name: "King Box Mexican Whopper® Medium",
    detail: "Mexican Whopper® + 1Pcs Crispy Chicken + Rice + Coke Medium",
    newPrice: 90909,
    oldPrice: null,
    thumbnail: product0,
    menuId: "heinz-mexican-whopper",
  },
];

export const PRODUCTS_GOLD = [
  {
    id: 5,
    name: "Cheese Lava Angus Burger",
    detail:
      "Cheese Lava Angus Burger Ala Carte 100% Australian angus patty dengan saus mayonaise, fresh lettuce, mozza cheese patty dan juga melty American cheese dibalut dengan multigrain brioche bun yang lembut.",
    newPrice: 50000,
    oldPrice: null,
    thumbnail: product0,
    menuId: "gold-collection-5",
  },
];

export const PRODUCTS_CHEESEW = [
  {
    id: 6,
    name: "King Box Spicy Cheese Whopper®",
    detail: "Spicy Cheese Whopper® + 1 pc Ayam + Nasi + Medium Drink",
    newPrice: 80909,
    oldPrice: null,
    thumbnail: product0,
    menuId: "cheese-whopper-4",
  },
];

export const PRODUCTS_CHEESEBURGER = [
  {
    id: 7,
    name: "King Box Cheeseburger Supreme",
    detail: "Cheeseburger Supreme + 1 pc Ayam + Nasi + Medium Drink",
    newPrice: 61819,
    oldPrice: null,
    thumbnail: product0,
    menuId: "cheeseburger-favoriter",
  },
];

export const PRODUCTS_KINGSCHICKEN = [
  {
    id: 8,
    name: "Paket 1Pc Crispy Chicken Cheese Dunk Medium",
    detail: undefined,
    newPrice: 35000,
    oldPrice: null,
    thumbnail: product0,
    menuId: "kings-chicken-rasa-baru",
  },
];

export const PRODUCTS_KIDSMEAL = [
  {
    id: 9,
    name: "King JR Crispy Chicken",
    detail: "1 pc Ayam + Nasi + Ice Milo Regular",
    newPrice: 31818,
    oldPrice: null,
    thumbnail: product0,
    menuId: "kids-meal",
  },
];

export const PRODUCTS_SIDEDESSERT = [
  {
    id: 11,
    name: "King Fusion Cookies 'N Cream",
    detail: "Ice cream vanilla yang lembut dipadukan dengan Cookies crumble",
    newPrice: 12727,
    oldPrice: null,
    thumbnail: product0,
    menuId: "side-dessert",
  },
];

export const PRODUCTS_BEVERAGES = [
  {
    id: 12,
    name: "Coke Large",
    detail: "Coke Large",
    newPrice: 18182,
    oldPrice: null,
    thumbnail: product0,
    menuId: "beverages",
  },
];

export const PRODUCTS_KINGDEALS = [
  {
    id: 13,
    name: "King Deals Box Cheesy Beef Burger Regular",
    detail: "Cheesy Beef Burger + 1 pc Ayam Crispy + Nasi + Coke Regular",
    newPrice: 40909,
    oldPrice: null,
    thumbnail: product0,
    menuId: "king-deals",
  },
];

export const ALLPRODUCST = PRODUCTS_BKAPP.concat(
  PRODUCTS_BKAPP,
  PRODUCTS_CHEESE,
  PRODUCTS_CHEESEBURGER,
  PRODUCTS_CHEESEW,
  PRODUCTS_GOLD,
  PRODUCTS_HEINZ,
  PRODUCTS_KIDSMEAL,
  PRODUCTS_KING,
  PRODUCTS_KINGDEALS,
  PRODUCTS_KINGSCHICKEN,
  PRODUCTS_PROMO,
  PRODUCTS_SIDEDESSERT
);
