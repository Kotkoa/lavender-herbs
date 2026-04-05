type LavenderCategory = "field" | "farm" | "oil" | "shop";

interface LavenderLocation {
  name: string;
  region: string;
  category: LavenderCategory;
  lat: number;
  lng: number;
  rating: number;
  reviews: number;
  description: string;
  address: string;
}

const CATEGORY_META: Record<LavenderCategory, { emoji: string; label: string }> = {
  field: { emoji: "\u{1F49C}", label: "Field" },
  farm: { emoji: "\u{1F33F}", label: "Farm" },
  oil: { emoji: "\u{1F9EA}", label: "Distillery" },
  shop: { emoji: "\u{1F6CD}\u{FE0F}", label: "Shop" },
};

function getCategoryEmoji(category: LavenderCategory): string {
  return CATEGORY_META[category].emoji;
}

function getCategoryLabel(category: LavenderCategory): string {
  return CATEGORY_META[category].label;
}

interface CategoryFilter {
  value: LavenderCategory | "all";
  label: string;
  emoji?: string;
}

const CATEGORY_FILTERS: CategoryFilter[] = [
  { value: "all", label: "All" },
  { value: "field", label: "Fields", emoji: "\u{1F49C}" },
  { value: "farm", label: "Farms", emoji: "\u{1F33F}" },
  { value: "oil", label: "Distilleries", emoji: "\u{1F9EA}" },
  { value: "shop", label: "Shops", emoji: "\u{1F6CD}\u{FE0F}" },
];

const REGION_GROUPS = [
  "Brihuega, Guadalajara",
  "Tiedra, Valladolid",
  "Burgos",
  "South & East",
  "Catalonia & Valencia",
  "Other",
];

const LAVENDER_LOCATIONS: LavenderLocation[] = [
  {
    name: "Campos de Lavanda \u2014 Main Fields",
    region: "Brihuega, Guadalajara",
    category: "field",
    lat: 40.7898494,
    lng: -2.8499762,
    rating: 4.7,
    reviews: 2503,
    description: "The most famous lavender fields in Spain. Brihuega is the \u2018Spanish Provence.\u2019 Annual Lavender Festival in July.",
    address: "CM-2005, 19400 Brihuega, Guadalajara",
  },
  {
    name: "Campos de Lavanda \u2014 Second Field",
    region: "Brihuega, Guadalajara",
    category: "field",
    lat: 40.7620315,
    lng: -2.8850287,
    rating: 4.7,
    reviews: 505,
    description: "Another field location closer to town center. Less crowded alternative.",
    address: "Q467+RX, 19400 Brihuega, Guadalajara",
  },
  {
    name: "Destiler\u00EDa Jard\u00EDn de la Alcarria",
    region: "Brihuega, Guadalajara",
    category: "oil",
    lat: 40.7601562,
    lng: -2.8788345,
    rating: 4.5,
    reviews: 317,
    description: "Lavender essential oil distillery. Guided tours showing steam distillation. Shop with oils, soaps, cosmetics.",
    address: "Pl. Sector el Alto, 25T, 19400 Brihuega, Guadalajara",
  },
  {
    name: "Alcarria Natura \u2014 El Rinc\u00F3n de la Lavanda",
    region: "Brihuega, Guadalajara",
    category: "shop",
    lat: 40.75979,
    lng: -2.86989,
    rating: 4.8,
    reviews: 25,
    description: "Lavender shop-museum. Products: oils, honey, cosmetics.",
    address: "C. Mayor, 8, 19400 Brihuega, Guadalajara",
  },
  {
    name: "Esencias de Vida \u2014 Lavender Ice Cream",
    region: "Brihuega, Guadalajara",
    category: "shop",
    lat: 40.7588418,
    lng: -2.8705301,
    rating: 4.9,
    reviews: 73,
    description: "Handcrafted lavender oil and artisan lavender ice cream.",
    address: "C. Ntra. Sra. de la Pe\u00F1a, 2, 19400 Brihuega, Guadalajara",
  },
  {
    name: "Campos de Oro Azul \u2014 Workshop",
    region: "Brihuega, Guadalajara",
    category: "shop",
    lat: 40.760748,
    lng: -2.86976,
    rating: 4.1,
    reviews: 34,
    description: "Lavender product workshop. \u2018Blue Gold\u2019 is what lavender is called in Alcarria.",
    address: "C. las Armas, 21, 19400 Brihuega, Guadalajara",
  },
  {
    name: "Campos de Lavanda Hontanares",
    region: "Brihuega, Guadalajara",
    category: "field",
    lat: 40.8519049,
    lng: -2.7725542,
    rating: 4.5,
    reviews: 11,
    description: "Fields north of Brihuega. Less known, quieter for photography.",
    address: "19413 Brihuega, Guadalajara",
  },
  {
    name: "Campo de Lavanda El Mara\u00F1al",
    region: "Brihuega, Guadalajara",
    category: "field",
    lat: 40.6973613,
    lng: -2.9844219,
    rating: 5.0,
    reviews: 1,
    description: "Fields near Caspue\u00F1as village, south of Brihuega. Less touristy.",
    address: "GU-908, 19412 Caspue\u00F1as, Guadalajara",
  },
  {
    name: "Tiedra de Lavanda \u2014 Farm Museum",
    region: "Tiedra, Valladolid",
    category: "farm",
    lat: 41.6566776,
    lng: -5.2637346,
    rating: 4.5,
    reviews: 940,
    description: "Largest lavender farm in Castilla y Le\u00F3n. 100,000+ bushes. Tours, tastings, shop. Open May\u2013September.",
    address: "47870 Tiedra, Valladolid",
  },
  {
    name: "Campos de lavanda Tiedra",
    region: "Tiedra, Valladolid",
    category: "field",
    lat: 41.6577829,
    lng: -5.2610332,
    rating: 4.6,
    reviews: 91,
    description: "Lavender fields next to Tiedra farm museum. Open access for photography.",
    address: "VA-VP-6605, 47870 Tiedra, Valladolid",
  },
  {
    name: "Campos de Lavanda Caleruega",
    region: "Burgos",
    category: "field",
    lat: 41.8380458,
    lng: -3.4909258,
    rating: 4.8,
    reviews: 57,
    description: "Lavender fields near Caleruega, birthplace of Saint Dominic. Views of medieval monastery.",
    address: "Caleruega, 09451, Burgos",
  },
  {
    name: "Campos de lavanda Cilleruelo de Arriba",
    region: "Burgos",
    category: "field",
    lat: 41.9076093,
    lng: -3.6604066,
    rating: 4.6,
    reviews: 19,
    description: "Lavender fields in Burgos province. Quiet countryside, great photo spots.",
    address: "09349 Cilleruelo de Arriba, Burgos",
  },
  {
    name: "F\u00E1brica de esencias Pe\u00F1arrubia",
    region: "South & East",
    category: "oil",
    lat: 38.9535002,
    lng: -2.7496925,
    rating: 4.6,
    reviews: 133,
    description: "Essential oil factory near Lagunas de Ruidera natural park. Tours, aroma tastings.",
    address: "Camino de Santiago, 02611 Ossa de Montiel, Albacete",
  },
  {
    name: "Campos de Lavanda de Za\u00E9n",
    region: "South & East",
    category: "field",
    lat: 38.1994345,
    lng: -2.1065238,
    rating: 4.9,
    reviews: 9,
    description: "Lavender fields in Moratalla mountains. Wild lavender on mountain slopes.",
    address: "RM-702, 30441 Moratalla, Murcia",
  },
  {
    name: "Aceites Esenciales Labiatae",
    region: "South & East",
    category: "oil",
    lat: 37.1940572,
    lng: -3.4618583,
    rating: 4.7,
    reviews: 21,
    description: "Lavender essential oil production in Sierra Nevada. Ecological, organic lavender.",
    address: "C. Eras del Molino, 3, 18192 Qu\u00E9ntar, Granada",
  },
  {
    name: "Finca Las Coronas",
    region: "South & East",
    category: "farm",
    lat: 37.5783348,
    lng: -5.6371293,
    rating: 4.9,
    reviews: 61,
    description: "Farm in Carmona, Seville. Lavender and aloe vera. Tours, natural product shop.",
    address: "Cortijo del Coto, 41410 Carmona, Sevilla",
  },
  {
    name: "Aromes de can Rossell\u00F3",
    region: "Catalonia & Valencia",
    category: "farm",
    lat: 41.59691,
    lng: 0.62127,
    rating: 4.0,
    reviews: 30,
    description: "Aromatic plant farm in Lleida. Lavender, rosemary, thyme. Tours and workshops.",
    address: "Partida Sot de Fontanet, 25, 25197 Lleida",
  },
  {
    name: "Lavanda Experience",
    region: "Catalonia & Valencia",
    category: "shop",
    lat: 41.4842605,
    lng: 2.0535039,
    rating: 4.8,
    reviews: 21,
    description: "Lavender showroom near Barcelona. Products, soap and cosmetics workshops.",
    address: "Av V\u00EDa Augusta 2-14, 08174 Sant Cugat del Vall\u00E8s, Barcelona",
  },
  {
    name: "TheOriginalGarden",
    region: "Catalonia & Valencia",
    category: "farm",
    lat: 38.9473568,
    lng: -0.1461566,
    rating: 4.5,
    reviews: 315,
    description: "Aromatic plant nursery in Miramar, Valencia. Wide lavender selection. Seedlings for purchase.",
    address: "Carrer dels Torners, 46714 Miramar, Valencia",
  },
  {
    name: "Campos de Lavanda El Romeral",
    region: "Other",
    category: "field",
    lat: 39.6975676,
    lng: -3.4373488,
    rating: 3.6,
    reviews: 25,
    description: "Lavender fields in Toledo, La Mancha. Near windmills of Consuegra.",
    address: "45770 El Romeral, Toledo",
  },
];

export {
  LAVENDER_LOCATIONS,
  REGION_GROUPS,
  CATEGORY_FILTERS,
  CATEGORY_META,
  getCategoryEmoji,
  getCategoryLabel,
};
export type { LavenderCategory, LavenderLocation, CategoryFilter };
