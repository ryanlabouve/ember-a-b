import Ember from 'ember';
import layout from '../templates/components/a-b';

export default Ember.Component.extend({
  layout,
  _show: 'a',

  init() {
    this._super(...arguments);
    let show = this.get('show');
    if (show === 'a') {
      this.set('_show', 'a');
    } else if (show === 'b') {
      this.set('_show', 'b');
    }

    Ember.assert(
      'An invalid value was passed to `showing` in `ember-a-b`',
      show === 'a' || show === 'b' || show === undefined
    );

  },

  showingA: Ember.computed.equal('_show', 'a'),
  showingB: Ember.computed.equal('_show', 'b')
});
