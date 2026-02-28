import { describe, it, expect, beforeEach, vi } from 'vitest';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { HeroComponent } from './hero.component';

describe('HeroComponent', () => {
  let component: HeroComponent;
  let fixture: ComponentFixture<HeroComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [HeroComponent]
    }).compileComponents();

    fixture = TestBed.createComponent(HeroComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

 
  it('should create', () => {
    expect(component).toBeTruthy();
  });

  
  it('should render correct headings', () => {
    const compiled = fixture.nativeElement as HTMLElement;
    const h1s = compiled.querySelectorAll('h1');

    expect(h1s.length).toBe(3);
    expect(h1s[0].textContent).toContain('Hello');
    expect(h1s[1].textContent).toContain('My Name is');
    expect(h1s[2].textContent).toContain('Suhaila Issa');
  });


  it('should render one button', () => {
    const button = fixture.nativeElement.querySelector('button');
    expect(button).toBeTruthy();
  });


  it('should call scrollTo when button is clicked', () => {
    const spy = vi.spyOn(component, 'scrollTo');
    const button = fixture.nativeElement.querySelector('button');

    button.click();
    fixture.detectChanges();

    expect(spy).toHaveBeenCalledWith('projects');
  });


  it('should scroll to projects section', () => {
    const mockEl = document.createElement('div');
    mockEl.id = 'projects';
     mockEl.scrollIntoView = vi.fn();
    document.body.appendChild(mockEl);

    const spy = vi.spyOn(mockEl, 'scrollIntoView');

    component.scrollTo('projects');

    expect(spy).toHaveBeenCalled();

    document.body.removeChild(mockEl);
  });
});