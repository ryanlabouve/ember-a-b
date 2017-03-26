import { test } from 'qunit';
import moduleForAcceptance from '../../tests/helpers/module-for-acceptance';

moduleForAcceptance('Acceptance | randomness smokescreen');

test('visiting /randomness-smokescreen', function(assert) {
  assert.expect(3);
  visit('/randomness');
  andThen(function() {
    assert.equal(
      currentURL(),
      '/randomness',
      'We are on the right page'
    );

    let countHeadlineOne = find('.js-headline-one').length;
    let countHeadlineTwo = find('.js-headline-two').length;
    let deviation = Math.abs(countHeadlineOne - countHeadlineTwo) < 1;

    assert.equal(
      countHeadlineOne + countHeadlineTwo === 1000,
      true,
      'We are showing the full sample size of 1000'
    );

    assert.equal(
      deviation < 10,
      true,
      `headline-one (${countHeadlineOne}) and headline-two (${countHeadlineTwo}) are within a 1% deviation`
    );
  });
});
