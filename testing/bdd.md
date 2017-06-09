# BDD

* 行為驅動開發（英語：Behavior-driven development，縮寫 BDD）
* 由外而內考量

<https://github.com/alincode/cucumberjs-sandbox>

```
Feature: BMI Calculator
  I want to calculate my BMI

  Scenario: height is "1.8"m , weight is "70" kg
    Given height is "1.8"
    And weight is "70"
    When calculator add two number
    Then result should be "21.6"
```

```js
var chai = require('chai');
chai.should();

module.exports = function() {

  this.Given(/^height is "([^"]*)"$/, function(height) {
    this.height = +height;
  });

  this.Given(/^weight is "([^"]*)"$/, function(weight) {
    this.weight = +weight;
  });

  this.When(/^calculator add two number$/, function() {
    this.result = this.weight / (this.height * this.height)
  });

  this.Then(/^result should be "([^"]*)"$/, function(result) {
    this.result.toFixed(1).should.be.equal(result);
  });

};
```

<!--
https://www.slideshare.net/wantingj/tdd-bdd-47559903
-->