import Controller from '@ember/controller';
import { action } from '@ember/object';

export default class AdminContactController extends Controller {

  @action
  deleteMessage(message) {
    let confirmDel = confirm('Are you sure?');
    if ( confirmDel ) {
      message.destroyRecord();
    }
  }
}