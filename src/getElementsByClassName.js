// If life was easy, we could just do things the easy way:
// var getElementsByClassName = function (className) {
//   return document.getElementsByClassName(className);
// };

// But instead we're going to implement it from scratch:
var getElementsByClassName = function(className) {
  // start of code
  var result = []; //result array for elements with 'className' class

  var elementsWithClassName = function(element){

    //check classList and if it contains the given className
    if(element.classList && element.classList.contains(className)){
      result.push(element);
    }

    //loop through childNodes if child nodes are present
    if(element.childNodes){
      for(var i = 0; i < element.childNodes.length; i++){
        //recursion implementation
        elementsWithClassName(element.childNodes[i]);
      }
    }
  }

  elementsWithClassName(document.body)
  return result;
  // end of function
};
