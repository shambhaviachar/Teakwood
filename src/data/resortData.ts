import { 
  AccommodationType, 
  DayOutingPackage, 
  ActivityItem, 
  TestimonialItem, 
  BlogItem, 
  GalleryPhoto 
} from '../types';

export const RESORT_INFO = {
  name: "Teakwood Resort",
  tagline: "Nature Stays with a Soul",
  address: "Sy.no.53/9, Ravuthanahalli, kithanahalli post, Dasanapura Hobli, North, Bengaluru, Karnataka 562130",
  shortAddress: "Dasanapura Hobli, North Bengaluru 562130",
  phone: "+91 88611 38889",
  phoneRaw: "918861138889",
  email: "teakwoodresorts@gmail.com",
  website: "www.teakwoodresort.in",
  brochureUrl: "/assets/aistudio/Teakwood_Resort_Brouchre_87d963ba.pdf",
  logoUrl: "/assets/aistudio/Teakwood_Logo_62e81bc1.jpeg",
  googleMapsUrl: "https://maps.google.com/?q=Sy.no.53/9,+Ravuthanahalli,+kithanahalli+post,+Dasanapura+Hobli,+Bengaluru,+Karnataka+562130",
  whatsappUrl: "https://wa.me/918861138889?text=Hello%20Teakwood%20Resort,%20I%20would%20like%20to%20inquire%20about%20booking%20and%20packages.",
  coordinates: {
    lat: 13.0612,
    lng: 77.4285
  },
  operatingHours: {
    reception: "24 Hours (7 Days a Week)",
    dayOuting: "09:00 AM – 06:00 PM",
    stayCheckIn: "01:00 PM",
    stayCheckOut: "11:00 AM"
  }
};

// Official logo and generated visual assets
export const RESORT_IMAGES = {
  logo: "/assets/aistudio/Teakwood_Logo_62e81bc1.jpeg",
  hero: "/src/assets/images/teakwood_resort_hero_1793857545957.jpg",
  cottage: "/src/assets/images/teakwood_cottage_stay_1793857546574.jpg",
  pool: "/src/assets/images/teakwood_swimming_pool_1793857547612.jpg",
  activities: "/src/assets/images/teakwood_activities_nature_1793857547362.jpg"
};

export const RESORT_HIGHLIGHTS = [
  {
    title: "10+ Acres Teak Forest",
    description: "Nestled amidst hundreds of towering native teak trees with serene countryside calm and fresh air."
  },
  {
    title: "Adventure & Sky Cycle",
    description: "High and low rope courses, Zipline, Sky Cycle, Tyre Wall Climbing, and wall climbing."
  },
  {
    title: "All-Inclusive Feasts",
    description: "Welcome drink, breakfast, lavish lunch, evening hi-tea snacks, and delicious dinner spreads."
  },
  {
    title: "Conference & Events Hall",
    description: "Spacious conference hall for corporate meetings, strategy sessions, and private family celebrations."
  }
];

export const KEY_AMENITIES = [
  {
    id: "pool",
    title: "Resort Swimming Pool",
    desc: "Crystal-clear adult & kid-friendly pool with wooden sun deck & lounger umbrellas.",
    category: "Water Fun"
  },
  {
    id: "raindance",
    title: "Rain Dance & Music",
    desc: "High-energy mist sprinkler rain dance arena with curated music.",
    category: "Entertainment"
  },
  {
    id: "adventure",
    title: "Adventure & Sky Cycle",
    desc: "Zipline, Sky Cycle, High Rope Course, Low Rope Course, Wall Climbing & Tyre Wall.",
    category: "Thrill"
  },
  {
    id: "conference",
    title: "Spacious Conference Hall",
    desc: "Equipped hall with audiovisual setup for corporate meetings, events, and gatherings.",
    category: "Corporate"
  },
  {
    id: "dining",
    title: "All-Inclusive Feasts",
    desc: "Welcome drink, breakfast, lavish lunch, evening tea/coffee snacks, and dinner spreads.",
    category: "Culinary"
  },
  {
    id: "sports",
    title: "Cricket, Volleyball & Badminton",
    desc: "Lawn grounds for friendly cricket matches, volleyball, badminton, and outdoor fun.",
    category: "Sports"
  },
  {
    id: "indoor",
    title: "Indoor Games Lounge",
    desc: "Table Tennis, Pickleball, Carrom, Chess, and Ludo in breezy recreational spaces.",
    category: "Games"
  },
  {
    id: "campfire",
    title: "Evening Campfire & Music",
    desc: "Warm bonfire circle under the open sky for overnight guests to relax and unwind.",
    category: "Nightlife"
  }
];

export const ACCOMMODATIONS: AccommodationType[] = [
  {
    id: "deluxe-ac-rooms",
    name: "Deluxe AC Rooms",
    badge: "2 Sharing",
    popular: true,
    tagline: "Attached modern washroom, plush bedding, split AC, ideal for couples and small families.",
    pricePerPerson: 3499,
    originalPrice: 4200,
    taxNote: "+ GST per person",
    capacity: "2 Sharing",
    bedType: "King Bed / Twin Setup with Attached Washroom",
    roomSize: "400 sq.ft",
    checkIn: "1:00 PM",
    checkOut: "11:00 AM",
    image: "/assets/aistudio/Modern_Hotel_Room_with_Green_Accents_9f07946c.png",
    images: [
      "/assets/aistudio/Modern_Hotel_Room_with_Green_Accents_9f07946c.png",
      "/assets/aistudio/Warm_Modern_Hotel_Room_Retreat_b725664b.png",
      "/assets/aistudio/Modern_Beige-Tiled_Bathroom_Interior_d05058be.png"
    ],
    description: "Spacious air-conditioned room with king bed, cozy leather couch, flat-screen TV, ceiling fan, and garden door. Features a designer ensuite beige-tiled washroom with illuminated LED mirror and 24/7 hot rain shower.",
    amenities: [
      "High-efficiency Split Air Conditioning",
      "Attached Designer Washroom with LED Mirror & Hot Rain Shower",
      "Plush Comfortable King Bedding & Clean Linens",
      "Wall-Mounted Flat Screen TV & High-Speed Wi-Fi",
      "Comfortable Leather Couch & Coffee Table",
      "Electric Kettle, Tea/Coffee Kit & Wardrobe"
    ],
    mealsIncluded: [
      "Welcome Drink on Arrival",
      "Buffet Lunch (Veg & Non-Veg)",
      "Evening Tea / Coffee & Hot Snacks",
      "Buffet Dinner Spread",
      "Next Morning Breakfast"
    ],
    features: [
      "Full Swimming Pool Access",
      "Rain Dance Session Access",
      "Full Access to Adventure Activities & Sky Cycle",
      "Access to Indoor & Outdoor Sports"
    ]
  },
  {
    id: "premium-non-ac-rooms",
    name: "Premium Non-AC Rooms",
    badge: "3 Sharing",
    tagline: "Natural ventilation, timber flooring, luxury marble bathroom, budget-friendly stay.",
    pricePerPerson: 3199,
    originalPrice: 3800,
    taxNote: "+ GST per person",
    capacity: "3 Sharing",
    bedType: "Comfortable Triple Bedding / King with Extra Bed",
    roomSize: "360 sq.ft",
    checkIn: "1:00 PM",
    checkOut: "11:00 AM",
    image: "/assets/aistudio/Modern_Green-Accented_Hotel_Room_59370d5b.png",
    images: [
      "/assets/aistudio/Modern_Green-Accented_Hotel_Room_59370d5b.png",
      "/assets/aistudio/Warm_minimalist_hotel_room_with_garden_view_d53b8ab5.png",
      "/assets/aistudio/Modern_Marble-Tiled_Bathroom_Retreat_aea1e01f.png"
    ],
    description: "Designed with warm timber flooring and direct garden-view doors to capture fresh natural breezes under the teak canopy. Features an upscale dark marble-tiled ensuite bathroom with modern geyser and backlit mirror.",
    amenities: [
      "Natural Ventilation & High-speed Ceiling Fans",
      "Luxury Marble-Tiled Bathroom with Geyser & Rain Shower",
      "Warm Wooden Flooring & Elegant Wall Art",
      "Wall-Mounted Television & Wardrobe",
      "Clean Bed Linens & Fresh Bath Towels",
      "Free Resort Parking & High-Speed Wi-Fi"
    ],
    mealsIncluded: [
      "Welcome Drink on Arrival",
      "Grand Buffet Lunch (Veg & Non-Veg)",
      "Evening Tea / Coffee & Snacks",
      "Full Buffet Dinner",
      "Fresh Morning Breakfast"
    ],
    features: [
      "Swimming Pool & Sun Deck",
      "Rain Dance Access",
      "All Adventure Courses & Games",
      "Evening Campfire with Music"
    ]
  },
  {
    id: "family-rooms",
    name: "Family Rooms",
    badge: "10 Sharing",
    popular: true,
    tagline: "Spacious layout suited for group stays, family reunions & team getaways.",
    pricePerPerson: 2999,
    originalPrice: 3600,
    taxNote: "+ GST per person",
    capacity: "10 Sharing",
    bedType: "Multiple Individual Beds & Bunks with Clean Linens",
    roomSize: "850 sq.ft",
    checkIn: "1:00 PM",
    checkOut: "11:00 AM",
    image: "/assets/aistudio/Bright_Family_Dormitory_Room_with_Green_Accents_6b63aea5.png",
    description: "Expansive family dormitory room with 4+ large double beds, red curtains, hardwood flooring, electric kettle setup, and ceiling fans. Ideal for large families and team bonding.",
    amenities: [
      "Spacious Layout with Multiple Beds & Attached Washrooms",
      "Air Cooling / Multiple Fans Setup",
      "Individual Storage Spaces & Bedside Charging",
      "High-Speed Wi-Fi for Group Catch-ups",
      "Dedicated Common Lounging Area"
    ],
    mealsIncluded: [
      "Welcome Drink on Arrival",
      "Grand Buffet Lunch (Veg & Non-Veg)",
      "Evening High-Tea with hot savory snacks",
      "Lavish Buffet Dinner Spread",
      "Morning Breakfast Buffet"
    ],
    features: [
      "Swimming Pool & Rain Dance",
      "Zipline & Sky Cycle Adventure Courses",
      "Cricket & Volleyball Lawn Tournaments",
      "Evening Campfire Gathering"
    ]
  },
  {
    id: "camping-tents",
    name: "Camping Tents",
    badge: "2 Sharing",
    tagline: "Adventure-style accommodation for youth groups and friends under the stars.",
    pricePerPerson: 2299,
    originalPrice: 2800,
    taxNote: "+ GST per person",
    capacity: "2 Sharing",
    bedType: "Comfortable Mattress & Bedrolls with Pillows",
    roomSize: "180 sq.ft",
    checkIn: "1:00 PM",
    checkOut: "11:00 AM",
    image: "/assets/aistudio/Night_Garden_Camping_Beside_a_Lit_House_683ebc69.png",
    description: "Experience authentic night garden camping under open starlit skies on soft lawns beside illuminated resort villas and palm trees. Complete with comfortable bedding and sanitized washroom access.",
    amenities: [
      "Heavy-duty Weatherproof Camping Tent",
      "Comfortable Mattresses, Clean Sheets & Pillows",
      "Dedicated Spot Lighting & Power Stations",
      "Clean Sanitized Restrooms & Showers nearby",
      "Proximity to Campfire & Lawn Games"
    ],
    mealsIncluded: [
      "Welcome Drink on Arrival",
      "Buffet Lunch Spread",
      "Evening High-Tea & Snacks",
      "Dinner Buffet by the Bonfire",
      "Next Morning Breakfast"
    ],
    features: [
      "Bonfire Experience Under the Stars",
      "Full Swimming Pool Access",
      "Rain Dance Session",
      "All Adventure Activities Included"
    ]
  }
];

export const DAY_OUTING_PACKAGES: DayOutingPackage[] = [
  {
    id: "teak-venture",
    title: "Teak Venture",
    timing: "10:00 AM – 06:00 PM",
    pricePerPerson: 1299,
    taxNote: "+ GST per head",
    badge: "Popular Value",
    description: "Perfect for a quick adventure day outing near Bangalore. Ideal for family day outings or corporate team-building events at resorts.",
    mealsIncluded: [
      "Welcome Drinks on Arrival",
      "Grand Buffet Lunch (Veg & Non-Veg curries, biryani, tandoori rotis, desserts)",
      "Evening Hi-Tea / Coffee with hot savory snacks"
    ],
    keyInclusions: [
      "Swimming Pool & Rain Dance Access",
      "Full Activity & Adventure Ropes Access",
      "Indoor Games (Table Tennis, Pickleball, Carrom, Chess, Ludo)",
      "Outdoor Games (Cricket, Volleyball, Badminton)",
      "Ideal for short corporate outings and family gatherings"
    ],
    activitiesIncluded: [
      "Swimming Pool", "Rain Dance", "Zipline", "Sky Cycle", "Low Rope Course",
      "High Rope Course", "Wall Climbing", "Cricket", "Badminton", "Table Tennis"
    ],
    recommendedFor: "Family day outings, college friends & short corporate offsites",
    popular: true
  },
  {
    id: "teak-pulse",
    title: "Teak Pulse",
    timing: "09:00 AM – 06:00 PM",
    pricePerPerson: 1499,
    taxNote: "+ GST per head",
    badge: "All Meals Included",
    description: "Enjoy a full day of fun and adventure at one of the best adventure resorts in Bangalore. Best for team outings and large group celebrations.",
    mealsIncluded: [
      "South Indian Breakfast Buffet (Idli, Vada, Dosa, Sambhar, Chutneys, Tea/Coffee)",
      "Refreshing Welcome Drinks",
      "Grand Buffet Lunch (Veg & Non-Veg delicacies, Biryani, Tandoor, Desserts)",
      "Evening Hi-Tea / Coffee with hot snacks"
    ],
    keyInclusions: [
      "Early 9:00 AM entry to maximize your day",
      "Breakfast + Lunch + Hi-Tea included",
      "Full Access to 20+ Adventure Activities & Sky Cycle",
      "Swimming Pool & Rain Dance Floor",
      "Relaxation Zones & Lawn Spaces",
      "Best for team outings and large group celebrations"
    ],
    activitiesIncluded: [
      "Breakfast Spread", "Sky Cycle", "Zipline", "Archery", "Tyre Wall Climbing",
      "Swimming Pool", "Rain Dance", "Pickleball", "Cricket", "Volleyball"
    ],
    recommendedFor: "Corporate team outings, annual company events & full-day family celebrations",
    popular: true
  },
  {
    id: "corporate-summit-outing",
    title: "Corporate Events & Meetings Package",
    timing: "09:00 AM – 06:30 PM",
    pricePerPerson: 1399,
    taxNote: "+ GST per head (Custom Group Quotes)",
    badge: "Conference Hall Included",
    description: "Spacious Conference Hall for corporate meetings, events & gatherings. Tailored for corporate teams with team-building facilitation, presentation setup, and GST billing.",
    mealsIncluded: [
      "Welcome Drink on Arrival",
      "Executive Breakfast Spread",
      "Lavish Buffet Lunch with Live Counters",
      "Evening Hi-Tea & Assorted Snacks"
    ],
    keyInclusions: [
      "Spacious Air-Conditioned Conference Hall Access",
      "Audio / PA System & Projector Support (On Request)",
      "Dedicated Team-Building Emcee / Game Coordinator",
      "Full Swimming Pool, Rain Dance, and Adventure Activities access",
      "Corporate GST Billing & dedicated event manager"
    ],
    activitiesIncluded: [
      "Conference Hall Meetings", "Team Building Games", "Zipline", "Sky Cycle",
      "Tug of War", "Cricket Matches", "Rain Dance", "Pickleball"
    ],
    recommendedFor: "IT Companies, Startups, Corporate Offsites & AGM Gatherings"
  }
];

export const ACTIVITIES_DATA: ActivityItem[] = [
  // Adventure
  {
    id: "act-zipline",
    title: "Canopy Zipline",
    category: "adventure",
    description: "Glide across a 150-meter cable through the teakwood treetops with panoramic countryside views.",
    suitableFor: "Ages 10+ (Safety harness & certified guide)",
    safetyLevel: "High Safety with Full Harness",
    highlight: "Thrilling Aerial View"
  },
  {
    id: "act-burma-bridge",
    title: "Burma Rope Bridge",
    category: "adventure",
    description: "Test your balance walking across suspended cables held between towering teak trees.",
    suitableFor: "All fitness levels",
    safetyLevel: "Harness Attached",
    highlight: "Great Photo-op"
  },
  {
    id: "act-commando-net",
    title: "Commando Cargo Net",
    category: "adventure",
    description: "Scramble up a rugged 25-foot military-style climbing net to challenge agility and strength.",
    suitableFor: "Teens & Adults",
    safetyLevel: "Cushioned Fall Zone",
    highlight: "Strength Test"
  },
  {
    id: "act-tyre-walk",
    title: "Tyre Walk & Wobble Logs",
    category: "adventure",
    description: "Navigate a succession of swinging tires and logs hung above soft earth.",
    suitableFor: "Kids, Families & Teams",
    safetyLevel: "Low Impact Fun"
  },
  {
    id: "act-bamboo-crossing",
    title: "Bamboo Bridge & Rope Ladder",
    category: "adventure",
    description: "Traditional aerial rope bridges crafted with bamboo footings for authentic rustic adventure.",
    suitableFor: "All ages",
    safetyLevel: "Supervised by Instructors"
  },

  // Water & Beats
  {
    id: "act-pool",
    title: "Sparkling Swimming Pool",
    category: "water",
    description: "Crystal-clear filtered water pool with shallow kids zone, surrounded by teak loungers and coconut palms.",
    suitableFor: "All Guests (Swimwear required)",
    safetyLevel: "Lifeguard on Duty",
    highlight: "Poolside Loungers"
  },
  {
    id: "act-raindance",
    title: "DJ Rain Dance Arena",
    category: "water",
    description: "Get drenched under cold overhead showers while our in-house DJ plays high-energy Bollywood, Kannada, and EDM tracks.",
    suitableFor: "Everyone who loves to dance",
    safetyLevel: "Non-slip Tile Floor",
    highlight: "Daily DJ Sessions"
  },

  // Outdoor
  {
    id: "act-cricket",
    title: "Box Cricket & Open Turf Ground",
    category: "outdoor",
    description: "Green turf pitch equipped with bats, tennis balls, and stumps for exciting friendly matches.",
    suitableFor: "Corporate Teams & Friends",
    safetyLevel: "Open Lawn Turf",
    highlight: "Tournament Ready"
  },
  {
    id: "act-volleyball",
    title: "Sand Volleyball Court",
    category: "outdoor",
    description: "Standard beach-style volleyball court under the tropical sunshine.",
    suitableFor: "Groups & Family fun",
    safetyLevel: "Soft Sand Court"
  },
  {
    id: "act-badminton",
    title: "Badminton Court",
    category: "outdoor",
    description: "Dedicated outdoor court with racquets and shuttlecocks provided at reception.",
    suitableFor: "All age groups",
    safetyLevel: "Level Ground"
  },
  {
    id: "act-tug-of-war",
    title: "Tug of War & Lawn Relays",
    category: "outdoor",
    description: "Classic team-building challenge across our sprawling emerald front lawns.",
    suitableFor: "Corporate Outings & Reunions",
    safetyLevel: "Soft Turf"
  },

  // Indoor
  {
    id: "act-snooker",
    title: "Snooker & Billiards",
    category: "indoor",
    description: "Full-size slate tables with smooth baize, cues, and chalk for casual games and tournaments.",
    suitableFor: "Adults & cue sports fans",
    safetyLevel: "Air-cooled Lounge",
    highlight: "Premium Tables"
  },
  {
    id: "act-table-tennis",
    title: "Table Tennis (Ping Pong)",
    category: "indoor",
    description: "Championship-grade tables with high-spin paddles for fast-paced rallies.",
    suitableFor: "All skill levels",
    safetyLevel: "Indoor Flooring"
  },
  {
    id: "act-foosball",
    title: "Foosball & Air Hockey",
    category: "indoor",
    description: "Spin and score in competitive multi-player tabletop football matches.",
    suitableFor: "Kids, Teens & Adults",
    safetyLevel: "Sturdy Tables"
  },
  {
    id: "act-carrom-chess",
    title: "Carrom & Strategic Board Games",
    category: "indoor",
    description: "Sit in the breezy pavilion with classic tournament carrom boards and chess sets.",
    suitableFor: "Relaxed afternoons",
    safetyLevel: "Family Friendly"
  },

  // Evening & Nature
  {
    id: "act-campfire",
    title: "Evening Campfire & Music",
    category: "evening",
    description: "Cozy open-air bonfire pit surrounded by teak logs, with acoustic music under Bengaluru's starlit sky.",
    suitableFor: "Overnight Stay Guests",
    safetyLevel: "Contained Fire Pit",
    highlight: "Warm Night Vibes"
  },
  {
    id: "act-nature-walk",
    title: "Teakwood Plantation Walk",
    category: "evening",
    description: "Guided morning or sunset stroll identifying native trees, flora, and bird species residing in the estate.",
    suitableFor: "Nature lovers & Photographers",
    safetyLevel: "Paved & Natural Trails"
  }
];

export const TESTIMONIALS: TestimonialItem[] = [
  {
    id: "test-1",
    guestName: "Arunachalam & Team",
    roleOrLocation: "Tech Lead, Infosys Bengaluru",
    rating: 5,
    date: "October 2026",
    occasion: "Corporate Outing",
    comment: "We organized a 45-member team outing at Teakwood Resort. The day outing package was exceptional value—breakfast was piping hot, rain dance with the DJ got everyone dancing, and the adventure rope bridges were thrilling. The staff at Ravuthanahalli were courteous and accommodating throughout.",
    verified: true
  },
  {
    id: "test-2",
    guestName: "Deepa & Raghu Hegde",
    roleOrLocation: "Malleswaram, Bengaluru",
    rating: 5,
    date: "September 2026",
    occasion: "Family Weekend",
    comment: "Stayed at the Executive Teak Villa over the weekend with my parents and children. The teakwood craftsmanship and huge veranda looking into the green trees felt like Coorg, right inside Bangalore! Food buffet was authentic Karnataka style with delicious rotis, curries, and payasam.",
    verified: true
  },
  {
    id: "test-3",
    guestName: "Vikram Nambiar",
    roleOrLocation: "Freelance Creative Director",
    rating: 5,
    date: "August 2026",
    occasion: "Friends Reunion",
    comment: "We booked the luxury tents and enjoyed a private campfire under the open sky. Swimming pool was sparkling clean, snooker table was well maintained, and the phone booking with +91 88611 38889 was seamless. Highly recommend for quick weekend recharges.",
    verified: true
  },
  {
    id: "test-4",
    guestName: "Pooja Sundaram",
    roleOrLocation: "HR Manager, FinTech Bangalore",
    rating: 5,
    date: "July 2026",
    occasion: "Corporate Outing",
    comment: "Finding a resort off Tumkur Road with great food, cricket turf, clean changing rooms, and zero city noise was a blessing. The team building coordinator kept all our teams engaged with tug of war and relays. Will definitely return!",
    verified: true
  }
];

export const BLOG_POSTS: BlogItem[] = [
  {
    id: "blog-1",
    title: "Top 7 Reasons Why Teakwood Resort is Bangalore’s Best Weekend Getaway",
    slug: "top-reasons-teakwood-resort-bangalore-getaway",
    excerpt: "Escape Bangalore’s notorious traffic without spending half your weekend driving. Discover why this 10-acre teak sanctuary in Dasanapura Hobli is winning hearts.",
    date: "October 24, 2026",
    author: "Teakwood Editorial",
    category: "Travel Guide",
    readTime: "5 min read",
    image: RESORT_IMAGES.hero,
    tags: ["Weekend Getaway", "Bangalore Escapes", "Eco Retreat"],
    content: `
Living in Bangalore often means trading bird chirps for engine revs and greenery for concrete flyovers. When Friday evening rolls around, the common craving is simple: wide open lawns, whispering leaves, refreshing waters, and zero city stress.

### 1. Less Driving, More Relaxing
Located in Sy.no.53/9, Ravuthanahalli, Dasanapura Hobli, Teakwood Resort sits conveniently off the Tumkur Road corridor. Unlike getaways to Kabini or Sakleshpur which consume 5 to 7 hours of driving, you reach our serene gates in under an hour from Yeshwanthpur or Hebbal.

### 2. The Healing Presence of Teak Trees
Teak trees (Tectona grandis) are known for their broad leaves, tall stately canopies, and the soothing natural shelter they create. Walking through the estate provides an immediate drop in ambient temperature and a refreshing natural micro-climate.

### 3. Action-Packed Yet Serene
Whether you are scaling our commando cargo nets, flying on the treetop zipline, or simply reading a novel by the pool sun loungers, the estate allows every family member to find their own rhythm.

### 4. Lavish All-Day Feasts
From traditional crispy dose and hot sambar at breakfast to rich evening tandoori platters and comforting biryani, our culinary team prepares food that feels both celebratory and home-cooked.

Visit us this weekend or call **+91 88611 38889** to reserve your villa or day outing slot.
    `
  },
  {
    id: "blog-2",
    title: "Planning the Ultimate Corporate Team Outing: Activities, Schedules & Tips",
    slug: "planning-corporate-team-outing-bangalore-resort",
    excerpt: "From ice-breaker lawn challenges and box cricket tournaments to high-energy DJ rain dance, here is the blueprint for an unforgettable corporate retreat.",
    date: "September 15, 2026",
    author: "Corporate Events Team",
    category: "Corporate Events",
    readTime: "6 min read",
    image: RESORT_IMAGES.activities,
    tags: ["Corporate Outing", "Team Building", "Bangalore Tech"],
    content: `
A successful corporate outing does not happen by accident; it requires a blend of structure, freedom, good nourishment, and stress-free logistics.

### Step 1: The Timing That Works
For a 1-day outing, arriving by 9:00 AM or 9:30 AM allows teams to settle in with welcome drinks and a hearty breakfast before the mid-day heat. Our Sunbird Package is tailored specifically for this.

### Step 2: Icebreakers & Low-Stakes Challenges
Our sprawling front lawn is primed for Tug of War, obstacle relays, and Box Cricket. Getting executives and fresh graduates on the same turf breaks hierarchical silos faster than any boardroom presentation.

### Step 3: Adventure & Water Beats
After lunch and a short siesta in the indoor game lounge, our in-house DJ turns on the mist rain dance floor. It's often voted the highlight of the day by tech teams!

Contact our corporate manager directly at **+91 88611 38889** for customized group packages, invoicing, and dedicated facilitators.
    `
  },
  {
    id: "blog-3",
    title: "Day Outing vs Overnight Stay: Which Package Suits You Best?",
    slug: "day-outing-vs-overnight-stay-guide",
    excerpt: "Should you opt for the 10 AM to 6 PM day outing or sleep under the stars in a luxury teak cottage? Here is how to decide based on your group and schedule.",
    date: "August 28, 2026",
    author: "Guest Relations",
    category: "Stay & Outing",
    readTime: "4 min read",
    image: RESORT_IMAGES.cottage,
    tags: ["Resort Guide", "Day Outing", "Luxury Stay"],
    content: `
Both options at Teakwood Resort offer world-class hospitality, but each caters to a different travel desire.

### Choose Day Outing If:
- You have only Saturday or Sunday free and want to be back home for dinner.
- You are coordinating a corporate team or large family reunion with diverse evening commitments.
- You want full access to swimming, rain dance, buffets, and 20+ activities at an unbeatable starting rate of ₹1,199 per person.

### Choose Overnight Stay If:
- You crave quiet evenings by the campfire and wake up to morning mist and birdsong.
- You are celebrating an anniversary, birthday, or peaceful couple's retreat.
- You want to experience the exquisite craftsmanship of our solid teak villas with private verandas.
    `
  }
];

export const GALLERY_ITEMS: GalleryPhoto[] = [
  {
    id: "gal-deluxe-1",
    title: "Deluxe AC Room Suite & Lounge",
    category: "stay",
    image: "/assets/aistudio/Modern_Hotel_Room_with_Green_Accents_9f07946c.png",
    caption: "Spacious King-bed suite with split AC, leather couch, and designer ceiling lights."
  },
  {
    id: "gal-deluxe-2",
    title: "Deluxe AC Garden Balcony & TV Lounge",
    category: "stay",
    image: "/assets/aistudio/Warm_Modern_Hotel_Room_Retreat_b725664b.png",
    caption: "Sunlit retreat with flat-screen television and direct door to lush resort lawns."
  },
  {
    id: "gal-deluxe-3",
    title: "Deluxe AC Ensuite Beige Bathroom",
    category: "stay",
    image: "/assets/aistudio/Modern_Beige-Tiled_Bathroom_Interior_d05058be.png",
    caption: "Modern beige tiles, backlit illuminated LED mirror, and 24/7 hot rain shower."
  },
  {
    id: "gal-nonac-1",
    title: "Premium Non-AC Room Interior",
    category: "stay",
    image: "/assets/aistudio/Modern_Green-Accented_Hotel_Room_59370d5b.png",
    caption: "Timber flooring, ceiling fan, leaf wall motifs, and wardrobe setup."
  },
  {
    id: "gal-nonac-2",
    title: "Premium Non-AC Garden Retreat View",
    category: "stay",
    image: "/assets/aistudio/Warm_minimalist_hotel_room_with_garden_view_d53b8ab5.png",
    caption: "Warm minimalist countryside feel with breezy door opening to green lawns."
  },
  {
    id: "gal-nonac-3",
    title: "Premium Non-AC Marble Bathroom",
    category: "stay",
    image: "/assets/aistudio/Modern_Marble-Tiled_Bathroom_Retreat_aea1e01f.png",
    caption: "Deep blue-grey marble finish with modern geyser, rainfall shower, and vanity."
  },
  {
    id: "gal-family-1",
    title: "Family Dormitory Suite (4+ Beds)",
    category: "stay",
    image: "/assets/aistudio/Bright_Family_Dormitory_Room_with_Green_Accents_6b63aea5.png",
    caption: "Spacious layout with multiple large beds, red drapes, and wood flooring."
  },
  {
    id: "gal-family-2",
    title: "Family Room Lounge & Television",
    category: "stay",
    image: "/assets/aistudio/Warm_Green-Accented_Family_Dormitory_d84ba2f6.png",
    caption: "Warm timber room with wall-mounted TV, wardrobe, and green leaf art."
  },
  {
    id: "gal-family-3",
    title: "Family Suite Marble Ensuite Bathroom",
    category: "stay",
    image: "/assets/aistudio/Modern_Marble-Tiled_Bathroom_with_Plants_f9e4e30b.png",
    caption: "Designer marble-tiled bathroom with potted greenery, illuminated vanity, and modern fixtures."
  },
  {
    id: "gal-tent-1",
    title: "Night Garden Camping & Tent Stay",
    category: "stay",
    image: "/assets/aistudio/Night_Garden_Camping_Beside_a_Lit_House_683ebc69.png",
    caption: "Starlit camping tents pitched on manicured green lawns beside illuminated villas."
  },
  {
    id: "gal-pool-night",
    title: "Illuminated Resort Pool at Night",
    category: "pool",
    image: "/assets/aistudio/unnamed__1__5eb3d2b2.png",
    caption: "Resort swimming pool glowing under the night sky with illuminated teak trees."
  },
  {
    id: "gal-1",
    title: "Sunset over Teakwood Resort",
    category: "campus",
    image: RESORT_IMAGES.hero,
    caption: "Golden hour glow lighting up the pool and teakwood pavilions."
  },
  {
    id: "gal-2",
    title: "Executive Teak Villa Bedroom",
    category: "stay",
    image: RESORT_IMAGES.cottage,
    caption: "Warm natural teak paneling, king bed, and floor-to-ceiling garden views."
  },
  {
    id: "gal-3",
    title: "Crystal Swimming Pool Deck",
    category: "pool",
    image: RESORT_IMAGES.pool,
    caption: "Tropical swimming pool surrounded by lush flora and teak loungers."
  },
  {
    id: "gal-4",
    title: "Lawn Games & Adventure Course",
    category: "activities",
    image: RESORT_IMAGES.activities,
    caption: "Guests enjoying team building activities and treehouse rope bridges."
  },
  {
    id: "gal-5",
    title: "Teak Veranda Garden View",
    category: "stay",
    image: RESORT_IMAGES.cottage,
    caption: "Private sit-out overlooking tropical plant foliage and estate gardens."
  },
  {
    id: "gal-6",
    title: "Poolside Relaxation",
    category: "pool",
    image: RESORT_IMAGES.pool,
    caption: "Sun loungers with parasols for serene afternoons with fresh juices."
  },
  {
    id: "gal-7",
    title: "Adventure Rope Suspension Bridges",
    category: "activities",
    image: RESORT_IMAGES.activities,
    caption: "Canopy walks and Burma bridges tested with high-standard safety cables."
  },
  {
    id: "gal-8",
    title: "Eco Architecture in Nature",
    category: "campus",
    image: RESORT_IMAGES.hero,
    caption: "Harmonious balance between contemporary luxury and undisturbed greenery."
  }
];

export interface FAQItem {
  q: string;
  a: string;
  category: 'timings' | 'pets' | 'policies' | 'facilities';
}

export const FAQS: FAQItem[] = [
  // Check-In / Check-Out Timings
  {
    category: "timings",
    q: "What are the check-in and check-out timings for overnight stay?",
    a: "Check-in time is from 1:00 PM onwards, and check-out time is at 11:00 AM the following morning (as detailed in our official brochure). Early check-in or late check-out can be requested in advance and is accommodated subject to room availability."
  },
  {
    category: "timings",
    q: "What are the timings for Day Outing packages?",
    a: "Our Teak Pulse Package runs from 09:00 AM to 06:00 PM (includes our lavish South Indian breakfast buffet). Our Teak Venture Package runs from 10:00 AM to 06:00 PM (starts with chilled welcome drinks and lunch). Both packages include evening high-tea snacks and full activity access."
  },
  
  // Pet Friendliness
  {
    category: "pets",
    q: "Is Teakwood Resort pet-friendly? Can we bring our pets?",
    a: "Yes! Teakwood Resort is proudly pet-friendly. We warmly welcome vaccinated domestic pets in our dedicated outdoor greenery, walking trails, and selected private cottage accommodations with prior intimation during booking."
  },
  {
    category: "pets",
    q: "What are the pet guidelines and policies at the resort?",
    a: "To ensure comfort and hygiene for all guests: (1) Pets must be kept on a leash in common campus areas and garden lawns; (2) Pet parents are requested to carry their own pet food, bedding, and feeding bowls; (3) For pool hygiene and dining sanitation, pets are strictly not permitted inside the swimming pool or inside closed buffet dining halls; (4) Pet parents are responsible for cleaning up after their pets."
  },

  // Resort Policies & House Rules
  {
    category: "policies",
    q: "What is the dress code policy for the swimming pool and rain dance?",
    a: "Proper synthetic nylon or lycra swimwear is mandatory for entering the swimming pool and rain dance arena to protect water filtration systems and guest hygiene. Cotton t-shirts, jeans, and sarees are strictly prohibited. Swimwear is also available for purchase at the resort reception desk."
  },
  {
    category: "policies",
    q: "Are outside food, snacks, or outside catering permitted?",
    a: "Outside cooked food and commercial catering are strictly not permitted inside the resort. All our stay and day outing packages are all-inclusive, featuring grand multi-cuisine buffet spreads (Breakfast, Lunch, High-Tea snacks, and Dinner). Baby food, formula, and infant milk can be brought, and our kitchen staff will gladly assist with warming."
  },
  {
    category: "policies",
    q: "What is the resort's alcohol and smoking policy?",
    a: "Smoking is strictly restricted to designated open-air outdoor zones and is strictly prohibited inside cottages, deluxe rooms, and camping tents. Alcohol consumption is permitted in private accommodations in accordance with Karnataka state licensing laws; loud, disorderly, or disruptive conduct is strictly prohibited to maintain our serene family environment."
  },
  {
    category: "policies",
    q: "What are the campfire and night music hours?",
    a: "The evening campfire and acoustic music session takes place from 7:30 PM to 10:00 PM for overnight guests. In compliance with countryside eco-retreat peace guidelines, outdoor loud music ceases at 10:00 PM so all guests can enjoy peaceful sleep under the stars."
  },

  // Facilities, Corporate & Safety
  {
    category: "facilities",
    q: "Do you have a conference hall for corporate meetings and events?",
    a: "Yes! As featured in our brochure, Teakwood Resort has a spacious, fully air-conditioned Conference Hall suitable for corporate meetings, strategy sessions, AGMs, team awards, and private celebrations, equipped with projector and audiovisual capabilities."
  },
  {
    category: "facilities",
    q: "Are the adventure activities, Zipline, and Sky Cycle safe?",
    a: "Safety is our foremost commitment. All high-rope courses, Zipline, Sky Cycle, and wall climbing setups use certified safety harnesses, dual carabiners, and helmets, and are continuously managed by trained safety instructors."
  },
  {
    category: "facilities",
    q: "Are both Vegetarian and Non-Vegetarian food options available?",
    a: "Yes! All buffet meals feature expansive, clearly segregated spreads for both pure vegetarian and non-vegetarian guests. Special Jain or dietary requests can also be accommodated with prior notice during reservation."
  },
  {
    category: "facilities",
    q: "What is the cancellation or rescheduling policy?",
    a: "We offer hassle-free rescheduling or cancellation with full advance refund when informed at least 48 hours prior to your scheduled check-in. For large corporate bookings, please coordinate with your assigned event manager."
  }
];

export const PAGE_SUMMARIES = [
  {
    id: "stay",
    title: "Luxury Stay",
    kicker: "Villas & Cottages",
    description: "Stay in our handcrafted teak villas, garden cottages, or glamping tents. All-inclusive packages with 4 gourmet meals and full activity access.",
    actionText: "View Accommodations & Rates"
  },
  {
    id: "day-outing",
    title: "Day Outing",
    kicker: "Full Day Packages",
    description: "Recharge from 9:00 AM to 6:00 PM with welcome drinks, grand lunch buffet, evening high tea, pool, DJ rain dance, and rope adventures from ₹1,199.",
    actionText: "Explore Outing Packages"
  },
  {
    id: "activities",
    title: "25+ Resort Activities",
    kicker: "Thrill & Relaxation",
    description: "Zipline, Burma bridge, cricket turf, snooker lounge, rain dance with DJ, and kids park. Designed for all ages and corporate team bonding.",
    actionText: "Discover All Activities"
  },
  {
    id: "gallery",
    title: "Visual Gallery",
    kicker: "Photo Tour",
    description: "Take a peek into our serene teakwood canopy, crystal pool deck, luxury interiors, and guest celebrations before you arrive.",
    actionText: "Browse Photo Gallery"
  },
  {
    id: "blogs",
    title: "Travel & Event Stories",
    kicker: "Guides & Tips",
    description: "Practical guides on planning the best weekend trips near Bangalore, team building dynamics, and eco-retreat wellness.",
    actionText: "Read Travel Articles"
  },
  {
    id: "about-us",
    title: "Our Story & Sanctuary",
    kicker: "Eco-Conscious Retreat",
    description: "Learn how we preserved hundreds of mature teak trees in Dasanapura Hobli to craft a tranquil, sustainable haven.",
    actionText: "Learn About Teakwood"
  },
  {
    id: "contact-us",
    title: "Get in Touch & Visit",
    kicker: "Direct Reservations",
    description: "Call +91 88611 38889 or view step-by-step route directions from Yeshwanthpur and Bangalore city center.",
    actionText: "Contact & Directions"
  }
];
