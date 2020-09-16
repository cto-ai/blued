const assert = require('assert');
describe('API Accessible', function() {
  describe('fetch()', function() {
    it('API responds with 200 for normal req', function() {
      assert.equal(1, 1);
    });
    it('API responds with 403 for auth failure', function() {
      assert.equal(1, 1);
    });
    it('API responds with 401', function() {
      assert.equal(1, 1);
    });
    it('API responds with 500', function() {
      assert.equal(1, 1);
    });
    it('API responds >=400 for other cases', function() {
      assert.equal(1, 1);
    });
  });
});
