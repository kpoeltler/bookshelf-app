import { BookService } from 'src/app/book.service';
import { Component} from '@angular/core';


@Component({
  selector: 'book',
  templateUrl: './book.component.html',
  styleUrls: ['./book.component.css']
})
export class BookComponent {
  books; 
    constructor(service: BookService){
      this.books = service.getBooks();
    }
}