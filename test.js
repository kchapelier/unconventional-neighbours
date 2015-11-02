var neighbours = require('./');
var test = require('tape');

function sorter(a, b) {
    a = a.join(',');
    b = b.join(',');
    return a > b ? -1 : a < b ? 1 : 0;
}

test('corner, 2D, 1 range', function(t) {
    t.deepEqual(neighbours.corner(1, 2).sort(sorter), [
        [ 1, 1],          [ 1,-1],
        [-1, 1],          [-1,-1]
    ].sort(sorter));
    t.end();
});

test('corner, 2D, 2 range', function(t) {
    t.deepEqual(neighbours.corner(2, 2).sort(sorter), [
        [ 2, 2],          [ 2,-2],
        [-2, 2],          [-2,-2]
    ].sort(sorter));
    t.end();
});

test('corner, 3D, 1 range', function(t) {
    t.deepEqual(neighbours.corner(1, 3).sort(sorter), [
        [ 1, 1, 1],          [ 1, 1,-1],
        [ 1,-1, 1],          [ 1,-1,-1],


        [-1, 1, 1],          [-1, 1,-1],
        [-1,-1, 1],          [-1,-1,-1]
    ].sort(sorter));
    t.end();
});

// EDGE

test('edge, 2D, 1 range', function(t) {
    t.deepEqual(neighbours.edge(1, 2).sort(sorter), [
        [ 1, 1], [ 1, 0], [ 1,-1],
        [ 0, 1],          [ 0,-1],
        [-1, 1], [-1, 0], [-1,-1]
    ].sort(sorter));
    t.end();
});

test('edge, 2D, 2 range', function(t) {
    t.deepEqual(neighbours.edge(2, 2).sort(sorter), [
        [ 2, 2], [ 2, 1], [ 2, 0], [ 2,-1], [ 2,-2],
        [ 1, 2],                            [ 1,-2],
        [ 0, 2],                            [ 0,-2],
        [-1, 2],                            [-1,-2],
        [-2, 2], [-2, 1], [-2, 0], [-2,-1], [-2,-2]
    ].sort(sorter));
    t.end();
});

test('edge, 3D, 1 range', function(t) {
    t.deepEqual(neighbours.edge(1, 3).sort(sorter), [
        [ 1, 1, 1], [ 1, 1, 0], [ 1, 1,-1],
        [ 1, 0, 1],             [ 1, 0,-1],
        [ 1,-1, 1], [ 1,-1, 0], [ 1,-1,-1],


        [ 0, 1, 1],             [ 0, 1,-1],

        [ 0,-1, 1],             [ 0,-1,-1],


        [-1, 1, 1], [-1, 1, 0], [-1, 1,-1],
        [-1, 0, 1],             [-1, 0,-1],
        [-1,-1, 1], [-1,-1, 0], [-1,-1,-1]
    ].sort(sorter));
    t.end();
});
