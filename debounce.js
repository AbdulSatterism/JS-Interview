function delay(ms) {
  return new Promise((resolve) => setTimeout(resolve, ms));
}

async function asyncFunction() {
  console.log("Start");

  await delay(2000); // Wait for 2 seconds (2000ms)

  console.log("After 2 seconds");
}

// Example usage
asyncFunction();
