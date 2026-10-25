import { Component, signal } from '@angular/core';
import { SearchBar } from './components/search-bar/search-bar';
import { Auto } from './interfaces/auto';

@Component({
  imports: [SearchBar],
  selector: 'app-root',
  templateUrl: './app.html',
})
export class App {
  protected readonly title = signal('Showroom-auto');
  selectedCar: Auto | null = null;

  constructor() {
    this.selectedCar = this.autoList[0] ?? null;
  }

  selectCar(auto: Auto) {
    this.selectedCar = auto;
  }

  selectNextCar() {
    this.selectCarAtOffset(1);
  }

  selectPreviousCar() {
    this.selectCarAtOffset(-1);
  }

  private selectCarAtOffset(offset: number) {
    if (!this.selectedCar || this.autoList.length === 0) {
      return;
    }

    const currentIndex = this.autoList.findIndex((car) => car.id === this.selectedCar?.id);
    const nextIndex = (currentIndex + offset + this.autoList.length) % this.autoList.length;
    this.selectedCar = this.autoList[nextIndex];
  }

  get selectedCarNumber(): string {
    const index = this.autoList.findIndex((car) => car.id === this.selectedCar?.id);
    return `${String(index + 1).padStart(2, '0')} / ${String(this.autoList.length).padStart(2, '0')}`;
  }

  get totalInventory(): number {
    return this.autoList.length;
  }

  get premiumBrands(): number {
    return new Set(this.autoList.map((car) => car.brand)).size;
  }

  get highestPower(): number {
    return Math.max(...this.autoList.map((car) => car.power));
  }

  autoList: Auto[] = [
    {
      id: 1,
      brand: 'Mercedes Benz',
      model: 'C-CLASS',
      price: 230,
      power: 9,
      photo: 'CLASS-C.webp',
      availability: 4,
      description:
        'The Mercedes-Benz C-Class is a line of luxury compact executive cars, known for blending sporty exterior styling with a sophisticated, high-tech interior. It features advanced technology like a digital cockpit, and many models include a mild hybrid system for efficiency and boost.',
    },
    {
      id: 2,
      brand: 'Mercedes Benz',
      model: 'GLA',
      price: 203,
      power: 8,
      photo: 'GLA.webp',
      availability: 4,
      description:
        'The Mercedes-Benz GLA is a compact luxury SUV, based on the A-Class platform, available with petrol and diesel engines, in front-wheel drive or all-wheel drive (4MATIC). It is characterized by modern technologies, innovative driver assistance systems, an enhanced design and high level of comfort, making it the smallest SUV in the brand\'s lineup.',
    },
    {
      id: 3,
      brand: 'Mercedes Benz',
      model: 'GLE',
      price: 450,
      power: 17,
      photo: 'GLE.webp',
      availability: 4,
      description:
        'The Mercedes-Benz GLE is a luxury SUV known for its combination of sportiness and luxurious comfort, available in several versions, including hybrid models and high-performance Mercedes-AMG versions. The range includes models such as the Urban Edition, Hybrid Drive, AMG Line, and Mercedes-AMG 63 S 4MATIC+. The vehicle is distinguished by its spacious and luxurious interior, intelligent technology, and driver-focused design.',
    },
    {
      id: 4,
      brand: 'Jaguar',
      model: 'F-Pace',
      price: 399,
      power: 16,
      photo: 'FPACE.webp',
      availability: 4,
      description:
        'The Jaguar F-PACE is a luxury SUV that blends performance and design, featuring a refreshed exterior including new headlights, a redesigned grille, and more dynamic exterior finishes. The interior has been reimagined to be luxurious and spacious, equipped with the Pivi Pro infotainment system and premium materials.',
    },
    {
      id: 5,
      brand: 'Jaguar',
      model: 'E-PACE',
      price: 350,
      power: 12,
      photo: 'EPACE.webp',
      availability: 4,
      description:
        'The Jaguar E-PACE is a compact luxury SUV that combines sporty design with modern technology. It features a driver-focused interior, an 11.4-inch infotainment screen, plug-in hybrid powertrains, and personalization options such as the R-Dynamic trim.',
    },
    {
      id: 6,
      brand: 'Audi',
      model: 'Q3 CROSSBACK',
      price: 230,
      power: 9,
      photo: 'Q3.webp',
      availability: 3,
      description:
        'The Audi Q3 Sportback is a compact SUV with a coupé-like design that combines sporty style and versatility. It stands out with its dynamic silhouette, modern and technologically advanced interior, and spacious cabin with modular trunk.',
    },
    {
      id: 7,
      brand: 'Audi',
      model: 'Q5',
      price: 350,
      power: 16,
      photo: 'Q5.webp',
      availability: 3,
      description:
        'The Audi Q5 is a luxury SUV that combines performance, technology, and comfort. It features a turbocharged engine, quattro all-wheel drive, and several powertrain options, including mild-hybrid versions.',
    },
    {
      id: 8,
      brand: 'Audi',
      model: 'A3 SPORTBACK',
      price: 145,
      power: 8,
      photo: 'A3.webp',
      availability: 3,
      description:
        'The Audi A3 Sportback is a compact car distinguished by its sporty design and modern technology. It offers a versatile interior, a modular trunk, and a range of performant engines, both gasoline and plug-in hybrid.',
    },
    {
      id: 9,
      brand: 'BMW',
      model: 'X2 SDRIVE PACK',
      price: 245,
      power: 8,
      photo: 'X2.webp',
      availability: 3,
      description:
        'The BMW X2 sDrive pack combines a front-wheel-drive platform with Sporty M Sport styling, adaptive suspension, and premium driver-assistance features for a sharp urban driving experience.',
    },
    {
      id: 10,
      brand: 'BMW',
      model: 'IX',
      price: 432,
      power: 11,
      photo: 'IX.webp',
      availability: 3,
      description:
        'The BMW iX is a fully electric luxury SUV characterized by its futuristic design, minimalist yet spacious interior, and advanced technology, offering long electric range and exceptional comfort.',
    },
    {
      id: 11,
      brand: 'BMW',
      model: 'X3 HYBRIDE',
      price: 355,
      power: 11,
      photo: 'X3.webp',
      availability: 3,
      description:
        'The BMW X3 plug-in hybrid combines a 2.0L gasoline engine with an electric motor, delivering impressive performance, luxury, and a practical electric range for everyday use.',
    },
    {
      id: 12,
      brand: 'Land Rover',
      model: 'Range Rover Evoque',
      price: 340,
      power: 9,
      photo: 'EVOQUE.webp',
      availability: 4,
      description:
        'The Range Rover Evoque is a compact luxury SUV distinguished by its modern design, clean lines, and sophisticated interior. It combines elegant aesthetics with premium features and plug-in hybrid efficiency.',
    },
    {
      id: 13,
      brand: 'Land Rover',
      model: 'Defender 90',
      price: 398,
      power: 21,
      photo: 'DEFENDER.webp',
      availability: 4,
      description:
        'The Land Rover Defender 90 is a compact off-road vehicle renowned for its iconic design, outstanding ground clearance and rugged capabilities, while remaining refined and comfortable inside.',
    },
    {
      id: 14,
      brand: 'Land Rover',
      model: 'Range Rover',
      price: 702,
      power: 24,
      photo: 'RANGE.webp',
      availability: 4,
      description:
        'The Land Rover Range Rover is a luxury crossover SUV known for its combination of luxury, performance, and off-road capability. It features sophisticated design with iconic lines, a refined interior, and advanced technology.',
    },
    {
      id: 15,
      brand: 'Alfa Romeo',
      model: 'Stelvio',
      price: 268,
      power: 18,
      photo: 'STELVIO.webp',
      availability: 11,
      description:
        'The Alfa Romeo Stelvio is a sporty and elegant SUV, characterized by its distinctive Italian design, dynamic performance, and optimal weight distribution. It combines comfort and sportiness with premium finishes.',
    },
    {
      id: 16,
      brand: 'Alfa Romeo',
      model: 'Giulia',
      price: 198,
      power: 18,
      photo: 'GIULIA.webp',
      availability: 11,
      description:
        'The Alfa Romeo Giulia is a premium sports sedan renowned for its elegant design, dynamic performance, and advanced technology, with a customizable digital cockpit and premium finishes.',
    },
  ];
}
