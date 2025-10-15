export interface Room {
  id: string;
  created_at: string;
  name: string ;
  slug: string;
  capacity: number ;
  size: number | null;
  price: number ;
  discount: number | null;
  available: boolean | null;
  thumbnail: string;
  images: string[];
  description: string | null;
  long_description: string;
  deleted_at: string | null;
}

export interface Reservation {
  id: number;
  room_id: number;
  guest_id: string;
  guests_count: number;
  reserved_price: number;
  status: 'confirmed' | 'unconfirmed' | 'canceled' | 'finished';
  start_date: string;
  end_date: string;
  created_at: string;
  rooms: Room;
  message?: string;
  stripe_session_id?: string;
}

export interface Guest {
  id: string;
  fullname: string;
  email: string;
  phone: string;
  nationality: string;
  countryFlag: string;
  nationalID?: string;
  avatar?: string;
}

export type ApiResult<T> = 
  | { data: T; error: null }
  | { data: null; error: { message: string } };
