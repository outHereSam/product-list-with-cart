interface Image {
  thumbnail: string;
  mobile: string;
  tablet: string;
  desktop: string;
}

export interface Dessert {
  id: string;
  image: Image;
  name: string;
  category: string;
  price: number;
}
