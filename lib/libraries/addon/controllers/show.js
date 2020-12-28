import Controller from '@ember/controller';
import { action } from '@ember/object';

export default class LibrariesShowController extends Controller {

  @action
  deleteLibrary(library){
    let confirmation = confirm('Are you sure you want to delete a gallery?');
    if (confirmation) {
      library.destroyRecord();
    }
  }
}