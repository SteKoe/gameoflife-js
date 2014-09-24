/*
 * gol-js
 * https://github.com/stephan/gameoflife-js
 *
 * Copyright (c) 2014 stephan.koeninger
 * Licensed under the MIT license.
 */

(function(exports) {

    'use strict';

    exports.neighbours = function(cell) {
        var x = cell[0];
        var y = cell[1];
        var neighbours = [];

        for (var dx = -1; dx <= 1; dx++) {
            for (var dy = -1; dy <= 1; dy++) {
                var nx = x + dx;
                var ny = y + dy;
                if (nx >= 0 && ny >= 0) {
                    if(nx !== x || ny !== y) {
                        neighbours.push([ nx, ny ]);
                    }
                }
            }
        }

        return neighbours;
    };
    
    exports.life = function(cell, cells) {
        var count = exports.countNeighbours(cell, cells);
        if(count < 2 || count > 3) {
            return false;
        } else {
            return true;
        }
    };
    
    exports.countNeighbours = function(cell, cells) {
        var counter = 0;
        var neighbours = exports.neighbours(cell);
        for(var i = 0; i < neighbours.length; i++) {
            var neighbour = neighbours[i];
            
            for(var j = 0; j < cells.length; j++) {
                if(cells[j][0] === neighbour[0] && cells[j][1] === neighbour[1]) {
                    counter++;
                }
            }
        }
        return counter;
    };
    
    exports.step = function(cells) {
        var newAlive = [];
        for(var i = 0; i < cells.length; i++) {
            if(exports.life(cells[i], cells)) {
                if(!exports.contains(newAlive, cells[i])) {
                    newAlive.push(cells[i]);
				}
            }
            var neighbours = exports.neighbours(cells[i]);
            for(var j = 0; j < neighbours.length; j++) {
                if(exports.countNeighbours(neighbours[j], cells) === 3) {
					if(!exports.contains(newAlive, neighbours[j])) {
						newAlive.push(neighbours[j]);
					}
                    
                } 
            }
        }
        return newAlive;
    };
	
	exports.contains = function(arr, item) {
		for(var i = 0; i < arr.length; i++) {
			var x = arr[i][0];
			var y = arr[i][1];
			
			if(item[0] === x && item[1] === y) {
				return true;
			}
		}
		return false;
	};

}(typeof exports === 'object' && exports || this));
