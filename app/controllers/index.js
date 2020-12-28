import Controller from '@ember/controller';
import { tracked } from '@glimmer/tracking';
import { action } from '@ember/object';

export default class IndexController extends Controller {
  @tracked email='';
  @tracked alertMessage = '';
  @tracked deleteMesage = '';

  get isValid(){
    return this.email.match(/^.+@.+\..+$/);
  }
  
  get isDisabled(){
    return !this.isValid;
  }

  get this() {
    return this;
  }

  @action
  submitInvitation(){
    this.store
    .createRecord('invitation', { email: this.email })
    .save()
    .then(() => {
      this.email = '';
      this.alertMessage = `Your email adress ${this.email} has been successfully added to the invitation list`;
    });
  }

}