import { Component, EventEmitter, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-filters',
  templateUrl: './filters.component.html',
  styleUrls: ['./filters.component.css']
})
export class FiltersComponent implements OnInit{
  @Output() onCategoryChanged = new EventEmitter<string>();
  categories = ["shoes", 'socks', 'gloves']

  constructor() {}

  ngOnInit(): void {
    
  }

  showCategory(selectedCategory: string): void {
    this.onCategoryChanged.emit(selectedCategory);
  } 
}
