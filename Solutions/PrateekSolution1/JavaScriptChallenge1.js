/* 
Challenge 1. 

Write a JavaScript program to compare two objects to determine if the first contains equivalent property values to the second one.

Results: After completing code run JavaScriptChallenge1.html file to see if all test cases are passed or not.

Warning: Don't change function name. Add your logic to the dedicated space.
*/

const matchObjects = (firstObject, secondObject) => {
  /* write your code here */
  for (let obj in secondObject) {
    if (!firstObject[obj]) {
      return false;
    }

    if (firstObject[obj] !== secondObject[obj]) {
      return false;
    }
  }
  return true;
};
