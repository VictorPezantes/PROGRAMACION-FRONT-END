import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { CommonModule, FormStyle } from '@angular/common';


@Component({
  selector: 'app-switch',
  standalone: true,
  imports: [FormsModule, CommonModule],
  templateUrl: './switch.component.html',
  styleUrl: './switch.component.css'
})
export class SwitchComponent {
  userType:string="normal";
}
