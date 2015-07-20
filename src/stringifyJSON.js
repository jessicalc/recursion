// this is what you would do if you liked things to be easy:
// var stringifyJSON = JSON.stringify;

// but you don't so you're going to write it from scratch:

var isEmptyObj = function(obj) {
  for (var name in obj) {
    return false;
  }
  return true;
}; 

var objToStr = function(obj) {
  var str = "";
  var objkey;
  for (var key in obj) {
    if (typeof obj[key] === "string") {
      objkey = "\"" + obj[key] + "\""; 
      if (obj[key].indexOf("{") !== -1 || obj[key].indexOf("[") !== -1)
        objkey = obj[key];
    }
    else
      objkey = obj[key];
    str = str + "\"" + [key] + "\"" + ":" + objkey + ",";
  };
  newStr = str.slice(0, -1);
  return newStr;
};

var stringifyJSON = function(obj) {
  if (typeof obj === "function" || obj === undefined) {
    return "{}";
  }
  if (typeof obj == "number") {
    return obj.toString();
  }
  if (obj == null) {
    return "null"
  }
  if (obj == true) {
    return "true";
  }
//   if (!Array.isArray(obj) && isEmptyObj(obj)) {
//     return "{}";
//   }
  if (Array.isArray(obj) == false && obj == false) {
    return "false";
  }
  if (obj === false) {
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
      if (typeof obj === "function" || obj === undefined) {
        return "{}";
      }
      if (typeof obj[i] === "string" ) {
        newArray.push("\"" + obj[i] + "\"");
      } else if (typeof obj[i] === "number") {
        newArray.push(obj[i]);
      } else if (typeof obj[i] === "object" && !Array.isArray(obj[i])) {
        newArray.push(stringifyJSON(obj[i]));
      } else if (Array.isArray(obj[i])) {
        var newThing = obj[i].slice();
        newArray.push(stringifyJSON(newThing));
      }
    }
    return "[" + newArray + "]";
  }
  if (typeof obj === "object") {
    var newObj = {};
    for (var key in obj) {
      if (typeof obj[key] === "function" || obj[key] === undefined) {
        return "{}";
      }
      if (typeof obj[key] !== "object")
        newObj[key] = obj[key];
      if (obj[key] == null)
        newObj[key] = null;
      else if (typeof obj[key] === "object")
        newObj[key] = stringifyJSON(obj[key]);
    }
  }
  return "{" + objToStr(newObj) + "}";
  return "[" + newArray + "]"; 
};


var check = function(value) {
  return JSON.stringify(value) === stringifyJSON(value);
}