import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SquareComponent } from './square.component';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

describe('SquareComponent', () => {
  let component: SquareComponent;
  let fixture: ComponentFixture<SquareComponent>;
  let debugElement: DebugElement;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [SquareComponent, HttpClientTestingModule],
    });
    fixture = TestBed.createComponent(SquareComponent);
    component = fixture.componentInstance;
    debugElement = fixture.debugElement;

    component.title = 'VK18';
    component.id = 18;
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should render the title by default when it loads', () => {
    fixture.detectChanges();

    const text = debugElement.query(By.css('.square--text'));
    expect(text.nativeElement.textContent).toEqual('VK18');
  });

  it('should toggle the title with id when the title is clicked', () => {
    let button = fixture.debugElement.nativeElement.querySelector('button');
    button.click();
    fixture.detectChanges();

    const text = debugElement.query(By.css('.square--text'));
    expect(text.nativeElement.textContent).toEqual('18');
  });

  it('should toggle the id with title when the id is clicked', () => {
    let button = fixture.debugElement.nativeElement.querySelector('button');
    button.click();
    fixture.detectChanges();

    const text = debugElement.query(By.css('.square--text'));
    expect(text.nativeElement.textContent).toEqual('18');

    button.click();
    fixture.detectChanges();
    expect(text.nativeElement.textContent).toEqual('VK18');
  });
});
