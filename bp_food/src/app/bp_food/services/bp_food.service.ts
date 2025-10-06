import { HttpClient } from "@angular/common/http";
import { inject, Injectable, signal } from "@angular/core";
import { environment } from "../../../environments/environment";
import { CategoryModel } from "../interfaces/category-options";
import { Observable } from "rxjs";



@Injectable({providedIn: 'root'})
export class BpFoodService {

  private http = inject(HttpClient);
  categories = signal<CategoryModel[]>([]);
  categoriesLoading = signal(false);

  constructor(){

  }

  loadCategories() {
  console.log('BpFoodService initialized');
    this.categoriesLoading.set(true);

    this.http.get(`${environment.mealCategoryUrl}`)
      .subscribe({
        next: (response: any) => {
          console.log('Categories loaded:', response);
          this.categories.set(response.categories);
          this.categoriesLoading.set(false);
        },
        error: (error) => {
          console.error('Error loading categories:', error);
          this.categoriesLoading.set(false);
        }
    })
  }

  getMealsByCategory(category: string) {
    return this.http.get(`${environment.mealUrl}/filter.php?c=${category}`);
  }

  searchRecipeByName(name: string) {
    return this.http.get(`${environment.mealUrl}/search.php?s=${name}`);
  }

  searchRecipeBySearchTerm(query: string): Observable<any>{
    return this.http.get<any>(`${environment.mealUrl}/search.php?s=${query}`);

  }

}
