export interface Product {
  id: string;
  name: string;
  price: number;
  rating: number;
  reviews: number;
  image: string;
  category: string;
  specs: {
    [key: string]: string;
  };
  description: string;
  inStock: boolean;
  brand?: string;
  cameraType?: 'Dome' | 'Bullet' | 'PTZ' | 'Wireless' | 'CCTV Kit' | 'DVR / NVR';
  resolution?: '2MP' | '4MP' | '5MP' | '8MP';
  indoorOutdoor?: 'Indoor' | 'Outdoor' | 'Both';
  shortDescription?: string;
  stock?: number;
  galleryImages?: string[];
}

export interface ProductFormData {
  name: string;
  price: string;
  category: string;
  brand: string;
  cameraType: string;
  resolution: string;
  indoorOutdoor: string;
  shortDescription: string;
  description: string;
  stock: string;
  mainImage: string;
  imageUrl: string;
  galleryImages: string[];
}

export interface Service {
  id: string;
  name: string;
  description: string;
  icon: string;
  price?: number;
}

export interface Category {
  id: string;
  name: string;
  icon: string;
  image: string;
}

export interface CartItem {
  productId: string;
  quantity: number;
  product?: Product;
}

export interface Order {
  id: string;
  customerId: string;
  items: CartItem[];
  total: number;
  status: 'pending' | 'processing' | 'shipped' | 'delivered';
  createdAt: string;
  deliveryInfo: {
    address: string;
    city: string;
    zipCode: string;
    phone: string;
  };
}

export interface User {
  id: string;
  email: string;
  name: string;
  role: 'customer' | 'admin';
  savedAddresses?: {
    address: string;
    city: string;
    zipCode: string;
    isDefault: boolean;
  }[];
  createdAt: string;
}
