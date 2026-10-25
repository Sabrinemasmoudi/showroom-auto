import { TestBed } from '@angular/core/testing';
import { App } from './app';

describe('App', () => {
  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [App],
    }).compileComponents();
  });

  it('should create the app', () => {
    const fixture = TestBed.createComponent(App);
    const app = fixture.componentInstance;
    expect(app).toBeTruthy();
  });

  it('should render a premium showroom headline', async () => {
    const fixture = TestBed.createComponent(App);
    await fixture.whenStable();
    const compiled = fixture.nativeElement as HTMLElement;
    expect(compiled.querySelector('h1')?.textContent).toContain('Drive the extraordinary');
  });

  it('should cycle through the featured vehicles', () => {
    const fixture = TestBed.createComponent(App);
    const app = fixture.componentInstance;

    app.selectNextCar();
    expect(app.selectedCar?.model).toBe('GLA');
    expect(app.selectedCarNumber).toBe('02 / 16');

    app.selectPreviousCar();
    expect(app.selectedCar?.model).toBe('C-CLASS');
  });
});
