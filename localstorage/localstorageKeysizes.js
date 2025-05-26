function getLocalStorageItemSizes() {
  let totalBytes = 0;
  const items = [];

  for (let i = 0; i < localStorage.length; i++) {
    const key = localStorage.key(i);
    const value = localStorage.getItem(key);

    const sizeBytes = 2 * (key.length + value.length);
    const sizeKB = sizeBytes / 1024;

    totalBytes += sizeBytes;

    items.push({
      key,
      sizeKB: sizeKB
    });
  }

  // Sort items by size in ascending order
  items.sort((a, b) => a.sizeKB - b.sizeKB);

  // Print the sorted items
  items.forEach(item => {
    console.log(`Key: "${item.key}" → ${item.sizeKB.toFixed(2)} KB`);
  });

  console.log(`\nTotal localStorage size: ${(totalBytes / 1024).toFixed(2)} KB`);
}

getLocalStorageItemSizes();

