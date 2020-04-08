function updateObjectWithKeyAndValue(obj, key, value) {
  var newobj = Object.assign( {}, obj, {[key] : value});
  return newobj;
}

function destructivelyUpdateObjectWithKeyAndValue(obj, key, value) {
  obj[key] = value;
  return obj;
}

function deleteFromObjectByKey(obj, key) {
  var newobj = Object.assign( {}, obj);
  delete newobj[key];
  return newobj;
}
