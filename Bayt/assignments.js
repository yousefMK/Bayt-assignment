// 1. Write a function called all which accepts an array and a callback and returns
// true if every value in the array returns true when passed as a
// parameter to the callback function.

// Sample:

// var allAreLessThanSeven = all([1,2,9], function(num){
// return num < 7;
// });
// console.log(allAreLessThanSeven); // false

const input = [1, 3, 8];
const callback = (item) => item < 8;

const all = (nums, callback) => {
  return nums.every(callback);
};

console.log(all(input, callback));

// 2. Write a function called contains that searches for a value in a nested object.
// It returns true if the object contains that value.

const objInput = {
  data: {
    info: {
      stuff: {
        thing: {
          moreStuff: {
            magicNumber: 44,
            something: "foo2",
          },
        },
      },
    },
    info2: {
      stuff: {
        thing: {
          moreStuff: {
            magicNumber: 43,
            something: "foo4",
          },
        },
      },
    },
  },
  data2: {
    info2: {
      x: 22,
    },
  },
};

const searchInput = "foo4";

const contains = (obj, search) => {
  if (obj === search) return true;

  if (typeof obj === "object")
    for (let key in obj) {
      if (contains(obj[key], search)) return true;
    }

  return false;
};

contains(objInput, searchInput);
