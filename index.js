function updateObjectWithKeyAndValue(obj, key, value) {
  var newobj = obj.assign( obj, key : value);
  return newobj;
}

function destructivelyUpdateObjectWithKeyAndValue(obj, key, value) {
  obj[key] = value;
  return obj;
}
