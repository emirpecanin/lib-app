import Controller from '@ember/controller';
import { inject as service } from '@ember/service';
import { action } from '@ember/object';
import { tracked } from '@glimmer/tracking';

export default class BookController extends Controller {
  @service shop;
  @service store; 

  @tracked bookName = '';

  get books(){
    if (this.bookName.length > 0){
      return this.store.peekAll('book').filter( item => item.name.toLowerCase().includes(this.bookName.toLowerCase()) );
      console.log(records);
    } else {
      return this.store.findAll('book');
    }
  }

  @action 
  buyBook(book){
    this.notifyThatImBuying(book);
    this.shop.addToCart(book);
    book.booksBought++;
  }

  notifyThatImBuying(book){
    this.toggleBuyingBook(book);
     setTimeout(() => {
      this.toggleBuyingBook(book);
    }, 500);

  }

  toggleBuyingBook(book){
    book.addingBook = !book.addingBook;
  }
  
}