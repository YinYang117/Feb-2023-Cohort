// api.js
// Not a real source of data
export function fetchData() {
    // Simulating an API call
    return new Promise((resolve) => {
      setTimeout(() => {
        resolve('Data fetched successfully!');
      }, 2000);
    });
  }
  