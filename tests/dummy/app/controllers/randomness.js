import Ember from 'ember';

export default Ember.Controller.extend({
  init() {
    this.set('lines', Array(1000));
  }
});
