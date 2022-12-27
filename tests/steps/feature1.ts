import assert from 'assert'
import { When, Then, Before } from '@cucumber/cucumber'

Before(function () {
  this.test = 'feature1'
})

When('this test is run', function () {
  return
})

Then('this object is isolated', function () {
  assert.equal(this.test, 'feature1')
})
