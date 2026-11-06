export type PageId = 
  | 'home' 
  | 'activities' 
  | 'stay' 
  | 'day-outing' 
  | 'gallery' 
  | 'blogs' 
  | 'about-us' 
  | 'contact-us';

export interface AccommodationType {
  id: string;
  name: string;
  badge?: string;
  tagline: string;
  pricePerPerson: number;
  originalPrice?: number;
  taxNote: string;
  capacity: string;
  bedType: string;
  roomSize: string;
  checkIn: string;
  checkOut: string;
  image: string;
  images?: string[];
  description: string;
  amenities: string[];
  mealsIncluded: string[];
  features: string[];
  popular?: boolean;
}

export interface DayOutingPackage {
  id: string;
  title: string;
  timing: string;
  pricePerPerson: number;
  taxNote: string;
  badge?: string;
  description: string;
  mealsIncluded: string[];
  keyInclusions: string[];
  activitiesIncluded: string[];
  recommendedFor: string;
  popular?: boolean;
}

export interface ActivityItem {
  id: string;
  title: string;
  category: 'adventure' | 'water' | 'outdoor' | 'indoor' | 'evening';
  description: string;
  suitableFor: string;
  safetyLevel: string;
  highlight?: string;
}

export interface TestimonialItem {
  id: string;
  guestName: string;
  roleOrLocation: string;
  rating: number;
  date: string;
  occasion: 'Corporate Outing' | 'Family Weekend' | 'Friends Reunion' | 'Couples Retreat';
  comment: string;
  verified: boolean;
}

export interface BlogItem {
  id: string;
  title: string;
  slug: string;
  excerpt: string;
  content: string;
  category: string;
  readTime: string;
  date: string;
  author: string;
  image: string;
  tags: string[];
}

export interface GalleryPhoto {
  id: string;
  title: string;
  category: 'all' | 'stay' | 'pool' | 'activities' | 'dining' | 'campus';
  image: string;
  caption: string;
}

export interface BookingInquiry {
  bookingType: 'stay' | 'day-outing';
  packageOrRoomId: string;
  guestName: string;
  phone: string;
  email?: string;
  checkInDate: string;
  checkOutDate?: string;
  adultsCount: number;
  childrenCount: number;
  specialRequests?: string;
}
