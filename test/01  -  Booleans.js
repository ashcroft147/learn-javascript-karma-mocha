'use strict';

var expect = require('chai').expect;

describe('Booleans', function () {

  /*Boolean : Represents one of two values: true or false.
  * We will demonstrate the use of this Type with different operators and comparators.
  * */
  
  /*Operators*/
  /*Common Operators used in Javascript Language*/
  it('Addition', function () {
    expect(6+4).to.eql(10);
    expect(6+5).to.eql(11);
  });
  
  it('Subtraction', function () {
    expect(10-4).to.eql(6);
  });
  it('Division', function () {
    expect(12/4).to.eql(3);
  });
  /*Grouping Expressions*/
  /*PEMDAS: Parentheses, Exponents, Multiplication, Division, Addition and Subtraction. */
  
  it('Javascript follows PEMDAS: Order of Operations', function () {
    expect((-5 * 6) - 7 * -2).to.eql(-16);
  });

  /*Comparators*/
  /*Common Number Comparators used in Javascript Syntax*/
  
  it('Greater than', function () {
    expect(6>4).to.be.true;
  });
  it('Less than', function () {
    expect(6<4).to.be.false;
  });
  it('Equals', function () {
    expect(4==4).to.be.true;
  });
  it('Not Equals', function () {
    expect(4!=5).to.be.true;
  });
});
