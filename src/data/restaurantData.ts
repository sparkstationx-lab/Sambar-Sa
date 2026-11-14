import heroDosaImg from '../assets/images/hero_benne_dosa_1794673830520.jpg';
import benneMasalaImg from '../assets/images/specialty_benne_masala_1794673830769.jpg';
import rawaMasalaImg from '../assets/images/specialty_rawa_masala_1794673831888.jpg';
import idliWadaiImg from '../assets/images/specialty_idli_wadai_1794673832248.jpg';
import uttapamImg from '../assets/images/specialty_uttapam_1794674292013.jpg';
import storyInteriorImg from '../assets/images/story_interior_1794673833465.jpg';
import galleryAmbienceImg from '../assets/images/gallery_dining_ambience_1794673834390.jpg';
import galleryUttapamRiceImg from '../assets/images/gallery_traditional_rice_uttapam_1794673834498.jpg';
import galleryMalabariBeveragesImg from '../assets/images/gallery_malabari_beverages_1794673834308.jpg';

export const RESTAURANT_INFO = {
  name: 'SambharSa',
  address:
    '5, DRDE Road, Jhansi Road, Opp. Food Corporation of India Godown, Gwalior, Madhya Pradesh 474002, India.',
  shortAddress: '5, DRDE Road, Jhansi Road, Gwalior, MP 474002',
  phoneDisplay: '+91 86302 33721',
  phoneHref: 'tel:+918630233721',
  whatsappNumber: '918630233721',
  whatsappHref:
    'https://wa.me/918630233721?text=Hello%20SambharSa%2C%20I%20would%20like%20to%20get%20in%20touch.',
  googleMapsUrl:
    'https://www.google.com/maps/search/?api=1&query=SambharSa+5+DRDE+Road+Jhansi+Road+Opp+Food+Corporation+of+India+Godown+Gwalior+Madhya+Pradesh+474002',
  googleMapsEmbedUrl:
    'https://maps.google.com/maps?q=5%2C%20DRDE%20Road%2C%20Jhansi%20Road%2C%20Gwalior%2C%20Madhya%20Pradesh%20474002&t=&z=15&ie=UTF8&iwloc=&output=embed',
  rating: '4.7/5',
  reviewCount: 669,
};

export const IMAGES = {
  heroDosa: heroDosaImg,
  storyInterior: storyInteriorImg,
};

export interface FeaturedDish {
  id: string;
  name: string;
  price: number;
  description: string;
  image: string;
  alt: string;
}

export const SIGNATURE_SPECIALTIES: FeaturedDish[] = [
  {
    id: 'benne-masala-dosa',
    name: 'Benne Masala Dosa',
    price: 250,
    description:
      'Richly butter-roasted to a crisp golden finish and folded over spiced potato masala, served with traditional sambhar and chutneys.',
    image: benneMasalaImg,
    alt: 'Crispy golden Benne Masala Dosa served with sambhar and coconut chutney',
  },
  {
    id: 'rawa-masala-dosa',
    name: 'Rawa Masala Dosa',
    price: 280,
    description:
      'Delicate lacy semolina crepe roasted with subtle spices until crisp, paired with comforting potato masala and fresh accompaniments.',
    image: rawaMasalaImg,
    alt: 'Lacy golden Rawa Masala Dosa served on stoneware with sambhar and chutneys',
  },
  {
    id: 'idli-wadai-mix',
    name: 'Idli Wadai Mix',
    price: 170,
    description:
      'Soft, pillowy steamed idlis served alongside a crisp golden medu wada, accompanied by steaming aromatic sambhar and chutney.',
    image: idliWadaiImg,
    alt: 'Steamed South Indian idlis and crispy medu wada on a banana leaf with sambhar',
  },
  {
    id: 'onion-tomato-uttapam',
    name: 'Onion Tomato Uttapam',
    price: 220,
    description:
      'Golden thick lentil-and-rice griddle cake topped with caramelized onions, ripe tomatoes, and fresh coriander, served with sambhar and chutney.',
    image: uttapamImg,
    alt: 'Golden Onion Tomato Uttapam topped with onions, tomatoes, and coriander alongside sambhar and chutney',
  },
];

export interface GalleryPhoto {
  id: string;
  title: string;
  category: string;
  image: string;
  alt: string;
}

export const GALLERY_PHOTOS: GalleryPhoto[] = [
  {
    id: 'gallery-benne',
    title: 'Benne Masala Dosa',
    category: 'Signature Dosas',
    image: benneMasalaImg,
    alt: 'Signature Benne Masala Dosa plated with brass sambhar bowl and coconut chutney',
  },
  {
    id: 'gallery-ambience',
    title: 'Warm Dining Room',
    category: 'Dining Ambience',
    image: galleryAmbienceImg,
    alt: 'Intimate teak dining table set with brass tableware and warm sunlit window',
  },
  {
    id: 'gallery-uttapam-rice',
    title: 'Uttapam & Lemon Rice',
    category: 'Traditional Classics',
    image: galleryUttapamRiceImg,
    alt: 'Onion Tomato Uttapam and tempered Lemon Rice in stoneware and brass bowls',
  },
  {
    id: 'gallery-rawa',
    title: 'Rawa Masala Dosa',
    category: 'Signature Dosas',
    image: rawaMasalaImg,
    alt: 'Crisp lacy Rawa Masala Dosa served with fresh chutneys and sambhar',
  },
  {
    id: 'gallery-malabari-chaas',
    title: 'Malabari Parantha & Tadka Pudina Chaas',
    category: 'Food Presentation',
    image: galleryMalabariBeveragesImg,
    alt: 'Flaky Malabari Parantha with vegetable kurma and chilled Tadka Pudina Chaas',
  },
  {
    id: 'gallery-idli-wada',
    title: 'Idli Wadai Mix',
    category: 'Traditional Classics',
    image: idliWadaiImg,
    alt: 'Fresh steamed idlis and crisp medu wada served on a banana leaf',
  },
];

export interface CustomerReview {
  id: string;
  quote: string;
}

export const CUSTOMER_REVIEWS: CustomerReview[] = [
  {
    id: 'review-1',
    quote:
      'The idli and vada were fresh, soft, and well-prepared. What truly stood out was the sambar.',
  },
  {
    id: 'review-2',
    quote: 'Good food and service specially Sambhar and free Rasam.',
  },
  {
    id: 'review-3',
    quote: 'Awesome place and awesome food. Great vibe and ample parking.',
  },
];
