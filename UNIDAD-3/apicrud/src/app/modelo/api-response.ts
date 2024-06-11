import { Response } from "./response";
import { Empleado } from "./empleado";

export class ApiResponse implements Response {
    page!: number;
    per_page!: number;
    total!: number;
    total_pages!: number;
    data!: Empleado[];

    constructor() {
        this.page = 0;
        this.per_page = 0;
        this.total = 0;
        this.total_pages = 0;
        this.data = [{
            id: 0,
            email: "string",
            first_name: "string",
            last_name: "string",
            avatar: "strin"
        }];
    }

}