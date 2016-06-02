'use strict';

var expect = require('chai').expect;

describe('Async', function(){
    
    it('VariableNotFreeze', function(done){
        
        function asyncFunction(callback) {
            setTimeout(callback,200);
        }

        var color = 'blue';

        asyncFunction(function() {
            expect(color).to.be.eql('red');
            done();
        });
        
        color = 'red';
    });
    
    it('VariableFreeze', function(done){
        function asyncFunction(callback) {
            setTimeout(callback,200);
        }

        var color = 'blue';
        
        (function(color){
            asyncFunction(function(){
                expect(color).to.be.eql('blue');
                done();
            });
        })(color);

        color = 'red';
        
    });
});