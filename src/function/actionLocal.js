// Function to set an item in localStorage
function setItem(key, value) {
  try {
    localStorage.setItem(key, JSON.stringify(value));
    console.log(
      `Item with key '${key}' has been successfully set in localStorage.`
    );
  } catch (error) {
    console.error(
      `Error while setting item with key '${key}' in localStorage:`,
      error
    );
  }
}

// Function to get an item from localStorage
function getItem(key) {
  try {
    const storedItem = localStorage.getItem(key);
    if (storedItem !== null) {
      return JSON.parse(storedItem);
    } else {
      console.log(`No item found in localStorage with key '${key}'.`);
      return null;
    }
  } catch (error) {
    console.error(
      `Error while getting item with key '${key}' from localStorage:`,
      error
    );
    return null;
  }
}
export { getItem, setItem };

// // Example usage:
// const myKey = "myData";
// const myValue = { name: "John", age: 30 };

// // Set item
// setItem(myKey, myValue);

// // Get item
// const retrievedValue = getItem(myKey);
// console.log("Retrieved value:", retrievedValue);
