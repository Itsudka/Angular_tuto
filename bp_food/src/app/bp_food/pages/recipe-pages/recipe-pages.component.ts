import { ChangeDetectionStrategy, ChangeDetectorRef, Component, computed, inject, signal } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { BpFoodService } from '../../services/bp_food.service';

@Component({
  selector: 'recipe-pages',
  imports: [],
  templateUrl: './recipe-pages.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
  standalone: true,
})
export default class RecipePagesComponent {
    private route = inject(ActivatedRoute);
    private foodService = inject(BpFoodService);
    // private cd = inject(ChangeDetectorRef);
    // recipe: any = null

    private _recipe = signal<any | null>(null)
    recipe = computed(() => this._recipe());

    ingredients = computed(() => {
      const rec = this._recipe();
      if (!rec) return [];

      const list: { ingredient: string, measure: string }[] = [];
      for (let i = 1; i <= 20; i++) {
        const ingredient = rec[`strIngredient${i}`];
        const measure = rec[`strMeasure${i}`];
        if (ingredient?.trim()) {
          list.push({ ingredient, measure });
        }

        console.log(`Ingredient ${i}:`, ingredient, 'Measure:', measure);
      }

      return list;
    });


    constructor(){
      this.route.paramMap.subscribe(params => {
        const recipeName = params.get('name');
        if (recipeName) {
          this.foodService.searchRecipeByName(recipeName).subscribe((res: any) => {
            this._recipe.set(res.meals ? res.meals[0] : null);
          });
        }
      });
    }
 }
