import { Component, OnInit, Input } from '@angular/core';
import { Comments } from '../comments';

@Component({
  selector: 'app-comments',
  templateUrl: './comments.component.html',
  styleUrls: ['./comments.component.css'],
})
export class CommentsComponent implements OnInit {

  @Input('comment')
  file!: Comments;

  // Adding Hooks...

  constructor() {
    console.log(`constructor, new - data is ${this.file}`);
  }

  ngOnChanges() {
    console.log(`ngOnChanges - data is ${this.file}`);
  }

  ngOnInit() {
    console.log(`ngOnInit  - data is ${this.file}`);
  }

  ngDoCheck() {
    console.log("ngDoCheck")
  }

  ngAfterContentInit() {
    console.log("ngAfterContentInit");
  }

  ngAfterContentChecked() {
    console.log("ngAfterContentChecked");
  }

  ngAfterViewInit() {
    console.log("ngAfterViewInit");
  }

  ngAfterViewChecked() {
    console.log("ngAfterViewChecked");
  }

  ngOnDestroy() {
    console.log("ngOnDestroy");
  }

}