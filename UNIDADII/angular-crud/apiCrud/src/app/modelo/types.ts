export interface EmpleadoInterface {
  id: number;
  email: string;
  first_name: string;
  last_name: string;
  avatar: string;
}

export interface ResponseInterface {
  page: number;
  per_page: number;
  total: number;
  total_pages: number;
  data: EmpleadoInterface[];
}
