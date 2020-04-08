function updateObjectWithKeyAndValue(obj, key, value) {
  obj.assign( obj, key : value);
  return obj;
}

function destructivelyUpdateObjectWithKeyAndValue(obj, key, value) {
  obj[key] = value;
  return obj;
}
