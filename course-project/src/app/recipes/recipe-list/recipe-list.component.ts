import {Component, OnInit} from '@angular/core';
import {RecipeModel} from '../recipe.model';

@Component({
  selector: 'app-recipe-list',
  templateUrl: './recipe-list.component.html',
  styleUrls: ['./recipe-list.component.css']
})
export class RecipeListComponent implements OnInit {
  recipes: RecipeModel[] = [new RecipeModel('Butter Chicken', 'A punjabi specialty.',
    'http://goodtoknow.media.ipcdigital.co.uk/111/000016ef4/543a_orh412w625/Butter-chicken-recipe.jpg'),
    new RecipeModel('Chilli Chicken', 'Indo-Chinese origin.',
      'http://assets.kraftfoods.com/recipe_images/opendeploy/112395_640x428.jpg')];

  constructor() {
  }

  ngOnInit() {
  }

}
