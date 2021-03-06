import { Injectable } from '@angular/core';
import { mod_Recipe } from './recipe.model';

@Injectable({
  providedIn: 'root'
})
export class RecipeService {
  private var_recipe: mod_Recipe[]= [
    {
      id: 'r1',
      title: 'Gado-Gado',
      imageUrl: 'https://www.maangchi.com/wp-content/uploads/2012/01/Msplate1.jpg',
      ingredients: ['Lontong', 'Sawi', 'Bumbu Kecap', 'Tauge']
    },
    {
      id: 'r2',
      title: 'Ketupat',
      imageUrl: 'https://cdn.idntimes.com/content-images/post/20190502/c22eb92d2d3738702fb0434e339cfbca-1-b9b0ec35aa17b97860c72fe047cd216d_600x400.jpg',
      ingredients: ['Beras', 'Air Putih', 'Garam', 'Daun Pandan']
    },
    {
      id: 'r3',
      title: 'Pizza Margareta',
      imageUrl: 'https://img.taste.com.au/A0DCNELv/taste/2016/11/jessica-39581-2.jpeg',
      ingredients: ['Adonan Pizza', 'Minyak Zaitun', 'Bawang Putih', 'Saus Tomat', 'Keju Mozarella']
    }
  ];

  constructor(){ }

  getAllRecipe(){
    return [...this.var_recipe];
  }

  service_getRecipe(recipeId: string){ 
    return this.var_recipe[recipeId]
  }

  service_deleteRecipe(recipeId: string){
    return this.var_recipe.splice(parseInt(recipeId),1)
  }
}



