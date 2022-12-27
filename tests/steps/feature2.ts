import assert from 'assert'
import { When, Then, Before } from '@cucumber/cucumber'

Before(function () {
  this.test = 'feature2'
})

When('another test is run in parallel', function () {
  return
})

Then('this object is also isolated', function () {
  assert.equal(this.test, 'feature2')
})
