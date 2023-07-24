import { TestBed } from '@angular/core/testing';

import {
  HttpClientTestingModule,
  HttpTestingController,
} from '@angular/common/http/testing';

import { PostsService } from './posts.service';
import { IPosts } from '../models/posts.model';

describe('PostsService', () => {
  let service: PostsService;
  let httpTestingController: HttpTestingController;

  beforeEach(() => {
    TestBed.configureTestingModule({ imports: [HttpClientTestingModule] });
    httpTestingController = TestBed.get(HttpTestingController);
    service = TestBed.inject(PostsService);
  });

  afterEach(() => {
    httpTestingController.verify();
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  it('should get the posts data', (done) => {
    const expectedData: IPosts[] = [
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
    ];

    service.getPosts().subscribe((data: IPosts[]): void => {
      expect(data).toEqual(expectedData);
      done();
    });

    const testRequest = httpTestingController.expectOne(
      'https://jsonplaceholder.typicode.com/posts',
    );

    testRequest.flush(expectedData);
  });

  it('getPosts should use GET to retrieve data', (done) => {
    service.getPosts().subscribe();

    const testRequest = httpTestingController.expectOne(
      'https://jsonplaceholder.typicode.com/posts',
    );

    expect(testRequest.request.method).toEqual('GET');
    done();
  });
});
