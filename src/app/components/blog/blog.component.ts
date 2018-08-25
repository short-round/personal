import { Component, OnInit } from '@angular/core';

import { BlogPost } from '../../classes/BlogPost';
import { blogPostList } from '../../data/blog/BlogPosts';

@Component({
  selector: 'app-blog',
  templateUrl: './blog.component.html',
  styleUrls: ['./blog.component.scss']
})
export class BlogComponent implements OnInit {

  blogPostList: Array<BlogPost> = blogPostList;

  constructor() { }

  ngOnInit() {
  }

}
