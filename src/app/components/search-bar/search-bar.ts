import { Component, EventEmitter, Input, Output } from '@angular/core';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { faMagnifyingGlass } from '@fortawesome/free-solid-svg-icons';
import { Auto } from '../../interfaces/auto';

@Component({
  imports: [FontAwesomeModule],
  selector: 'app-search-bar',
  templateUrl: './search-bar.html',
})
export class SearchBar {
  faMagnifyingGlass = faMagnifyingGlass;

  @Input() autos: Auto[] = [];

  @Output() onSelectCar = new EventEmitter<Auto>();
  selectedAutos: Auto[] = [];

  ngOnChanges() {
    this.selectedAutos = this.autos;
  }

  selectAutos(selectedBrand: string) {
    const normalized = selectedBrand.trim().toLowerCase();

    if (!normalized) {
      this.selectedAutos = this.autos;
      return;
    }

    this.selectedAutos = this.autos.filter((car) => {
      const haystack = `${car.brand} ${car.model}`.toLowerCase();
      return haystack.includes(normalized);
    });
  }

  selectCar(auto: Auto) {
    this.onSelectCar.emit(auto);
  }
}
