const merge = (obj1, obj2) => {
  for (let field in obj2) {
    if (!obj1[field]) {
      obj1[field] = obj2[field];
    }
  }

  return obj1;
};

module.exports = {
  merge
};

