/*
  Product data for Huerta’s Albuquerque Jerky.
  Each object contains a slug (used in the URL), name, shortDescription,
  and fullDescription. These descriptions were crafted based on
  customer-provided details and marketing copy.
*/

const products = [
  {
    slug: 'christmas',
    name: 'Christmas',
    shortDescription:
      'The bold fusion of red and green chile in every bite. A holiday tradition turned year‑round obsession.',
    fullDescription:
      'Our signature Christmas Jerky blends the earthy heat of red chile with the bright kick of green — a nod to New Mexico’s most iconic combo. It’s bold, balanced, and seriously addictive. If you’ve ever said “Christmas, please” at a burrito shop, this jerky was made for you.',
  },
  {
    slug: 'red-chile',
    name: 'Red Chile',
    shortDescription:
      'A deep, smoky flavor with a smooth, spicy finish — straight from the heart of New Mexico.',
    fullDescription:
      'Crafted with authentic New Mexican red chile, this jerky delivers a rich, slow-building heat and bold flavor in every bite. It’s perfect for chile purists who love their snacks with a little Southwestern soul.',
  },
  {
    slug: 'green-chile',
    name: 'Green Chile',
    shortDescription:
      'Bright, zesty, and unmistakably New Mexican — green chile like you’ve never had it before.',
    fullDescription:
      'Made with real Hatch green chile, this jerky pops with a slightly tangy heat and smooth roasted flavor. It’s a great introduction to Southwestern spice and a fan favorite among locals and newcomers alike.',
  },
  {
    slug: 'garlic-parmesan-green',
    name: 'Garlic Parmesan Green',
    shortDescription:
      'A savory masterpiece of garlic, parmesan, and green chile — complex and addictive.',
    fullDescription:
      'This flavor mash-up brings together rich garlic, sharp parmesan cheese, and the signature spice of green chile. It’s crunchy, savory, and layered with flavor. Great for snackers who love jerky with a gourmet twist.',
  },
  {
    slug: 'mango-habanero',
    name: 'Mango Habanero',
    shortDescription:
      'Sweet, fruity mango upfront — with a fiery habanero finish that hits just right.',
    fullDescription:
      'Mango Habanero Jerky walks the line between sweet and spicy. The mango adds a tropical fruitiness that gives way to a powerful habanero punch. For spice lovers who enjoy a wild ride, this one’s a must‑try.',
  },
  {
    slug: 'hot-cheeto',
    name: 'Hot Cheeto',
    shortDescription:
      'That crave‑worthy Hot Cheeto heat meets handmade jerky — fiery, fun, and full of crunch.',
    fullDescription:
      'If you love spicy snacks, Hot Cheeto Jerky is your dream come true. Coated in that unmistakable cheesy‑red heat, this jerky packs bold flavor with a kick. It’s a crunchy, addictive twist on a modern classic.',
  },
  {
    slug: 'hot-cheeto-limon',
    name: 'Hot Cheeto Limón',
    shortDescription:
      'All the boldness of Hot Cheeto with a tangy twist of lime — spicy, sour, and sensational.',
    fullDescription:
      'We took the spicy cheese coating of classic Hot Cheetos and added a citrus punch of limón to create a flavor that dances on your tastebuds. If you like heat with a side of zing, this one’s for you.',
  },
  {
    slug: 'pickle',
    name: 'Pickle',
    shortDescription:
      'Zesty dill tang and tender beef — your favorite pickle, now in jerky form.',
    fullDescription:
      'Our Pickle Jerky is bold, sour, and savory, capturing the classic flavor of a good dill pickle in every bite. With a hint of garlic and vinegar, it’s the perfect snack for fans of briny, salty goodness.',
  },
  {
    slug: 'hot-pickle',
    name: 'Hot Pickle',
    shortDescription:
      'All the pickle flavor you love — turned up with a spicy kick.',
    fullDescription:
      'Hot Pickle Jerky takes our zesty dill blend and layers in chili heat for a snack that’s both mouth‑puckering and mouth‑burning. A fan favorite among spice lovers who crave something different.',
  },
  {
    slug: 'ranch',
    name: 'Ranch',
    shortDescription:
      'Cool, creamy ranch flavor in a crunchy, savory jerky format — a comforting classic.',
    fullDescription:
      'Ranch Jerky is where creamy meets crispy. We blend herbs, garlic, and a hint of tang to deliver the familiar flavor of ranch dressing in a satisfyingly savory jerky. It’s mellow, craveable, and a perfect anytime snack.',
  },
  {
    slug: 'honey-sriracha',
    name: 'Honey Sriracha',
    shortDescription:
      'Sweet meets heat with a sticky honey glaze and a sharp sriracha bite.',
    fullDescription:
      'Our Honey Sriracha Jerky delivers the perfect balance of sugary smoothness and tangy heat. The sweet honey caramelizes slightly during drying, while the sriracha adds a garlicky, chili kick. A favorite for fans of bold but balanced flavor.',
  },
  {
    slug: 'lemon-pepper',
    name: 'Lemon Pepper',
    shortDescription:
      'Bright citrus and bold black pepper — simple, sharp, and full of flavor.',
    fullDescription:
      'Lemon Pepper Jerky is a clean, zesty option for those who like their jerky with a little tang and a peppery finish. The lemon wakes up your palate, while cracked black pepper keeps things grounded. Fresh, punchy, and easy to love.',
  },
  {
    slug: 'garlic',
    name: 'Garlic',
    shortDescription:
      'Pure garlic flavor through and through — bold, savory, and deeply satisfying.',
    fullDescription:
      'This one’s for the garlic lovers. Our Garlic Jerky is bold and aromatic, delivering rich, roasted garlic in every bite. No distractions, no gimmicks — just a savory, single‑note snack that always hits.',
  },
  {
    slug: 'garlic-parmesan',
    name: 'Garlic Parmesan',
    shortDescription:
      'Bold garlic blended with real parmesan for a rich, savory jerky experience.',
    fullDescription:
      'This flavor pairs sharp garlic with the nutty depth of parmesan cheese, creating a snack that feels indulgent but still delivers that classic jerky bite. Salty, cheesy, and unmistakably delicious.',
  },
  {
    slug: 'plain',
    name: 'Plain',
    shortDescription:
      'No frills, no fuss — just lean beef and that perfect Huerta’s texture.',
    fullDescription:
      'Plain doesn’t mean boring. Our Plain Jerky is seasoned with a light touch to let the beef speak for itself. It’s a great option for purists, picky eaters, or anyone who wants to taste the quality in every bite.',
  },
  {
    slug: 'jalapeno',
    name: 'Jalapeño',
    shortDescription:
      'Classic jalapeño flavor with a mellow burn and bright pepper kick.',
    fullDescription:
      'Our Jalapeño Jerky brings the familiar taste of fresh green chiles with a medium heat that builds with every bite. It’s bold, a little smoky, and perfect for snackers who like their spice manageable but flavorful.',
  },
  {
    slug: 'habanero',
    name: 'Habanero',
    shortDescription:
      'For the brave — a hot, punchy jerky that doesn’t hold back.',
    fullDescription:
      'Packed with fiery habanero heat, this jerky isn’t for the faint of heart. Every bite starts slow and finishes with a serious kick. Spice lovers and heat chasers, this one’s your next obsession.',
  },
  {
    slug: 'pepper',
    name: 'Pepper',
    shortDescription:
      'A jerky classic — cracked black pepper on lean beef for a timeless flavor.',
    fullDescription:
      'Our Pepper Jerky is all about balance. Seasoned with a bold dose of coarse black pepper, it’s savory, sharp, and satisfying. A great everyday snack that never goes out of style.',
  },
  {
    slug: 'chipotle',
    name: 'Chipotle',
    shortDescription:
      'Smoky, spicy, and slightly sweet — chipotle flavor done right.',
    fullDescription:
      'Chipotle Jerky delivers rich, wood‑smoked chile flavor with a touch of heat and sweetness. It’s earthy and complex, great for fans of barbecue and slow‑burn spice.',
  },
];

export default products;