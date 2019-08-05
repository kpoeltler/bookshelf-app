import { Component, OnInit } from '@angular/core';
import { Card } from '../book-cards/book-cards.component';
import { CARDS } from '../mock-cards';
@Component({
  selector: 'book-cards',
  templateUrl: './book-cards.component.html',
  styleUrls: ['./book-cards.component.css']
})
export class BookCardsComponent implements OnInit {
  cards = CARDS;
  selectedCard: Card;

  constructor() { }

  ngOnInit() {
  }
  onSelect(card: Card): void {
    this.selectedCard = card;
  }
}
