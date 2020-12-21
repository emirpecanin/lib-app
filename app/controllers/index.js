import Controller from '@ember/controller';
import { tracked } from '@glimmer/tracking'
import { action } from '@ember/object'

export default class IndexController extends Controller {
  @tracked emailAdress = '';
  @tracked responseMessage = '';
 
  title = 'Coming soon!';

  get actualEmailAdress(){
    return `Actual email adress is ${this.emailAdress}`;
  }

  get isValid(){
    return this.emailAdress.match(/^.+@.+\..+$/);
  }

  get isDisabled(){
    return !this.isValid;
  }

  @action
  saveInvitation(){
    const newInvitation = this.store.createRecord('invitation', { email: this.emailAdress });
    newInvitation.save().then(res => { 
      console.log(res);
      this.responseMessage = `Thank you you have just saved ${this.emailAdress}`;
      this.emailAdress = '';
    });

  }
}
