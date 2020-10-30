import { Component, OnInit } from '@angular/core';
import { Recipe } from '../recipe-book.model';
@Component({
  selector: 'app-recipe-list',
  templateUrl: './recipe-list.component.html',
  styleUrls: ['./recipe-list.component.css'],
})
export class RecipeListComponent implements OnInit {
  recipes: Recipe[] = [
    new Recipe(
      'Test Recipe1',
      'Test Desc1',
      'https://cdn.loveandlemons.com/wp-content/uploads/2020/03/pantry-recipes-1.jpg'
    ),
    new Recipe(
      'Test Recipe2',
      'Test Desc2',
      'https://cdn.loveandlemons.com/wp-content/uploads/2020/03/pantry-recipes-2.jpg'
    ),
  ];
  constructor() {}

  ngOnInit(): void {}
}
