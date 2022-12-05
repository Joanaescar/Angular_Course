import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { Recipe } from '../recipe.model';

@Component({
  selector: 'app-recipe-list',
  templateUrl: './recipe-list.component.html',
  styleUrls: ['./recipe-list.component.css']
})
export class RecipeListComponent implements OnInit {
  recipes: Recipe[] = [
    new Recipe('A test recipe', 'This is a simply a test', 'https://assets.hellofresh.com/us/cms/plans/VeggieJumble-Recipe-700x700.png'),
    new Recipe('Another test recipe', 'This is a simply a test', 'https://assets.hellofresh.com/us/cms/plans/VeggieJumble-Recipe-700x700.png')
  ];

  @Output() recipeWasSelected: EventEmitter<Recipe> = new EventEmitter();

  constructor() { }
  ngOnInit(): void {

  }

  onRecipeSelected(recipe: Recipe) {
    this.recipeWasSelected.emit(recipe);
  }
}
