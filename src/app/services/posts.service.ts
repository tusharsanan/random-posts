import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { Observable } from 'rxjs';

import { IPosts } from '../models/posts.model';
import { URLConstants } from '../constants/generic.constants';

@Injectable({
  providedIn: 'root',
})
export class PostsService {
  constructor(private _http: HttpClient) {}

  public getPosts(): Observable<IPosts[]> {
    return this._http.get<IPosts[]>(URLConstants.getPosts);
  }
}
