import Controller from '@ember/controller';
import { action } from '@ember/object';
import { inject as service } from '@ember/service';

export default class LibrariesEditController extends Controller{
  @service router;
  
  buttonLabel = 'Save Edits';

  @action 
  saveLibrary(){
    this.model
    .save()
    .then( res => this.router.transitionTo('libraries'));
  }
}