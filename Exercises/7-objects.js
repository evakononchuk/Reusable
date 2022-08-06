"use strict";

const fn = () => {
  const obj1 = { name: "Kate" };
  let obj2 = { name: "Kate" };

  obj1.name = "Winslet";
  obj2.name = "Winslet";

  const obj3 = "Kate Winslet";

  console.log(obj1, obj2, obj3);
};

module.exports = { fn };
