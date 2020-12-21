import Controller from '@ember/controller';
import { tracked } from '@glimmer/tracking';
import { action } from '@ember/object';

export default class ContactController extends Controller {
  @tracked email = '';
  @tracked message = '';
  @tracked alertMessage = '';

  get isValid(){
    return this.email.match(/^.+@.+\..+$/) && this.message.length >= 5;
  }

  get isDisabled(){
    return !this.isValid;
  }

  @action
  sendMessage(){
    let newMessage = this.store.createRecord('contact', {
      email: this.email,
      message: this.message,
    });

    newMessage
      .save()
      .then(res => {
        this.alertMessage = `We got your message and we'll get in touch soon.` 
        this.message = '';
        this.email = '';
      });
  }
}
