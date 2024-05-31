import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class LocalstorageService {

  constructor() { }
  setItem(key: string, value: string | null): void {
    localStorage.setItem(key, String(value));
  }

  getItem(key: string): string | null {
    return localStorage.getItem(key);
  }

  removeItem(key: string): void {
    localStorage.removeItem(key);
  }

  updateItem(key: string, value: string |null): void {
    this.setItem(key, value);
  }

  clear(): void {
    localStorage.clear();
  }

}
