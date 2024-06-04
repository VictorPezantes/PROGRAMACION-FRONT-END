import { Component, OnInit } from '@angular/core';
import { Products } from '../../../../../types';
import { ApirestService } from '../../../servicio/api/apirest.service';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-nosotros',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './nosotros.component.html',
  styleUrl: './nosotros.component.css',
})
export class NosotrosComponent implements OnInit {
  apiProducts: Products[] = [];
  filteredProducts: Products[] = [];

  search = '';
  price = 0;
  constructor(private productService: ApirestService) {}

  ngOnInit(): void {
    this.getProducts();
  }

  getProducts() {
    this.productService.getProductsApi().subscribe((data) => {
      this.apiProducts = data;
      this.filteredProducts = data;
    });
  }

  searchProducts() {
    this.filteredProducts = this.apiProducts.filter(
      (products) =>
        products.title.toLowerCase().includes(this.search.toLowerCase()) &&
        products.price >= this.price
    );
  }
}
