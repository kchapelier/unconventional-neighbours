"use strict";

function edge(range, dims) {
    dims = dims || 2;
    range = range || 1;

    return recurse([], [], 0);

    function recurse(array, temp, d) {
        var manhattanDistance,
            i,
            k,
            match;

        if (d === dims-1) {
            for (i = -range; i <= range; i += 1) {
                match = (Math.abs(i) === range ? 1 : 0);
                for (k = 0; k < dims; k++) {
                    match += (Math.abs(temp[k]) === range ? 1 : 0);
                }

                if (match >= dims - 1) {
                    array.push(temp.concat(i));
                }
            }
        } else {
            for (i = -range; i <= range; i += 1) {
                recurse(array, temp.concat(i), d + 1);
            }
        }

        return array;
    }
}

function axis(range, dims) {
    dims = dims || 2;
    range = range || 1;

    return recurse([], [], 0);

    function recurse(array, temp, d) {
        var manhattanDistance,
            i,
            k,
            match;

        if (d === dims-1) {
            for (i = -range; i <= range; i += 1) {
                match = (i === 0);
                for (k = 0; !match && k < dims; k++) {
                    match = (temp[k] === 0);
                }

                if (match) {
                    array.push(temp.concat(i));
                }
            }
        } else {
            for (i = -range; i <= range; i += 1) {
                recurse(array, temp.concat(i), d + 1);
            }
        }

        return array;
    }
}

function corner(range, dims) {
    dims = dims || 2;
    range = range || 1;

    return recurse([], [], 0);

    function recurse(array, temp, d) {
        var manhattanDistance,
            i,
            k,
            match;

        if (d === dims-1) {
            for (i = -range; i <= range; i += 1) {
                match = (Math.abs(i) === range ? 1 : 0);
                for (k = 0; k < dims; k++) {
                    match += (Math.abs(temp[k]) === range ? 1 : 0);
                }

                if (match === dims) {
                    array.push(temp.concat(i));
                }
            }
        } else {
            for (i = -range; i <= range; i += 1) {
                recurse(array, temp.concat(i), d + 1);
            }
        }

        return array;
    }
}

module.exports = {
    axis: axis,
    corner: corner,
    edge: edge
};
