import { Empleado } from './empleado';

export class Response {
  page!: number;
  per_page!: number;
  total!: number;
  total_pages!: number;
  data!: Empleado[];
}
