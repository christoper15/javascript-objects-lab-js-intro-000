function updateObjectWithKeyAndValue(obj, key, value) {
  obj.assign( key : value);
  return obj;
}

function destructivelyUpdateObjectWithKeyAndValue(obj, key, value) {
  obj[key] = value;
  return obj;
}
