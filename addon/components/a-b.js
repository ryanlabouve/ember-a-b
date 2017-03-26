import Ember from 'ember';
import layout from '../templates/components/a-b';

export default Ember.Component.extend({
  layout,
  _show: 'a',

  _validateShowInput(show) {
    let isValidInput = show === 'a' || show === 'b' || show === undefined;
    Ember.assert(
      'An invalid value was passed to `showing` in `ember-a-b`',
      isValidInput
    );

    return isValidInput;
  },

  _attemptToManuallySetTest(show) {
    if (show === 'a') {
      this.set('_show', 'a');
      return true;
    } else if (show === 'b') {
      this.set('_show', 'b');
      return true;
    }
    return false;
  },

  _setupRandomizedTest() {
    let showFirstTest = Math.random() < 0.5 ? true : false;
    if (showFirstTest) {
      this.set('_show', 'a');
    } else {
      this.set('_show', 'b');
    }
  },

  init() {
    this._super(...arguments);
    let show, isValidInput, manualTest;
    show = this.get('show');
    isValidInput = this._validateShowInput(show);

    if (isValidInput) {
      manualTest = this._attemptToManuallySetTest(show);
    }

    if (!manualTest && isValidInput) {
      this._setupRandomizedTest();
    }
  },

  showingA: Ember.computed.equal('_show', 'a'),
  showingB: Ember.computed.equal('_show', 'b')
});
