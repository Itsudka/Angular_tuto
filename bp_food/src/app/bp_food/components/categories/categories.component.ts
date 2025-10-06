import { ChangeDetectionStrategy, Component, computed, effect, EventEmitter, inject, Input, Output, signal } from '@angular/core';
import { CategoryModel } from '../../interfaces/category-options';
import { Router } from '@angular/router';


@Component({
  selector: 'categories',
  imports: [],
  templateUrl: './categories.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class CategoriesComponent {

  private _categoriesOptions = signal<CategoryModel[]>([]);
  private showDescription = signal(true);
  private router = inject(Router);




  @Input({ required: true}) set categoriesOptions(value: CategoryModel[]) {
    console.log('Recibidas categorías en categories.component:', value);
    this._categoriesOptions.set(value);
  }

  @Input() set showDescriptions(value: boolean) {
    this.showDescription.set(value);
  }

  @Output() onCategorySelected = new EventEmitter<string>();

  categoriesList = computed(() => this._categoriesOptions());
  showDesc = computed(() => this.showDescription());

  selectCategory(category: string) {
    this.onCategorySelected.emit(category);
    console.log('Categoría seleccionada:', category);
  }

  recipeLink(recipeName: string) {
    console.log('Enviando a la página de receta:', recipeName);
    if (recipeName) {
      this.router.navigate(['/main-page/recipe',  recipeName]);
    } else {
      console.error('No se encontró el nombre de la receta.');
    }
  }
 }
