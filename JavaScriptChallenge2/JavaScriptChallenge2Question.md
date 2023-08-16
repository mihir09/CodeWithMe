# JavaScriptChallenge2

## Background

Consider you are trying to fetch the data and manipulate it.

```javascript
function manipulateData() {
  console.log('trying to connect to Database');
  console.log("Connected to Database");
  return console.log('Manipulate and Store Data');
}
console.log('START APP');

manipulateData()

console.log('END');
```

The order of execution should and will be

```console
START APP
trying to connect to Database
Connected to Database
Manipulate and Store Data
END
```

But now you noticed your database is taking 2 seconds to connect.

```javascript
function manipulateData() {
  console.log('trying to connect to Database');
  setTimeout(() =>{console.log("Connected to Database");}, 2000);
  return console.log('Manipulate and Store Data');
}
console.log('START APP');

manipulateData()

console.log('END');
```

The order of execution will be

```console
START APP
trying to connect to Database
Manipulate and Store Data
END
Connected to Database //After 2 seconds
```

Which is wrong as you will not be able to access and manipulate data before database is connected.

## Question

Convert the manipulateData function as a promise function to make the order of exectution as following even when it takes 2 second to connect to database.

```console
START APP
trying to connect to Database
Connected to Database
Manipulate and Store Data
END
```

## Instructions

Navigate to JavaScriptChallenge2.js file. Add your logic at the dedicated space. Don't modify other contents or files.

## Testing

To check if your code work or not, run JavaScriptChallenge2.html file and check console to match with following results.

```console
START APP
trying to connect to Database
Connected to Database
Manipulate and Store Data
END
```