import Model, { attr, hasMany } from '@ember-data/model';

export default class LibraryModel extends Model {
  @attr('string') name;
  @attr('string') address; 
  @attr('string') phone;

  @hasMany('book') books;
  
  get isValid() {
    return this.name || false;
  }
}
