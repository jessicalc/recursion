// this is what you would do if you liked things to be easy:
// var stringifyJSON = JSON.stringify;

// but you don't so you're going to write it from scratch:

var isEmptyObj = function(obj) {
  for (var name in obj) {
    return false;
  }
  return true;
}; 

var stringifyJSON = function(obj) {
  if (typeof obj == "number") {
    return obj.toString();
  }
  if (obj == null) {
    return "null"
  }
  if (obj == true) {
    return "true";
  }
  if (Array.isArray(obj) == false && obj == false) {
    return "false";
  }
  if (typeof obj == "string") {
    return "\"" + obj + "\"";
  }
  if (Array.isArray(obj) == true && obj.length == 0) {
    return "[]";
  }
  if (Array.isArray(obj)) {
    var newArray = [];
    for (var i = 0; i < obj.length; i++) {
      if (typeof obj[i] === "string") {
        newArray.push("\"" + obj[i] + "\"");
      } else if (typeof obj[i] === "function") {
        newArray.push("null");
      } else {
        newArray.push(obj[i]);
      }
    }
    return "[" + newArray + "]"; 
  }
//   else {
//     var newObj = {};
//     for (var key in obj) {
//       newObj["\"" + key + "\""] = obj[key];
//     }
//     return newObj;
//   }
};
