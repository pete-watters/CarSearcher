import { test } from 'qunit';
import moduleForAcceptance from 'car-searcher/tests/helpers/module-for-acceptance';

moduleForAcceptance('Acceptance | cars');

test('visiting landing page', function(assert) {
  visit('/');

  andThen(function() {
    assert.equal(currentURL(), '/');
  });
});
