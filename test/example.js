var ll = require("../index");
var p = ll.Factory;

require('should');

describe('Example', () => {
    it('should produce a random number for term.number', done => {
        var g = new ll.Grammar();
        g.addRule('value', p.number(), true);
        g.example((e,s) => {
            parseInt(s, 1).should.not.equal(NaN);
            done();
        });
    });

    it('should produce a quoted string for term.string', done => {
        var g = new ll.Grammar();
        g.addRule('value', p.string(), true);
        g.example((e,s) => {
            s.startsWith('"').should.equal(true);
            s.endsWith('"').should.equal(true);
            done();
        });
    });

});
