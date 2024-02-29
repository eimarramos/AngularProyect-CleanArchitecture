import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import {MatSelectModule} from '@angular/material/select';
import {MatInputModule} from '@angular/material/input';
import {MatFormFieldModule} from '@angular/material/form-field';
import { Category } from 'src/app/models';
import { Categories } from 'src/app/data';

@Component({
  selector: 'app-truck-component-form',
  standalone: true,
  imports: [CommonModule, MatSelectModule, MatInputModule, MatFormFieldModule],
  templateUrl: './truck-component-form.component.html',
  styleUrls: ['./truck-component-form.component.scss']
})
export class TruckComponentFormComponent implements OnInit{

  categories: Category[];
  constructor(){
    this.categories = Categories;
  }

  ngOnInit(): void {
  }
}
