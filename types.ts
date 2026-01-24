
export interface AuctionItem {
  id: string;
  title: string;
  category: string;
  imageUrl: string;
  thumbnails?: string[];
  currentBid: number;
  startingPrice?: number;
  bidIncrement?: number;
  endTime: Date;
  bidCount: number;
  status: 'live' | 'upcoming' | 'ended';
  description?: string;
  descriptionNepali?: string;
  provenance?: string;
  dimensions?: string;
  materials?: string;
  condition?: string;
  location?: string;
  seller?: {
    name: string;
    rating: number;
    totalTransactions: number;
    verified: boolean;
    avatar: string;
  };
}

export interface Category {
  name: string;
  icon: string;
  imageUrl: string;
  count: number;
}

export interface Testimonial {
  id: string;
  name: string;
  role: string;
  quote: string;
  avatar: string;
}

export interface BidEntry {
  bidderId: string;
  amount: number;
  time: string;
}

export interface QuestionEntry {
  user: string;
  question: string;
  answer?: string;
  date: string;
}
