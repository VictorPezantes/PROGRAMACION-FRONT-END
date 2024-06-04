export interface Producto{
    name: string,
    price:number,
    color: string,
    size: string,
    type: string,
    manufacture: string
}

export interface Personaje {
    id: number;
    name: string;
    status: string;
    species: string;
    type: string;
    gender: string;
    origin: Origin;
    location: Origin;
    image: string;
    episode: string[];
    url: string;
    created: string;
  }
  interface Origin {
    name: string;
    url: string;
  }


  export interface Products {
    id: number;
    title: string;
    price: number;
    description: string;
    category: string;
    image: string;
    rating: Rating;
  }
  interface Rating {
    rate: number;
    count: number;
  }