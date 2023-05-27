# What is a Promise?

A promise is an object representing the eventual completion or failure of an asynchronous operation.
It is a placeholder for a value that may not be available yet.

> Promise States:

Promises have three states:

- **`Pending`**: The initial state. The promise is still executing and hasn't been fulfilled or rejected yet.

- **`Fulfilled`**: The promise has been successfully resolved with a value.

- **`Rejected`**: The promise encountered an error or was unable to fulfill its operation.

---

> Creating Promises:

We can create a promise using the Promise constructor:

```javascript
const myPromise = new Promise((resolve, reject) => {
  // Async operation here
});
```

> Handling Promises:

Promises provide two methods to handle their outcomes:

- `then`: Handles the fulfillment of a promise.
- `catch`: Handles the rejection of a promise.

> Chaining Promises:

Promises can be chained together using the `then` method.
Each `then` method call <span style='color:orange'>**returns**</span> a **_new promise_**, allowing us to chain multiple **asynchronous** operations together.

> Promise.all:

The `Promise.all` method takes an **array** of promises and <span style='color:orange'>**returns**</span> a **_new promise_**.
It waits for all the promises in the array to be fulfilled or for any one of them to be rejected.
If all promises are fulfilled, the resulting promise is fulfilled with an array of their resolved values.

> Error Handling:

Promises have built-in error handling with the `catch` method.
It allows us to handle any errors that occurred during promise execution.

> fetch

`fetch` is a javascript function that we can utilize inside of our servers. Inside of our HTTP server we can utilize fetch to grab information from an api. `fetch` takes two params. The first is the url you'd like to fetch data from, and the 2nd param is our optional `options`. `options` will be how we can construct the type of fetch we are making (like headers, bodies, and methods). Omitting the options will default the fetch to a GET request.

example of a fetch:

```js
fetch("www.myapi.com/routes", {
  method: "POST",
  headers: { "Content-Type": "<fill this in>" },
  body: { myBodyKey: myBodyVal },
});
```

Note: the body may need to be adjusted using JSON.Stringify if you are creating a json body to be sent. It would look like this:

```js
fetch("www.myapi.com/routes", {
  method: "POST",
  headers: { "Content-Type": "application/json" },
  body: JSON.stringify({ myBodyKey: "myBodyVal" }),
});
```

> async Functions

We can declare an function will be asyncronous like this:

```js
async function myFunc() {
  //async action here
}
```

This lets us have access to the `await` keyword.

This is how a function will request for info from an api using .then:

```js
function myFunc() {
  fetch("www.myapi.com/")
    .then((res) => res.json())
    .then((data) => console.log(data));
}
```

This is how we will do the same thing utilizing await

```js
async function myFunc() {
  const res = await fetch("www.myapi.com/");
  const data = await res.json();
  console.log(data);
}
```

Remember you can add optional options to your fetch
