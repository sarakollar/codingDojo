

var assert = require('assert');
var myModule = require('./main');
describe('Array', function() {
  describe('#indexOf()', function() {
    it('should return -1 when the value is not present', function() {
      assert.equal(-1, [1,2,3].indexOf(4));
    });
  });
});

describe('Array', function() {
  describe('#myFunc()', function() {
    it('should return -1 when the value is not present', function() {
      assert.equal(myModule.myFunc(),3);
    });
  });
});
