export interface ServiceItem {
  slug: string;
  name: string;
  shortDesc: string;
  longDesc: string;
  metaTitle: string;
  metaDesc: string;
  icon: string;
  image?: string;
  features: string[];
  commonCauses: string[];
  processSteps: { title: string; desc: string }[];
  faqs: { q: string; a: string }[];
}

export function getServiceImage(slug: string): string {
  switch (slug) {
    case 'roof-drain-cleaning':
      return '/images/roof-drain-gutter.jpg';
    case 'storm-drain-cleaning':
    case 'septic-tank-cleaning':
    case 'sewer-backup-cleanup-and-clearing':
      return '/images/storm-septic-vacuum.jpg';
    case 'hydro-jetting':
    case 'main-sewer-line-cleaning':
    case 'grease-clog-removal':
      return '/images/hydro-jetting-manhole.jpg';
    case 'floor-drain-cleaning':
    case 'shower-and-bathtub-drain-cleaning':
      return '/images/floor-drain-grate.jpg';
    case 'commercial-drain-cleaning':
    case 'clogged-drain-cleaning':
      return '/images/sink-snaking.jpg';
    case 'kitchen-sink-drain-cleaning':
    case 'bathroom-sink-drain-cleaning':
    case 'garbage-disposal-clog-removal':
      return '/images/clean-sink-drain.jpg';
    case 'drain-snaking':
    case 'toilet-clog-removal':
    case 'sewer-line-clog-removal':
      return '/images/drain-snake.jpg';
    default:
      return '/images/plumber-hero.jpg';
  }
}

export const services: ServiceItem[] = [
  {
    slug: "residential-drain-cleaning",
    name: "Residential Drain Cleaning",
    shortDesc: "Complete residential drain cleaning for kitchens, bathrooms, laundry rooms, and main sewer pipes.",
    longDesc: "When household drains slow down or stop completely, Rapid Flow Drain Pros delivers fast, comprehensive residential drain clearing. Our licensed technicians use motorized augers and high-pressure water jetting to eliminate stubborn hair clogs, grease buildup, soap scum, and tree roots without damaging your home's plumbing infrastructure.",
    metaTitle: "Residential Drain Cleaning Services | Rapid Flow Drain Pros",
    metaDesc: "Professional residential drain cleaning services nationwide. Same-day emergency clearing for sinks, showers, toilets, and main lines. Call (877) 823-0231!",
    icon: "home",
    features: [
      "Same-day residential dispatch",
      "Camera verification included",
      "Safe on all pipe materials (PVC, Cast Iron, Copper)",
      "Protective floor coverings & clean work area guarantee"
    ],
    commonCauses: [
      "Accumulated hair and bath soap residue in showers",
      "Cooking grease, oils, and food scraps in kitchen sinks",
      "Excess toilet paper, wipes, and hygiene products",
      "Mineral scale buildup in older residential pipes"
    ],
    processSteps: [
      { title: "Visual & Camera Inspection", desc: "We evaluate the fixture and run an optical inspection if the main line is affected." },
      { title: "Precision Mechanical Clearing", desc: "Our technicians select the appropriate snake or hydro-jet head for the line diameter." },
      { title: "Line Flush & Flow Verification", desc: "We test full-flow drainage across all connected household fixtures." },
      { title: "Preventative Recommendations", desc: "We share maintenance tips and organic enzyme solutions to keep lines free-flowing." }
    ],
    faqs: [
      { q: "How often should residential drains be professionally cleaned?", a: "Most single-family homes benefit from professional drain cleaning every 18 to 24 months to prevent unexpected emergency backups." },
      { q: "Are chemical drain cleaners safe for my home pipes?", a: "No, caustic over-the-counter chemical cleaners generate extreme heat that corrodes cast iron, melts PVC joints, and rarely dissolves deep obstructions." }
    ]
  },
  {
    slug: "commercial-drain-cleaning",
    name: "Commercial Drain Cleaning",
    shortDesc: "Heavy-duty drain and sewer line clearing for restaurants, retail, offices, and industrial facilities.",
    longDesc: "A clogged drain in a commercial kitchen, restaurant, or multi-tenant building can halt operations, violate health codes, and cost thousands in downtime. Rapid Flow Drain Pros offers 24/7 priority commercial drain maintenance and emergency clearing with industrial-grade equipment.",
    metaTitle: "Commercial Drain Cleaning & Sewer Maintenance | Rapid Flow Drain Pros",
    metaDesc: "Heavy-duty commercial drain cleaning for restaurants, hotels, and retail. 24/7 emergency dispatch and maintenance plans. Call (877) 823-0231!",
    icon: "building",
    features: [
      "24/7 emergency commercial dispatch",
      "High-capacity 4,000 PSI hydro-jetting",
      "Scheduled preventative maintenance contracts",
      "Health code compliance documentation"
    ],
    commonCauses: [
      "Fats, oils, and grease (FOG) buildup in kitchen lines",
      "Foreign object disposal in customer restrooms",
      "Industrial sediment and wash-down debris",
      "Overloaded sanitary main sewer trunks"
    ],
    processSteps: [
      { title: "Site Assessment & Isolation", desc: "We quickly assess the facility to minimize operational disruptions." },
      { title: "High-Volume Hydro Jetting", desc: "Industrial jetting scours 4-inch to 12-inch commercial pipes 360 degrees." },
      { title: "Grease Trap & Line Scour", desc: "We clear the feeder lines connecting to interceptors and municipal sewers." },
      { title: "HD Video Verification", desc: "We provide recorded video proof showing the clean, restored pipe interior." }
    ],
    faqs: [
      { q: "Do you offer emergency after-hours commercial drain cleaning?", a: "Yes, our commercial dispatch operates 24/7/365 to handle urgent backups before business opening hours." },
      { q: "Can you service multi-story commercial buildings?", a: "Yes, our trucks carry high-pressure hose reels extending hundreds of feet to service rooftop stacks, basements, and multi-floor commercial complexes." }
    ]
  },
  {
    slug: "roof-drain-cleaning",
    name: "Roof Drain Cleaning",
    shortDesc: "Clearing flat roof scuppers, roof drains, and internal vertical downspout rainwater leaders.",
    longDesc: "Blocked roof drains and commercial scuppers cause dangerous standing water, roof leaks, and catastrophic structural load risks. Our technicians clear roof drain heads, cleanout stacks, and underground discharge lines to ensure rapid storm runoff.",
    metaTitle: "Roof Drain Cleaning & Rainwater Leader Service | Rapid Flow Drain Pros",
    metaDesc: "Commercial & residential roof drain cleaning. Clear flat roof ponding, scuppers, and downspout leaders. Call (877) 823-0231 for immediate service!",
    icon: "roof",
    features: [
      "Flat roof scupper & strainer clearing",
      "Internal rainwater leader snaking",
      "Heavy debris, leaf, and bird nest removal",
      "Discharge line hydro-jetting"
    ],
    commonCauses: [
      "Decomposition of leaves, twigs, and seasonal organic matter",
      "Roofing gravel and asphalt grit washing into drain strainers",
      "Bird nests and animal nesting material",
      "Ice dams and frozen debris plugs in colder months"
    ],
    processSteps: [
      { title: "Roof Strainer & Bowl Inspection", desc: "We inspect the roof surface, clearing dome strainers and gravel guards." },
      { title: "Downspout & Leader Augering", desc: "Heavy-duty flexible snakes clear vertical drops and 90-degree elbows." },
      { title: "Pressure Flushing to Daylight", desc: "We flush lines through to storm discharge basins or curb exits." },
      { title: "Drain Flow Testing", desc: "Controlled water flow confirms prompt, unrestricted drainage." }
    ],
    faqs: [
      { q: "Why is water pooling on my flat roof?", a: "Ponding water usually means the drain dome strainer is clogged with leaves/gravel or there is an internal clog in the vertical leader pipe." },
      { q: "Do you service commercial building roof drains?", a: "Yes, we handle residential, multi-family, commercial warehouse, and flat roof retail drainage systems." }
    ]
  },
  {
    slug: "storm-drain-cleaning",
    name: "Storm Drain Cleaning",
    shortDesc: "Catch basin, French drain, channel drain, and storm culvert silt and debris clearing.",
    longDesc: "Heavy rainstorms overwhelm driveways, parking lots, and foundations when storm drains and catch basins fill with mud, sediment, and litter. Rapid Flow Drain Pros uses high-output hydro-jetting and vacuum extraction to restore full storm water flow.",
    metaTitle: "Storm Drain Cleaning & Catch Basin Pumping | Rapid Flow Drain Pros",
    metaDesc: "Fast storm drain cleaning, catch basin clearing, and French drain flushing. Prevent flooding and water damage. Call (877) 823-0231!",
    icon: "cloud-rain",
    features: [
      "Catch basin & sump debris clearing",
      "Driveway channel drain flushing",
      "French drain root & silt removal",
      "Municipal culvert and retention basin line jetting"
    ],
    commonCauses: [
      "Accumulation of road silt, mud, and gravel runoff",
      "Autumn leaf fall clogging catch basin grates",
      "Tree root intrusion into perforated drainage pipes",
      "Trash, plastic bags, and urban storm debris"
    ],
    processSteps: [
      { title: "Catch Basin De-Silting", desc: "We remove sediment, standing sludge, and surface debris from collection sumps." },
      { title: "Hydro Jetting Storm Lateral", desc: "High-volume water jetters scour storm pipes from catch basin to outlet." },
      { title: "Root & Debris Extraction", desc: "Cutter heads slice through roots invading corrugated or PVC storm pipes." },
      { title: "High-Volume Flow Verification", desc: "We run water to simulate storm runoff and ensure immediate discharge." }
    ],
    faqs: [
      { q: "Can hydro jetting clear clogged French drains?", a: "Yes, specialized rotating nozzles flush out packed silt and mud without crushing perforated corrugated plastic pipe." },
      { q: "How do I know if my storm drain is blocked?", a: "Standing water around driveway grates, water backing up out of catch basins during rain, or soggy yard areas indicate a block." }
    ]
  },
  {
    slug: "septic-tank-cleaning",
    name: "Septic Tank Cleaning",
    shortDesc: "Septic inlet/outlet baffle unclogging, mainline snaking, and drain field line clearing.",
    longDesc: "A backup between your house and septic tank requires immediate professional intervention. Rapid Flow Drain Pros clears clogged septic main lines, restores flow through inlet and outlet baffles, and scrubs distribution pipes leading to drain fields.",
    metaTitle: "Septic Tank Line Cleaning & Clog Clearing | Rapid Flow Drain Pros",
    metaDesc: "Emergency septic line cleaning, baffle clearing, and main pipe snaking. Fast 24/7 service. Call (877) 823-0231 for immediate dispatch!",
    icon: "disc",
    features: [
      "Septic inlet & outlet baffle clearing",
      "Mainline to tank snaking",
      "Effluent filter cleaning & inspection",
      "Drain field distribution pipe jetting"
    ],
    commonCauses: [
      "Non-flushable wipes and foreign solids blocking inlet tees",
      "Heavy grease and sludge layer reaching outlet baffles",
      "Tree roots breaking into the tank inlet pipe",
      "Crushed or settled sewer line between home and tank"
    ],
    processSteps: [
      { title: "Tank Access & Baffle Check", desc: "We locate cleanouts and check the inlet tee and outlet filter condition." },
      { title: "Main Lateral Clearing", desc: "Motorized augers remove obstructions between the house foundation and septic tank." },
      { title: "Baffle & Filter Washing", desc: "We wash out effluent filters and clear solid dams from baffle openings." },
      { title: "System Flow Check", desc: "We verify water runs freely into the tank without back-pressure." }
    ],
    faqs: [
      { q: "Why is water gurgling in my toilets if I have a septic system?", a: "Gurgling is a telltale sign that air is trapped behind a growing blockage in your main line or the septic inlet tee is submerged/blocked." },
      { q: "Can you clear clogs without pumping the entire tank?", a: "Yes, if the issue is a line blockage or clogged filter/baffle, we can clear and restore flow immediately." }
    ]
  },
  {
    slug: "emergency-drain-cleaning",
    name: "Emergency Drain Cleaning",
    shortDesc: "24/7 rapid response for overflowing toilets, sewer backups, and urgent flooding drains.",
    longDesc: "When sewage backs up into your bathtub or toilets overflow across the bathroom floor at 2 AM, waiting until morning is not an option. Rapid Flow Drain Pros maintains 24/7 emergency mobile dispatch units ready to respond in 30 to 45 minutes nationwide.",
    metaTitle: "24/7 Emergency Drain Cleaning | Same Day Rooter Service",
    metaDesc: "24/7 nationwide emergency drain cleaning. 30-45 min arrival for overflowing toilets, sewer backups, and basement flooding. Call (877) 823-0231 now!",
    icon: "alert-triangle",
    features: [
      "30-45 minute average arrival window",
      "Available 24 hours, nights, weekends & holidays",
      "Upfront flat-rate pricing before work begins",
      "Fully stocked trucks with hydro jetters and heavy snakes"
    ],
    commonCauses: [
      "Severe main sewer line root blockages",
      "Sudden grease dam collapse in kitchen pipes",
      "Heavy storm inundation causing municipal backflow",
      "Foreign objects flushed into main waste stacks"
    ],
    processSteps: [
      { title: "Instant Dispatch", desc: "The nearest on-duty master drain technician is routed directly to your home." },
      { title: "Immediate Water Control", desc: "We stop fixture overflow and locate the primary cleanout access." },
      { title: "Heavy Mechanical Clearing", desc: "Industrial rooter cutters breach and evacuate the obstruction immediately." },
      { title: "Sanitary Cleanup Guidance", desc: "We verify line drainage and guide you on safe sanitization steps." }
    ],
    faqs: [
      { q: "Do you charge extra for emergency night or weekend calls?", a: "We provide upfront flat-rate pricing so you know the exact cost before we turn a single wrench, with no surprise fee inflation." },
      { q: "How quickly can a technician get to my house?", a: "Our nationwide dispatch system averages 30 to 45 minutes for priority emergency sewer and drain calls." }
    ]
  },
  {
    slug: "drain-snaking",
    name: "Drain Snaking",
    shortDesc: "Professional motorized auger and snake service for mechanical clog cutting and clearing.",
    longDesc: "Drain snaking (mechanical augering) is one of the most reliable and cost-effective methods for removing solid obstructions, hair knots, and tree roots from residential and commercial drains. Our technicians use heavy-duty electric drum snakes with custom cutting heads.",
    metaTitle: "Professional Drain Snaking & Rooter Service | Rapid Flow Drain Pros",
    metaDesc: "Expert motorized drain snaking services. Clear tough clogs in sinks, showers, toilets, and main lines. Call (877) 823-0231 for same-day service!",
    icon: "activity",
    features: [
      "Electric motorized drum augers up to 150+ feet",
      "Interchangeable cutting heads (C-cutters, bulb augers, root saws)",
      "Safe cable torque controls preventing pipe cracking",
      "Ideal for branch lines and main building drains"
    ],
    commonCauses: [
      "Hair and soap scum binders in bathroom branch pipes",
      "Paper towels and flushable wipes snagged on pipe joints",
      "Tree roots penetrating clay or cast iron hubs",
      "Hardened food solids in kitchen waste arms"
    ],
    processSteps: [
      { title: "Cleanout Access Selection", desc: "We locate the nearest direct cleanout to avoid running cables through indoor fixtures." },
      { title: "Cutter Head Selection", desc: "We attach the optimal head based on suspected clog composition." },
      { title: "Controlled Motorized Feeding", desc: "The cable rotates through the pipe, boring through and retrieving the blockage." },
      { title: "Full Line Flush", desc: "Hot water volume testing verifies unobstructed flow throughout the run." }
    ],
    faqs: [
      { q: "Will a drain snake scratch or damage my plumbing?", a: "Our licensed technicians use guide tubes and torque-limiting machines that safely navigate bends without harming porcelain or pipe walls." },
      { q: "What is the difference between drain snaking and hydro jetting?", a: "Snaking cuts a path through a solid clog, while hydro jetting scours the entire 360-degree pipe wall of grease, sludge, and scale." }
    ]
  },
  {
    slug: "hydro-jetting",
    name: "Hydro Jetting",
    shortDesc: "Ultra high-pressure 4,000 PSI water jetting to scour grease, scale, and heavy tree roots.",
    longDesc: "When snakes only punch temporary holes in stubborn blockages, hydro jetting delivers a complete, long-lasting solution. Using specialized rotating nozzles pumping water at up to 4,000 PSI, hydro jetting strips away years of grease, mineral scale, sludge, and invasive tree roots.",
    metaTitle: "High Pressure Hydro Jetting Services | Rapid Flow Drain Pros",
    metaDesc: "Industrial 4,000 PSI hydro jetting drain cleaning. Eliminate grease, scale, and roots for long-lasting flow. Call (877) 823-0231 for same-day service!",
    icon: "droplet",
    features: [
      "Up to 4,000 PSI at 12–18 GPM scouring power",
      "360-degree full pipe circumference cleaning",
      "Pre- and post-jetting HD camera inspection",
      "Environmentally friendly — 100% chemical-free pure water"
    ],
    commonCauses: [
      "Years of hardened kitchen grease and fat deposits",
      "Extensive tree root mats choking sewer laterals",
      "Heavy mineral encrustation and hard water scale",
      "Packed construction dust, mud, or sediment"
    ],
    processSteps: [
      { title: "Initial Camera Inspection", desc: "We verify pipe structural integrity before applying high-pressure water." },
      { title: "Nozzle Configuration", desc: "We choose penetrating, flushing, or rotating root-cutting nozzle tips." },
      { title: "High-Pressure Line Scouring", desc: "The self-propelled hose travels downstream and upstream, stripping pipe walls." },
      { title: "Final Video Confirmation", desc: "We record a crystal-clear video showing smooth, like-new pipe interior." }
    ],
    faqs: [
      { q: "Is hydro jetting safe for old cast iron pipes?", a: "We always perform a video inspection first. If cast iron is structurally sound, hydro jetting removes scale safely. If fragile, we adjust PSI accordingly." },
      { q: "How long do the results of hydro jetting last?", a: "Because hydro jetting completely clears the pipe walls, results typically last 3 to 5 times longer than basic mechanical snaking." }
    ]
  },
  {
    slug: "clogged-drain-cleaning",
    name: "Clogged Drain Cleaning",
    shortDesc: "Fast same-day diagnosis and unclogging for any slow or backed-up drain in your property.",
    longDesc: "From slow-draining kitchen sinks to completely stopped bathroom tubs, a clogged drain is an inconvenient headache that can quickly turn into water damage. Rapid Flow Drain Pros provides guaranteed same-day clogged drain clearing with upfront flat-rate pricing.",
    metaTitle: "Same Day Clogged Drain Cleaning | Rapid Flow Drain Pros",
    metaDesc: "Fast same day clogged drain cleaning for homes and businesses. 30-45 min arrival, upfront flat rates, 100% flow guarantee. Call (877) 823-0231!",
    icon: "zap",
    features: [
      "Same day dispatch within 30 to 45 minutes",
      "100% clear flow guarantee",
      "Upfront flat-rate pricing with zero hidden fees",
      "Expert diagnosis of hidden ventilation and venting issues"
    ],
    commonCauses: [
      "Soap scum, hair, and cosmetic buildup",
      "Food scraps, grease, and coffee grounds",
      "Object drops (toys, jewelry, toothbrushes)",
      "Pipe sagging or improper slope trapping waste"
    ],
    processSteps: [
      { title: "Diagnose Clog Location", desc: "We identify whether the block is localized in the trap or deep in the branch line." },
      { title: "Targeted Unclogging", desc: "We utilize hand augers, drum snakes, or mini-jetters as needed." },
      { title: "Trap Inspection & Reassembly", desc: "P-traps and slip joints are cleaned, reassembled, and tested for leaks." },
      { title: "Full-Velocity Drainage Test", desc: "We run high-volume hot water to confirm immediate, vortex drainage." }
    ],
    faqs: [
      { q: "What should I do while waiting for the plumber?", a: "Turn off water fixtures connected to the clogged line and avoid pouring store-bought chemical drain cleaners down the pipe." },
      { q: "Why does my drain keep clogging repeatedly?", a: "Recurring clogs usually indicate deep buildup on pipe walls, improper venting, or tree root intrusion in the main line." }
    ]
  },
  {
    slug: "kitchen-sink-drain-cleaning",
    name: "Kitchen Sink Drain Cleaning",
    shortDesc: "Clearing stubborn kitchen sink grease clogs, food waste dams, and disposal backups.",
    longDesc: "The kitchen sink is the workhorse of your home, handling dish soap, food particles, and cooking grease daily. When fat congeals inside the narrow 1.5-inch waste arm, water backs up into both basins. Rapid Flow Drain Pros clears kitchen drains fast and clean.",
    metaTitle: "Kitchen Sink Drain Cleaning & Grease Clearing | Rapid Flow Drain Pros",
    metaDesc: "Professional kitchen sink drain cleaning. Clear tough grease clogs, food blockages, and disposal backups. Call (877) 823-0231 for same-day service!",
    icon: "coffee",
    features: [
      "Thorough P-trap and waste arm clearing",
      "Garbage disposal integration check",
      "Degreasing pipe wall scrub",
      "Guaranteed leak-free reassembly"
    ],
    commonCauses: [
      "Pouring cooking oil, butter, or bacon grease into the sink",
      "Starchy foods (pasta, rice, potato peels) expanding in pipes",
      "Coffee grounds forming dense sediment dams",
      "Detergent soap sludge combining with food oils"
    ],
    processSteps: [
      { title: "Under-Sink Inspection", desc: "We check the garbage disposal, baffle tee, and slip-joint connections." },
      { title: "Waste Arm Snaking", desc: "A flexible small-diameter power snake navigates the wall pipe into the main stack." },
      { title: "Grease Removal & Flush", desc: "We dissolve and push through emulsified grease deposits." },
      { title: "Disposal & Sink Flow Test", desc: "We fill both sink basins and release them simultaneously to test high flow." }
    ],
    faqs: [
      { q: "Can I pour boiling water down my kitchen sink to clear grease?", a: "Boiling water may melt grease temporarily, but it re-solidifies further down the cold pipe, creating a worse blockage deep inside the wall." },
      { q: "Why is water backing up into the other side of my double sink?", a: "This happens when the blockage is in the shared baffle tee or the wall waste arm past the connection point of the two bowls." }
    ]
  },
  {
    slug: "bathroom-sink-drain-cleaning",
    name: "Bathroom Sink Drain Cleaning",
    shortDesc: "Eliminating hair clogs, toothpaste buildup, soap scum, and pop-up stopper obstructions.",
    longDesc: "Bathroom sinks frequently become sluggish as hair strands bind with toothpaste, shaving cream, and cosmetic oils around the mechanical pop-up stopper assembly. Rapid Flow Drain Pros disassembles, cleans, and augers bathroom sink drains to restore instant drainage.",
    metaTitle: "Bathroom Sink Drain Cleaning Services | Rapid Flow Drain Pros",
    metaDesc: "Fast bathroom sink drain cleaning. Clear hair, soap scum, and slow pop-up stoppers. Upfront pricing. Call (877) 823-0231 for same day service!",
    icon: "smile",
    features: [
      "Pop-up stopper removal, cleaning, and recalibration",
      "P-trap disassembly and sediment clearing",
      "Branch line motorized snaking",
      "Sanitary, tidy work process with clean mats"
    ],
    commonCauses: [
      "Hair shedding binding with thick toothpaste",
      "Soap scum coating the interior of 1.25-inch pipes",
      "Hairpins, jewelry, and small caps dropped down the drain",
      "Biofilm and mildew buildup inside the sink overflow passage"
    ],
    processSteps: [
      { title: "Stopper Disassembly", desc: "We remove the pivot rod and mechanical stopper to extract surface hair." },
      { title: "P-Trap Cleaning", desc: "The trap is disassembled over a protective bucket and thoroughly cleared." },
      { title: "Wall Pipe Augering", desc: "We feed a snake through the wall adapter to remove deep obstructions." },
      { title: "Reinstallation & Leak Test", desc: "All seals are checked, reassembled, and tested under sustained water pressure." }
    ],
    faqs: [
      { q: "Why does my bathroom sink smell like rotten eggs?", a: "Bacteria feeding on decaying hair and soap residue in the overflow channel or dry P-trap typically produces sewer gas odors." },
      { q: "How do you clear bathroom sink hair clogs without harsh chemicals?", a: "We mechanically remove the stopper and use small-diameter augers that physically extract hair clusters without chemical damage." }
    ]
  },
  {
    slug: "shower-and-bathtub-drain-cleaning",
    name: "Shower and Bathtub Drain Cleaning",
    shortDesc: "Extracting stubborn hair mats, soap scum, and bath oil clogs from tubs and showers.",
    longDesc: "Standing in several inches of dirty soapy water during your morning shower is frustrating and unhygienic. Shower and bathtub drains are prone to dense hair mats that become anchored around strainer crossbars and deep inside the trap.",
    metaTitle: "Shower & Bathtub Drain Cleaning | Rapid Flow Drain Pros",
    metaDesc: "Expert shower and bathtub drain cleaning. Clear standing water, hair clogs, and soap scum buildup fast. Call (877) 823-0231 for same day service!",
    icon: "anchor",
    features: [
      "Tub overflow plate and linkage snaking",
      "Shower strainer extraction without grout damage",
      "Specialized hair-hook and auger tools",
      "Deep P-trap scouring and flush"
    ],
    commonCauses: [
      "Long hair strands entwined with shampoo and conditioner waxes",
      "Bath bombs, body scrubs, and essential oils coating pipe walls",
      "Mineral scale in older galvanized tub drain lines",
      "Faulty or misaligned trip lever bathtub stoppers"
    ],
    processSteps: [
      { title: "Drain Grate & Linkage Removal", desc: "We remove the shower grate or bathtub overflow faceplate." },
      { title: "Hair Extraction", desc: "Specialized barb tools extract dense hair clusters from the trap inlet." },
      { title: "Motorized Trap Snaking", desc: "We snake through the subterranean trap to clear deep branch obstructions." },
      { title: "High-Volume Hot Flush", desc: "We test drainage velocity and ensure the tub drains instantly." }
    ],
    faqs: [
      { q: "Why is water backing up into the shower when the toilet flushes?", a: "This is a serious symptom of a main sewer line or branch line blockage, as the shower is the lowest drain in the bathroom." },
      { q: "Can I snake a bathtub through the bottom drain?", a: "Bathtubs should typically be snaked through the overflow tube to easily navigate the integral P-trap without damaging the tub finish." }
    ]
  },
  {
    slug: "toilet-clog-removal",
    name: "Toilet Clog Removal",
    shortDesc: "Emergency toilet unclogging, heavy augering, and foreign object extraction.",
    longDesc: "A clogged toilet that threatens to overflow is an urgent emergency. When a household plunger fails to budge the blockage, Rapid Flow Drain Pros uses heavy-duty commercial closet augers and vacuum extraction tools to clear the porcelain trapway without scratching the bowl.",
    metaTitle: "Emergency Toilet Clog Removal & Unclogging | Rapid Flow Drain Pros",
    metaDesc: "Fast 24/7 toilet clog removal. Commercial closet augering for tough wipes, paper, and object clogs. Call (877) 823-0231 for immediate dispatch!",
    icon: "target",
    features: [
      "Scratch-free commercial closet augers",
      "Foreign object retrieval (toys, toiletries)",
      "Wax ring & base seal integrity check",
      "Main waste stack ventilation diagnosis"
    ],
    commonCauses: [
      "Flushable wipes (which do not dissolve in water)",
      "Excessive toilet paper or heavy paper towels",
      "Feminine hygiene products and cotton swabs",
      "Children's toys, toothbrushes, or dropped items"
    ],
    processSteps: [
      { title: "Bowl Assessment & Water Level Control", desc: "We lower the water level safely to prevent accidental spillage." },
      { title: "Protective Closet Augering", desc: "Rubber-sleeved augers pass through the porcelain S-trap to catch or push the clog." },
      { title: "Object Retrieval / Line Snaking", desc: "If needed, the fixture is unbolted to retrieve trapped foreign objects." },
      { title: "Multi-Flush Verification", desc: "We perform multiple paper-test flushes to ensure full siphon power is restored." }
    ],
    faqs: [
      { q: "Are flushable wipes really safe for toilets?", a: "No! Despite manufacturer labels, wipes do not break down like toilet paper and are the #1 cause of residential toilet and sewer clogs nationwide." },
      { q: "What should I do if my toilet is about to overflow?", a: "Immediately remove the tank lid and push the rubber flapper valve down to stop water from filling the bowl, or turn off the shutoff valve behind the toilet." }
    ]
  },
  {
    slug: "floor-drain-cleaning",
    name: "Floor Drain Cleaning",
    shortDesc: "Clearing basement, garage, laundry room, and commercial utility floor drains.",
    longDesc: "Floor drains in basements, laundry utility rooms, and commercial kitchens are designed to catch overflows and prevent structural flooding. When these drains clog with dirt, lint, or debris, flood water has nowhere to go. Rapid Flow Drain Pros cleans and restores floor drain flow.",
    metaTitle: "Floor Drain Cleaning Services | Rapid Flow Drain Pros",
    metaDesc: "Professional floor drain cleaning for basements, garages, and laundry rooms. Fast same day service. Call (877) 823-0231 for upfront flat rates!",
    icon: "shield",
    features: [
      "Basement & garage floor drain clearing",
      "Laundry lint & detergent sediment removal",
      "Trap primer and backwater valve checks",
      "Elimination of sewer odors from dry traps"
    ],
    commonCauses: [
      "Washing machine lint and synthetic fibers",
      "Swept dust, dirt, and pet hair entering the drain grate",
      "Soap sludge and mop water residue",
      "Sewer main back-pressure pushing water up through the floor drain"
    ],
    processSteps: [
      { title: "Grate Removal & Cleanout Check", desc: "We remove the cover plate and check for integral cleanout plugs." },
      { title: "Heavy Drum Snaking", desc: "We feed heavy cables through the trap to scour silt and lint blockages." },
      { title: "Trap Priming & Odor Seal", desc: "We fill the P-trap with water and verify the seal blocks sewer gas." },
      { title: "Flood Flow Testing", desc: "We pour high volumes of water into the floor drain to verify unrestricted discharge." }
    ],
    faqs: [
      { q: "Why is water coming up out of my basement floor drain?", a: "When fixtures on upper floors are used and water emerges from the basement floor drain, you have a main sewer line blockage downstream." },
      { q: "Why does my floor drain smell like sewage?", a: "The water in the floor drain's P-trap has likely evaporated. Pouring a gallon of water down the drain usually restores the barrier." }
    ]
  },
  {
    slug: "garbage-disposal-clog-removal",
    name: "Garbage Disposal Clog Removal",
    shortDesc: "Unjamming garbage disposal units, clearing discharge hoses, and restoring sink flow.",
    longDesc: "When a garbage disposal jams or hums without spinning, starchy food and fibrous peels quickly create an impenetrable dam in your kitchen drain. Rapid Flow Drain Pros safely unjams disposal flywheels, clears discharge elbows, and snakes connected waste lines.",
    metaTitle: "Garbage Disposal Clog Removal & Repair | Rapid Flow Drain Pros",
    metaDesc: "Fast garbage disposal unjamming and drain clearing. Same-day emergency kitchen plumbing service. Call (877) 823-0231 for upfront flat rates!",
    icon: "refresh-cw",
    features: [
      "Safe mechanical flywheel unjamming",
      "Discharge tube and baffle tee clearing",
      "Electrical breaker and reset switch diagnosis",
      "Blade and motor integrity check"
    ],
    commonCauses: [
      "Fibrous foods (celery, corn husks, artichoke leaves) wrapping around blades",
      "Starchy expanding foods (potato peels, rice, pasta)",
      "Bone fragments, fruit pits, or eggshell membrane buildup",
      "Utensils, bottle caps, or foreign objects fallen inside"
    ],
    processSteps: [
      { title: "Electrical Safety Lockout", desc: "We disconnect power to ensure 100% safety before inspecting the chamber." },
      { title: "Chamber & Impeller De-Jamming", desc: "Specialized tools rotate the underside drive socket and remove foreign objects." },
      { title: "Discharge Elbow Clearing", desc: "We remove and clear the 90-degree black discharge pipe connected to the disposal." },
      { title: "Power Test & Water Flush", desc: "We restore power, run cold water, and test grinding performance under load." }
    ],
    faqs: [
      { q: "Why is my garbage disposal humming but not spinning?", a: "The flywheel is jammed by a hard food particle or foreign object, triggering the internal thermal overload breaker." },
      { q: "Can I put lemons or ice in my garbage disposal?", a: "Ice helps dislodge food particles from blades, and small citrus slices can freshen odors, but avoid hard lemon rinds in large quantities." }
    ]
  },
  {
    slug: "main-sewer-line-cleaning",
    name: "Main Sewer Line Cleaning",
    shortDesc: "Whole-house main lateral snaking, hydro-jetting, and sewer camera inspection.",
    longDesc: "All drains in your home converge into a single main sewer line that carries waste out to the municipal sewer or septic tank. When the main line clogs, every toilet, sink, and shower in the building begins backing up simultaneously. Rapid Flow Drain Pros specializes in emergency main line restoration.",
    metaTitle: "Main Sewer Line Cleaning & Rooter | Rapid Flow Drain Pros",
    metaDesc: "Nationwide main sewer line cleaning, hydro-jetting & camera inspection. 24/7 emergency dispatch for whole-house backups. Call (877) 823-0231!",
    icon: "layers",
    features: [
      "High-power commercial main line rooters (up to 150+ ft)",
      "Full-circumference 4,000 PSI hydro-jetting",
      "HD sewer camera inspection included",
      "Upfront flat-rate pricing with zero hidden charges"
    ],
    commonCauses: [
      "Tree root penetration through pipe joints and hairline fissures",
      "Heavy accumulation of non-biodegradable wipes and grease",
      "Pipe bellies (sagging low points) trapping heavy solids",
      "Aging clay or cast iron pipe channel deterioration"
    ],
    processSteps: [
      { title: "Cleanout Access & Assessment", desc: "We access the exterior main cleanout or roof stack to relieve system pressure." },
      { title: "Heavy-Duty Mechanical Cutting", desc: "Industrial root cutters bore through tree root mats and dense solid blockages." },
      { title: "High-Pressure Hydro Jetting", desc: "We blast away residual wall grease and root hair to prevent rapid re-clogging." },
      { title: "Full HD Video Inspection", desc: "We inspect the entire run to the street main and provide you with a video copy." }
    ],
    faqs: [
      { q: "What are the warning signs of a clogged main sewer line?", a: "Multiple slow drains, gurgling toilets when washing machines drain, sewage backing up into lower tubs, and foul odors around floor drains." },
      { q: "How much does main sewer line cleaning cost?", a: "We provide an upfront, flat-rate written quote before any work begins, so you know the exact total with no surprise hourly inflation." }
    ]
  },
  {
    slug: "sewer-line-clog-removal",
    name: "Sewer Line Clog Removal",
    shortDesc: "Clearing localized obstructions, tree root intrusions, and foreign object blockages in sewer lines.",
    longDesc: "A blockage in your exterior sewer lateral requires powerful, specialized tooling. Rapid Flow Drain Pros utilizes heavy-duty mechanical augers, root cutters, and hydro-jetting equipment to quickly locate and annihilate stubborn sewer line clogs.",
    metaTitle: "Sewer Line Clog Removal Services | Rapid Flow Drain Pros",
    metaDesc: "Emergency sewer line clog removal. We clear roots, wipes, and heavy blockages fast with upfront pricing. Call (877) 823-0231 for immediate service!",
    icon: "slash",
    features: [
      "Precision root cutter heads sized to match pipe diameter",
      "Trenchless non-destructive cleaning techniques",
      "Immediate sewer back-up pressure relief",
      "Accurate underground pipe depth & location tracking"
    ],
    commonCauses: [
      "Fine tree root hairs expanding into massive root balls inside the pipe",
      "Flushed sanitary napkins, diapers, and moist wipes",
      "Collapsed or shifted sewer pipe sections",
      "Solidified grease plugs from commercial or residential discharge"
    ],
    processSteps: [
      { title: "System Relief & Cleanout Entry", desc: "We open the sewer cleanout and contain any localized wastewater." },
      { title: "Root Cutting & Augering", desc: "Expanding steel blades shear roots flush against the internal pipe wall." },
      { title: "High-Volume Flush", desc: "We flush out dislodged debris into the municipal main." },
      { title: "Optical Camera Verification", desc: "We verify the entire pipe length is 100% open and unobstructed." }
    ],
    faqs: [
      { q: "Can tree roots be permanently cleared from a sewer line?", a: "Hydro-jetting and root cutting clear roots completely for 12-24 months. For a permanent fix, trenchless pipe lining or pipe bursting is recommended." },
      { q: "How do you know where the sewer clog is located?", a: "We feed an HD camera with a built-in 512Hz sonde transmitter into the pipe, allowing us to pinpoint the exact location and depth from the surface." }
    ]
  },
  {
    slug: "sewer-backup-cleanup-and-clearing",
    name: "Sewer Backup Cleanup and Clearing",
    shortDesc: "Emergency sewer backup intervention, mainline clearing, and property damage mitigation.",
    longDesc: "Raw sewage backups present serious health hazards and cause thousands of dollars in property damage if not handled immediately. Rapid Flow Drain Pros provides emergency dispatch to clear the sewer blockage, stop the overflow, and help you restore safe living conditions.",
    metaTitle: "Sewer Backup Clearing & Emergency Service | Rapid Flow Drain Pros",
    metaDesc: "24/7 emergency sewer backup clearing. 30-45 min arrival for contaminated sewage overflows. Upfront flat rates. Call (877) 823-0231 right now!",
    icon: "alert-circle",
    features: [
      "24/7 emergency dispatch within 30 to 45 minutes",
      "Rapid obstruction evacuation to prevent further flooding",
      "Licensed master plumbers with sanitary protocol training",
      "Insurance-ready diagnostic reporting"
    ],
    commonCauses: [
      "Municipal sewer main surcharging during flash floods",
      "Catastrophic root ball collapse in residential laterals",
      "Heavy fat-oil-grease blockage in multi-family sanitary stacks",
      "Broken, offset, or crushed sewer pipe sections"
    ],
    processSteps: [
      { title: "Emergency Water Shutoff & Containment", desc: "We halt all active household water use to prevent additional overflow." },
      { title: "Main Sewer Line Unblocking", desc: "Heavy mechanical or hydro-jet tooling evacuates the standing sewage dam." },
      { title: "Downstream Video Diagnosis", desc: "We inspect for broken pipes or municipal backflow issues causing the backup." },
      { title: "Preventative Backwater Valve Advice", desc: "We guide you on installing check valves to prevent future municipal backflow." }
    ],
    faqs: [
      { q: "Is raw sewage backup covered by homeowners insurance?", a: "Many homeowner policies cover sewer backups if you have a 'Water Backup and Sump Overflow' endorsement. We provide full written documentation for claims." },
      { q: "Is it safe to stay in the house during a sewer backup?", a: "You should avoid the affected rooms until raw sewage is cleared and sanitized due to harmful airborne bacteria and biohazards." }
    ]
  },
  {
    slug: "grease-clog-removal",
    name: "Grease Clog Removal",
    shortDesc: "Eliminating hardened kitchen fats, oils, and grease (FOG) with high-temp hydro-jetting.",
    longDesc: "Fats, oils, and grease (FOG) are the single biggest cause of recurring kitchen and commercial restaurant drain clogs. When warm grease enters cool pipes, it solidifies into hard, rock-like deposits. Rapid Flow Drain Pros uses specialized hydro-jetting and emulsifying methods to completely scrub grease away.",
    metaTitle: "Grease Clog Removal & Kitchen Line Jetting | Rapid Flow Drain Pros",
    metaDesc: "Professional grease clog removal and kitchen drain hydro-jetting for homes & restaurants. Same-day service. Call (877) 823-0231!",
    icon: "flame",
    features: [
      "High-pressure rotating degreasing nozzles",
      "Commercial restaurant grease line clearing",
      "Residential kitchen branch degreasing",
      "Long-lasting wall-to-wall pipe cleaning"
    ],
    commonCauses: [
      "Pouring bacon grease, pan drippings, or cooking oils into sinks",
      "Heavy commercial dishwashing without proper grease trap sizing",
      "Emulsified soaps combining with fats to create rock-hard soap scum",
      "Flat pipe slopes allowing grease to cool and accumulate at the bottom"
    ],
    processSteps: [
      { title: "Identify Grease Dam Location", desc: "We trace the kitchen waste arm and run an optical check if needed." },
      { title: "Hydro Jetting Grease Scrub", desc: "Rotating water jets cut through and wash away congealed grease collars." },
      { title: "Trap & Vent Clearing", desc: "We clean P-traps, disposal lines, and grease interceptor connections." },
      { title: "High-Volume Verification", desc: "We run continuous hot water under load to confirm free-flowing discharge." }
    ],
    faqs: [
      { q: "Why do grease clogs return after snaking?", a: "Snakes only poke a small 1-inch hole through soft grease. As soon as cold water and fats flow again, the hole closes up. Hydro-jetting is required to strip the grease completely." },
      { q: "How can I prevent grease clogs in my kitchen?", a: "Always wipe greasy pans with paper towels into the trash before washing, and avoid pouring any liquid cooking fats down the drain." }
    ]
  }
];
