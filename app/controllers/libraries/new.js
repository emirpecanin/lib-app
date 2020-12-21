import Controller from '@ember/controller';
import { action } from '@ember/object';
import { inject as service } from '@ember/service';

export default class LibrariesNewController extends Controller {
  @service router;  

  buttonLabel = 'Add new Library';

  @action 
  saveLibrary(){
    this.model
      .save()
      .then( () => this.router.transitionTo('libraries') );
  }
}
