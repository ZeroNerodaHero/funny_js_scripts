function getLocalStorageSize() {
  let total = 0;
  for (let key in localStorage) {
    if (localStorage.hasOwnProperty(key)) {
      const value = localStorage.getItem(key);
      total += key.length + value.length;
    }
  }
  // Return in bytes and also convert to KB
  console.log(`Total localStorage size: ${total} bytes (~${(total / 1024).toFixed(2)} KB)`);
}

getLocalStorageSize();
