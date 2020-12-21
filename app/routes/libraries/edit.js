import Route from '@ember/routing/route';
import { action } from '@ember/object';

export default class LibrariesEditRoute extends Route {
  model(params){
    return this.store.findRecord('library', params.library_id);
  } 

  @action
  willTransition(transition){
    let model = this.controller.get('model');
    if (model.hasDirtyAttributes) {
      let confirmation = confirm('Your changes havent been saved. Are you sure you want to leave the form?');

      if (confirmation) {
        model.rollbackAttributes();
      } else {
        transition.abort();
      }
    } 

  }

}
