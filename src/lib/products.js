const products = [
  {
    slug: "christmas",
    sku: "HAJ-CHR-001",
    name: "Christmas",
    heatLevel: "Medium",
    isFeatured: true,
    isPurchasable: false,
    priceCents: null,
    stripePriceId: null,
    shortDescription:
      "The bold fusion of red and green chile in every bite. A holiday tradition turned year-round obsession.",
    fullDescription:
      "Our signature Christmas Jerky blends the earthy heat of red chile with the bright kick of green chile, a nod to New Mexico's most iconic combo. It is bold, balanced, and seriously addictive. If you have ever said 'Christmas, please' at a burrito shop, this jerky was made for you.",
  },
  {
    slug: "red-chile",
    sku: "HAJ-RCH-001",
    name: "Red Chile",
    heatLevel: "Medium",
    isFeatured: true,
    isPurchasable: false,
    priceCents: null,
    stripePriceId: null,
    shortDescription:
      "A deep, smoky flavor with a smooth, spicy finish straight from the heart of New Mexico.",
    fullDescription:
      "Crafted with authentic New Mexican red chile, this jerky delivers a rich, slow-building heat in every bite. It is ideal for chile purists who want a snack with Southwestern soul.",
  },
  {
    slug: "green-chile",
    sku: "HAJ-GCH-001",
    name: "Green Chile",
    heatLevel: "Mild",
    isFeatured: true,
    isPurchasable: false,
    priceCents: null,
    stripePriceId: null,
    shortDescription:
      "Bright, zesty, and unmistakably New Mexican, green chile like you have never had it before.",
    fullDescription:
      "Made with Hatch green chile flavor, this jerky carries a tangy edge and roasted chile character. It is a strong entry point for people new to New Mexico heat.",
  },
  {
    slug: "garlic-parmesan-green",
    sku: "HAJ-GPG-001",
    name: "Garlic Parmesan Green",
    heatLevel: "Mild",
    isFeatured: true,
    isPurchasable: false,
    priceCents: null,
    stripePriceId: null,
    shortDescription:
      "A savory trio of garlic, parmesan, and green chile that is rich and addictive.",
    fullDescription:
      "This flavor blends roasted garlic, parmesan depth, and green chile brightness into one layered bite. It is made for snackers who want jerky with a gourmet edge.",
  },
  {
    slug: "mango-habanero",
    sku: "HAJ-MHB-001",
    name: "Mango Habanero",
    heatLevel: "Hot",
    isFeatured: true,
    isPurchasable: false,
    priceCents: null,
    stripePriceId: null,
    shortDescription:
      "Sweet mango starts the bite, then habanero turns up the heat.",
    fullDescription:
      "Mango Habanero balances fruit-forward sweetness with a strong chile finish. It is built for people who like their snack sweet first and fiery second.",
  },
  {
    slug: "hot-cheeto",
    sku: "HAJ-HCT-001",
    name: "Hot Cheeto",
    heatLevel: "Hot",
    isFeatured: false,
    isPurchasable: false,
    priceCents: null,
    stripePriceId: null,
    shortDescription:
      "Crave-worthy Hot Cheeto-style heat meets handmade jerky.",
    fullDescription:
      "If you love spicy snack flavor profiles, this one is for you. It is bold, fiery, and packed with playful crunch-inspired flavor.",
  },
  {
    slug: "hot-cheeto-limon",
    sku: "HAJ-HCL-001",
    name: "Hot Cheeto Limon",
    heatLevel: "Hot",
    isFeatured: true,
    isPurchasable: false,
    priceCents: null,
    stripePriceId: null,
    shortDescription:
      "All the hot Cheeto-style boldness plus a bright lime kick.",
    fullDescription:
      "This variation adds citrus tang to the heat-forward profile, giving every bite a sharp and lively finish.",
  },
  {
    slug: "pickle",
    sku: "HAJ-PKL-001",
    name: "Pickle",
    heatLevel: "Mild",
    isFeatured: false,
    isPurchasable: false,
    priceCents: null,
    stripePriceId: null,
    shortDescription: "Zesty dill tang and savory beef in one bold bite.",
    fullDescription:
      "Pickle Jerky is briny, garlicky, and snacky in the best way. It is a fan pick for anyone who likes sour-forward flavors.",
  },
  {
    slug: "hot-pickle",
    sku: "HAJ-HPK-001",
    name: "Hot Pickle",
    heatLevel: "Medium",
    isFeatured: false,
    isPurchasable: false,
    priceCents: null,
    stripePriceId: null,
    shortDescription: "Classic pickle flavor with chile heat layered in.",
    fullDescription:
      "Hot Pickle keeps the dill tang and adds a spicy edge for a mouth-puckering and warming finish.",
  },
  {
    slug: "ranch",
    sku: "HAJ-RAN-001",
    name: "Ranch",
    heatLevel: "Mild",
    isFeatured: false,
    isPurchasable: false,
    priceCents: null,
    stripePriceId: null,
    shortDescription: "Creamy ranch-style flavor in a savory jerky format.",
    fullDescription:
      "Herbs, garlic, and tangy notes make this a mellow and easy entry point for all-day snacking.",
  },
  {
    slug: "honey-sriracha",
    sku: "HAJ-HSR-001",
    name: "Honey Sriracha",
    heatLevel: "Medium",
    isFeatured: false,
    isPurchasable: false,
    priceCents: null,
    stripePriceId: null,
    shortDescription: "Sweet honey glaze meets a clean sriracha kick.",
    fullDescription:
      "Honey Sriracha brings a sweet-and-heat profile with sticky, tangy depth and a lively pepper finish.",
  },
  {
    slug: "lemon-pepper",
    sku: "HAJ-LPP-001",
    name: "Lemon Pepper",
    heatLevel: "Mild",
    isFeatured: false,
    isPurchasable: false,
    priceCents: null,
    stripePriceId: null,
    shortDescription:
      "Bright citrus and black pepper for a sharp, clean bite.",
    fullDescription:
      "Lemon Pepper is punchy and balanced, with a fresh citrus opening and peppery close.",
  },
  {
    slug: "garlic",
    sku: "HAJ-GAR-001",
    name: "Garlic",
    heatLevel: "Mild",
    isFeatured: false,
    isPurchasable: false,
    priceCents: null,
    stripePriceId: null,
    shortDescription:
      "Pure garlic flavor, bold and savory from start to finish.",
    fullDescription:
      "This is a direct garlic profile without distractions, designed for people who want deep savory character.",
  },
  {
    slug: "garlic-parmesan",
    sku: "HAJ-GPM-001",
    name: "Garlic Parmesan",
    heatLevel: "Mild",
    isFeatured: false,
    isPurchasable: false,
    priceCents: null,
    stripePriceId: null,
    shortDescription: "Bold garlic blended with nutty parmesan richness.",
    fullDescription:
      "Garlic Parmesan layers sharp, savory flavor with a smooth cheesy finish while keeping classic jerky bite.",
  },
  {
    slug: "plain",
    sku: "HAJ-PLN-001",
    name: "Plain",
    heatLevel: "None",
    isFeatured: false,
    isPurchasable: false,
    priceCents: null,
    stripePriceId: null,
    shortDescription: "No extra noise, just quality beef and signature texture.",
    fullDescription:
      "Plain is for purists. It keeps seasoning light to highlight quality beef and the Huerta texture.",
  },
  {
    slug: "jalapeno",
    sku: "HAJ-JAL-001",
    name: "Jalapeno",
    heatLevel: "Medium",
    isFeatured: false,
    isPurchasable: false,
    priceCents: null,
    stripePriceId: null,
    shortDescription:
      "Classic jalapeno flavor with a manageable heat build.",
    fullDescription:
      "Jalapeno offers familiar green chile notes with medium spice and a steady finish.",
  },
  {
    slug: "habanero",
    sku: "HAJ-HAB-001",
    name: "Habanero",
    heatLevel: "Very Hot",
    isFeatured: false,
    isPurchasable: false,
    priceCents: null,
    stripePriceId: null,
    shortDescription: "A serious heat level for people who chase spice.",
    fullDescription:
      "Habanero starts controlled and ends with a strong kick. It is built for heat seekers.",
  },
  {
    slug: "pepper",
    sku: "HAJ-PEP-001",
    name: "Pepper",
    heatLevel: "Mild",
    isFeatured: false,
    isPurchasable: false,
    priceCents: null,
    stripePriceId: null,
    shortDescription: "A timeless black pepper profile on lean beef.",
    fullDescription:
      "Pepper Jerky is sharp, savory, and dependable with a coarse black pepper finish.",
  },
  {
    slug: "chipotle",
    sku: "HAJ-CHP-001",
    name: "Chipotle",
    heatLevel: "Medium",
    isFeatured: false,
    isPurchasable: false,
    priceCents: null,
    stripePriceId: null,
    shortDescription: "Smoky chipotle character with a warm, slow burn.",
    fullDescription:
      "Chipotle Jerky combines smoke, spice, and subtle sweetness for a deeper Southwestern profile.",
  },
];

export default products;
