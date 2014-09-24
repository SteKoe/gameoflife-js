'use strict';

var goljs = require('../lib/gol-js.js');

/*
 * ======== A Handy Little Nodeunit Reference ========
 * https://github.com/caolan/nodeunit
 * 
 * Test methods: test.expect(numAssertions) test.done() Test assertions:
 * test.ok(value, [message]) test.equal(actual, expected, [message])
 * test.notEqual(actual, expected, [message]) test.deepEqual(actual, expected,
 * [message]) test.notDeepEqual(actual, expected, [message])
 * test.strictEqual(actual, expected, [message]) test.notStrictEqual(actual,
 * expected, [message]) test.throws(block, [error], [message])
 * test.doesNotThrow(block, [error], [message]) test.ifError(value)
 */

exports['awesome'] = {
    setUp : function(done) {
        done();
    },
    'neightbours' : function(test) {
        test.expect(2);
        test.deepEqual(goljs.neighbours([ 1, 1 ]), [ [ 0, 0 ], [ 0, 1 ], [ 0, 2 ], [ 1, 0 ], [ 1, 2 ], [ 2, 0 ], [ 2, 1 ], [ 2, 2 ] ], "neighbours of 1,1");
        test.deepEqual(goljs.neighbours([ 0, 0 ]), [ [ 0, 1 ], [ 1, 0 ], [ 1, 1 ] ], "neighbours of 0,0");
        test.done();
    },
    'count neighbours' : function(test) {
        test.expect(1);
        test.equal(goljs.countNeighbours([1,1], [[0,0],[1,1]]), 1);
        test.done();
    },
    'cell without neighbours dies' : function(test) {
        test.expect(1);
        test.ok(!goljs.life([1,1], []));
        test.done();
    },
    'cell with 1 neighbour dies' : function(test) {
        test.expect(1);
        test.ok(!goljs.life([1,1], [[0,1]]));
        test.done();
    },
    'cell with 2 neighbours lifes' : function(test) {
        test.expect(1);
        test.ok(goljs.life([1,1], [[0,1],[0,0]]));
        test.done();
    },
    'cell with 3 neighbours lifes' : function(test) {
        test.expect(1);
        test.ok(goljs.life([1,1], [[0,1],[0,0],[1,0]]));
        test.done();
    },
    'cell with 4 neighbours dies' : function(test) {
        test.expect(1);
        test.ok(!goljs.life([1,1], [[0,1],[0,0],[1,0],[2,2]]));
        test.done();
    },
    'next gen' : function(test) {
        test.expect(1);
        test.deepEqual(goljs.step([[1,0],[1,1],[1,2]]), [[0,1],[2,1],[1,1]]);
        test.done();
    },
};

