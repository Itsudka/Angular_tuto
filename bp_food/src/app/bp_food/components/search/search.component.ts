import { ChangeDetectionStrategy, Component, inject, signal } from '@angular/core';
import { BpFoodService } from '../../services/bp_food.service';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'search-component',
  imports: [RouterLink],
  templateUrl: './search.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export default class SearchComponent {
  private foodService = inject(BpFoodService);

  searchTerm = signal<string>('');
  results = signal<any[]>([]);


  handleSearch(event: Event | { target: HTMLInputElement }) {
    const input = event.target as HTMLInputElement;
    const query = input.value.trim();

    console.log('Search query:', query);


    if (query) {
      this.foodService.searchRecipeByName(query).subscribe((res: any) => {
        this.results.set(res.meals || []);
        console.log('Results;', res)
      });
    } else {
      this.results.set([]);

    }
  }


 }
