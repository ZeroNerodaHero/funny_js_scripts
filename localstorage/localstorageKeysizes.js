function getLocalStorageItemSizes() {
  let totalBytes = 0;

  for (let i = 0; i < localStorage.length; i++) {
    const key = localStorage.key(i);
    const value = localStorage.getItem(key);
    
    // Each character is typically 2 bytes (UTF-16)
    const size = 2 * (key.length + value.length);
    totalBytes += size;

    console.log(`Key: "${key}" → ${size} bytes`);
  }

  console.log(`\nTotal localStorage size: ${totalBytes} bytes (~${(totalBytes / 1024).toFixed(2)} KB)`);
}

getLocalStorageItemSizes();
