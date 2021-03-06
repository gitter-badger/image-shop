/*global angular*/

'use strict';

var h = require('../../../test/helpers.js');

describe('home:ctrl:cartCtrl', function () {

  var ctrlFn, cartCtrl;
  beforeEach(function (){
    angular.mock.module('home');
    angular.mock.inject(function($controller) {
      ctrlFn = $controller('cartCtrl', {}, true);
    });
  });

  it('should exist', function() {
    cartCtrl = ctrlFn();
    expect(cartCtrl).to.exist();
  });

  it('should have a label variable equal to undefiend', function() {
    ctrlFn.instance.label = '123';
    cartCtrl = ctrlFn();
    expect(cartCtrl.label).to.eq('123');
  });

});
