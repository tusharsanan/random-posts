import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Observable } from 'rxjs';

import { IPosts } from '../../models/posts.model';
import { PostsService } from '../../services/posts.service';
import { SquareComponent } from '../square/square.component';

@Component({
  selector: 'app-board',
  standalone: true,
  imports: [CommonModule, SquareComponent],
  templateUrl: './board.component.html',
  styleUrls: ['./board.component.scss'],
})
export class BoardComponent implements OnInit {
  constructor(private _postsService: PostsService) {}

  public posts$!: Observable<IPosts[]>;

  public ngOnInit(): void {
    this.posts$ = this._postsService.getPosts();
  }
}
