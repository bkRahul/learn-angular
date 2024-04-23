import { Component } from '@angular/core';
import { Recipe } from './recipe-item/recipe-item.model';

@Component({
  selector: 'recipe-list',
  templateUrl: './recipe-list.component.html',
  styleUrl: './recipe-list.component.css',
})
export class RecipeList {
  public recipes: Recipe[] = [
    new Recipe(
      'test recipe',
      'testing',
      'https://assets-global.website-files.com/61003f4656f6038c84c4b0dd/61080ac61d4af91f80d370ff_desserts-1-recipes-x-webflow-template-brix-templates-p-800.jpeg'
    ),
    new Recipe(
      'test recipe',
      'testing',
      'https://assets-global.website-files.com/61003f4656f6038c84c4b0dd/61080ab01216ecf64ee5a17d_breakfast-1-recipes-x-webflow-template-brix-templates-p-800.jpeg'
    ),
    new Recipe(
      'test recipe',
      'testing',
      'https://assets-global.website-files.com/61003f4656f6038c84c4b0dd/61080a9c767cec94789ca245_lunch-1-recipes-x-webflow-template-brix-templates-p-800.jpeg'
    ),
    new Recipe(
      'test recipe',
      'testing',
      'https://assets-global.website-files.com/61003f4656f6038c84c4b0dd/610810a7fd06bc5d8a475930_breakfast-2-featured-recipes-x-webflow-template-brix-templates.jpg'
    ),
    new Recipe(
      'test recipe',
      'testing',
      'https://assets-global.website-files.com/61003f4656f6038c84c4b0dd/61080b0f66ea72000d89a4a8_lunch-3-featured-recipes-x-webflow-template-brix-templates-p-500.jpeg'
    ),
  ];
}
