import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'book',
  templateUrl: './book.component.html',
  styleUrls: ['./book.component.css']
})
export class BookComponent implements OnInit {
  addBook(){
    console.log("Button was clicked")
  }
  constructor() { }

  ngOnInit() {
  }

}