import Route from '@ember/routing/route';
import { action } from '@ember/object';

export default class LibrariesNewRoute extends Route {
  model(){
    return this.store.createRecord('library');
  }

  @action
  willTransition(){
    this.controller.get('model').rollbackAttributes();
  }
}