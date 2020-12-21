import Controller from '@ember/controller';
import { action } from '@ember/object';

export default class AdminInvitationsController extends Controller {
  @action
  removeInvitation(invitation){
    let confirmDel = confirm('Are you sure?');
    if(confirmDel) {
        invitation.destroyRecord();
    }
  } 
}