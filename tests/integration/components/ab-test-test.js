import { moduleForComponent, test } from 'ember-qunit';
import hbs from 'htmlbars-inline-precompile';

moduleForComponent('ab-test', 'Integration | Component | ab test', {
  integration: true
});

test('it renders', function(assert) {

  this.set('visible', true);
  this.render(hbs`
    {{#ab-test visible=visible}}
      template block text
    {{/ab-test}}
  `);

  assert.equal(
    this.$().text().trim(),
    'template block text',
    'The text is visible'
  );

  this.set('visible', false);
  assert.equal(
    this.$().text().trim(),
    '',
    'The text is not visible'
  );
});
