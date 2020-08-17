// If life was easy, we could just do things the easy way:
// var getElementsByClassName = function (className) {
//   return document.getElementsByClassName(className);
// };

// But instead we're going to implement it from scratch:
var getElementsByClassName = function(className
) {

  var elementArray = [];

  // make function checking each element
  // conditional statement checking classList
  // conditonal checking childNodes



  var checkClass = function(element) {

    if (element.classList && element.classList.contains(className)) {
      elementArray.push(element);
    }


    if (element.childNodes) {
      var nodes = element.childNodes;
      nodes.forEach(checkClass);
    }


  };


  checkClass(document.body);
  return elementArray;

};
