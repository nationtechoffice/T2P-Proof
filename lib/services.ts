import type { Service, ServiceCategory } from "./site-config";

const handymanServices: Omit<Service, "category">[] = [
  {
    slug: "cleaning",
    name: "Cleaning Services",
    shortDescription: "Professional home and property cleaning for Florida homeowners.",
    description:
      "Handyman Pros Florida provides thorough cleaning services for homes, garages, patios, and rental properties. Our handyperson team handles deep cleaning, move-in/move-out cleaning, and routine maintenance cleaning so your property stays spotless year-round.",
    keywords: ["home cleaning Florida", "house cleaning handyman", "deep cleaning services"],
    faqs: [
      { question: "What cleaning services do you offer?", answer: "We offer deep cleaning, move-in/move-out cleaning, garage cleaning, patio cleaning, and post-construction cleanup across Florida." },
      { question: "Do you bring your own cleaning supplies?", answer: "Yes, our team arrives fully equipped with professional-grade cleaning supplies and equipment." },
    ],
  },
  {
    slug: "drywall-installation",
    name: "Drywall Installation",
    shortDescription: "Expert drywall installation for new construction and remodels.",
    description: "Our skilled craftsmen install drywall for new rooms, additions, and remodeling projects throughout Florida. We handle measuring, cutting, hanging, taping, and finishing for a seamless result.",
    keywords: ["drywall installation Florida", "drywall contractor Tampa", "new drywall install"],
    faqs: [
      { question: "How long does drywall installation take?", answer: "Most single-room installations take 1-2 days. Larger projects are scheduled based on square footage during your free estimate." },
    ],
  },
  {
    slug: "drywall-repair",
    name: "Drywall Repair",
    shortDescription: "Fast, flawless drywall hole and crack repair.",
    description: "From small nail holes to large water-damaged sections, we repair and restore drywall to a like-new finish. Our Florida handyman team matches texture and paint for invisible repairs.",
    keywords: ["drywall repair Florida", "fix drywall hole", "drywall patch service"],
    faqs: [
      { question: "Can you repair water-damaged drywall?", answer: "Yes, we assess water damage, remove affected sections, install new drywall, and finish with texture matching and optional painting." },
    ],
  },
  {
    slug: "exterior-painting",
    name: "Exterior Painting",
    shortDescription: "Weather-resistant exterior painting built for Florida's climate.",
    description: "Protect and beautify your home with professional exterior painting. We use premium paints formulated for Florida's heat, humidity, and UV exposure for lasting curb appeal.",
    keywords: ["exterior painting Florida", "house painting contractor", "home exterior paint"],
    faqs: [
      { question: "What paint do you use for Florida exteriors?", answer: "We use high-quality acrylic latex paints with UV and mildew resistance, specifically chosen for Florida's tropical climate." },
    ],
  },
  {
    slug: "fan-installation",
    name: "Fan Installation",
    shortDescription: "Ceiling and exhaust fan installation by licensed professionals.",
    description: "Stay cool with expert ceiling fan and exhaust fan installation. We handle wiring, mounting, and balancing for safe, quiet operation in any room.",
    keywords: ["ceiling fan installation Florida", "exhaust fan install", "fan mounting service"],
    faqs: [
      { question: "Can you install a fan where no fixture exists?", answer: "Yes, we can install ceiling fans in rooms with or without existing electrical boxes, including running new wiring when needed." },
    ],
  },
  {
    slug: "fan-repair",
    name: "Fan Repair",
    shortDescription: "Ceiling fan repair, balancing, and motor replacement.",
    description: "Wobbly, noisy, or non-working fans? Our handyman team diagnoses and repairs ceiling fans, replaces motors, fixes wiring issues, and rebalances blades for smooth operation.",
    keywords: ["ceiling fan repair Florida", "fix wobbly fan", "fan motor replacement"],
    faqs: [
      { question: "Why is my ceiling fan wobbling?", answer: "Wobbling is usually caused by unbalanced blades, loose mounting, or bent blade brackets. We diagnose and fix the root cause." },
    ],
  },
  {
    slug: "flooring-repair",
    name: "Flooring Repair",
    shortDescription: "Hardwood, laminate, and tile flooring repair services.",
    description: "Restore damaged floors with expert flooring repair. We fix scratches, water damage, loose boards, cracked tiles, and subfloor issues throughout your Florida home.",
    keywords: ["flooring repair Florida", "hardwood floor repair", "tile floor fix"],
    faqs: [
      { question: "What types of flooring can you repair?", answer: "We repair hardwood, laminate, vinyl, tile, and engineered flooring for residential properties across Florida." },
    ],
  },
  {
    slug: "furniture-assembly",
    name: "Furniture Assembly",
    shortDescription: "Fast, professional furniture assembly for any brand.",
    description: "Skip the frustration of flat-pack furniture. Our handyperson team assembles beds, desks, shelving, outdoor furniture, and more with precision and care.",
    keywords: ["furniture assembly Florida", "IKEA assembly service", "furniture setup handyman"],
    faqs: [
      { question: "Do you assemble all furniture brands?", answer: "Yes, we assemble furniture from IKEA, Wayfair, Amazon, Ashley, and all major brands." },
    ],
  },
  {
    slug: "general-construction",
    name: "General Construction",
    shortDescription: "Residential general construction and build-out services.",
    description: "From room additions to structural modifications, our general construction team handles framing, structural repairs, and residential build-outs across Florida.",
    keywords: ["general construction Florida", "residential contractor", "home construction"],
    faqs: [
      { question: "Are you licensed for construction in Florida?", answer: "Yes, our team includes licensed contractors who comply with all Florida building codes and permit requirements." },
    ],
  },
  {
    slug: "general-repairs",
    name: "General Repairs",
    shortDescription: "Your go-to handyman for any home repair need.",
    description: "No job too small. Our general repair services cover everything from fixing doors and windows to patching walls, repairing trim, and tackling your honey-do list.",
    keywords: ["general home repairs Florida", "handyman repairs", "fix it handyman"],
    faqs: [
      { question: "What kinds of repairs do you handle?", answer: "We handle door adjustments, window repairs, trim replacement, shelf mounting, caulking, weatherstripping, and hundreds of other home repairs." },
    ],
  },
  {
    slug: "gutter-cleaning",
    name: "Gutter Cleaning",
    shortDescription: "Thorough gutter cleaning to protect your Florida home.",
    description: "Florida's storms and foliage clog gutters fast. Our team clears debris, flushes downspouts, and inspects for damage to prevent water damage and foundation issues.",
    keywords: ["gutter cleaning Florida", "gutter service Tampa", "downspout cleaning"],
    faqs: [
      { question: "How often should gutters be cleaned in Florida?", answer: "We recommend cleaning gutters at least twice a year, and more frequently if you have overhanging trees." },
    ],
  },
  {
    slug: "home-maintenance-repairs",
    name: "Home Maintenance & Repairs",
    shortDescription: "Preventive home maintenance to protect your investment.",
    description: "Regular home maintenance prevents costly repairs. We offer seasonal maintenance packages including HVAC filter changes, caulking, weatherproofing, and safety inspections.",
    keywords: ["home maintenance Florida", "preventive home care", "property maintenance"],
    faqs: [
      { question: "Do you offer maintenance plans?", answer: "Yes, we offer quarterly and annual maintenance plans tailored to Florida homes, including hurricane prep inspections." },
    ],
  },
  {
    slug: "install-flooring",
    name: "Install Flooring",
    shortDescription: "Professional flooring installation for every room.",
    description: "Transform your space with new flooring. We install hardwood, laminate, vinyl plank, tile, and carpet with expert subfloor preparation and finishing.",
    keywords: ["flooring installation Florida", "new floor install", "vinyl plank installation"],
    faqs: [
      { question: "What flooring types do you install?", answer: "We install hardwood, engineered wood, laminate, LVP/LVT, ceramic tile, porcelain tile, and carpet." },
    ],
  },
  {
    slug: "interior-painting",
    name: "Interior Painting",
    shortDescription: "Beautiful interior painting with clean, precise finishes.",
    description: "Refresh your home with professional interior painting. We prep surfaces, protect furniture, and deliver smooth, even coats in any color for walls, ceilings, and trim.",
    keywords: ["interior painting Florida", "room painting service", "house painters interior"],
    faqs: [
      { question: "How long does interior painting take?", answer: "A typical room takes 1-2 days including prep and drying time. Whole-home projects are scheduled during your free estimate." },
    ],
  },
  {
    slug: "moving-assistance",
    name: "Moving Assistance",
    shortDescription: "Reliable moving help for loading, unloading, and setup.",
    description: "Make your move easier with professional moving assistance. We help load and unload trucks, disassemble and reassemble furniture, and set up your new home.",
    keywords: ["moving help Florida", "loading unloading service", "move assistance handyman"],
    faqs: [
      { question: "Do you provide the moving truck?", answer: "We provide labor for loading, unloading, and furniture setup. Truck rental is arranged separately, and we're happy to recommend partners." },
    ],
  },
  {
    slug: "paint-indoors",
    name: "Paint Indoors",
    shortDescription: "Indoor painting for walls, ceilings, doors, and trim.",
    description: "Our indoor painting specialists deliver flawless finishes for every interior surface. Low-VOC paints available for families and pet-friendly homes.",
    keywords: ["indoor painting Florida", "wall painting service", "ceiling painting"],
    faqs: [
      { question: "Do you use low-VOC paint?", answer: "Yes, we offer low-VOC and zero-VOC paint options that are safe for children, pets, and sensitive individuals." },
    ],
  },
  {
    slug: "painting",
    name: "Painting Services",
    shortDescription: "Complete residential and commercial painting solutions.",
    description: "Handyman Pros Florida is your full-service painting contractor. Interior, exterior, cabinets, decks, and specialty finishes — all delivered with professional quality.",
    keywords: ["painting contractor Florida", "house painters", "residential painting"],
    faqs: [
      { question: "Do you offer free painting estimates?", answer: "Yes, all painting projects include a free on-site estimate with color consultation." },
    ],
  },
  {
    slug: "plumbing-fixture-installation",
    name: "Plumbing Fixture Installation",
    shortDescription: "Faucet, toilet, and fixture installation by skilled handymen.",
    description: "Upgrade your bathroom and kitchen with new fixture installation. We install faucets, toilets, showerheads, garbage disposals, and more with leak-free connections.",
    keywords: ["fixture installation Florida", "toilet installation", "faucet install handyman"],
    faqs: [
      { question: "Can you install a new toilet?", answer: "Yes, we remove old toilets, install new ones with proper wax rings and seals, and test for leaks." },
    ],
  },
  {
    slug: "remodeling",
    name: "Remodeling",
    shortDescription: "Kitchen, bathroom, and whole-home remodeling services.",
    description: "Transform your Florida home with professional remodeling. From kitchen updates to bathroom renovations, we manage the project from design to final walkthrough.",
    keywords: ["home remodeling Florida", "kitchen remodel", "bathroom renovation"],
    faqs: [
      { question: "Do you handle permits for remodeling?", answer: "Yes, we assist with permit applications and ensure all work meets Florida building codes." },
    ],
  },
  {
    slug: "repair-flooring",
    name: "Repair Flooring",
    shortDescription: "Expert floor repair for scratches, gaps, and damage.",
    description: "Don't replace — repair. We fix scratched hardwood, squeaky floors, loose tiles, and water-damaged sections to restore your floors without full replacement.",
    keywords: ["floor repair Florida", "fix scratched floors", "squeaky floor repair"],
    faqs: [
      { question: "Can you fix squeaky hardwood floors?", answer: "Yes, we secure loose subfloor connections and eliminate squeaks without damaging your finished flooring." },
    ],
  },
  {
    slug: "repair-water-fixtures",
    name: "Repair Water Fixtures",
    shortDescription: "Fix leaky faucets, running toilets, and fixture issues.",
    description: "Stop wasting water and money. Our team repairs dripping faucets, running toilets, leaky shower valves, and other water fixture problems quickly and affordably.",
    keywords: ["fixture repair Florida", "fix leaky faucet", "toilet repair handyman"],
    faqs: [
      { question: "How quickly can you fix a leaky faucet?", answer: "Most faucet and fixture repairs are completed in under an hour during a single visit." },
    ],
  },
  {
    slug: "roof-repair",
    name: "Roof Repair",
    shortDescription: "Emergency and routine roof repair for Florida homes.",
    description: "Florida weather is tough on roofs. We repair shingles, flashing, leaks, and storm damage to keep your home protected. Emergency roof repair available.",
    keywords: ["roof repair Florida", "shingle repair", "leak repair roof"],
    faqs: [
      { question: "Do you offer emergency roof repair?", answer: "Yes, we provide emergency tarping and leak repair services, especially during hurricane season." },
    ],
  },
  {
    slug: "tile-work-installation",
    name: "Tile Work Installation",
    shortDescription: "Custom tile installation for floors, backsplashes, and showers.",
    description: "Elevate your space with professional tile installation. We install ceramic, porcelain, natural stone, and mosaic tile for bathrooms, kitchens, and outdoor areas.",
    keywords: ["tile installation Florida", "bathroom tile install", "backsplash installation"],
    faqs: [
      { question: "What tile materials do you work with?", answer: "We install ceramic, porcelain, natural stone, marble, glass mosaic, and subway tile." },
    ],
  },
  {
    slug: "tile-work-replacement",
    name: "Tile Work Replacement",
    shortDescription: "Remove and replace cracked, outdated, or damaged tile.",
    description: "Upgrade old or damaged tile with expert replacement services. We carefully remove existing tile, prep surfaces, and install new tile with precision grout lines.",
    keywords: ["tile replacement Florida", "retile bathroom", "replace floor tile"],
    faqs: [
      { question: "Can you match existing tile for partial replacement?", answer: "We do our best to match existing tile. If an exact match isn't available, we recommend complementary patterns." },
    ],
  },
  {
    slug: "tv-mounting",
    name: "TV Mounting",
    shortDescription: "Secure TV wall mounting with hidden cable management.",
    description: "Mount your TV safely on any wall type. We handle stud finding, bracket installation, cable concealment, and soundbar mounting for a clean, professional look.",
    keywords: ["TV mounting Florida", "wall mount TV service", "TV installation handyman"],
    faqs: [
      { question: "Can you mount a TV on a drywall wall?", answer: "Yes, we mount TVs on drywall, plaster, brick, and concrete walls using appropriate anchors and stud mounting." },
    ],
  },
];

const paintingServices: Omit<Service, "category">[] = [
  { slug: "cabinet-painting", name: "Cabinet Painting", shortDescription: "Transform kitchen cabinets with professional spray or brush painting.", description: "Give your kitchen a fresh look without the cost of replacement. Our cabinet painting service includes degreasing, sanding, priming, and durable topcoat application.", keywords: ["cabinet painting Florida", "kitchen cabinet paint", "refinish cabinets"], faqs: [{ question: "How long does cabinet painting last?", answer: "With proper prep and quality paint, cabinet finishes last 8-15 years with normal use." }] },
  { slug: "deck-painting", name: "Deck Painting", shortDescription: "Protect and beautify your deck with weather-resistant coatings.", description: "Florida sun and rain damage decks quickly. We clean, prep, and apply deck-specific paints and stains for long-lasting protection and beauty.", keywords: ["deck painting Florida", "deck stain service", "outdoor deck paint"], faqs: [{ question: "Should I paint or stain my deck?", answer: "Stain penetrates wood for a natural look; paint provides a solid color and more UV protection. We recommend based on your deck material and goals." }] },
  { slug: "door-painting", name: "Door Painting", shortDescription: "Interior and exterior door painting with smooth finishes.", description: "Refresh your entry door or interior doors with expert painting. We handle removal, sanding, priming, and application for a factory-smooth finish.", keywords: ["door painting Florida", "front door paint", "interior door painting"], faqs: [{ question: "Can you paint my front door without removing it?", answer: "Yes, we can paint in place with careful masking, though removing the door often yields the best finish." }] },
  { slug: "drywall-painting", name: "Drywall Painting", shortDescription: "New drywall priming and painting for seamless walls.", description: "New drywall needs proper priming before paint. We seal, prime, and paint new drywall with flawless results for remodels and new construction.", keywords: ["drywall painting Florida", "new drywall paint", "prime and paint walls"], faqs: [{ question: "Do new walls need primer before paint?", answer: "Yes, primer seals porous drywall and ensures even paint absorption for a professional finish." }] },
  { slug: "faux-finishes", name: "Faux Finishes", shortDescription: "Decorative faux finish painting for unique interior walls.", description: "Add character with faux finish techniques including venetian plaster, color washing, rag rolling, and metallic finishes for distinctive interior spaces.", keywords: ["faux finish painting Florida", "decorative wall finishes", "venetian plaster"], faqs: [{ question: "What faux finish styles are popular?", answer: "Venetian plaster, color washing, and metallic glazes are among the most requested faux finishes in Florida homes." }] },
  { slug: "furniture-painting", name: "Furniture Painting", shortDescription: "Refinish and repaint furniture for a custom look.", description: "Breathe new life into old furniture with professional painting and refinishing. We handle dressers, tables, chairs, and built-ins with durable finishes.", keywords: ["furniture painting Florida", "refinish furniture", "paint furniture service"], faqs: [{ question: "Can you paint laminate furniture?", answer: "Yes, with proper primer and preparation, we can paint laminate and veneer furniture successfully." }] },
  { slug: "metal-painting", name: "Metal Painting", shortDescription: "Rust-resistant metal painting for railings, gates, and fixtures.", description: "Protect metal surfaces from Florida's humidity with rust-inhibiting primers and durable topcoats. Ideal for railings, gates, fences, and outdoor fixtures.", keywords: ["metal painting Florida", "paint metal railing", "rust proof painting"], faqs: [{ question: "How do you prevent rust on painted metal?", answer: "We use rust-converting primers and moisture-resistant topcoats designed for Florida's humid climate." }] },
  { slug: "mural-painting", name: "Mural Painting", shortDescription: "Custom mural art for homes, businesses, and children's rooms.", description: "Make a statement with custom mural painting. Our artists create wall murals for nurseries, businesses, restaurants, and accent walls.", keywords: ["mural painting Florida", "custom wall mural", "mural artist"], faqs: [{ question: "Can you paint a mural in a child's room?", answer: "Absolutely! We create custom children's room murals with safe, non-toxic paints." }] },
  { slug: "roof-painting", name: "Roof Painting", shortDescription: "Reflective roof coatings to reduce heat and extend roof life.", description: "Reduce cooling costs with reflective roof coatings. We apply elastomeric and acrylic roof paints that reflect UV rays and protect against Florida weather.", keywords: ["roof painting Florida", "roof coating", "cool roof paint"], faqs: [{ question: "Does roof painting reduce energy bills?", answer: "Yes, reflective roof coatings can reduce attic temperatures by up to 50°F, lowering cooling costs significantly." }] },
  { slug: "siding-painting", name: "Siding Painting", shortDescription: "Exterior siding painting for stucco, wood, and vinyl.", description: "Refresh your home's exterior with professional siding painting. We prep, prime, and paint stucco, wood, fiber cement, and vinyl siding.", keywords: ["siding painting Florida", "exterior siding paint", "stucco painting"], faqs: [{ question: "Can you paint vinyl siding?", answer: "Yes, we use specially formulated acrylic paint designed to bond with vinyl siding without cracking or peeling." }] },
  { slug: "specialty-design-painting", name: "Specialty Design Painting", shortDescription: "Accent walls, stripes, and custom design paint work.", description: "Elevate your interiors with specialty design painting including accent walls, geometric patterns, stripes, color blocking, and ombre effects.", keywords: ["accent wall painting", "specialty painting Florida", "design paint work"], faqs: [{ question: "What are popular accent wall techniques?", answer: "Geometric patterns, board-and-batten with paint, color blocking, and textured accent walls are trending in Florida homes." }] },
  { slug: "spray-painting", name: "Spray Painting", shortDescription: "Professional spray painting for cabinets, fences, and large surfaces.", description: "Achieve factory-smooth finishes with professional spray painting. Ideal for cabinets, fences, shutters, and large exterior surfaces.", keywords: ["spray painting Florida", "professional spray paint", "cabinet spray painting"], faqs: [{ question: "Is spray painting better than brush painting?", answer: "Spray painting provides smoother, more even coverage on complex surfaces like cabinets and wrought iron." }] },
  { slug: "wallpaper-hanging", name: "Wallpaper Hanging", shortDescription: "Expert wallpaper installation with pattern matching.", description: "Transform any room with professionally hung wallpaper. We install traditional, peel-and-stick, and textured wallpaper with precise pattern alignment.", keywords: ["wallpaper installation Florida", "hang wallpaper service", "wallpaper installer"], faqs: [{ question: "Do you install peel-and-stick wallpaper?", answer: "Yes, we install both traditional paste wallpaper and modern peel-and-stick varieties." }] },
  { slug: "wallpaper-removal", name: "Wallpaper Removal", shortDescription: "Damage-free wallpaper removal and wall preparation.", description: "Remove outdated wallpaper without damaging walls. We steam, scrape, and prep surfaces for new paint or wallpaper application.", keywords: ["wallpaper removal Florida", "remove wallpaper service", "strip wallpaper"], faqs: [{ question: "Will wallpaper removal damage my walls?", answer: "We use professional steaming techniques to minimize wall damage, then repair and prep surfaces as needed." }] },
  { slug: "water-damage-repair", name: "Water Damage Repair", shortDescription: "Repair and restore water-damaged walls, ceilings, and floors.", description: "Water damage spreads fast in Florida's humidity. We dry, remove damaged materials, repair drywall and flooring, and restore your home to pre-damage condition.", keywords: ["water damage repair Florida", "flood damage repair", "water damage restoration"], faqs: [{ question: "How quickly should water damage be repaired?", answer: "Within 24-48 hours to prevent mold growth. We offer emergency water damage repair services." }] },
  { slug: "wood-painting", name: "Wood Painting", shortDescription: "Durable wood surface painting for trim, decks, and furniture.", description: "Protect and beautify wood surfaces with professional painting. We prep, prime, and paint trim, decks, pergolas, and wood siding.", keywords: ["wood painting Florida", "paint wood trim", "exterior wood paint"], faqs: [{ question: "What primer do you use on bare wood?", answer: "We use oil-based or shellac primers on bare wood, followed by exterior-grade acrylic topcoats." }] },
  { slug: "wood-staining", name: "Wood Staining", shortDescription: "Rich wood staining for decks, fences, and furniture.", description: "Enhance natural wood grain with professional staining. We offer semi-transparent, solid, and custom stain colors for decks, fences, and interior wood.", keywords: ["wood staining Florida", "deck stain service", "fence staining"], faqs: [{ question: "How often should a deck be restained in Florida?", answer: "Every 1-3 years depending on sun exposure and foot traffic. We assess during your free estimate." }] },
  { slug: "wood-varnishing", name: "Wood Varnishing", shortDescription: "Protective varnish application for interior and exterior wood.", description: "Preserve wood beauty with professional varnishing. UV-resistant varnishes protect doors, trim, furniture, and marine wood from Florida's elements.", keywords: ["wood varnishing Florida", "varnish wood service", "marine varnish"], faqs: [{ question: "What's the difference between stain and varnish?", answer: "Stain adds color while showing wood grain; varnish is a clear protective topcoat. They're often used together." }] },
];

const fenceServices: Omit<Service, "category">[] = [
  { slug: "aluminum-fence-installation", name: "Aluminum Fence Installation", shortDescription: "Elegant, low-maintenance aluminum fencing for Florida properties.", description: "Aluminum fencing offers beauty and durability without rust. We install ornamental aluminum fences for pools, yards, and commercial properties.", keywords: ["aluminum fence Florida", "ornamental aluminum fence", "pool fence aluminum"], faqs: [{ question: "Does aluminum fence rust in Florida?", answer: "No, aluminum is naturally rust-resistant and ideal for Florida's humid, coastal climate." }] },
  { slug: "automatic-gate-installation-repairs", name: "Automatic Gate Installation & Repairs", shortDescription: "Automated gate systems with motor installation and repair.", description: "Add convenience and security with automatic gates. We install swing and slide gate motors, keypads, intercoms, and provide ongoing repair services.", keywords: ["automatic gate Florida", "gate motor installation", "electric gate repair"], faqs: [{ question: "Can you automate an existing manual gate?", answer: "Yes, most existing gates can be retrofitted with automatic openers and access controls." }] },
  { slug: "chain-link-fence-installation", name: "Chain Link Fence Installation", shortDescription: "Affordable, durable chain link fencing for any property.", description: "Chain link fencing provides security and visibility at an affordable price. We install residential and commercial chain link with optional privacy slats.", keywords: ["chain link fence Florida", "chain link installation", "security fence"], faqs: [{ question: "Can chain link fences have privacy?", answer: "Yes, privacy slats weave through chain link mesh to block visibility while maintaining airflow." }] },
  { slug: "custom-fabrication", name: "Custom Fabrication", shortDescription: "Custom metal and wood fence fabrication to your specifications.", description: "Need something unique? Our custom fabrication team designs and builds one-of-a-kind fence solutions tailored to your property and aesthetic.", keywords: ["custom fence fabrication Florida", "custom metal fence", "bespoke fencing"], faqs: [{ question: "Can you build a completely custom fence design?", answer: "Yes, we work from your drawings or create custom designs to match your vision and property requirements." }] },
  { slug: "custom-fence-construction", name: "Custom Fence Construction", shortDescription: "Bespoke fence construction for unique properties and landscapes.", description: "From curved layouts to mixed-material designs, we build custom fences that complement your Florida property's architecture and landscape.", keywords: ["custom fence construction Florida", "bespoke fence builder", "unique fence design"], faqs: [{ question: "Do custom fences cost more?", answer: "Custom designs may cost more due to materials and labor, but we provide detailed estimates so there are no surprises." }] },
  { slug: "deer-fencing-ranch-rail", name: "Deer Fencing & Ranch Rail Installation", shortDescription: "Ranch rail and deer fencing for rural Florida properties.", description: "Protect livestock and property with ranch rail and deer fencing. We install split rail, post-and-rail, and wildlife exclusion fencing.", keywords: ["ranch rail fence Florida", "deer fencing", "split rail fence"], faqs: [{ question: "What height deer fence do I need?", answer: "Standard deer fencing is 8 feet tall. We assess your property's wildlife pressure during consultation." }] },
  { slug: "dog-fence-installation", name: "Dog Fence Installation", shortDescription: "Secure dog fencing to keep pets safe in your yard.", description: "Keep your furry friends safe with proper dog fencing. We install wood, vinyl, and chain link dog fences with secure gates and no-gap designs.", keywords: ["dog fence Florida", "pet fence installation", "dog proof fence"], faqs: [{ question: "What's the best fence for dogs?", answer: "Solid wood or vinyl fences 4-6 feet tall work best for most dogs. We customize based on your dog's size and jumping ability." }] },
  { slug: "fence-design", name: "Fence Design", shortDescription: "Professional fence design consultation and planning.", description: "Start with a plan. Our fence design service includes site assessment, material recommendations, permit guidance, and detailed project quotes.", keywords: ["fence design Florida", "fence planning service", "fence consultation"], faqs: [{ question: "Is fence design consultation free?", answer: "Yes, we offer free on-site fence design consultations with detailed written estimates." }] },
  { slug: "fence-installation", name: "Fence Installation", shortDescription: "Complete fence installation for residential and commercial properties.", description: "From property line surveys to final post-setting, we handle every step of fence installation. Wood, vinyl, metal, and composite options available.", keywords: ["fence installation Florida", "fence contractor", "new fence install"], faqs: [{ question: "How long does fence installation take?", answer: "Most residential fences are installed in 1-3 days depending on length, material, and terrain." }] },
  { slug: "fence-repairs-maintenance", name: "General Repairs & Maintenance", shortDescription: "Fence repair, staining, and ongoing maintenance services.", description: "Extend your fence's life with regular maintenance and prompt repairs. We fix broken posts, replace panels, restain wood, and straighten leaning sections.", keywords: ["fence repair Florida", "fence maintenance", "fix broken fence"], faqs: [{ question: "Can you repair a storm-damaged fence?", answer: "Yes, we provide emergency fence repair after storms, including post replacement and panel reattachment." }] },
  { slug: "iron-fence-installation", name: "Iron Fence Installation", shortDescription: "Wrought iron and steel fence installation for elegance and security.", description: "Add timeless elegance with iron fencing. We install wrought iron and steel fences for residential, commercial, and pool enclosures.", keywords: ["iron fence Florida", "wrought iron fence", "steel fence installation"], faqs: [{ question: "How do you prevent iron fence rust?", answer: "We use galvanized or powder-coated iron and recommend periodic maintenance in coastal areas." }] },
  { slug: "ornamental-iron-fence", name: "Ornamental Iron Fence Design & Installation", shortDescription: "Decorative ornamental iron fencing with custom designs.", description: "Make a statement with ornamental iron fencing. Custom scrollwork, finials, and gate designs add curb appeal and security to any Florida property.", keywords: ["ornamental iron fence Florida", "decorative iron fence", "custom iron gate"], faqs: [{ question: "Can ornamental iron be customized?", answer: "Yes, we offer custom scrollwork, finial styles, and gate designs to match your home's architecture." }] },
  { slug: "pool-fence-installation", name: "Pool Fence Installation", shortDescription: "Code-compliant pool fencing for Florida safety requirements.", description: "Meet Florida pool fence codes with professional installation. We install aluminum, glass, and mesh pool fences with self-closing gates.", keywords: ["pool fence Florida", "pool safety fence", "pool fence code compliance"], faqs: [{ question: "What are Florida pool fence requirements?", answer: "Florida requires pool barriers at least 4 feet tall with self-closing, self-latching gates. We ensure full code compliance." }] },
  { slug: "privacy-fence-installation", name: "Privacy Fence Installation", shortDescription: "Solid privacy fencing for backyard seclusion and noise reduction.", description: "Create your private oasis with solid privacy fencing. Wood, vinyl, and composite options block views and reduce noise from neighbors and traffic.", keywords: ["privacy fence Florida", "wood privacy fence", "backyard privacy fence"], faqs: [{ question: "What's the best material for privacy fencing?", answer: "Cedar and vinyl are top choices in Florida. Vinyl requires less maintenance; cedar offers natural beauty." }] },
  { slug: "security-fencing", name: "Security Fencing & Metal Cage Installation", shortDescription: "High-security fencing and metal cage enclosures.", description: "Protect assets with security fencing and metal cage installations. Ideal for commercial properties, equipment yards, and high-security residential needs.", keywords: ["security fence Florida", "metal cage installation", "commercial security fencing"], faqs: [{ question: "What security fence options are available?", answer: "We install anti-climb mesh, palisade fencing, razor wire-topped barriers, and custom metal cage enclosures." }] },
  { slug: "simtek-fence-installation", name: "Simtek Fence Installation", shortDescription: "Simtek simulated stone privacy fencing installation.", description: "Get the look of stone with Simtek fencing. This durable, low-maintenance privacy fence mimics stacked stone and withstands Florida weather.", keywords: ["Simtek fence Florida", "simulated stone fence", "stone look vinyl fence"], faqs: [{ question: "What is Simtek fencing?", answer: "Simtek is a premium simulated stone privacy fence made from recycled materials, offering stone aesthetics with vinyl durability." }] },
  { slug: "trex-fence-installation", name: "Trex Fencing Installation", shortDescription: "Eco-friendly Trex composite privacy fence installation.", description: "Trex composite fencing offers the look of wood without maintenance. Made from recycled materials, Trex fences resist rot, insects, and fading.", keywords: ["Trex fence Florida", "composite fence installation", "eco friendly fence"], faqs: [{ question: "How long does Trex fencing last?", answer: "Trex composite fencing typically lasts 25+ years with virtually no maintenance in Florida conditions." }] },
  { slug: "vinyl-fence-installation", name: "Vinyl Fence Installation", shortDescription: "Low-maintenance vinyl fencing in styles for every property.", description: "Vinyl fencing is Florida's favorite low-maintenance option. We install privacy, picket, ranch rail, and pool vinyl fences that never need painting.", keywords: ["vinyl fence Florida", "PVC fence installation", "vinyl privacy fence"], faqs: [{ question: "Does vinyl fence fade in the Florida sun?", answer: "Quality vinyl fences include UV inhibitors that prevent significant fading for 20+ years." }] },
  { slug: "wood-fence-installation", name: "Wood Fence Installation", shortDescription: "Classic wood fence installation with cedar, pine, and pressure-treated options.", description: "Wood fencing remains a timeless choice. We install cedar, pressure-treated pine, and redwood fences in privacy, picket, and split-rail styles.", keywords: ["wood fence Florida", "cedar fence installation", "wood privacy fence"], faqs: [{ question: "What wood is best for Florida fences?", answer: "Pressure-treated pine and cedar are most popular. Cedar resists insects naturally; treated pine offers excellent value." }] },
];

export const categoryMeta: Record<ServiceCategory, { name: string; title: string; description: string; icon: string }> = {
  handyman: {
    name: "Handyman Services",
    title: "Handyman & Home Repair Services in Florida",
    description: "Professional handyman, handywoman, and handyperson services across Florida. Drywall, painting, plumbing fixtures, TV mounting, flooring, and general home repairs.",
    icon: "wrench",
  },
  painting: {
    name: "Painting Services",
    title: "Professional Painting Services in Florida",
    description: "Expert painters for interior, exterior, cabinet, deck, and specialty painting. Faux finishes, wallpaper, wood staining, and water damage repair.",
    icon: "paintbrush",
  },
  fence: {
    name: "Fence Contractor",
    title: "Fence Installation & Repair in Florida",
    description: "Licensed fence contractors for wood, vinyl, aluminum, iron, and chain link fencing. Privacy fences, pool fences, gates, and custom designs.",
    icon: "fence",
  },
};

export const allServices: Service[] = [
  ...handymanServices.map((s) => ({ ...s, category: "handyman" as const })),
  ...paintingServices.map((s) => ({ ...s, category: "painting" as const })),
  ...fenceServices.map((s) => ({ ...s, category: "fence" as const })),
];

export function getServicesByCategory(category: ServiceCategory): Service[] {
  return allServices.filter((s) => s.category === category);
}

export function getService(category: ServiceCategory, slug: string): Service | undefined {
  return allServices.find((s) => s.category === category && s.slug === slug);
}

export function getAllServiceSlugs(): { category: ServiceCategory; slug: string }[] {
  return allServices.map((s) => ({ category: s.category, slug: s.slug }));
}
