// this is what you would do if you liked things to be easy:
// var stringifyJSON = JSON.stringify;

// but you don't so you're going to write it from scratch:

var stringifyJSON = function(obj) {
  // start of code
  if(typeof obj === 'string'){
    return '\"' + obj.toString() +'\"';
  }

  if(obj === null) {
    return 'null';
  }
  if(typeof obj ==='number' || typeof obj === 'boolean'){
    return obj.toString();
  }

  // Arrays and Objects //
  var output = '';

  // Arrays: //

  if(Array.isArray(obj)){
    for(var i = 0; i < obj.length; i++){
      output += stringifyJSON(obj[i]) + ',';
    }
    output = '[' + output.slice(0, output.length-1) + ']';
  }

  // Objects: //
  if(!Array.isArray(obj) && typeof obj === 'object' && obj !== null){
    var collection = {};
    output += '{';

    for(var key in obj){
      if(typeof obj[key] !== 'function' && obj[key] !== undefined){
        collection[key] = obj[key];
      }
    }

    if(Object.keys(collection).length > 0){
      for(var key in collection){
        output += '\"' + key + '\":' + stringifyJSON(obj[key]) + ',';
      }
      output = output.slice(0, output.length-1);
    }
    output += '}';
  }
  return output + '';

  // end of stringifyJSON function
};
