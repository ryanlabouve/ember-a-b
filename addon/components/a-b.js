import Ember from 'ember';
import layout from '../templates/components/a-b';

export default Ember.Component.extend({
  layout,
  showing: 'a',
  showingA: Ember.computed.equal('showing', 'a'),
  showingB: Ember.computed.equal('showing', 'b')
});
