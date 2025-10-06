import { ChangeDetectionStrategy, Component, computed, effect, inject, signal } from '@angular/core';
import { CategoriesComponent } from "../../components/categories/categories.component";
import { BpFoodService } from '../../services/bp_food.service';
import { CategoryModel } from '../../interfaces/category-options';


@Component({
  selector: 'categories-page',
  imports: [CategoriesComponent],
  templateUrl: './categories-page.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export default class CategoriesPageComponent {
  private bp_foodService = inject(BpFoodService);
  currentList = signal<CategoryModel[]>([]);
  showingMeals = signal(false);


  categoriesList = computed(() => this.bp_foodService.categories());

  constructor() {
    this.bp_foodService.loadCategories();

    effect(() => {
      const loaded = this.bp_foodService.categories();
      if (loaded.length > 0 && !this.showingMeals()) {
        this.currentList.set(loaded);
      }
    });
  }

  onCategorySelected(category: string) {
    this.bp_foodService.getMealsByCategory(category).subscribe((res: any) => {
      this.currentList.set(res.meals);
      this.showingMeals.set(true);
    });

  }
 }
