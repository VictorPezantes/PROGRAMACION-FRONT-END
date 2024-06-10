export interface EmpleadoInterface {
  id: number;
  email: string;
  first_name: string;
  last_name: string;
  avatar: string;
}

export interface ID extends Pick<EmpleadoInterface, 'id'> {}


export interface ResponseInterface {
  page: number;
  per_page: number;
  total: number;
  total_pages: number;
  data: EmpleadoInterface[];
}

export interface RootObject {
  data: EmpleadoInterface;
  support: Support;
}
interface Support {
  url: string;
  text: string;
}
