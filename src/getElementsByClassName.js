var getElementsByClassName = function(className){
  debugger;
  var array = [];
  var body = document.body;

  var finder = function(element) {
    if (element.classList == undefined) { 
      return;
    }
    if (element.classList.contains(className) == true) {
      array.push(element);
      console.log(array);
    }
    for (var i = 0; i < element.childNodes.length; i++) {
      debugger;
      var tempNode = element.childNodes[i];
      finder(tempNode);
    }
  };
  finder(body);
  return array;
};


console.log(getElementsByClassName("targetClassName"));
