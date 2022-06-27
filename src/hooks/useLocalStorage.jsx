import { useState } from "react";

export const useLocalStorage = (itemName, initialValue) => {
  let defaultItem;   
  let localStorageItem = localStorage.getItem(itemName);
  if(!localStorageItem) {
    localStorage.setItem(itemName,JSON.stringify(initialValue))
    defaultItem = initialValue;
  }else {
    defaultItem = JSON.parse(localStorageItem);
  }

  const [item,setItem] = useState(defaultItem);

  const saveItem = (newItems) => {
    localStorage.setItem(itemName, JSON.stringify(newItems));
    setItem(newItems);
  }

  return [item, saveItem]

}