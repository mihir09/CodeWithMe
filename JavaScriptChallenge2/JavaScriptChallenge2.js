/* 
Challenge 2. 

Make the given script to asyncronouly complete the databse connection and then manipulate data using Promise.

Results: After completing code run JavaScriptChallenge2.html file and look into console.

*/

function manipulateData() {
    console.log('trying to connect to Database');
    setTimeout(() =>{console.log("Connected to Database");}, 2000);
    return console.log('Manipulate and Store Data');
}
console.log('START APP');

manipulateData()
  
console.log('END');
