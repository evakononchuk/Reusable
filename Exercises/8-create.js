"use strict";

const createUser = (name, city) => {
  const obj1 = {};
  obj1.name = name;
  obj1.city = city;
  return obj1;
};

module.exports = { createUser };
