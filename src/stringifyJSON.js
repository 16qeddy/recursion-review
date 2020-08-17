// this is what you would do if you liked things to be easy:
// var stringifyJSON = JSON.stringify;

// but you don't so you're going to write it from scratch:

var stringifyJSON = function(obj) {

  // edge case for undefined
  if (obj === undefined) {
    return undefined;
  }
  // edge case for null
  if (obj === null) {
    return 'null';
  }
  // edge case for number and boolean
  if (typeof obj === 'number' || typeof obj === 'boolean') {
    return obj.toString();
  }

  // edgecase for string
  if (typeof obj === 'string') {
    return '"' + obj + '"';
  }

  // edgecase for array
  if (Array.isArray(obj)) {
    var array = [];
    // need loop
    for (var key in obj) {
      array.push(stringifyJSON(obj[key]));
    }
    return '[' + array + ']';
  }

  if (typeof obj === 'object') {
    var array = [];
    // need loop
    for (var key in obj) {
      if (obj[key] !== undefined && typeof obj[key] !== 'function') {
        array.push(stringifyJSON(key) + ':' + stringifyJSON(obj[key]));
      }
    }
    return '{' + array + '}';
  }


};
