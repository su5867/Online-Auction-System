
import React from 'react';
import { AuctionItem, Category, Testimonial } from './types';
import { 
  Palette, 
  Gem, 
  Watch, 
  Car, 
  Home, 
  Sparkles 
} from 'lucide-react';

export const DETAILED_ITEM: AuctionItem = {
  id: 'ELITE-2024-0125',
  title: 'Rare 19th Century Nepali Paubha Painting',
  category: 'Nepali Art & Antiquities',
  imageUrl: 'https://images.unsplash.com/photo-1578301978693-85fa9c0320b9?auto=format&fit=crop&q=80&w=1200',
  thumbnails: [
    'https://images.unsplash.com/photo-1578301978693-85fa9c0320b9?auto=format&fit=crop&q=80&w=400',
    'https://images.unsplash.com/photo-1582555172866-f73bb12a2ab3?auto=format&fit=crop&q=80&w=400',
    'https://images.unsplash.com/photo-1579783902614-a3fb3927b6a5?auto=format&fit=crop&q=80&w=400',
    'https://images.unsplash.com/photo-1549490349-8643362247b5?auto=format&fit=crop&q=80&w=400',
    'https://images.unsplash.com/photo-1605721911519-3dfeb3be25e7?auto=format&fit=crop&q=80&w=400'
  ],
  currentBid: 850000,
  startingPrice: 500000,
  bidIncrement: 10000,
  endTime: new Date(Date.now() + 1000 * 60 * 60 * 48), // 48 hours away
  bidCount: 24,
  status: 'live',
  location: 'Bhairahawa, Rupandehi, Nepal',
  description: 'A masterfully executed Paubha painting from the late 19th century depicting the Vajrayogini. This piece features intricate gold leaf work and traditional mineral pigments on hand-prepared cotton canvas.',
  descriptionNepali: '१९ औं शताब्दीको अन्त्यतिरको उत्कृष्ट पौभा चित्रकला, जसमा वज्रयोगिनीको चित्रण गरिएको छ। यस कलाकृतिमा सुनको जलप र परम्परागत खनिज रङ्गहरूको प्रयोग गरिएको छ।',
  provenance: 'From a private family collection in Lumbini, passed down through three generations.',
  dimensions: '72cm x 54cm',
  materials: 'Mineral Pigments, Gold Leaf on Cotton',
  condition: 'Excellent Antique Condition - minor edge wear consistent with age.',
  seller: {
    name: 'Heritage Galleries Nepal',
    rating: 4.8,
    totalTransactions: 124,
    verified: true,
    avatar: 'https://i.pravatar.cc/150?u=heritage'
  }
};

export const LIVE_AUCTIONS: AuctionItem[] = [
  {
    id: '1',
    title: '1963 Ferrari 250 GTO Heritage Edition',
    category: 'Cars',
    imageUrl: 'https://images.unsplash.com/photo-1592198084033-aade902d1aae?auto=format&fit=crop&q=80&w=800',
    currentBid: 12500000,
    endTime: new Date(Date.now() + 1000 * 60 * 60 * 2),
    bidCount: 42,
    status: 'live'
  },
  {
    id: '2',
    title: 'Patek Philippe Nautilus 5711 Blue Dial',
    category: 'Watches',
    imageUrl: 'https://images.unsplash.com/photo-1614164185128-e4ec99c436d7?auto=format&fit=crop&q=80&w=800',
    currentBid: 185000,
    endTime: new Date(Date.now() + 1000 * 60 * 60 * 1.5),
    bidCount: 18,
    status: 'live'
  },
  {
    id: '3',
    title: 'Blue Nile 15ct Radiant Cut Diamond',
    category: 'Jewelry',
    imageUrl: 'https://images.unsplash.com/photo-1599643477877-530eb83abc8e?auto=format&fit=crop&q=80&w=800',
    currentBid: 2400000,
    endTime: new Date(Date.now() + 1000 * 60 * 60 * 4),
    bidCount: 12,
    status: 'live'
  }
];

export const UPCOMING_AUCTIONS: AuctionItem[] = [
  {
    id: '4',
    title: 'Contemporary Abstract: Crimson Tide',
    category: 'Art',
    imageUrl: 'https://images.unsplash.com/photo-1579783902614-a3fb3927b6a5?auto=format&fit=crop&q=80&w=800',
    currentBid: 0,
    startingPrice: 45000,
    endTime: new Date(Date.now() + 1000 * 60 * 60 * 24 * 3),
    bidCount: 0,
    status: 'upcoming'
  },
  {
    id: '5',
    title: 'Estate Villa: French Riviera Coastline',
    category: 'Real Estate',
    imageUrl: 'https://images.unsplash.com/photo-1512917774080-9991f1c4c750?auto=format&fit=crop&q=80&w=800',
    currentBid: 0,
    startingPrice: 8900000,
    endTime: new Date(Date.now() + 1000 * 60 * 60 * 24 * 7),
    bidCount: 0,
    status: 'upcoming'
  },
  {
    id: '6',
    title: 'Vintage Champagne Collection 1945',
    category: 'Collectibles',
    imageUrl: 'https://images.unsplash.com/photo-1594498653385-d5172c532c00?auto=format&fit=crop&q=80&w=800',
    currentBid: 0,
    startingPrice: 12000,
    endTime: new Date(Date.now() + 1000 * 60 * 60 * 24 * 1),
    bidCount: 0,
    status: 'upcoming'
  }
];

export const CATEGORIES: Category[] = [
  { name: 'Art', icon: 'Palette', imageUrl: 'https://images.unsplash.com/photo-1579783902614-a3fb3927b6a5', count: 124 },
  { name: 'Jewelry', icon: 'Gem', imageUrl: 'https://images.unsplash.com/photo-1599643477877-530eb83abc8e', count: 85 },
  { name: 'Watches', icon: 'Watch', imageUrl: 'https://images.unsplash.com/photo-1614164185128-e4ec99c436d7', count: 42 },
  { name: 'Cars', icon: 'Car', imageUrl: 'https://images.unsplash.com/photo-1592198084033-aade902d1aae', count: 18 },
  { name: 'Real Estate', icon: 'Home', imageUrl: 'https://images.unsplash.com/photo-1512917774080-9991f1c4c750', count: 12 },
  { name: 'Collectibles', icon: 'Sparkles', imageUrl: 'https://images.unsplash.com/photo-1594498653385-d5172c532c00', count: 210 }
];

export const TESTIMONIALS: Testimonial[] = [
  {
    id: '1',
    name: 'Alexander Vanderbilt',
    role: 'Private Collector',
    quote: "Elite Auctions provides a level of security and discretion that is unmatched in the digital space. I've acquired three pieces this year, all seamless.",
    avatar: 'https://i.pravatar.cc/150?u=vanderbilt'
  },
  {
    id: '2',
    name: 'Eleanor Sterling',
    role: 'Art Consultant',
    quote: "The interface is beautiful and the provenance documentation provided for every item gives my clients absolute peace of mind.",
    avatar: 'https://i.pravatar.cc/150?u=sterling'
  }
];

export const PARTNERS = [
  'Forbes', 'Robb Report', 'Vogue', 'The Wall Street Journal', 'Financial Times'
];
