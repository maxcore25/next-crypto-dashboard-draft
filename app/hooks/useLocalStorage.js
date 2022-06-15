import { useState, useEffect } from 'react';

export function useLocalStorage(key, initialValue) {
  const getValue = () => {
    // * Next.js has another approach to 'localStorage'
    if (typeof window !== 'undefined') {
      const storage = localStorage.getItem(key);

      // if (storage) return JSON.parse(storage);
      if (storage) return storage;
    }

    return initialValue;
  };

  const [value, setValue] = useState(getValue);

  useEffect(() => {
    localStorage.setItem(key, JSON.stringify(value));
  }, [key, value]);

  return [value, setValue];
}
