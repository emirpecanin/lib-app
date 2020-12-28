import Model, { attr, belongsTo } from '@ember-data/model';

export default class BookModel extends Model{
  @attr('string') name;
  @attr('string') ISDN;

  @belongsTo('author') author;
  @belongsTo('library') library;
}