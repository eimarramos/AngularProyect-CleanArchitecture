import { Component, OnInit } from '@angular/core';
import {MatSelectModule} from '@angular/material/select';
import {MatInputModule} from '@angular/material/input';
import {MatFormFieldModule} from '@angular/material/form-field';

@Component({
  selector: 'app-truck-component-form',
  standalone: true,
  imports: [MatSelectModule, MatInputModule, MatFormFieldModule],
  templateUrl: './truck-component-form.component.html',
  styleUrls: ['./truck-component-form.component.scss']
})
export class TruckComponentFormComponent implements OnInit{
  ngOnInit(): void {
    
  }
}
