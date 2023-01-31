const { assert } = require('chai');
const chai = require('chai');
const testfun = ('../testfun');

suite("Test the sayHello function", function() {

  test("Test SayCheck", function () {
    const msg = testfun.SayCheck();
    chai.assert.equal("Hello the testing is working", msg, "Wrong message returned!!!");
  })
})
