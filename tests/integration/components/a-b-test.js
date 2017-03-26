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

test('can specify to show headline A', function(assert) {
  this.set('visibleHeadline', 'a');

  this.render(hbs`
    {{#a-b show=visibleHeadline as |ab|}}
      {{#ab.a}}
        Headline One!
      {{/ab.a}}

      {{#ab.b}}
        Headline Two!
      {{/ab.b}}
    {{/a-b}}
  `);


  assert.equal(
    this.$().text().trim() === 'Headline One!',
    true,
    'We see one of our two headlines'
  );
});

test('can specify to show headline B', function(assert) {
  this.set('visibleHeadline', 'b');

  this.render(hbs`
    {{#a-b show=visibleHeadline as |ab|}}
      {{#ab.a}}
        Headline One!
      {{/ab.a}}

      {{#ab.b}}
        Headline Two!
      {{/ab.b}}
    {{/a-b}}
  `);

  assert.equal(
    this.$().text().trim() === 'Headline Two!',
    true,
    'We see one of our two headlines'
  );
});

