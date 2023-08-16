# JavaScriptChallenge2 Solution

## Question

Convert the manipulateData function as a promise function to make the order of exectution as following even when it takes 2 second to connect to database.

```console
START APP
trying to connect to Database
Connected to Database
Manipulate and Store Data
END
```

## Logic

To make manipulateData as a Promise function, we need to create Promise construtor first. It will take resolve and reject functions as arguments. When database is connected we can set resolve to change the state of promise to settled and fulfilled hence calling .then() callback. This callback will manipulate the data only after successfull connection of database. It will not execute if we change resolve(); to reject(); at line just below console.log("Connected to Database"); in the following code.

## Code

```javascript
function manipulateData() {
  console.log('trying to connect to Database');
 
  return new Promise(
    (resolve, reject) => {
        setTimeout(() =>{
            console.log("Connected to Database");
            resolve();  // Database is connected hence resolve if called
        }, 2000);
    })
    .then(() => {
    console.log('Manipulate and Store Data');
    });
}
console.log('START APP');

manipulateData()

console.log('END');
```

### External Source

https://exploringjs.com/impatient-js/ch_promises.html