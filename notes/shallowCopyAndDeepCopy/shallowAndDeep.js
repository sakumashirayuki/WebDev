// jshint esversion: 6
// shallow copy
const shallowCopy = function(obj){
    // whether an obj?
    if(typeof obj != 'object') return;
    // whether array?
    const newObj = obj instanceof Array ? [] : {};
    // copy obj's own property
    for(var property in obj){
      if(obj.hasOwnProperty(property))
        newObj[property] = obj[property];
    }
    return newObj;
  };
  // deepcopy
  const deepCopy = function(obj){
    if(typeof obj != 'object') return;
    const newObj = obj instanceof Array ? [] : {};
    for(var property in obj){
      if(obj.hasOwnProperty(property)){
        let newValue = obj[property];
        newObj[property] = typeof newValue === 'object' ? deepCopy(newValue) : newValue;
      }
    }
    return newObj;
  };