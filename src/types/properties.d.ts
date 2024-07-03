export type Location = {
  street: string;
  city: string;
  state: string;
  zipcode: string;
};

export type SellerInfo = {
  name: string;
  email: string;
  phone: string;
};

export type Rates = {
  nightly?: number;
  weekly?: number;
  monthly?: number;
};

type PropertyType = 'Apartment' | 'Studio' | 'House' | 'Chalet' | 'Condo' | 'Cottage Or Cabin' | 'Loft';


export type Property = {
  _id: string;
  owner: string;
  name: string;
  type:PropertyType;
  description: string;
  location: Location;
  beds: number;
  baths: number;
  square_feet: number;
  amenities: string[];
  rates: Rates;
  seller_info: SellerInfo;
  images: string[];
  isFeatured: boolean;
  createdAt: string;
  updatedAt: string;
};
