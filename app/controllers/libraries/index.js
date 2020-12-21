import Controller from '@ember/controller';
import { action } from '@ember/object';

export default class LibrariesIndexController extends Controller {

  @action
  deleteLibrary(library){
    let confirmation = confirm('Are you sure?');
    if (confirmation) {
      library.destroyRecord();
    }
    
  }
}