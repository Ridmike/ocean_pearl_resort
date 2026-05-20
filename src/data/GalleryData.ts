export type GalleryCategory = 'ALL' | 'ROOMS' | 'DINING' | 'SPA' | 'EXTERIOR' | 'OTHER';

export const GALLERY_DATA = [
  {
    id: 1,
    category: 'EXTERIOR' as GalleryCategory,
    image: 'https://images.unsplash.com/photo-1542314831-068cd1dbfeeb?q=80&w=2070&auto=format&fit=crop',
    title: 'Main Entrance'
  },
  {
    id: 2,
    category: 'ROOMS' as GalleryCategory,
    image: 'https://images.unsplash.com/photo-1566073771259-6a8506099945?q=80&w=2070&auto=format&fit=crop',
    title: 'Deluxe Suite'
  },
  {
    id: 3,
    category: 'DINING' as GalleryCategory,
    image: 'https://images.unsplash.com/photo-1552566626-52f8b828add9?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTl8fHJlc3RhdXJhbnR8ZW58MHx8MHx8fDA%3D',
    title: 'Signature Restaurant'
  },
  {
    id: 4,
    category: 'SPA' as GalleryCategory,
    image: 'https://images.unsplash.com/photo-1776763018829-ad685e621871?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8aG90ZWxzJTIwc3BhfGVufDB8fDB8fHww',
    title: 'Zen Spa'
  },
  {
    id: 5,
    category: 'EXTERIOR' as GalleryCategory,
    image: 'https://images.unsplash.com/photo-1576013551627-0cc20b96c2a7?q=80&w=2070&auto=format&fit=crop',
    title: 'Infinity Pool'
  },
  {
    id: 6,
    category: 'ROOMS' as GalleryCategory,
    image: 'https://media.istockphoto.com/id/2187865855/photo/modern-style-comfortable-white-living-room-with-open-the-door-to-see-the-sea-view-3d-render.webp?a=1&b=1&s=612x612&w=0&k=20&c=vwLu3i6K-_-IQ1j7p7mvMMPYl3Y87FNskzjTLGhOHXg=',
    title: 'Ocean View Room'
  },
  {
    id: 7,
    category: 'DINING' as GalleryCategory,
    image: 'https://images.unsplash.com/photo-1554118811-1e0d58224f24?q=80&w=2047&auto=format&fit=crop',
    title: 'Garden Cafe'
  },
  {
    id: 8,
    category: 'SPA' as GalleryCategory,
    image: 'https://images.unsplash.com/photo-1519741497674-611481863552?q=80&w=2070&auto=format&fit=crop',
    title: 'Yoga Pavilion'
  },
  {
    id: 9,
    category: 'EXTERIOR' as GalleryCategory,
    image: 'https://images.unsplash.com/photo-1520250497591-112f2f40a3f4?q=80&w=2070&auto=format&fit=crop',
    title: 'Beach Access'
  },
  {
    id: 10,
    category: 'OTHER' as GalleryCategory,
    image: 'https://images.unsplash.com/photo-1551836022-d5d88e9218df?q=80&w=2070&auto=format&fit=crop',
    title: 'Event Space'
  }
];
