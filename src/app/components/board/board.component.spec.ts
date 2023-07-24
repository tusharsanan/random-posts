import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BoardComponent } from './board.component';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import Spy = jasmine.Spy;
import { PostsService } from '../../services/posts.service';
import { empty, of, throwError } from 'rxjs';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

class ErrorObservable {
  constructor(errorCode: string) {}
}

describe('BoardComponent', () => {
  let component: BoardComponent;
  let fixture: ComponentFixture<BoardComponent>;
  let getPostsSpy: Spy;
  let postsService: PostsService;
  let debugElement: DebugElement;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [BoardComponent, HttpClientTestingModule],
    });
    fixture = TestBed.createComponent(BoardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
    debugElement = fixture.debugElement;

    postsService = TestBed.inject(PostsService);

    getPostsSpy = spyOn(postsService, 'getPosts');
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should get the posts data as an observable when the component inits', () => {
    getPostsSpy.and.returnValue(
      of([
        {
          id: 1,
          userId: 123,
          body: 'Hello 1',
          title: 'Test 1',
        },
        {
          id: 2,
          userId: 456,
          body: 'Hello 2',
          title: 'Test 2',
        },
      ]),
    );
    component.ngOnInit();
    expect(getPostsSpy).toHaveBeenCalled();
  });

  it('should render the error block if any error occurs ', () => {
    getPostsSpy.and.returnValue(throwError('Error'));

    const errorBlock = debugElement.query(By.css('.generic_error'));

    component.ngOnInit();

    expect(errorBlock.nativeElement.textContent).toContain(
      "Sorry. It's not you. It is us. Please reload the page or try again later!",
    );
  });

  it('should render 2 app-square components', () => {
    getPostsSpy.and.returnValue(
      of([
        {
          id: 1,
          userId: 123,
          body: 'Hello 1',
          title: 'Test 1',
        },
        {
          id: 2,
          userId: 456,
          body: 'Hello 2',
          title: 'Test 2',
        },
      ]),
    );
    component.ngOnInit();
    fixture.detectChanges();

    const appSquareLength = debugElement.queryAll(By.css('app-square')).length;

    expect(appSquareLength).toBe(2);
  });
});
