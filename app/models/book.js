import Model, { attr, belongsTo } from '@ember-data/model';

export default class BookModel extends Model {
  @attr('string') name;
  @attr('date') releaseYear;
  
  @belongsTo('library') library;
  @belongsTo('author') author;
}
