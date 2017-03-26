import { moduleForComponent, test } from 'ember-qunit';
import hbs from 'htmlbars-inline-precompile';

moduleForComponent('a-b', 'Integration | Component | a b', {
  integration: true
});

test('it renders', function(assert) {

  this.render(hbs`
    {{#a-b as |ab|}}
      {{#ab.a}}
        Headline One!
      {{/ab.a}}

      {{#ab.b}}
        Headline Two!
      {{/ab.b}}
    {{/a-b}}
  `);

  assert.equal(
    this.$().text().trim() === 'Headline One!' ||
    this.$().text().trim() === 'Headline Two!',
    true,
    'We see one of our two headlines'
  );
});
