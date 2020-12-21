import Route from '@ember/routing/route';
import { hash } from 'rsvp';
import { action } from '@ember/object';

export default class AdminSeederRoute extends Route {

  model(){
    return hash({
      libraries: this.store.findAll('library'),
      books: this.store.findAll('book'),
      authors: this.store.findAll('author')
    });
  }

  setupController(controller, model) {
    super.setupController(...arguments);
    controller.set('libraries', model.libraries);
    controller.set('books', model.books);
    controller.set('authors', model.authors);
    
  }

}
