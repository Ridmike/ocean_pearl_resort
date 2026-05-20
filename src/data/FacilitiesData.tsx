import { Waves, Utensils, Dumbbell, Sparkles, Coffee, Car, Wifi, ShieldCheck } from 'lucide-react';

export const FACILITIES_DATA = [
  {
    id: 1,
    title: "Infinity Pool",
    description: "Experience breathtaking views of the ocean while swimming in our temperature-controlled infinity pool. Features a shallow area for children and a poolside bar.",
    icon: <Waves className="w-8 h-8" />,
    image: "https://images.unsplash.com/photo-1576013551627-0cc20b96c2a7?q=80&w=2070&auto=format&fit=crop",
    features: ["Temperature Controlled", "Poolside Bar", "Ocean View", "Towel Service"]
  },
  {
    id: 2,
    title: "Fine Dining",
    description: "Our world-class chefs prepare exquisite international and local cuisines using fresh, organic ingredients. Enjoy an unforgettable culinary journey.",
    icon: <Utensils className="w-8 h-8" />,
    image: "https://images.unsplash.com/photo-1550966841-3ee5ad60d0d8?q=80&w=2070&auto=format&fit=crop",
    features: ["Michelin Star Chef", "Organic Ingredients", "Wine Cellar", "Private Dining"]
  },
  {
    id: 3,
    title: "Luxury Spa & Wellness",
    description: "Rejuvenate your mind, body, and soul at our award-winning spa. We offer a wide range of therapeutic treatments and traditional wellness rituals.",
    icon: <Sparkles className="w-8 h-8" />,
    image: "https://images.unsplash.com/photo-1544161515-4ae6ce6ea858?q=80&w=2070&auto=format&fit=crop",
    features: ["Sauna & Steam", "Massage Therapy", "Ayurvedic Treatments", "Beauty Salon"]
  },
  {
    id: 4,
    title: "State-of-the-Art Gym",
    description: "Maintain your fitness routine in our fully equipped gym featuring modern cardio machines, free weights, and personal training services.",
    icon: <Dumbbell className="w-8 h-8" />,
    image: "https://images.unsplash.com/photo-1534438327276-14e5300c3a48?q=80&w=2070&auto=format&fit=crop",
    features: ["Cardio Zone", "Free Weights", "Personal Trainers", "Yoga Studio"]
  },
  {
    id: 5,
    title: "Artisanal Coffee Shop",
    description: "Relax with a freshly brewed cup of premium coffee and gourmet pastries in our cozy lounge area overlooking the gardens.",
    icon: <Coffee className="w-8 h-8" />,
    image: "https://images.unsplash.com/photo-1554118811-1e0d58224f24?q=80&w=2047&auto=format&fit=crop",
    features: ["Premium Beans", "Gourmet Pastries", "Outdoor Seating", "Free Wi-Fi"]
  },
  {
    id: 6,
    title: "Valet & Transportation",
    description: "Complimentary valet parking and luxury chauffeur services available for your convenience and travel needs around the city.",
    icon: <Car className="w-8 h-8" />,
    image: "https://images.unsplash.com/photo-1549317661-bd32c8ce0db2?q=80&w=2070&auto=format&fit=crop",
    features: ["24/7 Valet", "Chauffeur Service", "Airport Transfer", "Secure Parking"]
  }
];

export const GENERAL_AMENITIES = [
  { icon: <Wifi size={20} />, label: "High-Speed Wi-Fi" },
  { icon: <ShieldCheck size={20} />, label: "24/7 Security" },
  { icon: <Car size={20} />, label: "Free Parking" },
  { icon: <Coffee size={20} />, label: "Mini Bar" }
];
